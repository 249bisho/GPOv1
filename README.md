````markdown
# Bisho site — scaffold (feature/site-scaffold)

This branch contains a scaffold for the Bisho marketing website.

Key features:
- Next.js (SSG + dynamic route readiness)
- Tailwind CSS for styling
- Netlify CMS (git-backed) for editing content
- Netlify Forms configured for contact submissions -> abdulhalimbasheer@gmail.com
- English + Arabic locales with RTL support
- Cookie consent UI that gates Google Analytics (GA4)
- Basic SEO & legal template pages
- Netlify config (netlify.toml) + next export (static output)

Environment variables (create a `.env.local` for local dev):
- NEXT_PUBLIC_GA_ID=G-2520N9131Y
- NEXT_PUBLIC_CONTACT_EMAIL=abdulhalimbasheer@gmail.com
- NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/placeholder

Local dev
1. npm install
2. Create `.env.local` with the variables above (replace as needed)
3. npm run dev
4. Open http://localhost:3000

Create and push branch & open PR (recommended)
1. If you do not have feature/site-scaffold locally:
   git checkout -b feature/site-scaffold

2. Add files, then:
   git add .
   git commit -m "scaffold: initial Next.js + Tailwind + NetlifyCMS site scaffold"
   git push -u origin feature/site-scaffold

If the remote branch already exists and you want to overwrite it:
   # CAUTION: this will replace the remote branch history
   git checkout -b feature/site-scaffold
   git add .
   git commit -m "scaffold: initial Next.js + Tailwind + NetlifyCMS site scaffold"
   git push -u origin feature/site-scaffold --force

Open PR:
- Via GitHub UI: create a PR from `feature/site-scaffold` -> `main`
- Or via GitHub CLI:
  gh pr create --base main --head feature/site-scaffold --title "feat: site scaffold" --body "Initial scaffold for Bisho site (Next.js, Tailwind, Netlify CMS)."

Netlify setup
1. Connect the repo in Netlify.
2. Build command: `npm run build`
3. Publish directory: `out`
4. Set environment variables in Netlify UI:
   - NEXT_PUBLIC_GA_ID = G-2520N9131Y
   - NEXT_PUBLIC_CONTACT_EMAIL = abdulhalimbasheer@gmail.com
   - NEXT_PUBLIC_CALENDLY_URL = https://calendly.com/placeholder
5. Enable Identity + Git Gateway if you want Netlify CMS in-browser authentication.

Notes & next steps
- Content is placeholder; add real copy via Netlify CMS or markdown files in `content/`.
- Replace placeholder hero image (`public/hero.jpg`) with licensed images from Unsplash or Pexels.
- Have legal pages reviewed by counsel before publishing.
- For mailbox: leave for later (per your instruction). Suggested options: Namecheap email, Zoho Mail, Google Workspace.
- I will iterate on the branch after you open the PR and leave review comments.

Approved by: Bashir A. (249bisho)
Contact for site edits: abdulhalimbasheer@gmail.com
````markdown
