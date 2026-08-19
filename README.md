# TailorBoard Website

A static multi-page marketing site for **The Tailor Board**, built to the brief in
`WEBSITE_BUILDER_PROMPT.md`. Navy (#1a365d) + gold (#D4AF37) branding, no build
step required — plain HTML/CSS/JS.

## Pages included

| Page | File |
|---|---|
| Home | `index.html` |
| About | `about.html` |
| Features | `features.html` |
| Download | `download.html` |
| Pricing | `pricing.html` |
| FAQ | `faq.html` |
| Contact (with form) | `contact.html` |
| Blog (placeholder) | `blog.html` |
| Privacy Policy | `privacy.html` |
| Terms & Conditions | `terms.html` |

Shared styles: `assets/style.css`. Shared behavior (mobile nav, contact form
handler): `assets/site.js`. `robots.txt` and `sitemap.xml` are included at the
root for SEO.

## Run it locally

No build step needed — open `index.html` directly, or serve the folder:

```bash
npx serve .
# or
python3 -m http.server 8080
```

## Deploy to Vercel (matches the brief)

1. Push this folder to a GitHub repo.
2. In Vercel: **New Project → Import** the repo.
3. Framework preset: **Other** (static site) — no build command needed,
   output directory is the repo root.
4. Deploy. Vercel gives you free HTTPS automatically.
5. Add a custom domain later under **Project → Settings → Domains**.

## Things left as placeholders — confirm before launch

The build brief listed 12 open questions. Here's what was assumed and what
still needs a real answer from you:

1. **Support email** — used `thetailorboard@gmail.com` (from your TailorBoard
   project notes). Swap for a branded address (e.g. `support@thetailorboard.com`)
   once you have one.
2. **Phone/WhatsApp** — used `+234 810 661 1231` as given in the brief.
3. **Address** — used "Benin City, Nigeria" (city-level only, no street address).
4. **Founder/team info** — left generic on the About page. Add a name, photo
   and short bio in `about.html` if you want it.
5. **Testimonials** — the two quotes on the homepage and About page are
   **placeholders**, clearly labeled in the code. Replace with real quotes
   once you have beta tester feedback, and remove the "Placeholder" tag.
6. **User/order stats** — intentionally omitted rather than faked.
7. **Logo** — no logo file provided, so the site uses a text wordmark
   ("TailorBoard") with a small gold diamond mark. Drop in a real SVG/PNG
   logo and swap the `.wordmark` markup if you have one.
8. **Pricing** — Free plan matches the brief. Pro is shown as "Coming Soon"
   at the example price (₦2,999/mo) from the brief — confirm real pricing
   before removing the placeholder note.
9. **APK file** — the Download button is a disabled placeholder
   (`href="#"`, `aria-disabled`). Once the APK is hosted (Vercel static file
   or Firebase Storage), set the real URL and remove the `disabled` class
   and `aria-disabled` attribute on the button in `download.html`.
10. **Blog** — placeholder page with "coming soon" cards, linked from the footer.
11. **Screenshots** — the homepage and Features page use stylized mockups
    (CSS/SVG phone frames + an order-pipeline "pattern card"), not real
    screenshots. Swap `.shot` divs for real `<img>` screenshots when ready.
12. **Domain** — copy currently references `thetailorboard.com` in
    `robots.txt`/`sitemap.xml`/Open Graph tags as a placeholder domain;
    update once you've picked one.

## Wiring up the contact form

`contact.html` has a plain HTML form with no backend. Easiest options:
- **FormSubmit** (no signup): set the form's `action` to
  `https://formsubmit.co/thetailorboard@gmail.com` and method to `POST`.
- **Formspree** or **EmailJS**: sign up, drop in your endpoint/keys via
  `.env.example` → your deploy environment, and update `assets/site.js`.

Until then, submitting the form shows an inline message rather than
silently failing.

## Legal pages

`privacy.html` and `terms.html` are readable starting drafts covering the
sections Play Store listings expect (data collection, storage, third
parties, user rights, governing law, contact). They are **not legal
advice** — have a professional review them before submitting to Google Play.
