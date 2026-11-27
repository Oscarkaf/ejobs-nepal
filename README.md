# E-Jobs Nepal — WordPress to Next.js Migration

I rebuilt the [E-Jobs Nepal](https://ejobsnp.com/) homepage and About Us page, migrating them from WordPress (Elementor) to **Next.js, React and TypeScript**. I kept the original design, branding and content, fixed the problems I found along the way, and focused on performance, accessibility and maintainability.

**Live site:** https://ejobs-nepal-seven.vercel.app
**Pages:** [Home](https://ejobs-nepal-seven.vercel.app/) · [About Us](https://ejobs-nepal-seven.vercel.app/about-us/)

---

## Tech stack

| Area | Choice | Why I chose it |
| --- | --- | --- |
| Framework | Next.js 16 (App Router) | Server rendering, file-based routing, and built-in image and font optimisation |
| Language | TypeScript | Catches mistakes before they reach the browser and documents what each component expects |
| Styling | Tailwind CSS v4 | Lets me define the brand once as design tokens and keep spacing consistent |
| Content | Typed content files + WordPress REST API | Keeps copy out of components; blog posts come live from the existing WordPress |
| Testing | Playwright | End-to-end tests on desktop and mobile |
| CI / Hosting | GitHub Actions, Vercel | Lint, type-check and tests on every push; automatic deployments |

## Running it locally

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # production build
npm run test:e2e     # Playwright tests (starts the app if it isn't already running)
npm run lint
```

Requires Node.js 20 or later. No environment variables are needed.

## Project structure

```
src/
  app/
    layout.tsx            Root layout: fonts, metadata, header, footer, skip link, scroll progress
    page.tsx              Homepage, composed from section components
    about-us/page.tsx     About Us page
    not-found.tsx         Custom 404 page
    api/posts/route.ts    API route that serves WordPress posts
    globals.css           Design tokens and animation styles
  components/
    layout/               Header, MobileMenu, NavLink, Footer
    sections/             One component per homepage section
    sections/about/       About Us sections
    ui/                   Reusable building blocks: Button, Container, Icon, Reveal, CountUp, …
  content/                Page content as typed data (site.ts, home.ts, about.ts)
  lib/wordpress.ts        WordPress API client with caching and a fallback
tests/e2e/                Playwright tests
```

## How I built it

### Matching the original design
I started by auditing the live site. I read colours, fonts and sizes from the browser's computed styles, and found that Elementor's "global colours" were still its factory defaults, not the real brand colours. So I measured the actual palette from the page and defined it once as Tailwind theme tokens. I rebuilt each section to match the original layout and reused the site's own photography (Pexels stock images) and background artwork, which I found by inspecting its stylesheets, because several images were CSS backgrounds rather than `<img>` tags.

I self-host the fonts (Poppins and Jost) with `next/font`, so the page makes no requests to Google and text doesn't jump when the fonts load.

### Reusable components and content as data
The header, footer and skip link live in the root layout, so every page gets them automatically. Each section is its own component, and shared pieces (`Button`, `Container`, `PageHero`, `ClientLogos`, `Icon`) are reused across both pages.

I kept **all text in `src/content/`**, separate from the components. Changing copy never means touching JSX, and these files could later be replaced by a CMS without changing the components.

### Live blog posts from WordPress
Rather than hard-coding the "Recent News Articles" section, I connected it to the **existing WordPress REST API**, so the client's team can keep publishing in WordPress and the new site picks the posts up automatically.

- Posts are fetched on the server and **cached for an hour**, so visitors don't add load to the WordPress server.
- **Every article page is preloaded on the server**, so switching pages is instant and happens in place.
- If WordPress can't be reached, the section **falls back to locally stored posts** instead of breaking.

### Links and routing
I kept the original URL structure (trailing slashes, `/about-us/`) so existing links still work. `/about` redirects to `/about-us/`, because the original site linked to both. Pages I didn't rebuild (`/our-services`, `/contact`, `/blog`, `/job-list`) redirect to the live WordPress pages, so no link on the site is broken. Unknown URLs show a custom 404 page with links back to every page.

### Animation
I wanted the site to feel alive without looking templated, so each section has one purposeful effect rather than many. I built them with CSS and small React components instead of adding an animation library:

- **Scroll-driven CSS** (`animation-timeline: view()`) for text reveals, the 3D section entrance, the scroll progress bar and lines that draw themselves. No JavaScript, and browsers without support show static content.
- **Small components:** `Reveal` for staggered entrances, `CountUp` for statistics, `Typewriter`, `TiltCard` (cards tilt towards the cursor) and `SpotlightGrid` (a border glow that follows the cursor).
- **Signal connectors** in "Why Build Your Team": signals travel along a line, and each card pulses as a signal reaches it. The timing is calculated so the pulse matches the signal's arrival.
- I only animate `transform`, `opacity` and `clip-path` to keep things smooth, and **every animation switches off for users who prefer reduced motion**.

### Accessibility
- Semantic landmarks, a skip-to-content link and a proper heading hierarchy.
- Descriptive alt text on content images (the original's are empty); decorative images use `alt=""`.
- The mobile menu exposes its state to screen readers, closes with Escape and locks page scrolling while open.
- Visible keyboard focus styles throughout.
- I darkened the body text from `#77838F` to `#5C6972`, a colour already in the brand palette, because the original fails WCAG AA contrast.

## What I improved over the original
While auditing the live site I found and fixed these issues:

| On the original site | In my version |
| --- | --- |
| Clicking a page number in Recent News Articles reloads the whole page and sends you back to the top | Articles change in place, instantly |
| "Post a Job" and "Browse Jobs" buttons link to `#` | They link to the contact page and the job list |
| "Read More About Us" links to `/about/`, the navigation to `/about-us/` | Both use `/about-us/`, and `/about` redirects |
| A section heading reads "Various Payment Gateways" but describes cost savings | Renamed "Significant Cost Savings" |
| The "Who we are" label is reused on an unrelated section | Relabelled "Why Nepal" |
| Small labels are marked up as `<h2>` with a 1.6px line height | Proper paragraph labels and a correct heading structure |
| The list of sectors is a single image | Real HTML cards: readable, accessible and indexable |
| The "400+ Companies" badge is a screenshot | Real text with a count-up animation |
| The header logo is a low-resolution thumbnail | I use the high-resolution version the site already had |
| About page: an empty heading, a sentence cut off mid-word, an unrelated holiday promotion, a link to `#`, an "Apply Now" button with no link, and an unrelated Figma logo among the clients | All fixed or removed |
| The footer says "Terms & Condidtions" | Corrected |
| Images have no alt text | Descriptive alt text |

## Testing

### Automated
I wrote 13 Playwright end-to-end tests that run on **desktop Chrome and a mobile device (Pixel 7)**. They check:
- the hero, headline and Apply link
- navigating from Home to About Us, including the page title and the active nav state
- that there are **no broken internal links** on either page
- the `/about` redirect and the custom 404 page
- that blog pagination switches articles in place
- that the mobile menu opens, lists every page and closes with Escape
- that **neither page scrolls sideways on a phone**

GitHub Actions runs the tests on every push, along with ESLint and a TypeScript check.

### Manual
I tested at 375px, 412px, 768px and 1440px widths in Chrome DevTools, and compared every section side by side with the live site. I checked for horizontal scrolling, the mobile menu, keyboard navigation and focus states, and the reduced-motion setting.

## Challenges I ran into

**Pagination that reloaded the whole page.** On the original site, choosing page 2 of the news articles reloads everything and drops you back at the top. My first version fixed that by fetching each page from my own API route, but there was still a noticeable wait on first click while the request went through to WordPress. I solved it by preloading every page on the server in parallel (`Promise.all`), so switching is now instant and the API route is only a fallback.

**Getting clean data from WordPress.** The API returned titles with HTML entities (`&#8217;`), and because the posts have no manual excerpt, the "excerpt" was the entire article. I wrote a small cleaning step that strips tags, decodes entities and trims excerpts at a word boundary. Some automated requests also received a bot-verification page instead of JSON, so the client validates every response and falls back to local posts if anything looks wrong.

**Elementor's misleading colours.** The site's exported global colours were Elementor's defaults, not the real brand. Using them would have made the rebuild look wrong, so I measured the colours actually used on the page instead.

**Styling disappearing completely.** At one point Tailwind stopped working and the site rendered unstyled. I'd replaced `next.config.ts`, which removed the Turbopack rule that runs Tailwind. I found the cause with `git diff`, restored the original file and added only the setting I needed.

**A stale development cache.** Several times, saved CSS changes didn't show up because the dev server was serving a cached build. Clearing `.next` and restarting fixed it.

**A mobile layout bug caught by my tests.** My responsive test found the homepage scrolling sideways on phones by over 200px. Two causes: truncated text in the sector cards was stretching a grid column wider than the screen, and the 3D scroll animations projected slightly past the viewport while running. I fixed the grid with `minmax(0, 1fr)` columns and clipped sideways overflow on `<main>`.

**Case-sensitive filenames.** I saved a component as `SpotLightGrid.tsx` but imported it as `SpotlightGrid`. It worked on my Mac, which ignores filename case, but would have broken the build on Vercel's Linux servers. TypeScript flagged it, and I renamed it with `git mv` so git recorded the change too.

**Hover effects that felt slow.** Cards inside staggered reveal animations reacted sluggishly on hover, because the reveal's transition rules were also applying to the hover. I separated the two, so entrances stay staggered and hovers respond immediately.

**Scroll animations that played too fast to see.** My first scroll-driven text animation finished within a few pixels of scrolling, because its range was measured against each paragraph's own height. Measuring against the viewport instead made it play smoothly.

**Inconsistent logo sizes.** The client logos have very different proportions, so at a fixed height some looked huge and others tiny. I placed each one in the same fixed-size box with `object-contain`, which balanced the row.

### Search and sharing
The browser tab uses the E-Jobs Nepal logo, and shared links show a branded preview image generated from code with `next/og`. Page titles follow a consistent "Page | E-Jobs Nepal" pattern, and each page has its own description.

## Next steps
- Rebuild the remaining pages (Services, Contact, Blog) with the same components.
- A "Kathmandu ↔ UK" section showing live time-zone overlap with UK clients.
- Dark mode, if it suits the brand.
- An on-site application form to replace the external Google Form.

## Credits
Content, branding, logos and photography belong to E-Jobs Nepal and their respective owners, and are used here for this assessment only. Photography from Pexels, as used on the original site. Line icons in the style of Feather Icons (MIT).

