# PouYa — Personal Site

A from-scratch personal site: Next.js (App Router) + TypeScript + Tailwind
CSS + Framer Motion, bilingual (English default / Persian with full RTL),
glassmorphism throughout, no invented content.

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Where to put your own content

Nothing about you was written into this site. Every real value lives in one
of these two files:

- `lib/placeholders.ts` — project cards (`title`, `description`, `url`,
  `image`, `tags`) and social links (`href` for telegram/github/instagram/
  discord/email/website). The `EnlargeBoobs` / `NoVA SeLF` / `NoVA PaNeL`
  titles are already set from your brief; everything else on each project is
  an empty string for you to fill in.
- `components/sections/About.tsx` — replace the placeholder line
  `{t.about.placeholder}` (and the matching string in
  `lib/translations.ts` under `about.placeholder` for both `en` and `fa`)
  with your real introduction.

The location string `Iran, Rasht` appears exactly once, in `components/Footer.tsx`
via `lib/placeholders.ts`'s `location` export, per your instruction not to
repeat it elsewhere.

## Icons

All icons are from `lucide-react`. Project cards cycle through a generic
icon set (`components/sections/Projects.tsx` → `iconCycle`) — swap any entry
for your own icon component (e.g. an SVG/image exported from base44) without
touching the layout or animation code around it.

## Structure

```
app/
  layout.tsx        fonts, language provider, background, noise overlay
  page.tsx           composes the sections
  globals.css        glass / ripple / spotlight / noise utility classes
components/
  Navbar.tsx          floating glass nav + language toggle
  LanguageToggle.tsx   animated EN/FA switch
  LanguageProvider.tsx locale + RTL context
  AnimatedBackground.tsx aurora gradient, slow conic glow, floating particles
  Footer.tsx
  sections/
    Hero.tsx           name only, signature rotating gold halo
    About.tsx           blur reveal/hide toggle, placeholder copy
    Projects.tsx        glass project cards
    Socials.tsx         glass social icon grid
    Contact.tsx         glass contact form (wire handleSubmit to your backend)
  ui/
    GlassButton.tsx      shared bubble/glass button with ripple + glow
    SocialIcon.tsx       icon lookup for socials
lib/
  translations.ts       EN/FA UI copy (chrome only, not personal content)
  placeholders.ts        projects, socials, location — fill these in
```

## Notes

- Language default is English; the toggle in the navbar switches to Persian
  and flips the whole page to RTL (persisted in `localStorage`).
- `prefers-reduced-motion` is respected globally in `globals.css`.
- The contact form's `handleSubmit` in `Contact.tsx` is a no-op — connect it
  to an API route, a form service, or `mailto:` as you prefer.
