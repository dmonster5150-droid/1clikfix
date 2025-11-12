1clikfix — deploy-ready project
------------------------------

Files include: React + Vite + Tailwind, Firebase hooks, Netlify functions placeholders, Firestore rules.

Deploy:
1. Add this repo to GitHub (ensure these files are at repo root).
2. In Netlify: Add new site → Deploy manually → Drag & drop repo or connect to GitHub.
3. Build command: npm run build
4. Publish directory: dist
5. Add environment variables from .env.example in Netlify site settings (Build & deploy → Environment).
6. After successful deploy, in Firebase console paste `firestore.rules` into Firestore rules and publish.

DO NOT commit secret keys to repo. Use Netlify env vars for SQUARE_ACCESS_TOKEN etc.
