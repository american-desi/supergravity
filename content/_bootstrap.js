// ============================================
// content/_bootstrap.js
//
// Loads LAST among content scripts. Walks window.CONTENT (populated by
// the per-subject files) and merges each topic into the legacy keys the
// existing renderer (pages-v2.jsx) already reads:
//     window.LESSONS[topicId]           — lesson object
//     window.TOPIC_VIDEOS[topicId]      — fallback video list
//     window.TOPIC_INTERACTIVE[topicId] — interactive widget key
//
// Hardened: each topic is merged inside a try/catch so a single malformed
// file cannot break the rest of the site. A soft validator collects
// issues into window.CONTENT_ISSUES so stewards can review them. See
// window.CONTENT_HEALTH for a one-line summary.
// ============================================

(function () {
  const t0 = (typeof performance !== 'undefined' && performance.now) ? performance.now() : Date.now();

  window.LESSONS = window.LESSONS || {};
  window.TOPIC_VIDEOS = window.TOPIC_VIDEOS || {};
  window.TOPIC_INTERACTIVE = window.TOPIC_INTERACTIVE || {};

  // Collect issues here for the dev dashboard and console report.
  const issues = [];
  const record = (severity, subject, topic, field, message) => {
    issues.push({ severity, subject: subject || null, topic: topic || null, field: field || null, message });
  };

  const CONTENT = window.CONTENT;
  if (!CONTENT) {
    window.CONTENT_ISSUES = issues;
    window.CONTENT_HEALTH = { subjects: 0, topics: 0, errors: 0, warnings: 0, elapsedMs: 0 };
    console.log('[supergravity] no window.CONTENT found — running on legacy lessons.js only.');
    return;
  }

  // ---------- Soft validators ----------
  const MIN = { videos: 3, books: 3, articles: 2, keyTerms: 5, seeAlso: 3, bodyParas: 3 };

  function validateTopic(subjectId, topicId, t) {
    if (!t || typeof t !== 'object') {
      record('error', subjectId, topicId, null, 'Topic is missing or not an object.');
      return;
    }
    if (t.id && t.id !== topicId) {
      record('warning', subjectId, topicId, 'id', `Topic id "${t.id}" does not match key "${topicId}".`);
    }
    if (!t.name) record('error', subjectId, topicId, 'name', 'Missing name.');
    if (!t.level) record('warning', subjectId, topicId, 'level', 'Missing level.');
    if (!t.dek) record('warning', subjectId, topicId, 'dek', 'Missing dek.');

    const body = Array.isArray(t.body) ? t.body : [];
    if (body.length === 0) {
      record('error', subjectId, topicId, 'body', 'Empty body.');
    } else {
      if (body[0].type !== 'lead') {
        record('warning', subjectId, topicId, 'body', 'First block is not a lead.');
      }
      const paraCount = body.filter(b => b.type === 'p').length;
      if (paraCount < MIN.bodyParas) {
        record('warning', subjectId, topicId, 'body', `Only ${paraCount} paragraphs (minimum ${MIN.bodyParas}).`);
      }
    }

    const r = t.resources || {};
    const countCheck = (kind, min) => {
      const arr = Array.isArray(r[kind]) ? r[kind] : [];
      if (arr.length < min) {
        record('warning', subjectId, topicId, `resources.${kind}`, `${arr.length} ${kind} (minimum ${min}).`);
      }
    };
    countCheck('videos', MIN.videos);
    countCheck('books', MIN.books);
    countCheck('articles', MIN.articles);

    if (!Array.isArray(t.keyTerms) || t.keyTerms.length < MIN.keyTerms) {
      record('warning', subjectId, topicId, 'keyTerms', `${(t.keyTerms || []).length} keyTerms (minimum ${MIN.keyTerms}).`);
    }
    if (!Array.isArray(t.seeAlso) || t.seeAlso.length < MIN.seeAlso) {
      record('warning', subjectId, topicId, 'seeAlso', `${(t.seeAlso || []).length} seeAlso (minimum ${MIN.seeAlso}).`);
    }
  }

  // ---------- Merge ----------
  const subjectIds = Object.keys(CONTENT);
  let topicCount = 0;
  let subjectsMerged = 0;
  let subjectsSkipped = 0;

  for (const subjectId of subjectIds) {
    let subject;
    try {
      subject = CONTENT[subjectId];
    } catch (e) {
      record('error', subjectId, null, null, `Failed to read subject: ${e.message}`);
      subjectsSkipped += 1;
      continue;
    }
    if (!subject || !subject.topics) {
      record('error', subjectId, null, null, 'Subject has no topics object.');
      subjectsSkipped += 1;
      continue;
    }

    let topicIds;
    try {
      topicIds = Object.keys(subject.topics);
    } catch (e) {
      record('error', subjectId, null, null, `Failed to enumerate topics: ${e.message}`);
      subjectsSkipped += 1;
      continue;
    }

    for (const topicId of topicIds) {
      try {
        const t = subject.topics[topicId];
        validateTopic(subjectId, topicId, t);
        const r = t.resources || {};

        // Detect duplicate topic ids (two subjects claiming the same topic).
        if (window.LESSONS[topicId] && window.LESSONS[topicId].subject && window.LESSONS[topicId].subject !== subjectId) {
          record('warning', subjectId, topicId, null,
            `Topic id collides with ${window.LESSONS[topicId].subject}. Last write wins (this one).`);
        }

        window.LESSONS[topicId] = {
          subject: subjectId,
          title: t.name,
          dek: t.dek,
          readTime: t.readTime,
          difficulty: t.level,
          sections: t.sections || [],
          body: t.body || [],
          keyTerms: t.keyTerms || [],
          seeAlso: t.seeAlso || [],

          // legacy-shaped resource pass-throughs (renderer reads these)
          videos: r.videos || [],
          furtherReading: r.books || [],

          // forward-compatible pass-throughs (unused by renderer yet)
          articles: r.articles || [],
          courses: r.courses || [],
          podcasts: r.podcasts || [],
          tools: r.tools || [],
          primarySources: r.primarySources || [],
          images: r.images || [],
          animations: r.animations || [],
          prereqs: t.prereqs || [],
          leadsTo: t.leadsTo || [],
          chapterActivity: t.chapterActivity || '',
          sources: t.sources || [],
          verifiedAt: t.verifiedAt || null,

          // scaffolding pass-throughs
          scaffolding: t.scaffolding || null,
          subtopics: t.subtopics || [],
          examples: t.examples || [],
          practice: t.practice || [],
          prerequisites: t.prerequisites || t.prereqs || [],
        };

        if (r.videos && r.videos.length) {
          window.TOPIC_VIDEOS[topicId] = r.videos;
        }
        if (t.interactive && t.interactive.kind) {
          window.TOPIC_INTERACTIVE[topicId] = t.interactive.kind;
        }

        topicCount += 1;
      } catch (e) {
        record('error', subjectId, topicId, null, `Merge failed: ${e.message}`);
      }
    }
    subjectsMerged += 1;
  }

  // ---------- Verify cross-links after the full merge ----------
  for (const topicId of Object.keys(window.LESSONS)) {
    const lesson = window.LESSONS[topicId];
    for (const ref of lesson.seeAlso || []) {
      if (!window.LESSONS[ref]) {
        record('warning', lesson.subject, topicId, 'seeAlso', `Cross-link "${ref}" does not exist.`);
      }
    }
    for (const ref of lesson.prereqs || []) {
      if (!window.LESSONS[ref]) {
        record('warning', lesson.subject, topicId, 'prereqs', `Prereq "${ref}" does not exist.`);
      }
    }
    for (const ref of lesson.leadsTo || []) {
      if (!window.LESSONS[ref]) {
        record('warning', lesson.subject, topicId, 'leadsTo', `leadsTo "${ref}" does not exist.`);
      }
    }
  }

  // ---------- Publish health + issue surfaces ----------
  const elapsedMs = ((typeof performance !== 'undefined' && performance.now) ? performance.now() : Date.now()) - t0;
  const errors = issues.filter(i => i.severity === 'error').length;
  const warnings = issues.filter(i => i.severity === 'warning').length;

  window.CONTENT_ISSUES = issues;
  window.CONTENT_HEALTH = {
    subjects: subjectIds.length,
    subjectsMerged,
    subjectsSkipped,
    topics: topicCount,
    errors,
    warnings,
    elapsedMs: Math.round(elapsedMs),
    // Convenience: issues grouped by subject for the dev dashboard.
    bySubject: issues.reduce((acc, i) => {
      const k = i.subject || '_orphan';
      (acc[k] ||= []).push(i);
      return acc;
    }, {}),
  };

  const hasErrors = errors > 0;
  const logFn = hasErrors ? console.error : console.log;
  logFn(
    `[supergravity] content bootstrap: ${subjectsMerged}/${subjectIds.length} subjects, ` +
    `${topicCount} topics, ${errors} errors, ${warnings} warnings ` +
    `(${Math.round(elapsedMs)}ms). Run window.CONTENT_HEALTH.bySubject in console for details.`
  );

  if (hasErrors) {
    // Condensed table of errors for quick scanning.
    try {
      console.table(issues.filter(i => i.severity === 'error').slice(0, 20));
    } catch {}
  }

  // Expose the validator so sessions can lint a single subject on demand.
  window.validateTopic = validateTopic;
})();
