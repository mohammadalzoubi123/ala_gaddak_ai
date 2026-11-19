# على قدّك AI — Project foundation

Arabic RTL homepage and category selection for Ala Qaddak AI. Built with React, Vite, TypeScript, Tailwind CSS, and Lucide icons.

## Run

Use Node.js 22.12+ (or 24 LTS) and npm:

```sh
npm install
npm run dev
```

Vite prints the local preview address. To check production output:

```sh
npm run build
npm run preview
```

## Browser checks

```sh
npx playwright install chromium
npm run test:e2e
```

The browser suite covers all six category routes, desktop and mobile navigation, keyboard access, reduced motion, unknown routes, and layout widths from 320px to 1440px. Screenshots are saved under the ignored `test-results/` directory.

## Files

- `src/main.tsx`: router, lazy-loaded integration pages, and loading state.
- `src/styles.css`: responsive RTL theme, animation, and reduced-motion support; Tailwind is enabled through the Vite plugin.
- `src/components/`: reusable brand, navigation/layout, and category cards.
- `src/pages/HomePage.tsx`: hero, categories, explanation, and Habboud introduction.
- `src/pages/QuizPage.tsx`: category-aware integration placeholder for Person 2, not a quiz implementation.
- `src/pages/NotFoundPage.tsx`: unknown-path handling.
- `src/data/categories.ts`: category metadata and shared category, humor, and trait types.
- `public/images/habboud.png`: generated Habboud mascot asset.

## Integration contract

Category cards navigate to `/quiz/:categoryId`. Read the ID using React Router's `useParams()` and validate it with `getCategory()`. Replace the contents of `QuizPage.tsx` when the quiz is ready. Direct route visits, invalid categories, and browser back navigation are supported. Production hosting must rewrite application routes to `index.html`.

- Categories: `car`, `house`, `job`, `travel`, `phone`, `pet`.
- Humor levels: `light`, `medium`, `wild`.
- Traits: `luxury`, `saving`, `comfort`, `adventure`, `tech`, `lazy`, `ambitious`, `social`, `practical`, `dreamy`, `chaotic`.

Quiz questions, recommendation logic, and results are deliberately not implemented. No paid API, secret key, analytics, or user-data collection is included. Google Fonts loads Tajawal and Manrope; the interface falls back to sans-serif when unavailable.

## Asset

The mascot was generated with this direction: a friendly floating lavender 3D robot, glossy dark visor, violet eyes, small cyan chest light, raised greeting hand, and subtle purple studio lighting against a near-black plum background; no text or watermark.

## Repository handoff

Foundation work is isolated on `feat/foundation-ui` in the shared `ala_gaddak_ai` repository. Quiz and results are reserved for Persons 2 and 3. Merge into the main branch only after team review.
