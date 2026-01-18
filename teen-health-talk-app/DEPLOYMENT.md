# Deployment Guide - Teen Health Talk App

## Prerequisites

- Node.js 18+ installed
- Netlify account (free tier is sufficient)
- Git installed (for GitHub integration)

## Local Development

### 1. Install Dependencies

```bash
cd teen-health-talk-app
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

### 3. Test Production Build Locally

```bash
npm run build
npm start
```

Or serve the static export:

```bash
npm run build
npx serve out
```

## Netlify Deployment Options

### Option A: Netlify CLI (Fastest for testing)

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**
   ```bash
   netlify login
   ```

3. **Build the site**
   ```bash
   npm run build
   ```

4. **Deploy to Netlify**

   For a draft preview:
   ```bash
   netlify deploy --dir=out
   ```

   For production:
   ```bash
   netlify deploy --prod --dir=out
   ```

5. **Follow the prompts**
   - Create a new site or link to existing
   - Confirm the deploy directory (`out`)
   - Get your live URL!

### Option B: GitHub + Netlify Auto Deploy (Best for ongoing updates)

1. **Create GitHub Repository**
   ```bash
   cd teen-health-talk-app
   git init
   git add .
   git commit -m "Initial commit - Teen Health Talk MVP"
   gh repo create teen-health-talk --public --source=. --remote=origin --push
   ```

2. **Connect to Netlify**
   - Log in to [app.netlify.com](https://app.netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Choose "Deploy with GitHub"
   - Authorize Netlify to access your GitHub
   - Select your `teen-health-talk` repository

3. **Configure Build Settings**
   - **Branch to deploy**: `main`
   - **Build command**: `npm run build`
   - **Publish directory**: `out`
   - Click "Deploy site"

4. **Wait for Build**
   - Netlify will build and deploy automatically
   - You'll get a random subdomain like `random-name-123456.netlify.app`

5. **Custom Domain (Optional)**
   - In Netlify: Site settings → Domain management
   - Add custom domain (e.g., `teenhealth.wellcentre.org`)
   - Follow DNS configuration instructions
   - Free SSL certificate included

### Option C: Netlify Drop (Simplest, one-time deploy)

1. **Build Locally**
   ```bash
   npm run build
   ```

2. **Upload to Netlify**
   - Go to [app.netlify.com/drop](https://app.netlify.com/drop)
   - Drag the entire `out` folder to the drop zone
   - Wait for upload and deployment
   - Get your live URL!

**Note**: This method doesn't support automatic updates. Re-drag the folder for each update.

## Post-Deployment Checklist

### 1. Test Core Functionality

- [ ] Home page loads correctly
- [ ] "Start Full THT" opens consult in full mode
- [ ] "Start Quick THT" opens consult in quick mode
- [ ] Section navigation works (desktop sidebar + mobile)
- [ ] Expand/collapse sections work (probes, why we ask, red flags)
- [ ] SNOMED toggle works
- [ ] "Mark Complete & Next" progresses through sections
- [ ] Summary page generates correctly
- [ ] "Copy Summary" and "Copy SNOMED" buttons work
- [ ] Print functionality works
- [ ] Mobile responsive design displays correctly
- [ ] PWA installability (Add to Home Screen) works

### 2. Test PWA Features

**On Mobile (iOS/Android)**:
- [ ] Visit site in Safari/Chrome
- [ ] Tap "Share" → "Add to Home Screen"
- [ ] Launch from home screen (should open fullscreen)
- [ ] Test offline: enable airplane mode, app should still load

**On Desktop**:
- [ ] Chrome: Look for install icon in address bar
- [ ] Install as app
- [ ] Launch standalone app window

### 3. Verify Privacy Compliance

- [ ] No cookies set (check DevTools → Application → Cookies)
- [ ] No localStorage used for clinical data (check DevTools → Application → Local Storage)
- [ ] No network requests to analytics/tracking (check DevTools → Network)
- [ ] Service worker only caches static assets

### 4. Content Review

- [ ] Read through all 12 sections for clinical accuracy
- [ ] Verify red flags and safeguarding prompts
- [ ] Check SNOMED concept IDs if available
- [ ] Review crisis guidance messaging
- [ ] Confirm disclaimer text is clear

## Environment-Specific Configuration

### Custom Domain Setup

If deploying to Well Centre domain:

1. **In Netlify Dashboard**:
   - Site settings → Domain management → Add custom domain
   - Enter: `teenhealth.wellcentre.org` (or chosen subdomain)

2. **In DNS Provider** (where wellcentre.org is hosted):
   - Add CNAME record:
     - **Name**: `teenhealth`
     - **Value**: `[your-site].netlify.app`
     - **TTL**: 3600

3. **Wait for SSL**:
   - Netlify provisions free SSL automatically (1-24 hours)
   - Forces HTTPS once provisioned

### Custom Branding

Before deployment, customize:

1. **App Name** (`public/manifest.json`):
   ```json
   {
     "name": "Teen Health Talk - Well Centre",
     "short_name": "THT"
   }
   ```

2. **Icons** (`public/icon-192.png`, `public/icon-512.png`):
   - Replace placeholder files with proper PNG icons
   - Use Well Centre branding colors

3. **Theme Color** (`app/layout.tsx` + `manifest.json`):
   ```typescript
   themeColor: '#2563eb', // Change to Well Centre brand color
   ```

## Build Optimization

### Production Checklist

Before deploying to production:

- [ ] Replace placeholder icons with real icons
- [ ] Update app name/branding in `manifest.json`
- [ ] Review and finalize all clinical content in `data/sections.ts`
- [ ] Clinical review completed and signed off
- [ ] Governance review completed
- [ ] Add favicon.ico to `public/` folder

### Performance Tips

The app is already optimized, but consider:

1. **Image Compression**: If adding custom icons, compress them
2. **Service Worker**: Already caching static assets for offline use
3. **Lighthouse Score**: Run audit in Chrome DevTools (should score 90+)

## Rollback / Version Control

### Rolling Back a Deployment

**Netlify UI Method**:
1. Go to Netlify dashboard → Deploys
2. Find the previous working deploy
3. Click "Publish deploy"

**CLI Method**:
```bash
# List recent deploys
netlify deploy:list

# Rollback to specific deploy ID
netlify deploy:rollback --deploy-id=<deploy-id>
```

### Versioning Strategy

Tag releases in Git:

```bash
git tag -a v1.0.0 -m "MVP Release"
git push origin v1.0.0
```

## Monitoring & Maintenance

### Analytics (Optional, Privacy-Safe)

If you need usage metrics without tracking individuals:

1. Use Netlify Analytics (no cookies, GDPR-compliant):
   - Netlify Dashboard → Analytics → Enable
   - $9/month for server-side analytics
   - Shows pageviews, no personal data

2. Or keep analytics OFF for maximum privacy (recommended for MVP)

### Error Monitoring

Check Netlify deploy logs:
```bash
netlify logs
```

Or in UI: Deploys → Functions logs

### Updates

To deploy updates:

**If using GitHub auto-deploy**:
```bash
git add .
git commit -m "Update content"
git push
# Netlify auto-deploys
```

**If using CLI**:
```bash
npm run build
netlify deploy --prod --dir=out
```

## Troubleshooting

### Build Fails

**Error: "Command failed: npm run build"**
- Check Node version: `node -v` (need 18+)
- Clear cache: `rm -rf .next node_modules && npm install`

**Error: "Module not found"**
- Run `npm install` again
- Check all imports in code files

### PWA Not Installing

- Must be served over HTTPS (Netlify provides this)
- Check `manifest.json` is valid JSON
- Ensure `sw.js` is in `public/` folder
- Check browser console for service worker errors

### Styling Issues

- Clear browser cache
- Check CSS modules are imported correctly
- Verify `globals.css` is imported in `app/layout.tsx`

### SNOMED Toggle Not Working

- Check browser console for JavaScript errors
- Verify `snomedEnabled` state is passed correctly
- Test in different browsers

## Security Notes

- No authentication needed (no login/accounts)
- No API keys or secrets required
- No environment variables needed
- All code is client-side only
- No backend to secure

## Support

For deployment issues:
- Netlify Docs: [docs.netlify.com](https://docs.netlify.com)
- Netlify Community: [answers.netlify.com](https://answers.netlify.com)

For app functionality:
- Review README.md
- Check `data/sections.ts` for content
- Test in browser DevTools console

---

**Deployment Time Estimate**: 5-15 minutes for first deploy
**Update Deployment**: <2 minutes with auto-deploy setup
