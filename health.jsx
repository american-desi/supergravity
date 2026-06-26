// ============================================
// Content Health — a steward's view into window.CONTENT_HEALTH
// and window.CONTENT_ISSUES, collected by content/_bootstrap.js.
//
// Navigate to this page via the Command Palette action "Content health"
// or by setting nav = { page: 'health' }.
//
// No gamification; this is a surface to tell you what still needs work.
// ============================================

const { useState: uHS, useMemo: uHM } = React;

const SEVERITY_ORDER = { error: 0, warning: 1 };

const ContentHealthPage = ({ onNav }) => {
  const health = window.CONTENT_HEALTH || { subjects: 0, topics: 0, errors: 0, warnings: 0, elapsedMs: 0, bySubject: {} };
  const issues = window.CONTENT_ISSUES || [];
  const runtimeErrors = window.CONTENT_RUNTIME_ERRORS || [];

  const [severityFilter, setSeverityFilter] = uHS('all');
  const [fieldFilter, setFieldFilter] = uHS('all');
  const [subjectFilter, setSubjectFilter] = uHS('');
  const [expanded, setExpanded] = uHS({});

  const allFields = uHM(() => {
    const set = new Set();
    for (const i of issues) set.add(i.field || '(none)');
    return Array.from(set).sort();
  }, [issues]);

  const filtered = uHM(() => {
    return issues
      .filter(i => severityFilter === 'all' || i.severity === severityFilter)
      .filter(i => fieldFilter === 'all' || (i.field || '(none)') === fieldFilter)
      .filter(i => !subjectFilter || (i.subject || '').includes(subjectFilter.toLowerCase()));
  }, [issues, severityFilter, fieldFilter, subjectFilter]);

  const groupedBySubject = uHM(() => {
    const m = {};
    for (const i of filtered) {
      const k = i.subject || '_orphan';
      (m[k] ||= []).push(i);
    }
    return Object.entries(m)
      .map(([subject, rows]) => ({
        subject,
        rows: rows.slice().sort((a, b) => (SEVERITY_ORDER[a.severity] || 9) - (SEVERITY_ORDER[b.severity] || 9)),
        errors: rows.filter(r => r.severity === 'error').length,
        warnings: rows.filter(r => r.severity === 'warning').length,
      }))
      .sort((a, b) => (b.errors - a.errors) || (b.warnings - a.warnings) || a.subject.localeCompare(b.subject));
  }, [filtered]);

  const totalLessons = Object.keys(window.LESSONS || {}).length;

  return (
    <div className="health-page" data-screen-label="health" style={{
      maxWidth: 1100, margin: '0 auto', padding: '48px 32px 96px',
    }}>
      <header style={{ paddingBottom: 32, borderBottom: '1px solid var(--rule)', marginBottom: 32 }}>
        <div className="eyebrow">§ Stewards' diagnostics</div>
        <h1 className="serif" style={{ fontStyle: 'italic', fontSize: 52, lineHeight: 1, margin: '12px 0 16px' }}>
          Content health
        </h1>
        <p style={{ fontSize: 17, lineHeight: 1.55, color: 'var(--ink-2)', maxWidth: 720 }}>
          A live readout from the last page load. Warnings are soft minimums
          from <code>_style.md</code>; errors are schema violations the bootstrap
          could not merge safely. Fix from the top of the list.
        </p>
      </header>

      {/* ——— Overview cards ——— */}
      <section style={{
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
        gap: 1, background: 'var(--rule)', border: '1px solid var(--rule)', marginBottom: 40,
      }}>
        {[
          { label: 'Subjects', value: health.subjects },
          { label: 'Topics',   value: health.topics },
          { label: 'Lessons',  value: totalLessons },
          { label: 'Errors',   value: health.errors,   color: health.errors ? 'var(--amber)' : undefined },
          { label: 'Warnings', value: health.warnings, color: health.warnings ? '#a47c2a' : undefined },
          { label: 'Bootstrap', value: `${health.elapsedMs || 0}ms` },
          { label: 'Runtime errors', value: runtimeErrors.length, color: runtimeErrors.length ? 'var(--amber)' : undefined },
        ].map((c, i) => (
          <div key={i} style={{ background: 'var(--paper)', padding: 18 }}>
            <div className="serif" style={{ fontSize: 34, lineHeight: 1, fontStyle: 'italic', color: c.color || 'var(--ink)' }}>
              {c.value}
            </div>
            <div style={{
              fontFamily: 'JetBrains Mono, monospace', fontSize: 10, letterSpacing: '0.1em',
              textTransform: 'uppercase', color: 'var(--ink-3)', marginTop: 6,
            }}>{c.label}</div>
          </div>
        ))}
      </section>

      {/* ——— Filters ——— */}
      <section style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 20, alignItems: 'center' }}>
        <label style={{ fontSize: 13, color: 'var(--ink-3)' }}>Severity</label>
        <select value={severityFilter} onChange={e => setSeverityFilter(e.target.value)} style={selectStyle}>
          <option value="all">all</option>
          <option value="error">errors only</option>
          <option value="warning">warnings only</option>
        </select>
        <label style={{ fontSize: 13, color: 'var(--ink-3)' }}>Field</label>
        <select value={fieldFilter} onChange={e => setFieldFilter(e.target.value)} style={selectStyle}>
          <option value="all">all</option>
          {allFields.map(f => <option key={f} value={f}>{f}</option>)}
        </select>
        <label style={{ fontSize: 13, color: 'var(--ink-3)' }}>Subject</label>
        <input
          value={subjectFilter}
          onChange={e => setSubjectFilter(e.target.value)}
          placeholder="filter by subject id…"
          style={{ ...selectStyle, minWidth: 180 }}
        />
        <div style={{ marginLeft: 'auto', fontSize: 13, color: 'var(--ink-3)' }}>
          {filtered.length} / {issues.length} issues
        </div>
      </section>

      {/* ——— Runtime errors (rare but nasty) ——— */}
      {runtimeErrors.length > 0 && (
        <section style={{ padding: 20, background: '#faf1e8', border: '1px solid var(--amber)', marginBottom: 32 }}>
          <div className="eyebrow" style={{ color: 'var(--amber)', marginBottom: 10 }}>§ Runtime errors</div>
          <p style={{ fontSize: 14, color: 'var(--ink-2)', marginBottom: 12 }}>
            These are crashes caught by the page error boundary since the last reload. Reload clears them.
          </p>
          <ol style={{ paddingLeft: 20, margin: 0, fontFamily: 'JetBrains Mono, monospace', fontSize: 12 }}>
            {runtimeErrors.slice(0, 10).map((e, i) => (
              <li key={i} style={{ marginBottom: 6 }}>
                <span style={{ color: 'var(--ink-3)' }}>{e.at.slice(11, 19)}</span> · <strong>{e.page}</strong> · {e.message}
              </li>
            ))}
          </ol>
        </section>
      )}

      {/* ——— Issues grouped by subject ——— */}
      <section>
        {groupedBySubject.length === 0 && (
          <div style={{ padding: 40, textAlign: 'center', color: 'var(--ink-3)', fontStyle: 'italic' }}>
            Nothing flagged. The atlas is clean.
          </div>
        )}
        {groupedBySubject.map(({ subject, rows, errors, warnings }) => (
          <article key={subject} style={{
            borderTop: '1px solid var(--rule)',
            padding: '16px 0',
          }}>
            <header
              onClick={() => setExpanded(x => ({ ...x, [subject]: !x[subject] }))}
              style={{
                display: 'flex', alignItems: 'baseline', gap: 12,
                cursor: 'pointer', userSelect: 'none',
              }}
            >
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: 'var(--ink-3)', width: 16 }}>
                {expanded[subject] ? '−' : '+'}
              </div>
              <div className="serif" style={{ fontSize: 22, fontStyle: 'italic' }}>{subject}</div>
              <div style={{ marginLeft: 'auto', fontSize: 13, color: 'var(--ink-3)', display: 'flex', gap: 12 }}>
                {errors > 0 && <span style={{ color: 'var(--amber)' }}>{errors} errors</span>}
                {warnings > 0 && <span>{warnings} warnings</span>}
              </div>
            </header>

            {expanded[subject] && (
              <table style={{ width: '100%', marginTop: 12, fontSize: 13, borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ color: 'var(--ink-3)', textAlign: 'left', fontSize: 11, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                    <th style={tdStyle}>sev</th>
                    <th style={tdStyle}>topic</th>
                    <th style={tdStyle}>field</th>
                    <th style={tdStyle}>message</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r, i) => (
                    <tr key={i} style={{ borderTop: '1px solid var(--rule-soft, #d9d2bf)' }}>
                      <td style={{ ...tdStyle, color: r.severity === 'error' ? 'var(--amber)' : 'var(--ink-3)', fontFamily: 'JetBrains Mono, monospace', fontSize: 11 }}>
                        {r.severity}
                      </td>
                      <td style={{ ...tdStyle, fontFamily: 'JetBrains Mono, monospace', fontSize: 12 }}>
                        {r.topic ? (
                          <a onClick={() => onNav({ page: 'lesson', topicId: r.topic, subjectId: r.subject })}
                             style={{ cursor: 'pointer', color: 'var(--ink)', textDecoration: 'underline' }}>
                            {r.topic}
                          </a>
                        ) : '—'}
                      </td>
                      <td style={{ ...tdStyle, color: 'var(--ink-3)', fontFamily: 'JetBrains Mono, monospace', fontSize: 11 }}>
                        {r.field || '—'}
                      </td>
                      <td style={tdStyle}>{r.message}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </article>
        ))}
      </section>

      <footer style={{ marginTop: 40, paddingTop: 24, borderTop: '1px solid var(--rule)', fontSize: 13, color: 'var(--ink-3)' }}>
        Data is refreshed on every page load by <code>content/_bootstrap.js</code>.
        For a programmatic view, open DevTools and inspect <code>window.CONTENT_HEALTH</code> and <code>window.CONTENT_ISSUES</code>.
      </footer>
    </div>
  );
};

const selectStyle = {
  fontFamily: 'JetBrains Mono, monospace', fontSize: 12,
  padding: '6px 10px', background: 'var(--paper)',
  border: '1px solid var(--rule)', color: 'var(--ink)',
};
const tdStyle = { padding: '8px 10px', verticalAlign: 'top' };

window.ContentHealthPage = ContentHealthPage;
