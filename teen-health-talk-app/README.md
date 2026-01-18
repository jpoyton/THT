# Teen Health Talk - GP Crib Sheet

A lightweight clinical webapp for GP Champions and health practitioners to guide structured youth health conversations using the Well Centre Model Teen Health Check framework.

## Overview

**Teen Health Talk (THT)** is a youth-friendly, whole-person conversation framework developed by the Well Centre Charity over 15 years at the Well Centre Youth Health Hub. This webapp provides a guided crib sheet for conducting:

- **Full THT** (30-40 minute comprehensive consult)
- **Quick THT** (10-15 minute focused consult)

## Key Features

✅ **Mobile-first PWA** - Works offline, installable to home screen
✅ **No data collection** - Runs entirely in browser, no backend, no storage
✅ **GDPR/privacy-first** - No logins, no analytics, no patient data captured
✅ **SNOMED helper** - Optional coding suggestions (verify locally)
✅ **Clinical summary generator** - Copyable template for EMIS/SystmOne
✅ **Safeguarding prompts** - Red flags and crisis guidance built-in

## Privacy & Safety

🔒 **CRITICAL**: This tool:
- Does NOT store any patient data
- Does NOT require login or accounts
- Does NOT use cookies or localStorage for clinical content
- Runs entirely in your browser
- Is NOT for emergencies (call 999 or local crisis services)
- Is NOT a substitute for clinical judgement

## Quick Start

### Prerequisites

- Node.js 18+ and npm
- Modern web browser

### Installation

```bash
# Clone or download this repository
cd teen-health-talk-app

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
# Create static export
npm run build

# Output will be in the `out` directory
```

## Deployment to Netlify

### Option 1: Netlify CLI (Recommended)

```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Build the site
npm run build

# Deploy
netlify deploy --prod --dir=out
```

### Option 2: Netlify UI

1. Push your code to GitHub
2. Log in to [Netlify](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect your GitHub repository
5. Build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `out`
6. Click "Deploy site"

### Option 3: Drag & Drop

1. Run `npm run build` locally
2. Go to [Netlify Drop](https://app.netlify.com/drop)
3. Drag the `out` folder to the upload area

## Project Structure

```
teen-health-talk-app/
├── app/
│   ├── layout.tsx          # Root layout with PWA meta tags
│   ├── page.tsx            # Home page (mode selection)
│   ├── page.module.css     # Home page styles
│   ├── globals.css         # Global styles
│   └── consult/
│       ├── page.tsx        # Main consult interface
│       └── consult.module.css
├── data/
│   └── sections.ts         # THT content and SNOMED concepts (EDIT HERE)
├── public/
│   ├── manifest.json       # PWA manifest
│   ├── sw.js              # Service worker for offline
│   ├── icon-192.png       # PWA icon (add your own)
│   └── icon-512.png       # PWA icon (add your own)
├── package.json
├── tsconfig.json
├── next.config.js
└── README.md
```

## Customization

### Editing Content

All clinical content, prompts, and SNOMED concepts are in **`data/sections.ts`**. Edit this file to:
- Update prompts and probes
- Modify red flags and suggested actions
- Add/update SNOMED concept mappings
- Adjust section order or titles

### Branding

- Update app name and colors in `public/manifest.json`
- Replace placeholder icons (`icon-192.png`, `icon-512.png`) with your own
- Edit theme color in `app/layout.tsx` and CSS variables

### Adding Sections

Add new sections to the `sections` array in `data/sections.ts`:

```typescript
{
  id: 'new-section',
  title: 'New Section Title',
  shortTitle: 'Short',
  fullModeOnly: false, // or true if not in Quick mode
  quickModeOrder: 8,   // only if in Quick mode
  prompts: [
    { text: 'Your prompt here', isCore: true }
  ],
  // ... other fields
}
```

## Content Framework

The THT framework covers:

1. **Opening** - Confidentiality, consent, tone-setting
2. **Background** - What matters today, young person's agenda
3. **Home & Relationships** - Family, support networks
4. **Education/Work** - School/training/employment status
5. **Physical Health** - Medical history, medications, conditions
6. **Lifestyle** - Sleep, diet, exercise, BMI
7. **Substances** - Alcohol, drugs, smoking, vaping
8. **Sexual Health** - Relationships, contraception, STIs
9. **Mental Health** - Mood, anxiety, self-harm, risk assessment
10. **Safety & Safeguarding** - Abuse, exploitation, ACEs
11. **Strengths & Goals** - Protective factors, co-created plan
12. **Closing** - Follow-up, signposting, documentation

**Quick mode** includes: Opening, Background, Mental Health, Safety, Substances, Strengths, Closing.

## SNOMED Concept Support

The app provides **suggested** SNOMED codes. Important notes:

⚠️ **Always verify codes** in your local system (EMIS Web, SystmOne, etc.)
⚠️ Some youth concepts (ACEs, exploitation) have **no standard codes** - use local mappings
⚠️ SNOMED is **assistive**, not definitive - clinical judgement required

## Clinical Use

### Best Practices

- Use as a **guide**, not a rigid script
- Follow the **young person's agenda**
- Adapt flexibly to the conversation
- Document in your clinical system (EMIS/SystmOne), not this app
- Keep confidentiality boundaries clear
- Follow local safeguarding procedures for any concerns

### Risk Management

- If **immediate risk**: Follow local safeguarding protocol (MASH referral)
- If **mental health crisis**: Local crisis team or A&E
- If **emergency**: Call 999
- Provide crisis contacts: Childline 0800 1111, NSPCC, local services

## Technology Stack

- **Next.js 14** (Static export)
- **React 18** (Client-side only)
- **TypeScript**
- **CSS Modules** (Scoped styling)
- **PWA** (Service Worker + Manifest)

No backend, no database, no external dependencies for runtime.

## Browser Support

- Chrome/Edge 90+
- Safari 14+
- Firefox 88+
- Mobile: iOS Safari 14+, Chrome Android 90+

## Next Iterations

Future enhancements could include:

1. **Local site packs** - Downloadable regional resources and services
2. **Verified SNOMED mapping** - Validated code sets with clinical informatics input
3. **PDF export** - Offline summary export
4. **Governance review process** - Clinical audit and quality assurance
5. **Pilot feedback integration** - User testing with GP Champions
6. **Brief intervention calculators** - AUDIT-C, PHQ-2, GAD-2 integration
7. **Multi-language support** - Translation framework
8. **Accessibility audit** - WCAG 2.1 AA compliance review

## License

This tool is developed for the Well Centre Charity to support the scaling of the Well Centre Model for youth health.

**Clinical Disclaimer**: This tool is for guidance only. It does not replace clinical judgement, local protocols, or safeguarding procedures. Always follow your professional standards and local governance.

## Support

For questions about the Well Centre Model or Teen Health Talk framework:
- Visit: [wellcentrecharity.org](https://wellcentrecharity.org)
- Reference: [Introduction to Well Centre Model - Teen Health Check PDF](https://wellcentrecharity.org/wp-content/uploads/2025/07/Introduction-to-Well-Centre-Model-Teen-Health-Check.pdf)

## Acknowledgements

Developed based on 15 years of clinical practice at the Well Centre Youth Health Hub. Content reflects evidence-based youth health approaches, safeguarding best practices, and trauma-informed care principles.

---

**Version**: 1.0.0 MVP
**Last Updated**: January 2025
