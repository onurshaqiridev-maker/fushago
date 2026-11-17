# FushaGo — rules for Claude

**Read everything in `docs/` before you change anything.** The business rules in `docs/rules-and-flows.md` decide how features work; if a rule is unclear, ask instead of guessing. Respect its "What version 1 will NOT do" list (no online payments, no SMS, no native app).

## Stack
- **Front end:** React 19 + Vite 6 (JavaScript), in `frontend/`
- **Back end:** Node.js 22 + Express 4 (JavaScript), in `backend/`
- **Database:** SQLite (one file: `backend/prisma/dev.db`, kept out of git) through Prisma 6

## Folder layout
```
fushago/
├── CLAUDE.md               ← this file
├── docs/                   ← business, brand, rules, stack, data model (read first)
│   └── brand/              ← logo files
├── frontend/               ← React app (the website)
│   ├── public/             ← logo-icon.svg and other static files
│   └── src/                ← App.jsx (landing page), PitchArt.jsx (pitch drawing), index.css (brand colours/fonts)
└── backend/                ← Express server
    ├── prisma/
    │   ├── schema.prisma   ← the data models (source of truth)
    │   └── migrations/     ← database changes, in order
    └── src/
        ├── server.js       ← starts the server, /health
        └── db.js           ← shared Prisma connection
```

## Commands
First time (once):
```bash
cd backend && npm install && cp .env.example .env && npx prisma migrate dev
cd ../frontend && npm install
```
Every day (two terminals):
```bash
cd backend && npm run dev     # http://localhost:3001/health
cd frontend && npm run dev    # http://localhost:5173
```
After changing `backend/prisma/schema.prisma`: `cd backend && npx prisma migrate dev --name what-changed`

## Rules
- Use only the brand colours and fonts from `docs/brand-book.md` (Poppins + Inter; #12A150, #0B1F17, #C8F31D, #F4F7F2).
- Money is stored in euro cents as whole numbers.
- Never commit `.env` or `*.db` files.
- The owner is a beginner: keep code simple, add short comments, explain changes in plain words.
