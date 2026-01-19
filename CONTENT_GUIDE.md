# Content Editing Guide

This guide explains how to edit the clinical content in the Teen Health Talk app.

## Quick Overview

All clinical content lives in **one file**: `data/sections.ts`

This file contains:
- All section prompts and probes
- Red flags and safeguarding cues
- Suggested actions
- SNOMED concept mappings
- Section ordering for Full and Quick modes

## File Structure

```typescript
// data/sections.ts

export const sections: Section[] = [
  {
    id: 'opening',                    // Unique identifier
    title: 'Full Section Title',      // Displayed in main view
    shortTitle: 'Short',              // Displayed in sidebar navigation
    fullModeOnly: false,              // true = only in Full mode, false/undefined = in both
    quickModeOrder: 1,                // Position in Quick mode (1-7), omit if fullModeOnly

    prompts: [                        // Main conversation prompts
      { text: 'Your prompt here', isCore: true },  // isCore = always shown
      { text: 'Optional prompt', isCore: false },  // isCore: false = less emphasis
    ],

    optionalProbes: [                 // Expand/collapse section
      'Follow-up question 1?',
      'Follow-up question 2?',
    ],

    whyWeAsk: 'Explanation of why this section matters...',

    redFlags: [                       // Safeguarding alerts
      'Warning sign 1',
      'Warning sign 2',
    ],

    suggestedActions: [              // Next steps / interventions
      'Action 1',
      'Action 2',
    ],

    snomedConcepts: [                // Coding help
      { label: 'Concept name', conceptId: '123456789' },
      { label: 'Concept without ID' },  // conceptId optional
    ],
  },
  // ... more sections
]
```

## Common Editing Tasks

### 1. Update a Prompt

Find the section, locate the prompt in the `prompts` array:

```typescript
prompts: [
  { text: 'How have things been going for you lately?', isCore: true },
  { text: 'NEW PROMPT: What are you most worried about?', isCore: true },
],
```

### 2. Add a Red Flag

Add to the `redFlags` array:

```typescript
redFlags: [
  'Existing red flag',
  'NEW RED FLAG: Signs of exploitation',
],
```

### 3. Add a New Section

Copy an existing section and modify:

```typescript
{
  id: 'my-new-section',               // Must be unique
  title: 'My New Section Title',
  shortTitle: 'New Section',
  fullModeOnly: false,                // Include in both modes
  quickModeOrder: 8,                  // If in Quick mode, set order
  prompts: [
    { text: 'First prompt?', isCore: true },
    { text: 'Second prompt?', isCore: true },
  ],
  optionalProbes: [
    'Optional probe 1?',
  ],
  whyWeAsk: 'Why this section is important...',
  redFlags: [
    'Red flag 1',
  ],
  suggestedActions: [
    'Suggested action 1',
  ],
  snomedConcepts: [
    { label: 'SNOMED concept', conceptId: '000000000' },
  ],
},
```

**Important**: Add it to the `sections` array in the position you want it to appear.

### 4. Change Section Order

Move sections in the array. The order in the file = the order in Full mode.

Quick mode order is controlled by `quickModeOrder` numbers.

### 5. Remove a Section from Quick Mode

Set `fullModeOnly: true` and remove the `quickModeOrder` field:

```typescript
{
  id: 'detailed-section',
  title: 'Detailed Health History',
  fullModeOnly: true,           // Not in Quick mode
  // No quickModeOrder field
  // ... rest of section
}
```

### 6. Add SNOMED Concepts

Add to the `snomedConcepts` array:

```typescript
snomedConcepts: [
  { label: 'Anxiety', conceptId: '48694002' },
  { label: 'Self-harm', conceptId: '248062006' },
  { label: 'New concept without verified ID' },  // ID optional
],
```

**Note**: Always verify SNOMED IDs in your local clinical system before use.

### 7. Update "Why We Ask"

Edit the `whyWeAsk` string:

```typescript
whyWeAsk: 'This section is important because it identifies protective factors and builds a strengths-based approach to care planning.',
```

## Testing Your Changes

After editing `data/sections.ts`:

1. **Save the file**

2. **Restart dev server** (if running):
   ```bash
   # Stop with Ctrl+C, then:
   npm run dev
   ```

3. **Test in browser**:
   - Check Full mode includes all sections
   - Check Quick mode shows only sections with `quickModeOrder`
   - Verify prompts display correctly
   - Test expand/collapse sections
   - Check SNOMED toggle shows your concepts

4. **Build test**:
   ```bash
   npm run build
   ```
   Should complete without errors.

## Content Best Practices

### Writing Prompts

✅ **Good prompts**:
- "How have things been going for you lately?"
- "What would be most helpful to talk about today?"
- "Do you feel safe at home, at school, and in your community?"

❌ **Avoid**:
- Medical jargon without context
- Yes/no questions only (use open-ended)
- Judgmental language

### Writing Red Flags

✅ **Specific and actionable**:
- "Disclosure of physical, emotional, or sexual abuse"
- "Suicidal ideation with specific plan"
- "Persistent school absence (>10 days in term)"

❌ **Vague**:
- "Concerns about wellbeing"
- "Something seems off"

### Suggested Actions

✅ **Clear next steps**:
- "Follow local safeguarding procedures if disclosure made"
- "Consider CAMHS referral if moderate risk identified"
- "Signpost to Childline (0800 1111) for 24/7 support"

❌ **Too general**:
- "Do something about this"
- "Follow up later"

## SNOMED Coding Notes

### Finding SNOMED Concepts

1. **Use SNOMED Browser**: [https://browser.ihtsdotools.org/](https://browser.ihtsdotools.org/)
2. **Check your local system** (EMIS, SystmOne) for preferred terms
3. **Consult clinical informatics** for complex concepts

### Common Challenges

- **ACEs / Trauma**: No standard codes, use local mappings
- **Exploitation / Modern Slavery**: Limited codes, verify locally
- **Youth-specific terms**: May differ from adult codes

### Format

```typescript
{ label: 'Human-readable term', conceptId: '123456789' }
```

If you don't have a verified ID:
```typescript
{ label: 'Term without ID - verify locally' }
```

## Version Control

### Track Changes

When making significant content updates:

```bash
git add data/sections.ts
git commit -m "Update mental health prompts and add trauma screening"
```

### Content Review Process

1. **Clinical review**: GP Champion or clinical lead reviews changes
2. **Pilot test**: Test with 2-3 practitioners
3. **Feedback integration**: Update based on real-world use
4. **Version tag**: Tag major content updates
   ```bash
   git tag -a v1.1.0 -m "Updated safeguarding prompts"
   git push origin v1.1.0
   ```

## Advanced: Adding New Fields

If you need to add new metadata to sections:

1. **Update TypeScript interface** in `data/sections.ts`:
   ```typescript
   export interface Section {
     // ... existing fields
     myNewField?: string;  // Add your field
   }
   ```

2. **Add data to sections**:
   ```typescript
   {
     id: 'opening',
     // ... existing fields
     myNewField: 'My new data',
   }
   ```

3. **Use in component** (`app/consult/page.tsx`):
   ```typescript
   {currentSection.myNewField && (
     <div>{currentSection.myNewField}</div>
   )}
   ```

## Troubleshooting

### TypeScript Errors

**Error: "Property 'xyz' does not exist"**
- Check spelling in `data/sections.ts`
- Ensure all required fields are present (id, title, prompts, etc.)

**Error: "Type 'string' is not assignable to type 'boolean'"**
- Check `isCore` is `true` or `false`, not a string
- Check `fullModeOnly` is boolean

### Build Errors

**Error: "Cannot find module '@/data/sections'"**
- Check file is saved as `data/sections.ts`
- Check import path in `app/consult/page.tsx`

### Content Not Updating

1. Stop dev server (Ctrl+C)
2. Clear Next.js cache: `rm -rf .next`
3. Restart: `npm run dev`
4. Hard refresh browser: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)

## Examples

### Example 1: Adding a Brief Intervention Tool

```typescript
{
  id: 'alcohol-screening',
  title: 'Alcohol Screening (AUDIT-C)',
  shortTitle: 'Alcohol',
  fullModeOnly: false,
  quickModeOrder: 5,
  prompts: [
    { text: 'How often do you have a drink containing alcohol?', isCore: true },
    { text: 'How many drinks containing alcohol do you have on a typical day?', isCore: true },
    { text: 'How often do you have 6 or more drinks on one occasion?', isCore: true },
  ],
  optionalProbes: [
    'Do you ever feel you should cut down?',
    'Have others expressed concern about your drinking?',
  ],
  whyWeAsk: 'AUDIT-C is a validated brief screening tool for problematic alcohol use in young people.',
  redFlags: [
    'AUDIT-C score ≥4 (females) or ≥5 (males) suggests harmful use',
    'Daily alcohol use',
    'Drinking alone or before school/work',
  ],
  suggestedActions: [
    'Calculate AUDIT-C score (0-12 points)',
    'If score elevated: brief intervention using FRAMES approach',
    'Signpost to local youth alcohol services',
  ],
  snomedConcepts: [
    { label: 'AUDIT-C alcohol screening', conceptId: '718534001' },
    { label: 'Harmful alcohol use', conceptId: '66590003' },
  ],
},
```

### Example 2: Adding Local Safeguarding Contacts

Consider adding a new field for local resources:

```typescript
export interface Section {
  // ... existing fields
  localResources?: string[];
}

// Then in a section:
{
  id: 'safety',
  // ... other fields
  localResources: [
    'Local MASH: 01234 567890',
    'Out of hours: 01234 999000',
    'Local youth service: www.example.org',
  ],
}
```

Then display in `app/consult/page.tsx`:

```typescript
{currentSection.localResources && (
  <div className={styles.localResources}>
    <h4>Local Resources</h4>
    <ul>
      {currentSection.localResources.map((resource, i) => (
        <li key={i}>{resource}</li>
      ))}
    </ul>
  </div>
)}
```

---

**Need Help?**
- Review the existing sections in `data/sections.ts` for examples
- Check TypeScript errors in your code editor
- Test changes in browser before deploying
