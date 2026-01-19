export interface Prompt {
  text: string;
  isCore: boolean;
}

export interface SnomedConcept {
  label: string;
  conceptId?: string;
}

export interface Section {
  id: string;
  title: string;
  shortTitle?: string;
  fullModeOnly?: boolean;
  quickModeOrder?: number;
  prompts: Prompt[];
  optionalProbes: string[];
  whyWeAsk: string;
  redFlags: string[];
  suggestedActions: string[];
  snomedConcepts: SnomedConcept[];
}

export const sections: Section[] = [
  {
    id: 'opening',
    title: 'Opening: Confidentiality, Consent & Tone-Setting',
    shortTitle: 'Opening',
    quickModeOrder: 1,
    prompts: [
      { text: 'Welcome and introduce yourself warmly. Explain this is their time and space.', isCore: true },
      { text: 'Explain confidentiality: "What we talk about stays between us, unless I\'m worried about your safety or someone else\'s."', isCore: true },
      { text: 'Check consent: "Is it okay if we have a chat about how things are going for you?"', isCore: true },
      { text: 'Set the tone: "There are no right or wrong answers. I\'m here to listen and help where I can."', isCore: true },
    ],
    optionalProbes: [
      'Have you had a health check like this before?',
      'Is there anything you\'d prefer not to talk about today?',
      'Would you like anyone else here with you, or is it better just the two of us?',
    ],
    whyWeAsk: 'Building trust and safety is essential. Young people need to know the boundaries of confidentiality and feel in control of the conversation. A warm, non-judgmental tone sets the foundation for honest disclosure.',
    redFlags: [
      'Young person appears coerced or accompanied by someone who won\'t leave',
      'Visible distress, fear, or reluctance to engage',
      'Signs of immediate harm or safeguarding concern',
    ],
    suggestedActions: [
      'If accompanied by parent/carer, offer time alone with young person',
      'If immediate risk identified, follow local safeguarding procedures',
      'Document consent and confidentiality discussion',
    ],
    snomedConcepts: [
      { label: 'Health check consultation', conceptId: '698314001' },
      { label: 'Consent obtained', conceptId: '401190002' },
      { label: 'Patient confidentiality', conceptId: '182880004' },
    ],
  },
  {
    id: 'background',
    title: 'Background & What Matters Today',
    shortTitle: 'What Matters',
    quickModeOrder: 2,
    prompts: [
      { text: 'What brings you here today? / What would be most helpful to talk about?', isCore: true },
      { text: 'How have things been going for you lately?', isCore: true },
      { text: 'Is there anything on your mind or worrying you?', isCore: true },
    ],
    optionalProbes: [
      'What\'s been good recently?',
      'What\'s been tough?',
      'If you could change one thing in your life right now, what would it be?',
    ],
    whyWeAsk: 'Starting with the young person\'s agenda shows respect and builds rapport. It helps identify priorities and guides the focus of the consultation.',
    redFlags: [
      'Disclosures of harm, abuse, or exploitation',
      'Suicidal ideation or self-harm',
      'Indicators of coercion or trafficking',
    ],
    suggestedActions: [
      'Listen actively without interrupting',
      'Validate their concerns',
      'Use their language and priorities to guide the conversation',
    ],
    snomedConcepts: [
      { label: 'Reason for encounter', conceptId: '410685008' },
      { label: 'Patient\'s concern', conceptId: '162408000' },
    ],
  },
  {
    id: 'home',
    title: 'Home & Relationships',
    shortTitle: 'Home',
    fullModeOnly: true,
    prompts: [
      { text: 'Who do you live with?', isCore: true },
      { text: 'How are things at home?', isCore: true },
      { text: 'Who do you feel close to or can talk to?', isCore: true },
    ],
    optionalProbes: [
      'Do you have your own space at home?',
      'Have there been any big changes at home recently?',
      'How do you get on with family members?',
      'Do you have friends or people outside the family you trust?',
    ],
    whyWeAsk: 'Home environment and relationships are key determinants of wellbeing. Understanding family structure, support networks, and any stressors helps assess protective and risk factors.',
    redFlags: [
      'Homelessness or housing instability',
      'Domestic violence or abuse',
      'Family conflict or breakdown',
      'Isolation or lack of supportive relationships',
      'Caring responsibilities affecting wellbeing',
    ],
    suggestedActions: [
      'Explore support networks and protective relationships',
      'Identify any caring responsibilities (Young Carers assessment if needed)',
      'Signpost to local family support or mediation services',
      'Consider safeguarding referral if risk identified',
    ],
    snomedConcepts: [
      { label: 'Family situation', conceptId: '55607006' },
      { label: 'Living arrangements', conceptId: '365508006' },
      { label: 'Social support', conceptId: '410172007' },
      { label: 'Young carer', conceptId: '308030009' },
    ],
  },
  {
    id: 'education',
    title: 'Education, Training & Work',
    shortTitle: 'Education/Work',
    fullModeOnly: true,
    prompts: [
      { text: 'Are you in school, college, training, or work?', isCore: true },
      { text: 'How are things going there?', isCore: true },
      { text: 'Do you enjoy it? Feel supported?', isCore: true },
    ],
    optionalProbes: [
      'Are you attending regularly?',
      'Do you have friends there?',
      'Any worries about exams, coursework, or performance?',
      'Have there been any problems with teachers, peers, or bullying?',
    ],
    whyWeAsk: 'School or work is a major part of a young person\'s life. Disengagement, poor attendance, or difficulties can signal underlying issues including mental health, bullying, or safeguarding concerns.',
    redFlags: [
      'Persistent absence or exclusion',
      'Bullying or peer victimization',
      'Learning difficulties or unmet educational needs',
      'NEET (Not in Education, Employment, or Training)',
      'Exploitation via work or apprenticeship',
    ],
    suggestedActions: [
      'Explore reasons for disengagement if present',
      'Signpost to school nurse, counseling, or SENCO',
      'Consider referral to education support services or Connexions',
      'Document educational status for holistic care planning',
    ],
    snomedConcepts: [
      { label: 'Education status', conceptId: '105421008' },
      { label: 'Employment status', conceptId: '224363007' },
      { label: 'School attendance', conceptId: '183197003' },
      { label: 'Bullying victim', conceptId: '426995002' },
    ],
  },
  {
    id: 'physical-health',
    title: 'Physical Health & Medical History',
    shortTitle: 'Physical Health',
    fullModeOnly: true,
    prompts: [
      { text: 'How is your physical health overall?', isCore: true },
      { text: 'Any long-term conditions, allergies, or past illnesses?', isCore: true },
      { text: 'Are you taking any regular medications?', isCore: true },
      { text: 'Any current concerns about your body or health?', isCore: false },
    ],
    optionalProbes: [
      'When was your last health check or immunizations?',
      'Any pain, symptoms, or things bothering you physically?',
      'Do you have any disabilities or additional needs?',
      'For young women: any questions about periods or menstrual health?',
    ],
    whyWeAsk: 'Understanding baseline health, chronic conditions, and medication use is essential. Physical symptoms can impact mental health and vice versa. It\'s also an opportunity to check immunization status and address any unmet medical needs.',
    redFlags: [
      'Unexplained weight loss or gain',
      'Chronic pain or medically unexplained symptoms',
      'Non-adherence to medication for chronic conditions',
      'Untreated or poorly managed long-term conditions',
      'Signs of physical abuse or neglect',
    ],
    suggestedActions: [
      'Review immunization status and update if needed',
      'Medication review for adherence and side effects',
      'Arrange follow-up or specialist referral if indicated',
      'Address any physical health concerns with appropriate investigations or management',
    ],
    snomedConcepts: [
      { label: 'General health status', conceptId: '365275006' },
      { label: 'Past medical history', conceptId: '417662000' },
      { label: 'Current medication', conceptId: '428246003' },
      { label: 'Immunization status', conceptId: '171126009' },
    ],
  },
  {
    id: 'lifestyle',
    title: 'Lifestyle: Sleep, Diet, Exercise & BMI',
    shortTitle: 'Lifestyle',
    fullModeOnly: true,
    prompts: [
      { text: 'How are you sleeping? How many hours on average?', isCore: true },
      { text: 'What does your diet look like? Regular meals?', isCore: true },
      { text: 'Are you getting any physical activity or exercise?', isCore: true },
      { text: 'Would it be okay to check your height and weight today?', isCore: false },
    ],
    optionalProbes: [
      'Do you have trouble falling asleep or staying asleep?',
      'Screen time before bed?',
      'Do you skip meals or restrict food?',
      'Any concerns about your weight or body image?',
      'What do you do for fun or to relax?',
    ],
    whyWeAsk: 'Lifestyle factors (sleep, nutrition, activity) significantly impact physical and mental health. Sleep disturbance can be a marker for anxiety or depression. Diet and exercise patterns can indicate eating disorders or physical health risk. BMI screening (when consented) helps identify obesity or underweight requiring intervention.',
    redFlags: [
      'Severe sleep disturbance or insomnia',
      'Restrictive eating, binge eating, or purging behaviors',
      'Very high or very low BMI',
      'Excessive exercise or obsession with body image',
      'Social isolation or withdrawal from activities',
    ],
    suggestedActions: [
      'Brief intervention for sleep hygiene if needed',
      'Nutritional advice or referral to dietitian',
      'Encourage physical activity (e.g., Couch to 5K, local clubs)',
      'If eating disorder suspected, use SCOFF tool and refer to CAMHS or specialist service',
      'Plot BMI on growth chart and discuss if outside healthy range',
    ],
    snomedConcepts: [
      { label: 'Sleep pattern', conceptId: '248254009' },
      { label: 'Dietary intake', conceptId: '364393001' },
      { label: 'Physical activity', conceptId: '68130003' },
      { label: 'Body mass index', conceptId: '60621009' },
      { label: 'Eating disorder screening', conceptId: '715226005' },
    ],
  },
  {
    id: 'substances',
    title: 'Substances: Alcohol, Drugs, Smoking & Vaping',
    shortTitle: 'Substances',
    quickModeOrder: 5,
    prompts: [
      { text: 'Do you smoke, vape, or use e-cigarettes?', isCore: true },
      { text: 'Do you drink alcohol? If yes, how often and how much?', isCore: true },
      { text: 'Have you tried or do you use any drugs or other substances?', isCore: true },
    ],
    optionalProbes: [
      'What made you start? What do you enjoy about it?',
      'Has anyone raised concerns about your use?',
      'Do you ever use alone or in risky situations?',
      'Have you thought about cutting down?',
    ],
    whyWeAsk: 'Substance use is common in adolescence but can escalate to harmful use or dependence. Early identification and brief intervention can prevent harm. Normalizing the conversation reduces stigma and encourages honesty.',
    redFlags: [
      'Regular or heavy use of alcohol or drugs',
      'Use of high-risk substances (e.g., opioids, stimulants)',
      'Use in dangerous contexts (e.g., alone, before school, with strangers)',
      'Signs of dependence or withdrawal',
      'Impact on functioning (school, relationships, health)',
    ],
    suggestedActions: [
      'Brief intervention using FRAMES approach (Feedback, Responsibility, Advice, Menu, Empathy, Self-efficacy)',
      'Harm reduction advice (safer use, avoiding mixing substances)',
      'Signpost to local youth substance misuse services (e.g., FRANK, Talk to Frank, local YDAS)',
      'Consider safeguarding if exploitation or supply concerns',
    ],
    snomedConcepts: [
      { label: 'Tobacco smoking status', conceptId: '229819007' },
      { label: 'Electronic cigarette user', conceptId: '722496004' },
      { label: 'Alcohol consumption', conceptId: '160573003' },
      { label: 'Drug misuse', conceptId: '361055000' },
      { label: 'Brief intervention for substance use', conceptId: '441829007' },
    ],
  },
  {
    id: 'sexual-health',
    title: 'Sexual Health & Relationships',
    shortTitle: 'Sexual Health',
    fullModeOnly: true,
    prompts: [
      { text: 'Are you in a relationship at the moment?', isCore: true },
      { text: 'Have you ever been sexually active?', isCore: true },
      { text: 'If yes: Do you feel safe in your relationships? Is it consensual and wanted?', isCore: true },
      { text: 'If sexually active: Are you using contraception? Have you been tested for STIs?', isCore: true },
    ],
    optionalProbes: [
      'Do you have any questions about sex, relationships, or your body?',
      'Have you felt pressured or uncomfortable in a relationship?',
      'Do you know about emergency contraception and where to access it?',
      'Any concerns about pregnancy or STIs?',
    ],
    whyWeAsk: 'Sexual health is an important part of overall wellbeing. Discussing relationships, consent, and contraception helps prevent unintended pregnancy, STIs, and identifies abusive or exploitative relationships. Fraser guidelines allow confidential advice for under-16s when appropriate.',
    redFlags: [
      'Non-consensual sexual activity or coercion',
      'Sexual exploitation or abuse',
      'Multiple partners or risky sexual behavior',
      'Underage sexual activity (especially with significant age gap)',
      'Pregnancy concerns or requests for abortion',
      'Unprotected sex or STI symptoms',
    ],
    suggestedActions: [
      'Offer STI testing and contraception advice (Fraser competent under-16s can consent)',
      'Safeguarding referral if abuse, exploitation, or underage concern',
      'Signpost to local sexual health clinic or Brook for young people',
      'Provide information on consent, healthy relationships, and contraception',
    ],
    snomedConcepts: [
      { label: 'Sexual health consultation', conceptId: '308335008' },
      { label: 'Sexually active', conceptId: '228453005' },
      { label: 'Contraception advice', conceptId: '410205003' },
      { label: 'STI screening', conceptId: '429481000000100' },
      { label: 'Safeguarding concern: sexual exploitation', conceptId: '792831000000102' },
    ],
  },
  {
    id: 'mental-health',
    title: 'Mental Health & Wellbeing',
    shortTitle: 'Mental Health',
    quickModeOrder: 3,
    prompts: [
      { text: 'How have you been feeling in yourself lately?', isCore: true },
      { text: 'How is your mood most of the time?', isCore: true },
      { text: 'Do you ever feel very anxious, worried, or panicky?', isCore: true },
      { text: 'Have you ever felt so low that you thought about harming yourself or ending your life?', isCore: true },
    ],
    optionalProbes: [
      'What helps when you feel low or anxious?',
      'Who do you talk to when things are tough?',
      'Have you had help for mental health before?',
      'Do you ever feel like you can\'t cope?',
    ],
    whyWeAsk: 'Mental health difficulties are common in adolescence but often unrecognized. Direct, compassionate questioning about mood, anxiety, and self-harm/suicidal ideation can be lifesaving. Early identification allows timely intervention.',
    redFlags: [
      'Persistent low mood or anhedonia',
      'Severe anxiety, panic attacks, or OCD symptoms',
      'Self-harm (cutting, overdose, other)',
      'Suicidal ideation, plans, or recent attempts',
      'Psychotic symptoms or disordered thinking',
      'Significant functional impairment (not attending school, withdrawing from friends)',
    ],
    suggestedActions: [
      'Risk assessment: immediate risk, means, plans, protective factors',
      'If immediate risk: safeguarding referral, crisis team, A&E if necessary',
      'If moderate risk: urgent CAMHS referral or GP follow-up within days',
      'Low-level support: signpost to Kooth, YoungMinds, school counseling',
      'Consider brief interventions (5 Ways to Wellbeing, safety planning)',
      'Document risk assessment clearly',
    ],
    snomedConcepts: [
      { label: 'Mental health consultation', conceptId: '385781002' },
      { label: 'Low mood', conceptId: '366979004' },
      { label: 'Anxiety', conceptId: '48694002' },
      { label: 'Self-harm', conceptId: '248062006' },
      { label: 'Suicidal ideation', conceptId: '6471006' },
      { label: 'Risk assessment', conceptId: '225338004' },
    ],
  },
  {
    id: 'safety',
    title: 'Safety & Safeguarding',
    shortTitle: 'Safety',
    quickModeOrder: 4,
    prompts: [
      { text: 'Do you feel safe at home, at school, and in your community?', isCore: true },
      { text: 'Have you ever experienced violence, threats, or abuse?', isCore: true },
      { text: 'Has anyone ever hurt you or made you do things you didn\'t want to?', isCore: true },
    ],
    optionalProbes: [
      'Have you witnessed violence at home or elsewhere?',
      'Do you feel safe online?',
      'Have you ever been in trouble with the police or involved in gangs?',
      'Has anyone asked you to do things that worried you (e.g., carry items, meet strangers)?',
    ],
    whyWeAsk: 'Direct questions about safety, abuse, and exploitation are essential for safeguarding. Young people may not disclose unless asked. Adverse Childhood Experiences (ACEs) and trauma significantly impact health and development.',
    redFlags: [
      'Disclosure of physical, emotional, or sexual abuse',
      'Domestic violence or coercive control',
      'Gang involvement or criminal exploitation',
      'Child sexual exploitation (CSE) or trafficking indicators',
      'Female genital mutilation (FGM) or forced marriage concerns',
      'Online harm or sexual exploitation',
      'Homelessness or running away',
    ],
    suggestedActions: [
      'If immediate risk: follow local safeguarding procedures, contact safeguarding lead or MASH (Multi-Agency Safeguarding Hub)',
      'Document concerns clearly and objectively',
      'Explain to young person what happens next (balance confidentiality with safeguarding duty)',
      'Offer crisis numbers: Childline (0800 1111), NSPCC, local crisis services',
    ],
    snomedConcepts: [
      { label: 'Safeguarding concern', conceptId: '714802004' },
      { label: 'At risk of abuse', conceptId: '816071000000102' },
      { label: 'Domestic violence', conceptId: '248062006' },
      { label: 'Child sexual exploitation', conceptId: '792831000000102' },
      { label: 'Adverse childhood experience', conceptId: '792841000000106' },
    ],
  },
  {
    id: 'strengths',
    title: 'Strengths, Goals & Plan',
    shortTitle: 'Strengths & Plan',
    quickModeOrder: 6,
    prompts: [
      { text: 'What are you good at? What do you enjoy?', isCore: true },
      { text: 'What keeps you going? What are your hopes or goals?', isCore: true },
      { text: 'What would help you right now? What can we do together?', isCore: true },
    ],
    optionalProbes: [
      'Who or what helps you when things are tough?',
      'What would make things better for you?',
      'What small step could you take this week?',
    ],
    whyWeAsk: 'A strengths-based approach is empowering and builds resilience. Identifying protective factors and co-creating a plan ensures the young person feels heard and involved in their care.',
    redFlags: [
      'No identified strengths or protective factors (may indicate severe depression or trauma)',
      'Hopelessness or lack of future orientation',
    ],
    suggestedActions: [
      'Highlight and affirm strengths',
      'Co-create a realistic, achievable plan',
      'Agree next steps and follow-up',
    ],
    snomedConcepts: [
      { label: 'Strengths identified', conceptId: '410172007' },
      { label: 'Goal setting', conceptId: '410394004' },
      { label: 'Care plan', conceptId: '734163000' },
    ],
  },
  {
    id: 'closing',
    title: 'Closing: Follow-up, Signposting & Documentation',
    shortTitle: 'Closing',
    quickModeOrder: 7,
    prompts: [
      { text: 'Summarize key points and agreed actions.', isCore: true },
      { text: 'Arrange follow-up: "When should we meet again?"', isCore: true },
      { text: 'Provide signposting: leaflets, websites, local services.', isCore: true },
      { text: 'Thank the young person for their openness and time.', isCore: true },
    ],
    optionalProbes: [
      'Is there anything else you\'d like to talk about today?',
      'Do you have any questions for me?',
      'Are you clear on what happens next?',
    ],
    whyWeAsk: 'Closing well ensures the young person leaves feeling heard, informed, and supported. Clear follow-up plans and signposting resources empower them to take next steps.',
    redFlags: [
      'Young person reluctant to leave or discloses new concerning information at door',
    ],
    suggestedActions: [
      'Document consultation fully and code appropriately',
      'Send or give written information (contact numbers, websites)',
      'Book follow-up appointment before they leave if indicated',
      'Ensure any safeguarding actions are initiated immediately',
    ],
    snomedConcepts: [
      { label: 'Follow-up arranged', conceptId: '183617005' },
      { label: 'Patient given advice', conceptId: '171055003' },
      { label: 'Signposting to support services', conceptId: '308440009' },
    ],
  },
];

export const quickModeSectionIds = sections
  .filter(s => s.quickModeOrder !== undefined)
  .sort((a, b) => (a.quickModeOrder || 0) - (b.quickModeOrder || 0))
  .map(s => s.id);
