# Well Centre Branding Guide

## ✅ What I've Already Updated

### Colors Changed to Well Centre Green
- **Primary Green:** `#55B04E` (buttons, titles, accents)
- **Dark Green:** `#058240` (available for headers/footers)
- **Gold Accent:** `#F3C300` (available for highlights)

All blue colors have been replaced with Well Centre green throughout the app.

---

## 📥 Adding the Well Centre Logo

### Step 1: Download the Logo

1. Go to https://wellcentrecharity.org
2. Right-click on the Well Centre logo
3. Save as `well-centre-logo.png`

**OR** ask Well Centre for their official logo files in:
- PNG format (transparent background preferred)
- Size: At least 400px wide for best quality

---

### Step 2: Add Logo to Your Project

1. Save the logo file as: `/Users/johnpoyton/Documents/website/teen-health-talk-app/public/well-centre-logo.png`

2. The app is **already configured** to display it on the home page!

---

### Step 3: Create App Icons (Replace Placeholders)

You need TWO icon files with the Well Centre logo:

#### Option A: Use Canva (Free & Easy)

1. Go to [canva.com](https://canva.com)
2. Create a **192x192px** design
3. Background: Well Centre Green (`#55B04E`)
4. Add Well Centre logo (white version if available)
5. Or add text "THT" in white
6. Download as PNG
7. Save as: `public/icon-192.png`

8. Repeat for **512x512px**
9. Save as: `public/icon-512.png`

#### Option B: Ask Well Centre Design Team

Request:
- App icon 192x192px PNG
- App icon 512x512px PNG
- With Well Centre branding

---

## 🎨 Current Branding Status

### ✅ Complete
- [x] Well Centre green colors throughout
- [x] Theme color updated (`#55B04E`)
- [x] Logo placeholder added to home page
- [x] Buttons styled in Well Centre green
- [x] Checkmarks and accents in green

### 🔲 Needs Your Action
- [ ] Add `public/well-centre-logo.png` (main logo)
- [ ] Replace `public/icon-192.png` (app icon small)
- [ ] Replace `public/icon-512.png` (app icon large)
- [ ] Add `public/favicon.ico` (browser tab icon)

---

## 📁 File Locations

```
public/
├── well-centre-logo.png    ← Main logo (YOU ADD THIS)
├── icon-192.png            ← App icon 192px (YOU REPLACE)
├── icon-512.png            ← App icon 512px (YOU REPLACE)
└── favicon.ico             ← Browser icon (YOU ADD - optional)
```

---

## 🖼️ Logo Specifications

### Main Logo (`well-centre-logo.png`)
- **Format:** PNG with transparent background
- **Width:** 400-800px (high quality)
- **Usage:** Displays at 200px on home page
- **Location:** Top of home page, centered

### App Icons (`icon-192.png`, `icon-512.png`)
- **Format:** PNG
- **Sizes:** 192x192px and 512x512px
- **Design:** Simple, recognizable at small sizes
- **Usage:** PWA install icon, home screen icon
- **Suggestion:** Well Centre logo on green background

### Favicon (`favicon.ico`) - Optional
- **Format:** ICO file
- **Size:** 32x32px
- **Usage:** Browser tab icon
- **Can generate from PNG:** Use [favicon.io](https://favicon.io)

---

## 🎨 Brand Colors Reference

For any future design work:

```css
/* Well Centre Brand Colors */
--wc-green: #55B04E;        /* Primary green */
--wc-dark-green: #058240;   /* Dark green */
--wc-gold: #F3C300;         /* Gold accent */
```

These are already set in `app/globals.css` and used throughout the app.

---

## 🔄 After Adding Logos

### To Test Locally:

```bash
cd /Users/johnpoyton/Documents/website/teen-health-talk-app
npm run dev
```

Open http://localhost:3000 - you should see the Well Centre logo!

### To Deploy:

```bash
git add public/
git commit -m "Add Well Centre logos and branding"
git push
```

Netlify will auto-deploy with the new logos!

---

## 📞 Need Logo Files?

Contact:
- **Well Centre Charity**
- Email: [Ask for marketing/communications contact]
- Request: "Logo files for digital use (PNG, transparent background)"

Or extract from website:
- https://wellcentrecharity.org/wp-content/uploads/[check for logo files]

---

## ✨ Result

Once logos are added, the app will have:
- ✅ Well Centre green color scheme
- ✅ Well Centre logo on home page
- ✅ Well Centre branded app icons (when installed)
- ✅ Professional Well Centre appearance

---

**Current Status:** Colors updated, logo placeholders ready. Just add the logo files and you're done!
