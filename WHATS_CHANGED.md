# What's Changed - Well Centre Branding Update

## 🎨 Branding Updates Applied

### Colors Updated
✅ **All blue colors replaced with Well Centre green**

- Primary color: `#2563eb` (blue) → `#55B04E` (Well Centre green)
- Applied to:
  - Page titles
  - Buttons (Start Full THT, Start Quick THT, navigation buttons)
  - Checkmarks and accent icons
  - Progress bars
  - Focus outlines
  - Active states
  - Section navigation highlights
  - SNOMED helper elements

### Files Modified

1. **`app/globals.css`**
   - Added CSS variables for Well Centre colors
   - `--wc-green: #55B04E`
   - `--wc-dark-green: #058240`
   - `--wc-gold: #F3C300`

2. **`app/page.module.css`**
   - Title color updated to Well Centre green
   - Card hover effects use green
   - Button backgrounds use green
   - Checkmark icons use green

3. **`app/page.tsx`**
   - Added logo container above title
   - Ready to display `well-centre-logo.png`

4. **`app/consult/consult.module.css`**
   - All navigation buttons use Well Centre green
   - Active section highlights use green
   - Progress bar uses green
   - "Next" buttons use green
   - Prompts borders use green

5. **`public/manifest.json`**
   - Theme color updated to `#55B04E`

6. **`app/layout.tsx`**
   - Meta theme color updated to `#55B04E`

---

## 📋 What You Need to Do Next

### 1. Add Logo Files

Download and add these files to the `public/` folder:

- **`public/well-centre-logo.png`** - Main Well Centre logo
  - PNG format, transparent background
  - 400-800px wide recommended
  - Will display at 200px on home page

- **`public/icon-192.png`** - Small app icon (REPLACE placeholder)
  - 192x192px PNG
  - Well Centre logo on green background

- **`public/icon-512.png`** - Large app icon (REPLACE placeholder)
  - 512x512px PNG
  - Well Centre logo on green background

- **`public/favicon.ico`** - Browser tab icon (optional)
  - 32x32px ICO file
  - Can generate from PNG at favicon.io

### 2. Test Locally

```bash
cd /Users/johnpoyton/Documents/website/teen-health-talk-app
npm run dev
```

Open http://localhost:3000 and verify:
- ✅ Green colors throughout
- ✅ Logo displays (once you add it)
- ✅ Buttons are Well Centre green
- ✅ Navigation uses green accents

### 3. Deploy

```bash
git add .
git commit -m "Update to Well Centre branding - green colors and logo"
git push
```

Netlify will auto-deploy in 2-3 minutes!

---

## 🎯 Visual Changes Summary

### Before
- Blue theme (`#2563eb`)
- No logo
- Generic color scheme

### After
- Well Centre green theme (`#55B04E`)
- Well Centre logo on home page (when you add it)
- Professional Well Centre branding
- PWA theme matches brand (green)

---

## 🔗 Resources

**Logo Source:**
- https://wellcentrecharity.org (right-click logo to save)
- Or request from Well Centre marketing team

**Icon Creation:**
- [Canva](https://canva.com) - Free design tool
- [Favicon.io](https://favicon.io) - Generate favicon from PNG

**Color Reference:**
- Primary Green: `#55B04E`
- Dark Green: `#058240`
- Gold Accent: `#F3C300`

---

## ✅ Checklist

Before deployment:
- [ ] Add `public/well-centre-logo.png`
- [ ] Replace `public/icon-192.png`
- [ ] Replace `public/icon-512.png`
- [ ] (Optional) Add `public/favicon.ico`
- [ ] Test locally with `npm run dev`
- [ ] Commit and push to GitHub
- [ ] Verify on live Netlify site

---

## 📸 What It Looks Like Now

### Home Page
- Well Centre logo at top (when you add it)
- "Teen Health Talk" title in green
- Green "Start Full THT" and "Start Quick THT" buttons
- Green checkmarks in feature lists

### Consult Page
- Green progress bar
- Green navigation (sidebar and buttons)
- Green section highlights
- Green "Next" buttons
- Green prompt borders

### PWA (When Installed)
- Theme color: Well Centre green
- App icon: Well Centre branded (when you add icons)

---

**Status:** Branding colors complete ✅ | Logo files needed 📁

See **BRANDING_GUIDE.md** for detailed instructions on adding logos!
