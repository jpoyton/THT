'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  useEffect(() => {
    // Register service worker for PWA
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch(() => {
        // Silently fail - not critical for functionality
      })
    }
  }, [])

  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <h1 className={styles.title}>Teen Health Talk</h1>
        <p className={styles.subtitle}>Well Centre Model - GP Crib Sheet</p>
        <p className={styles.description}>
          A structured, youth-friendly conversation framework for holistic health checks with young people aged 11-19 (up to 25 with additional needs).
        </p>
      </div>

      <div className={styles.modeSelection}>
        <Link href="/consult?mode=full" className={styles.modeCard}>
          <div className={styles.modeIcon}>🗂️</div>
          <h2>Full Health Check</h2>
          <p>Comprehensive 30-40 minute consult</p>
          <ul className={styles.featureList}>
            <li>All 12 sections</li>
            <li>In-depth prompts and probes</li>
            <li>Holistic assessment</li>
          </ul>
          <div className={styles.cardButton}>Start Full THT →</div>
        </Link>

        <Link href="/consult?mode=quick" className={styles.modeCard}>
          <div className={styles.modeIcon}>⚡</div>
          <h2>Quick Health Check</h2>
          <p>Focused 10-15 minute consult</p>
          <ul className={styles.featureList}>
            <li>7 core sections</li>
            <li>Essential safety screening</li>
            <li>Rapid assessment</li>
          </ul>
          <div className={styles.cardButton}>Start Quick THT →</div>
        </Link>
      </div>

      <div className={styles.infoSection}>
        <div className={styles.infoCard}>
          <h3>📋 What is Teen Health Talk?</h3>
          <p>
            Teen Health Talk (THT) is a whole-person, youth-friendly conversation framework developed by the Well Centre over 15 years. It links physical and mental health, identifies safeguarding needs, and supports brief interventions.
          </p>
        </div>

        <div className={styles.infoCard}>
          <h3>🎯 How to use this tool</h3>
          <p>
            This is a crib sheet to guide your conversation - not a rigid questionnaire. Use it flexibly, follow the young person's agenda, and adapt to their needs. No patient data is stored by this app.
          </p>
        </div>

        <div className={styles.infoCard}>
          <h3>🔒 Privacy & Safety</h3>
          <p>
            <strong>No data is collected or stored.</strong> This tool runs entirely in your browser. Use your clinical system (EMIS/SystmOne) for all documentation. Not for emergencies - call 999 or follow local safeguarding procedures for immediate risk.
          </p>
        </div>
      </div>

      <div className={styles.crisisSection}>
        <h3>🚨 Immediate Risk or Crisis?</h3>
        <ul className={styles.crisisList}>
          <li><strong>Emergency:</strong> Call 999</li>
          <li><strong>Safeguarding concern:</strong> Contact local MASH or safeguarding lead immediately</li>
          <li><strong>Mental health crisis:</strong> Local crisis team or A&E</li>
          <li><strong>Young person support:</strong> Childline 0800 1111 (24/7)</li>
        </ul>
      </div>

      <footer className={styles.footer}>
        <p>Developed for GP Champions and health practitioners implementing the Well Centre Model.</p>
        <p className={styles.footerSmall}>
          This tool is for clinical guidance only. Always use professional judgement. Not a substitute for clinical assessment or local protocols.
        </p>
      </footer>
    </main>
  )
}
