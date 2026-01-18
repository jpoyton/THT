# Quick Start Guide - Teen Health Talk App

Get the app running in 5 minutes.

## Prerequisites

- **Node.js 18+**: Download from [nodejs.org](https://nodejs.org)
- **Code editor**: VS Code recommended ([code.visualstudio.com](https://code.visualstudio.com))

Check your Node version:
```bash
node --version
# Should show v18.x.x or higher
```

## Step 1: Install Dependencies

Open Terminal (Mac) or Command Prompt (Windows), navigate to the project folder:

```bash
cd teen-health-talk-app
npm install
```

Wait for installation to complete (~1-2 minutes).

## Step 2: Run Development Server

```bash
npm run dev
```

You should see:
```
> teen-health-talk-app@1.0.0 dev
> next dev

 ✓ Ready in 2.5s
 ○ Local:   http://localhost:3000
```

## Step 3: Open in Browser

Open your browser and go to:
**http://localhost:3000**

You should see the Teen Health Talk home page!

## Step 4: Test the App

1. Click **"Start Full THT"** → Opens full consultation mode
2. Navigate through sections using the sidebar (desktop) or buttons (mobile)
3. Toggle **"SNOMED helper on/off"** in the header
4. Expand/collapse optional sections:
   - Optional Probes
   - Why We Ask This
   - Red Flags & Safeguarding Cues
5. Click **"Mark Complete & Next"** to progress
6. Complete all sections to reach the **Summary page**
7. Test **"Copy Summary to Clipboard"** button
8. Try **"Copy SNOMED List"** button (if SNOMED enabled)
9. Go back home and try **"Start Quick THT"** for shorter flow

## Step 5: Make Your First Edit

### Edit Clinical Content

1. Open `data/sections.ts` in your code editor
2. Find the `opening` section (around line 38)
3. Change a prompt:
   ```typescript
   prompts: [
     { text: 'Welcome! This is your edited prompt.', isCore: true },
   ```
4. Save the file
5. Refresh browser → See your change!

**Read the full editing guide**: [CONTENT_GUIDE.md](CONTENT_GUIDE.md)

## Step 6: Build for Production

When ready to deploy:

```bash
npm run build
```

Output will be in the `out/` folder, ready for Netlify.

## Common Commands

| Command | Purpose |
|---------|---------|
| `npm install` | Install dependencies (first time only) |
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Preview production build locally |

## Next Steps

### Before Launching
- [ ] Replace placeholder icons in `public/` folder
- [ ] Update app name in `public/manifest.json`
- [ ] Clinical content review
- [ ] Deploy to Netlify (see [DEPLOYMENT.md](DEPLOYMENT.md))

### Learn More
- [README.md](README.md) - Full overview
- [CONTENT_GUIDE.md](CONTENT_GUIDE.md) - Edit clinical content
- [DEPLOYMENT.md](DEPLOYMENT.md) - Deploy to Netlify
- [NEXT_ITERATIONS.md](NEXT_ITERATIONS.md) - Future features

## Troubleshooting

### Port 3000 already in use
```bash
# Kill existing process
lsof -ti:3000 | xargs kill -9

# Or use different port
npm run dev -- -p 3001
```

### Dependencies won't install
```bash
# Clear npm cache
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Changes not appearing
```bash
# Stop server (Ctrl+C)
# Clear Next.js cache
rm -rf .next
# Restart
npm run dev
```

### TypeScript errors in sections.ts
- Check all section objects have required fields: `id`, `title`, `prompts`, etc.
- Check for missing commas between array items
- Check `isCore` is `true` or `false` (boolean), not a string

### Browser shows blank page
- Check browser console for errors (F12 → Console tab)
- Check terminal for build errors
- Try: `rm -rf .next && npm run dev`

## Getting Help

- **Clinical content questions**: See [CONTENT_GUIDE.md](CONTENT_GUIDE.md)
- **Deployment issues**: See [DEPLOYMENT.md](DEPLOYMENT.md)
- **Technical errors**: Check browser console and terminal output

## Testing Checklist

Before deploying, test these:

**Functionality**:
- [ ] Home page loads
- [ ] Full mode starts and progresses through all sections
- [ ] Quick mode shows only 7 core sections
- [ ] SNOMED toggle shows/hides concepts
- [ ] Expand/collapse sections work
- [ ] Summary page generates correctly
- [ ] Copy to clipboard buttons work
- [ ] Back navigation works

**Responsive Design**:
- [ ] Test on mobile (iPhone size)
- [ ] Test on tablet (iPad size)
- [ ] Test on desktop (large screen)
- [ ] Sidebar hides on mobile
- [ ] Touch targets are large enough
- [ ] Text is readable on small screens

**Browsers**:
- [ ] Chrome/Edge
- [ ] Safari (Mac/iOS)
- [ ] Firefox
- [ ] Mobile browsers (iOS Safari, Chrome Android)

**PWA**:
- [ ] Service worker registers (check DevTools → Application → Service Workers)
- [ ] Manifest is valid (check DevTools → Application → Manifest)
- [ ] "Add to Home Screen" appears on mobile
- [ ] App launches fullscreen from home screen

---

**Need more detail?** See [README.md](README.md) for comprehensive documentation.
