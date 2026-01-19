# Teen Health Talk App - File Structure

```
teen-health-talk-app/
│
├── app/                                # Next.js app directory
│   ├── layout.tsx                      # Root layout, PWA meta tags, fonts
│   ├── page.tsx                        # Home page (mode selection)
│   ├── page.module.css                 # Home page styles
│   ├── globals.css                     # Global CSS reset and utilities
│   └── consult/                        # Consult mode pages
│       ├── page.tsx                    # Main consult interface + summary
│       └── consult.module.css          # Consult page styles
│
├── data/                               # Clinical content (edit here!)
│   └── sections.ts                     # All THT sections, prompts, SNOMED codes
│
├── public/                             # Static assets
│   ├── manifest.json                   # PWA manifest
│   ├── sw.js                          # Service worker for offline
│   ├── icon-192.png                    # PWA icon 192x192 (REPLACE PLACEHOLDER)
│   ├── icon-512.png                    # PWA icon 512x512 (REPLACE PLACEHOLDER)
│   └── favicon.ico                     # (ADD THIS) Browser favicon
│
├── node_modules/                       # Dependencies (git ignored)
│
├── .next/                              # Next.js build cache (git ignored)
│
├── out/                                # Static export output (git ignored)
│
├── package.json                        # Dependencies and scripts
├── package-lock.json                   # Dependency lock file
├── tsconfig.json                       # TypeScript configuration
├── next.config.js                      # Next.js config (static export)
├── netlify.toml                        # Netlify deployment config
├── .gitignore                          # Git ignore rules
│
├── README.md                           # Main documentation
├── DEPLOYMENT.md                       # Step-by-step deployment guide
├── CONTENT_GUIDE.md                    # How to edit clinical content
├── NEXT_ITERATIONS.md                  # Future feature roadmap
└── FILE_TREE.md                        # This file
```

## Key Files Explained

### Core Application

| File | Purpose | Edit Frequency |
|------|---------|----------------|
| `data/sections.ts` | **Clinical content** - All prompts, red flags, SNOMED codes | Frequent |
| `app/page.tsx` | Home page with mode selection | Rare |
| `app/consult/page.tsx` | Main consult UI and summary generation | Rare |
| `app/layout.tsx` | Global layout, PWA setup | Rare |

### Styling

| File | Purpose | Edit Frequency |
|------|---------|----------------|
| `app/globals.css` | Global styles, CSS reset | Rare |
| `app/page.module.css` | Home page styles | Occasional |
| `app/consult/consult.module.css` | Consult interface styles | Occasional |

### Configuration

| File | Purpose | Edit Frequency |
|------|---------|----------------|
| `package.json` | Dependencies, scripts | Rare |
| `tsconfig.json` | TypeScript settings | Never (unless upgrading) |
| `next.config.js` | Next.js build config | Rare |
| `netlify.toml` | Netlify deploy settings, security headers | Rare |

### PWA & Assets

| File | Purpose | Edit Frequency |
|------|---------|----------------|
| `public/manifest.json` | PWA metadata (name, icons, theme) | Once (branding) |
| `public/sw.js` | Service worker for offline | Never |
| `public/icon-192.png` | App icon (small) | Once (branding) |
| `public/icon-512.png` | App icon (large) | Once (branding) |
| `public/favicon.ico` | Browser tab icon | Once (branding) |

### Documentation

| File | Purpose | Audience |
|------|---------|----------|
| `README.md` | Overview, quick start, features | All users |
| `DEPLOYMENT.md` | How to deploy to Netlify | Developers |
| `CONTENT_GUIDE.md` | How to edit clinical content | Clinicians, content editors |
| `NEXT_ITERATIONS.md` | Future roadmap | Stakeholders, developers |
| `FILE_TREE.md` | This file - project structure | Developers |

## What to Edit (By Role)

### Clinical Content Editor
**You only need to edit:**
- `data/sections.ts` - All prompts, red flags, actions, SNOMED codes

**Read these guides:**
- `CONTENT_GUIDE.md` - Step-by-step editing instructions
- `README.md` - Understanding the app

### Branding/Designer
**You need to edit:**
- `public/icon-192.png` - Replace with proper icon
- `public/icon-512.png` - Replace with proper icon
- `public/favicon.ico` - Add favicon
- `public/manifest.json` - Update app name, theme color
- `app/globals.css` - Update color variables if needed

**Optional:**
- `app/page.module.css` - Adjust home page colors/spacing
- `app/consult/consult.module.css` - Adjust consult UI colors

### Developer
**You might edit:**
- `app/page.tsx` - Add features to home page
- `app/consult/page.tsx` - Add features to consult interface
- `package.json` - Add dependencies
- `next.config.js` - Change build settings
- `netlify.toml` - Adjust security headers or redirects

**Build/Deploy:**
- `npm install` - Install dependencies
- `npm run dev` - Run locally
- `npm run build` - Build for production
- See `DEPLOYMENT.md` for deployment

## File Sizes (Approximate)

| File Type | Size | Notes |
|-----------|------|-------|
| `data/sections.ts` | ~70 KB | Main content file |
| `app/**/*.tsx` | ~30 KB total | React components |
| `**/*.css` | ~20 KB total | All styles |
| `public/manifest.json` | ~1 KB | PWA config |
| `public/sw.js` | ~1 KB | Service worker |
| Icons (when added) | ~50 KB total | 192px + 512px PNGs |

**Total repo size**: ~175 KB (excluding node_modules, .next, out)
**Built site size**: ~200 KB (static HTML/CSS/JS)

## Build Output (`out/` directory after `npm run build`)

```
out/
├── index.html                          # Home page
├── consult.html                        # Consult page
├── _next/
│   └── static/
│       ├── css/                        # Compiled CSS
│       └── chunks/                     # JavaScript chunks
├── manifest.json                       # PWA manifest (copied)
├── sw.js                              # Service worker (copied)
├── icon-192.png                        # Icons (copied)
└── icon-512.png
```

This `out/` directory is what gets deployed to Netlify.

## Git Workflow

### Tracked Files (in version control)
- All files in this tree EXCEPT those in `.gitignore`
- Changes to `data/sections.ts` should be committed regularly

### Ignored Files (not in version control)
- `node_modules/` - Dependencies (re-installed via `npm install`)
- `.next/` - Build cache (regenerated)
- `out/` - Build output (regenerated)
- `.DS_Store` - macOS metadata
- `*.log` - Log files

### Typical Git Commands

```bash
# Check what's changed
git status

# Stage content changes
git add data/sections.ts

# Commit with message
git commit -m "Update mental health prompts"

# Push to GitHub (if using)
git push origin main

# Tag a release
git tag -a v1.0.0 -m "MVP Release"
git push origin v1.0.0
```

## Adding New Files

### Adding a New Section in the App

1. **Option A: Add to existing sections.ts**
   - Edit `data/sections.ts`
   - Add new section object to the array
   - No other files need changing

2. **Option B: Create new content file**
   - Create `data/my-new-content.ts`
   - Export data structure
   - Import in `app/consult/page.tsx`: `import { myData } from '@/data/my-new-content'`

### Adding New Pages

To add a new page (e.g., "About" page):

1. Create `app/about/page.tsx`:
   ```typescript
   export default function AboutPage() {
     return <div>About content</div>
   }
   ```

2. Link to it from home:
   ```typescript
   import Link from 'next/link'
   <Link href="/about">About</Link>
   ```

3. (Optional) Add styles: `app/about/page.module.css`

### Adding Static Assets

Place in `public/` directory:
- `public/my-image.png` → Access as `/my-image.png` in code
- `public/docs/guide.pdf` → Access as `/docs/guide.pdf`

Example:
```typescript
<img src="/my-image.png" alt="Description" />
```

## Troubleshooting File Issues

### "Cannot find module '@/data/sections'"
- Check file exists: `ls data/sections.ts`
- Check spelling and capitalization
- Try: `rm -rf .next && npm run dev`

### "Module parse failed: Unexpected token"
- Syntax error in TypeScript file
- Check for missing commas, brackets, quotes in `data/sections.ts`

### "Failed to compile"
- Check terminal for specific error
- Often a TypeScript type error in `data/sections.ts`
- Ensure all required fields are present in section objects

### Changes not appearing in browser
1. Stop dev server (Ctrl+C)
2. Clear cache: `rm -rf .next`
3. Restart: `npm run dev`
4. Hard refresh browser: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)

---

**Navigation**:
- [← Back to README](README.md)
- [View Content Editing Guide →](CONTENT_GUIDE.md)
- [View Deployment Guide →](DEPLOYMENT.md)
