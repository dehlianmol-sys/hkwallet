# Renaming Prompt for This Project

Copy-paste prompt covering every remaining rename item in the Hkwallet (formerly Vivrapay) codebase:

---

## The Prompt

Rename everything left over from "Vivrapay" to "Hkwallet" across this project. Do NOT change any backend logic, database schema, Supabase functions, or admin behavior — rename only. Specifically:

1. **Brand name everywhere**
   - Replace all visible text "Vivrapay" / "Vivra Pay" with "Hkwallet" (headings, buttons, footers, about text, error messages, toasts).
   - Search the whole `src/` folder case-insensitively for `vivra` and update every user-facing string.

2. **Logo file name**
   - The logo file in storage is still named `Vivrapaylogo.png` (referenced in `src/lib/brand.ts` and admin logo upload). Rename the reference to `hkwallet-logo.png` and update the storage bucket file accordingly, keeping the SAME bucket/source the admin panel uses so the logo still syncs between admin and user side.

3. **APK file & download naming**
   - Keep the APK at `public/downloads/hkwallet.apk`; make sure the downloaded filename the user receives is `Hkwallet.apk` (set `download` attribute on the landing page button if missing).

4. **Domain / site name**
   - Any remaining references to old domains must point to `https://hkwallet.site` (referral links, share text, invite messages on Team and Mine pages).

5. **Titles & metadata**
   - All route head() titles/descriptions: verify they say "Hkwallet" (no "Vivrapay"). Browser tab, og:title, twitter tags.

6. **Storage bucket & asset names**
   - Any hardcoded bucket file names or paths still containing `vivra` should be renamed consistently (logo, banners, icons) WITHOUT breaking existing stored files — list them first so I can rename the actual files in storage.

7. **Code identifiers (optional, cosmetic only)**
   - CSS classes like `vp-*`, variable names, comments mentioning Vivrapay — rename to `hk-*` / Hkwallet only if it does not break anything; otherwise leave code identifiers as-is.

Rules: renames only, no UI redesign, no logic changes, no database changes. After renaming, show me a list of every file touched.

---

Note: this is a prompt you can paste into chat when ready. No code changes are included in this plan.
