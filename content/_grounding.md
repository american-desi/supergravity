# The Atlas Grounding Philosophy
## How Supergravity evaluates, sources, and presents knowledge

---

### I. The Central Commitment

The Atlas of Everything is built on a single, non-negotiable premise:  
**Truth is worth pursuing, and rigor is worth the effort.**

We do not present knowledge as settled when it is contested. We do not hide uncertainty to seem more authoritative. We do not mistake popularity for correctness, or novelty for insight. We pursue the best available understanding of each subject and we show our work.

---

### II. The Source Hierarchy

Not all sources are created equal. Every claim in the Atlas traces to a source, and every source has a reliability weight — a probabilistic estimate of how likely that source is to be accurate.

| Tier | Source Type | Reliability |
|------|-------------|-------------|
| 1 | Peer-reviewed meta-analysis / systematic review | 0.95–0.97 |
| 1 | Peer-reviewed scientific journal | 0.88–0.92 |
| 2 | Academic textbooks / university courses | 0.85–0.90 |
| 2 | Expert-curated encyclopedias (Britannica, SEP) | 0.85–0.90 |
| 2 | Government scientific bodies / national labs | 0.83–0.88 |
| 3 | Wikipedia (featured/good articles) | 0.78–0.88 |
| 3 | Wikipedia (standard articles) | 0.72–0.78 |
| 4 | Quality science journalism | 0.68–0.74 |
| 4 | Major news outlets (fact-checked) | 0.65–0.72 |
| 5 | Educational video (vetted creators) | 0.60–0.68 |
| 5 | Expert blogs / substack | 0.55–0.65 |
| 6 | Reddit / community forums | 0.25–0.45 |
| 7 | Social media / anecdote | 0.15–0.25 |

**These are probability estimates, not verdicts.** A Reddit post can be more accurate than a peer-reviewed paper in a specific instance; these weights reflect base rates across many claims.

---

### III. The Truth Aggregation Model

A claim's **truth score** rises with each independent source that corroborates it:

```
P(claim is true | N independent sources agree) = 1 − ∏(1 − wᵢ)
```

A claim corroborated by three independent sources with reliabilities 0.88, 0.82, and 0.75 has a combined truth score of:

```
1 − (1 − 0.88)(1 − 0.82)(1 − 0.75) = 1 − (0.12)(0.18)(0.25) ≈ 0.9946
```

Opposing sources erode the score proportionally. A contested claim — where credible sources disagree — is always marked as such.

---

### IV. Confidence Labels

| Score | Label | Meaning |
|-------|-------|---------|
| ≥ 0.90 | **high** | Broad scientific/scholarly consensus. Established over decades. |
| 0.75–0.90 | **medium** | Well-supported, but some methodological debate or ongoing research. |
| 0.55–0.75 | **low** | Emerging or contested. Treat with appropriate skepticism. |
| < 0.55 | **unverified** | Insufficient sourcing. Do not rely on this without further research. |

---

### V. The Wikipedia Protocol

Wikipedia is our primary enrichment source. We use it because:
- It synthesizes primary sources across millions of articles
- It is continuously updated and corrected
- Its best articles rival academic encyclopedias in quality
- It is free, open, and accessible to all

We use it with these caveats:
- **Wikipedia is a secondary source**, not a primary one. We trace important claims to their primary sources.
- **Article quality varies enormously.** A Featured Article (FA) is far more reliable than a stub.
- **Wikipedia's own reliability indicators matter.** Claims tagged [citation needed] or [disputed] are treated as lower-confidence.
- **Wikipedia can reflect cultural or institutional bias.** We note when this is likely.

When Wikipedia's extract is shown, it is clearly labeled and linked to the original article.

---

### VI. The Epistemic Principles

**1. Empirical Priority**  
Directly observable, measurable facts take precedence over theoretical constructs. When theory and observation conflict, observation wins (until measurement error is ruled out).

**2. Source Triangulation**  
Confidence grows with independent corroboration. A claim supported by one excellent source is less reliable than the same claim supported by five independent sources — even if each is individually weaker.

**3. Domain Sovereignty**  
Questions within a domain are answered by experts in that domain. Physics questions go to physicists. Medical questions go to physicians and medical researchers. We do not let philosophers decide empirical questions or scientists decide aesthetic ones.

**4. Temporal Context**  
Facts are timestamped. We track when information was verified. We treat "what is known as of 2026" differently from "what was believed in 1950." Science advances; the Atlas advances with it.

**5. Epistemic Humility**  
We quantify uncertainty rather than hide it. Displaying confidence levels is not a sign of weakness — it is intellectual honesty. "We don't know yet" is a legitimate and important answer.

**6. Provenance Chain**  
Every claim traces to its source. Where we cannot trace a claim to a source, we mark it as unverified or remove it.

**7. Bias Acknowledgment**  
All sources — including this one — carry bias from their historical, cultural, and institutional context. We name this where we can see it clearly.

**8. Pedagogical Truth**  
For learners encountering a subject for the first time, we present the strongest established consensus. Contested areas are not hidden, but they are not foregrounded prematurely either. A 10-year-old learning about evolution should understand the scientific consensus before encountering its critics.

---

### VII. The Wonder Imperative

Facts without wonder are inert. Every topic in the Atlas should inspire at least one moment of genuine surprise — a "wait, really?" that cracks open the subject and makes the learner want more.

Wonder hooks are:
- **True** — verified facts, not myths or approximations
- **Surprising** — counterintuitive or unexpected
- **Vivid** — specific enough to be memorable
- **Connected** — they reveal something about how the subject works, not just a party trick

Wonder is not decoration. It is the engine of intrinsic motivation — the reason someone goes from reading a lesson to reading a book.

---

### VIII. The Living Atlas

Knowledge is not static. The Atlas updates:
- **Automatically** — weekly Wikipedia enrichment via GitHub Actions
- **Manually** — when subject matter experts identify outdated content
- **By signal** — when Claude's confidence evaluation flags a significant change in scientific consensus

All updates are versioned. The enrichment timestamp on each lesson tells you exactly when that content was last verified.

---

### IX. What We Will Not Do

- Present contested political or social claims as settled fact
- Manufacture certainty where none exists
- Omit complexity because it is pedagogically inconvenient
- Cite sources we have not read
- Overweight novelty at the expense of established knowledge
- Mistake eloquence for truth

---

*The Atlas of Everything is committed to the idea that a child deserves the same epistemic honesty as a scholar — and that honest uncertainty, held with curiosity, is the beginning of all genuine learning.*

---
**Last updated:** 2026-06-25  
**Maintainer:** Atlas Editorial  
**License:** CC BY-SA 4.0
