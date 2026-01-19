# Deployment Checklist - Teen Health Talk App

Use this checklist to ensure everything is ready before launching.

---

## ✅ Pre-Launch Checklist

### 1. Development Setup
- [ ] Node.js 18+ installed
- [ ] Project dependencies installed (`npm install`)
- [ ] App runs locally (`npm run dev`)
- [ ] Build completes without errors (`npm run build`)
- [ ] All core features tested locally

### 2. Content Review
- [ ] All 12 sections reviewed for clinical accuracy
- [ ] Red flags and safeguarding prompts verified
- [ ] Crisis guidance reviewed
- [ ] SNOMED codes verified (or clearly marked as suggestions)
- [ ] "Why we ask" explanations reviewed
- [ ] Suggested actions reviewed
- [ ] Disclaimers reviewed and approved

### 3. Branding & Design
- [ ] Replace `public/icon-192.png` with proper icon
- [ ] Replace `public/icon-512.png` with proper icon
- [ ] Add `public/favicon.ico`
- [ ] Update app name in `public/manifest.json`
- [ ] Update theme color in `public/manifest.json` (if needed)
- [ ] Update app title in `app/layout.tsx` (if needed)

### 4. Clinical Governance
- [ ] Clinical content sign-off from GP Champion or clinical lead
- [ ] Safeguarding review completed
- [ ] Privacy policy reviewed (or confirm none needed for MVP)
- [ ] Legal disclaimers approved
- [ ] Governance documentation filed

### 5. Technical Testing

#### Functionality
- [ ] Home page loads correctly
- [ ] Full mode: All 12 sections appear
- [ ] Quick mode: Only 7 sections appear
- [ ] Section navigation works (sidebar + buttons)
- [ ] SNOMED toggle shows/hides concepts
- [ ] Expand/collapse sections work:
  - [ ] Optional Probes
  - [ ] Why We Ask
  - [ ] Red Flags
- [ ] "Mark Complete & Next" progresses correctly
- [ ] Summary page generates template
- [ ] "Copy Summary" button works
- [ ] "Copy SNOMED" button works
- [ ] "Print" button works
- [ ] "Back to Home" navigation works

#### Responsive Design
- [ ] Tested on iPhone (Safari)
- [ ] Tested on Android phone (Chrome)
- [ ] Tested on iPad / tablet
- [ ] Tested on desktop (large screen)
- [ ] Sidebar hides on mobile (<1024px)
- [ ] Touch targets are 44x44px minimum
- [ ] Text is readable on small screens
- [ ] No horizontal scrolling on mobile

#### Browser Compatibility
- [ ] Chrome/Edge (latest)
- [ ] Safari desktop (latest)
- [ ] Firefox (latest)
- [ ] Safari iOS (iOS 14+)
- [ ] Chrome Android (latest)

#### PWA Features
- [ ] Service worker registers without errors
- [ ] Manifest.json is valid
- [ ] "Add to Home Screen" prompt appears on mobile
- [ ] App installs successfully
- [ ] Installed app launches fullscreen
- [ ] App works offline after first load
- [ ] Icons display correctly when installed

#### Privacy & Security
- [ ] No cookies are set (check DevTools)
- [ ] No localStorage used for clinical data
- [ ] No session data persists after closing browser
- [ ] No network requests to analytics/tracking
- [ ] HTTPS enforced (automatic on Netlify)
- [ ] Security headers configured (check netlify.toml)

### 6. Performance
- [ ] Lighthouse audit run (aim for 90+ scores)
- [ ] Load time under 2 seconds on 3G
- [ ] No console errors in browser
- [ ] No console warnings (or documented)
- [ ] Build output size under 500 KB

### 7. Accessibility
- [ ] Keyboard navigation works (Tab through interface)
- [ ] Focus indicators visible
- [ ] Color contrast meets WCAG 2.1 AA (4.5:1 minimum)
- [ ] Heading hierarchy logical (h1 → h2 → h3)
- [ ] Buttons have descriptive labels
- [ ] Links have descriptive text
- [ ] Images have alt text (if any added)
- [ ] Screen reader tested (optional but recommended)

---

## 🚀 Deployment Checklist

### 1. Pre-Deployment
- [ ] All "Pre-Launch Checklist" items completed above
- [ ] Final content review completed
- [ ] Git repository up to date
- [ ] Production build tested locally (`npm run build && npx serve out`)

### 2. Netlify Setup
- [ ] Netlify account created
- [ ] Site name chosen (e.g., teen-health-talk)
- [ ] Custom domain configured (if using)
- [ ] DNS records updated (if custom domain)

### 3. Deploy
- [ ] Build command: `npm run build`
- [ ] Publish directory: `out`
- [ ] Deployment successful
- [ ] Site URL working
- [ ] SSL certificate active (HTTPS)

### 4. Post-Deployment Testing
- [ ] Live site loads correctly
- [ ] All links work
- [ ] All features work on live site (same as local)
- [ ] PWA install works on live site
- [ ] Mobile and desktop tested on live site
- [ ] No console errors on live site

### 5. Documentation
- [ ] Deployment URL documented
- [ ] Custom domain documented (if used)
- [ ] Deployment date recorded
- [ ] Any post-deployment issues documented

---

## 👥 Pilot Testing Checklist

### 1. Pilot Preparation
- [ ] 5-10 GP Champions recruited for pilot
- [ ] Training materials prepared
- [ ] Feedback form created
- [ ] Support contact provided
- [ ] Pilot timeline agreed (e.g., 2 weeks)

### 2. During Pilot
- [ ] Pilot participants have access to live site
- [ ] Support available for technical issues
- [ ] Feedback collected (qualitative + quantitative)
- [ ] Usage monitored (if analytics enabled)

### 3. Post-Pilot
- [ ] Feedback reviewed
- [ ] Issues prioritized
- [ ] Content updates made based on feedback
- [ ] Technical fixes implemented
- [ ] Pilot report written
- [ ] Decision made: proceed to full launch or iterate

---

## 📊 Launch Readiness Assessment

Score each area 1-5 (1=not ready, 5=fully ready):

| Area | Score | Notes |
|------|-------|-------|
| Clinical content accuracy | ___/5 | |
| Technical functionality | ___/5 | |
| Design and branding | ___/5 | |
| Privacy compliance | ___/5 | |
| Clinical governance sign-off | ___/5 | |
| Documentation completeness | ___/5 | |
| Pilot testing feedback | ___/5 | |

**Total Score**: ___/35

- **30-35**: Ready for full launch
- **25-29**: Ready for pilot launch
- **20-24**: More work needed
- **<20**: Not ready - address gaps

---

## 🔄 Post-Launch Checklist

### Week 1
- [ ] Monitor for technical issues
- [ ] Collect early user feedback
- [ ] Fix any critical bugs
- [ ] Document any workarounds

### Month 1
- [ ] Review usage patterns (if analytics enabled)
- [ ] Collect structured feedback from users
- [ ] Identify most common issues
- [ ] Plan first update based on feedback

### Quarter 1
- [ ] Quarterly content review
- [ ] Update SNOMED codes if needed
- [ ] Review and update documentation
- [ ] Plan next features (see NEXT_ITERATIONS.md)

---

## 🐛 Known Issues Tracker

Document any known issues that are not blockers but should be addressed:

| Issue | Severity | Workaround | Target Fix |
|-------|----------|------------|------------|
| Example: Placeholder icons | Low | Users understand | Before public launch |
| | | | |
| | | | |

---

## 📝 Sign-Off Record

| Role | Name | Date | Signature |
|------|------|------|-----------|
| Clinical Lead | | | |
| Safeguarding Lead | | | |
| IG/Privacy Lead | | | |
| Technical Lead | | | |
| Project Manager | | | |

---

## 🎯 Launch Decision

Based on the checklists above:

- [ ] **Proceed to Pilot Launch** - Ready for limited testing with GP Champions
- [ ] **Proceed to Full Launch** - Ready for wider rollout
- [ ] **Not Ready** - Address gaps before launch

**Decision Date**: _______________

**Decision Maker**: _______________

**Notes**:
_______________________________________________________________________________
_______________________________________________________________________________
_______________________________________________________________________________

---

## 📞 Support Contact Info

**For Technical Issues**:
- Name: _______________
- Email: _______________
- Phone: _______________

**For Clinical Content Questions**:
- Name: _______________
- Email: _______________
- Phone: _______________

**For Urgent Issues**:
- Contact: _______________
- Escalation: _______________

---

**Version**: 1.0.0
**Last Updated**: January 2025
**Next Review**: [Add date for next review]
