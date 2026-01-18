'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { sections, quickModeSectionIds } from '@/data/sections'
import styles from './consult.module.css'

function ConsultContent() {
  const searchParams = useSearchParams()
  const mode = searchParams.get('mode') || 'full'

  const activeSections = mode === 'quick'
    ? sections.filter(s => quickModeSectionIds.includes(s.id))
    : sections

  const [currentSectionIndex, setCurrentSectionIndex] = useState(0)
  const [snomedEnabled, setSnomedEnabled] = useState(false)
  const [completedSections, setCompletedSections] = useState<Set<string>>(new Set())
  const [showSummary, setShowSummary] = useState(false)
  const [expandedProbes, setExpandedProbes] = useState(false)
  const [expandedWhy, setExpandedWhy] = useState(false)
  const [expandedRedFlags, setExpandedRedFlags] = useState(false)
  const [copyFeedback, setCopyFeedback] = useState<string | null>(null)

  const currentSection = activeSections[currentSectionIndex]

  const goToSection = (index: number) => {
    setCurrentSectionIndex(index)
    setExpandedProbes(false)
    setExpandedWhy(false)
    setExpandedRedFlags(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const markComplete = () => {
    setCompletedSections(prev => new Set(prev).add(currentSection.id))
    if (currentSectionIndex < activeSections.length - 1) {
      goToSection(currentSectionIndex + 1)
    } else {
      setShowSummary(true)
    }
  }

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopyFeedback(`${label} copied!`)
      setTimeout(() => setCopyFeedback(null), 2000)
    })
  }

  const generateSummary = () => {
    return `TEEN HEALTH TALK - CLINICAL SUMMARY
Mode: ${mode === 'quick' ? 'Quick Health Check (10-15 min)' : 'Full Health Check (30-40 min)'}
Date: ${new Date().toLocaleDateString()}

REASON FOR VISIT / WHAT MATTERS TODAY:
[Document young person's presenting concerns and agenda]

BACKGROUND & SOCIAL CONTEXT:
Home/Relationships: [Key points]
Education/Work: [Key points]

PHYSICAL HEALTH:
General health: [Key points]
Long-term conditions/medications: [Key points]
Lifestyle (sleep/diet/exercise): [Key points]
BMI: [If measured]

MENTAL HEALTH & WELLBEING:
Mood: [Key points]
Anxiety: [Key points]
Self-harm/suicidal ideation: [Key points - include risk assessment]

SUBSTANCE USE:
Smoking/vaping: [Key points]
Alcohol: [Key points]
Drugs: [Key points]

SEXUAL HEALTH:
[Key points - consent, contraception, STI screening if applicable]

SAFETY & SAFEGUARDING:
Safety concerns: [Key points]
Risk factors identified: [Key points]
Safeguarding action taken: [If applicable]

STRENGTHS & PROTECTIVE FACTORS:
[Document resilience factors, support networks, interests]

AGREED PLAN:
1. [Action item]
2. [Action item]
3. [Action item]

FOLLOW-UP:
[Appointment details, referrals, signposting]

SAFEGUARDING ACTIONS:
[If applicable - document clearly]

---
Note: This summary is a template. Complete with specific details within your clinical system.
All conversations conducted following Well Centre Teen Health Talk model.
Confidentiality and consent discussed and documented.
`
  }

  const generateSnomedList = () => {
    const allConcepts = activeSections.flatMap(s => s.snomedConcepts)
    const uniqueConcepts = Array.from(
      new Map(allConcepts.map(c => [c.label, c])).values()
    )

    return `SUGGESTED SNOMED CONCEPTS - Teen Health Talk ${mode === 'quick' ? 'Quick' : 'Full'} Check

⚠️ IMPORTANT: Verify these codes in your local system before use.

${uniqueConcepts.map(c =>
  `${c.label}${c.conceptId ? ` (${c.conceptId})` : ' [ID not verified]'}`
).join('\n')}

---
Note: SNOMED coding for youth health can be complex. Some concepts (ACEs, exploitation) may require local code mapping. Always verify codes match your clinical system's implementation.
`
  }

  if (showSummary) {
    return (
      <div className={styles.summaryContainer}>
        <div className={styles.summaryHeader}>
          <h1>Consultation Complete</h1>
          <p>Generate your clinical summary and SNOMED concepts below</p>
        </div>

        <div className={styles.summarySection}>
          <h2>Clinical Summary Template</h2>
          <pre className={styles.summaryText}>{generateSummary()}</pre>
          <button
            className={styles.copyButton}
            onClick={() => copyToClipboard(generateSummary(), 'Summary')}
          >
            📋 Copy Summary to Clipboard
          </button>
        </div>

        {snomedEnabled && (
          <div className={styles.summarySection}>
            <h2>SNOMED Concepts List</h2>
            <pre className={styles.summaryText}>{generateSnomedList()}</pre>
            <button
              className={styles.copyButton}
              onClick={() => copyToClipboard(generateSnomedList(), 'SNOMED list')}
            >
              📋 Copy SNOMED List to Clipboard
            </button>
          </div>
        )}

        {copyFeedback && (
          <div className={styles.copyFeedback}>{copyFeedback}</div>
        )}

        <div className={styles.summaryActions}>
          <button
            className={styles.printButton}
            onClick={() => window.print()}
          >
            🖨️ Print
          </button>
          <Link href="/" className={styles.homeButton}>
            ← Return Home
          </Link>
          <button
            className={styles.reviewButton}
            onClick={() => setShowSummary(false)}
          >
            📝 Review Sections
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.consultContainer}>
      <div className={styles.header}>
        <div className={styles.headerTop}>
          <Link href="/" className={styles.backLink}>← Home</Link>
          <h1 className={styles.consultTitle}>
            {mode === 'quick' ? 'Quick' : 'Full'} Health Check
          </h1>
          <div className={styles.headerActions}>
            <label className={styles.toggleLabel}>
              <input
                type="checkbox"
                checked={snomedEnabled}
                onChange={(e) => setSnomedEnabled(e.target.checked)}
              />
              <span>SNOMED Helper</span>
            </label>
          </div>
        </div>
        <div className={styles.progressBar}>
          <div
            className={styles.progressFill}
            style={{ width: `${((currentSectionIndex + 1) / activeSections.length) * 100}%` }}
          />
        </div>
      </div>

      <div className={styles.mainContent}>
        <aside className={styles.sidebar}>
          <h3>Sections</h3>
          <nav className={styles.sectionNav}>
            {activeSections.map((section, index) => (
              <button
                key={section.id}
                className={`${styles.navItem} ${
                  index === currentSectionIndex ? styles.navItemActive : ''
                } ${completedSections.has(section.id) ? styles.navItemComplete : ''}`}
                onClick={() => goToSection(index)}
              >
                <span className={styles.navNumber}>{index + 1}</span>
                <span className={styles.navTitle}>{section.shortTitle || section.title}</span>
                {completedSections.has(section.id) && <span className={styles.checkmark}>✓</span>}
              </button>
            ))}
          </nav>
        </aside>

        <main className={styles.sectionContent}>
          <div className={styles.sectionHeader}>
            <h2>{currentSection.title}</h2>
            <span className={styles.sectionProgress}>
              {currentSectionIndex + 1} of {activeSections.length}
            </span>
          </div>

          <div className={styles.promptsSection}>
            <h3>Core Prompts</h3>
            <ul className={styles.promptList}>
              {currentSection.prompts
                .filter(p => p.isCore)
                .map((prompt, i) => (
                  <li key={i} className={styles.promptItem}>
                    {prompt.text}
                  </li>
                ))}
            </ul>
          </div>

          <div className={styles.expandableSection}>
            <button
              className={styles.expandButton}
              onClick={() => setExpandedProbes(!expandedProbes)}
            >
              <span>{expandedProbes ? '▼' : '▶'}</span>
              Optional Probes ({currentSection.optionalProbes.length})
            </button>
            {expandedProbes && (
              <ul className={styles.probeList}>
                {currentSection.optionalProbes.map((probe, i) => (
                  <li key={i}>{probe}</li>
                ))}
              </ul>
            )}
          </div>

          <div className={styles.expandableSection}>
            <button
              className={styles.expandButton}
              onClick={() => setExpandedWhy(!expandedWhy)}
            >
              <span>{expandedWhy ? '▼' : '▶'}</span>
              Why We Ask This
            </button>
            {expandedWhy && (
              <p className={styles.whyText}>{currentSection.whyWeAsk}</p>
            )}
          </div>

          <div className={styles.expandableSection}>
            <button
              className={styles.expandButton}
              onClick={() => setExpandedRedFlags(!expandedRedFlags)}
            >
              <span>{expandedRedFlags ? '▼' : '▶'}</span>
              Red Flags & Safeguarding Cues ({currentSection.redFlags.length})
            </button>
            {expandedRedFlags && (
              <ul className={styles.redFlagList}>
                {currentSection.redFlags.map((flag, i) => (
                  <li key={i}>🚩 {flag}</li>
                ))}
              </ul>
            )}
          </div>

          <div className={styles.actionsSection}>
            <h4>Suggested Actions / Next Steps</h4>
            <ul className={styles.actionList}>
              {currentSection.suggestedActions.map((action, i) => (
                <li key={i}>{action}</li>
              ))}
            </ul>
          </div>

          {snomedEnabled && (
            <div className={styles.snomedSection}>
              <h4>📊 SNOMED Concepts (Suggested - Verify Locally)</h4>
              <ul className={styles.snomedList}>
                {currentSection.snomedConcepts.map((concept, i) => (
                  <li key={i}>
                    {concept.label}
                    {concept.conceptId && (
                      <code className={styles.conceptId}>{concept.conceptId}</code>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className={styles.navigationButtons}>
            {currentSectionIndex > 0 && (
              <button
                className={styles.prevButton}
                onClick={() => goToSection(currentSectionIndex - 1)}
              >
                ← Previous
              </button>
            )}
            <button
              className={styles.nextButton}
              onClick={markComplete}
            >
              {currentSectionIndex < activeSections.length - 1
                ? 'Mark Complete & Next →'
                : 'Complete & Generate Summary →'}
            </button>
          </div>
        </main>
      </div>

      <div className={styles.crisisBar}>
        <span>🚨 Immediate risk or safeguarding concern?</span>
        <button className={styles.crisisButton}>
          View Crisis Guidance
        </button>
      </div>
    </div>
  )
}

export default function ConsultPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ConsultContent />
    </Suspense>
  )
}
