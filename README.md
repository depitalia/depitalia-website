# DEP Italia — Sito vetrina

Sito vetrina pubblico di DEP Italia (Digital Estate Planner Italia).
Una sola pagina lunga in italiano, con CTA verso l'app.

## Stack
- Next.js 14
- TypeScript
- Vercel hosting

## Sviluppo locale
```bash
npm install
npm run dev
```

Apri http://localhost:3000

## Deploy
Push su `main` → deploy automatico su Vercel.

## Struttura
- `app/page.tsx` — Homepage (hero, problema, cos'è, come funziona, piani, FAQ, CTA)
- `app/layout.tsx` — Layout root con font e metadata
- `app/globals.css` — Stile globale
- `components/` — Componenti riutilizzabili (Header, Footer, ...)
- `public/` — Risorse statiche (logo, lead magnet PDF)

## Lingua
Italiano (default). Predisposto per aggiungere inglese in futuro tramite `app/[lang]/page.tsx`.
