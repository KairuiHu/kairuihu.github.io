# Handoff — kairuihu.github.io personal website

_Written 2026-07-01. Purpose: continue editing the site **locally** (you're leaving the cluster). Everything is committed & pushed; nothing is in-flight._

## 1. Current state (TL;DR)
- **Live:** https://kairuihu.github.io/ — academicpages (Jekyll / Minimal-Mistakes fork).
- **main is at `356c745`**, fully deployed. No uncommitted work.
- This session: reverted an iOS-redesign experiment back to the original Jekyll, repopulated all content, applied a warm design polish, and added two interactive touches (Apple-style scroll-reveal + a puppy avatar with a "vibe" bubble by the News title).

## 2. Repo & where things live
GitHub: **`KairuiHu/kairuihu.github.io`**. Clone it locally to continue.
- **Content** (all sections: About / News / Publications / Preprints / Software / Experience / Honors / Education / Miscellaneous): `_pages/about.md`
- **Custom CSS + head snippets** (color scheme, typography, scroll-reveal CSS, pet/bubble CSS): `_includes/head/custom.html`
- **End-of-body scripts** (inline scroll-reveal IntersectionObserver; puppy script include): `_includes/scripts.html`
- **Puppy avatar logic:** `cat-status.js` (repo root; filename is legacy — it's a dog now)
- **Puppy images:** `images/dog_still.png` (static default), `images/dog.webp` (animated, plays on hover), `images/dog.gif` (original source)
- **Sidebar author / socials / site description:** `_config.yml`
- **Publication thumbnails:** `images/` (videommmu, openmmreasoner, lmms_eval, hippocamp, filegram, local_cocoa)

Details of every change are in `git log` — see the last ~14 commits (from `0e35719` onward). Don't re-derive; read the log.

## 3. Branches
- `main` — live site (original academicpages + this session's work)
- `jekyll-backup` — pristine original (pre-session), for rollback
- `design-ios` — an abandoned iOS-style **static** redesign the user tried then rejected; kept for reference only

## 4. CRITICAL setup gotchas
- **GitHub Pages Source MUST be "Deploy from a branch → main / (root)"** (repo Settings → Pages). If it flips to "GitHub Actions", Pages serves the repo **raw** → Jekyll never builds → root 404 (`/_config.yml` becomes reachable, `assets/css/main.css` 404). This cost hours earlier. Only the account owner can change it in the web UI.
- The **cluster had no Jekyll toolchain** (bare ruby, bundler/jekyll native build fails) → couldn't preview locally, had to deploy + poll live. **This goes away locally** (below).

## 5. How to work locally (the big win vs the cluster)
```bash
git clone git@github.com:KairuiHu/kairuihu.github.io.git
cd kairuihu.github.io
bundle install
bundle exec jekyll serve            # -> http://localhost:4000  (instant live preview)
```
Edit → see it instantly → commit → push. GitHub Pages rebuilds in ~1 min.
- If `bundle install` fights you, use the `github-pages` gem versions academicpages pins (see `Gemfile`).

## 6. Interactive features added (so you know what's there)
- **Scroll-reveal** (Apple-style): direct children of `.page__content` fade + rise as they enter view, and **replay** on every re-entry. Gated on `.reveal-on` (only set when IntersectionObserver + motion allowed), so content is never hidden if JS/motion is off. CSS in `custom.html`, observer inline in `scripts.html`.
- **Puppy + vibe bubble** (`cat-status.js`): a line-art puppy sits by the **News** `<h1>`. Shows a **time-of-day, deliberately vague** status ("feeling the AGI", "chilling", "recharging"…) in a bubble; **static by default, animates only on hover**; **click** = bounce + re-roll vibe. Image was the user's own gif — background flood-filled to transparent (threshold **12**, low, so the dark outline survives) and the outline **thickened** (dilated silhouette) so it stays solid when scaled down. If you ever regenerate from a new gif, reuse that recipe (low threshold + thicken), and preview at the **real downscaled size**, not zoomed-in.

## 7. Design preferences (honor these on any future edit)
- **Elegant / professional.** Dislikes "childish / vibe-coded" looks and big rounded corners.
- **Warm palette**, referencing shulin16.github.io: brown headings, olive-green links, crimson accents (venue labels). Small radii.
- **All content links bold**; Paper/Project/Code pills carry small FontAwesome icons; 🤗 for HuggingFace/Data.
- **Publication titles → project pages**; **News paper items → conference papers** (ACL Anthology / CVPR / NAACL). **No arXiv links** anywhere. GPA removed.
- **Status/pet text must stay vague & chill** — never expose concrete "coding/paper".
- **Avatar:** the tan line-art puppy. (Do **not** use a black cat — 寓意不好.)
- **Git:** commits/PRs authored **solely by kairuihu**, never add a Claude co-author trailer.
- **Explanations:** detailed, from-zero (define terms, small examples); Chinese with English tech terms is welcome.

## 8. Loose ends / possible next steps
- FileGram venue is labeled **"arXiv 2026"** (Preprints section) — update if it gets accepted.
- Optional choiszt-style **News upgrade**: group by year + top/bottom fade masks (the current News is a scroll box with a thick scrollbar).
- Sanity-check the **Ropedia** links and any author-name links.

## 9. Related artifacts (don't duplicate — read these)
- Persistent memory (cluster only): `~/.claude/projects/-home-krhu-kai/memory/project_personal_website.md` and `MEMORY.md` index.
- Full change history: `git log` on `main`.

## 10. Suggested skills for the next session
- **frontend-design** — for further visual/UI polish in the site's established warm/elegant style.
- **run** / **verify** — locally, launch `jekyll serve` and eyeball changes before pushing (no more deploy-and-poll).
- **grill-me** — if planning a larger redesign, stress-test the plan first.

## 11. Sensitive info
None. No API keys/passwords involved. The email on the page (`HUKA0001@e.ntu.edu.sg`) is already public on the live site.
