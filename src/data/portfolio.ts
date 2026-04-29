export type BadgeColor = "teal" | "blue" | "amber" | "purple" | "coral" | "green" | "pink";

export interface Project {
  id: string;
  num: string;
  icon: string;
  name: string;
  client: string;
  domain: string;
  year: string;
  badges: { label: string; color: BadgeColor }[];
  summary: string;
  description: string;
  metrics: { value: string; label: string }[];
}

export const profile = {
  name: "Dhruvil Parekh",
  title: "Lead QA Engineer",
  certification: "ISTQB Certified Foundation Level",
  email: "dhruvil.parekh3@gmail.com",
  phone: "+91-8000164009",
  location: "Ahmedabad, India",
  linkedin: "https://linkedin.com/in/dhruvilparekh",
  yearsExperience: "9.5+",
  summary:
    "ISTQB Certified Lead QA Engineer with 9.5+ years building and executing test strategies across MedTech, Healthcare, Financial Services, E-commerce, Self-Ordering Kiosk, and VR/AR domains. Deep expertise in FDA-regulated medical device validation, full-cycle payment verification, REST/SOAP API testing, SQL database validation, and VR/OS quality assurance.",
};

export const headlineStats = [
  { value: "9.5+", label: "Years in QA" },
  { value: "20+", label: "Major releases" },
  { value: "0", label: "Critical defects" },
  { value: "60%", label: "Faster regression" },
];

export const achievements = [
  "Led 20+ major releases across healthcare, financial, and retail sectors with zero critical production incidents.",
  "Reduced regression cycles by 60% through optimized test strategies and risk-based prioritization.",
  "Validated payment workflows across 10+ payment methods at GRUBBRR — zero production payment defects across all client deployments.",
  "Trained and mentored 15+ QA engineers across medical devices, payments, blockchain, and VR/AR platforms.",
  "Improved team efficiency by 31% through structured defect reporting, QA metrics, and cross-functional process improvement.",
];

export const expertise = [
  {
    title: "Testing Disciplines",
    items: ["Manual & Exploratory", "Regression", "Integration", "API (REST / SOAP)", "Performance", "Security", "Payment Validation", "Medical Device", "VR/OS"],
  },
  {
    title: "Compliance & Standards",
    items: ["FDA 21 CFR Part 11", "HIPAA", "Class I & II Medical Devices", "HL7", "FHIR", "IEEE 11073 SDC"],
  },
  {
    title: "Methods & Techniques",
    items: ["Agile Scrum", "Risk-Based Testing", "BVA", "Equivalence Partitioning", "Decision Tables", "Traceability Matrix"],
  },
  {
    title: "Tools & Platforms",
    items: ["JIRA", "TestRail", "MatrixALM", "Postman", "Charles Proxy", "Chrome DevTools", "Confluence", "AWS S3", "Kubernetes"],
  },
  {
    title: "Databases & APIs",
    items: ["MySQL", "PostgreSQL", "SQL Validation", "REST APIs", "SOAP Web Services", "JSON / XML"],
  },
  {
    title: "Payments & Devices",
    items: ["Verifone", "FreedomPay", "Clover", "NFC", "Digital Wallets", "Oculus OS", "GearVR / Quest / Rift", "iOS / Android / Kiosk"],
  },
];

export const experience = [
  {
    role: "Lead QA Engineer",
    company: "GRUBBRR",
    location: "Ahmedabad, India",
    period: "Oct 2024 — Present",
    blurb: "Self-ordering kiosks, POS integrations, digital menu boards, and loyalty systems for restaurants, retail, and stadiums.",
    bullets: [
      "Own full-cycle QA across kiosk software and POS — 100% test coverage on client deployments.",
      "Built payment verification framework across 10+ methods — zero production payment defects to date.",
      "REST API testing via Postman across payment gateway and POS integrations.",
      "Mentor 6 junior QA engineers — boosted team execution efficiency by 20%.",
    ],
  },
  {
    role: "Lead QA Engineer",
    company: "AimDek Technology",
    location: "Ahmedabad, India",
    period: "Jan 2024 — Oct 2024",
    blurb: "MedTech product company building FDA-regulated health monitoring devices and clinical data exchange platforms.",
    bullets: [
      "Led full QA lifecycle for Class I & II medical devices including Sibel Health wearables.",
      "Designed clinical data workflow tests covering HL7, FHIR, and 11073 SDC standards.",
      "30% reduction in regulatory defects via structured risk assessments and traceability matrices.",
      "Monitored Kubernetes cluster logs — improved system uptime by 15%.",
    ],
  },
  {
    role: "Senior Software Engineer — QA",
    company: "Apexon",
    location: "Ahmedabad, India",
    period: "Mar 2021 — Dec 2023",
    blurb: "Global tech services — QA across healthcare IoT devices, financial systems, and blockchain platforms.",
    bullets: [
      "Verified REST/SOAP APIs across 20+ endpoints for health, lifestyle, and financial platforms.",
      "Led QA for blockchain platform — smart contract execution, token workflows, ledger integrity.",
      "12 consecutive major releases with zero defect leakage.",
      'Recognized with the "Bright Spark" award for outstanding quality contributions.',
    ],
  },
  {
    role: "Senior QA Specialist",
    company: "CheckTech for IT",
    location: "Riyadh, Saudi Arabia",
    period: "Sep 2019 — Mar 2021",
    blurb: "Transportation, e-commerce, and F&B digital platforms across the Middle East.",
    bullets: [
      "Authored 200+ manual test cases for platforms serving 500K+ active users.",
      "UI/UX quality across 100+ screens — contributed to 20% rise in user satisfaction.",
      "Boosted team productivity 31% via structured defect reporting and QA metrics dashboards.",
      "Coordinated offshore QA team of 4 across 8 simultaneous projects.",
    ],
  },
  {
    role: "Software Tester",
    company: "Lodestone (acquired by Tech Mahindra)",
    location: "Ahmedabad, India",
    period: "Jan 2016 — Aug 2019",
    blurb: "VR/AR platform development and Oculus ecosystem products for global clients.",
    bullets: [
      "Comprehensive Oculus OS qualification — system UI, firmware, sensor calibration.",
      "Owned build sign-off for 50+ VR applications across Master, RC, HotFix, Custom pipelines.",
      "Resolved 200+ critical OS defects — cut test execution time by 35%.",
      "Certified hardware-software integration across multiple Oculus device generations.",
    ],
  },
  {
    role: "Software Engineer",
    company: "CHHAVI",
    location: "Ahmedabad, India",
    period: "May 2015 — Dec 2015",
    blurb: "Web application development.",
    bullets: [
      "Built features that improved overall app performance by 15%.",
      "Collaborated with UI/UX designers on interface improvements.",
    ],
  },
];

export const projects: Project[] = [
  {
    id: "sibel-health",
    num: "01",
    icon: "🩺",
    name: "Sibel Health — FDA-Regulated Wearable Validation",
    client: "Sibel Health (via AimDek)",
    domain: "MedTech · Wearable Biosensors",
    year: "2024",
    badges: [
      { label: "FDA 21 CFR", color: "teal" },
      { label: "HIPAA", color: "blue" },
      { label: "HL7 / FHIR", color: "amber" },
      { label: "11073 SDC", color: "purple" },
      { label: "REST & SOAP", color: "coral" },
      { label: "Traceability", color: "green" },
    ],
    summary: "Hospital-grade wireless biosensor patches for continuous patient monitoring — ECG, respiratory rate, SpO2.",
    description:
      "As lead QA on the device validation lifecycle, I designed and executed comprehensive verification protocols aligned with FDA 21 CFR Part 11, HIPAA data privacy requirements, and IEEE 11073 SDC interoperability standards — ensuring every data exchange between the wearable sensor, clinical gateway, and cloud platform met regulatory integrity thresholds. Validation extended to HL7- and FHIR-compliant clinical data workflows where payload accuracy, authentication, and fault tolerance at every endpoint were non-negotiable. Structured risk assessments and traceability matrices contributed to a 30% reduction in regulatory defects, enabling a clean path to compliance review without rework.",
    metrics: [
      { value: "30%", label: "Fewer regulatory defects" },
      { value: "100%", label: "Traceability coverage" },
    ],
  },
  {
    id: "meta-oculus",
    num: "02",
    icon: "🥽",
    name: "Meta (Oculus) — VR/AR OS & Hardware Qualification",
    client: "Meta / Oculus (via Lodestone)",
    domain: "VR/AR · GearVR · Quest · Rift",
    year: "2016–2019",
    badges: [
      { label: "OS Qualification", color: "purple" },
      { label: "Firmware", color: "blue" },
      { label: "Sensor Calibration", color: "amber" },
      { label: "Build Sign-off", color: "teal" },
      { label: "Performance", color: "coral" },
      { label: "Controller", color: "green" },
    ],
    summary: "End-to-end OS qualification across multi-generational Oculus devices — system UI, firmware, sensors, and controllers.",
    description:
      "Owned end-to-end Oculus OS qualification across GearVR, Oculus Go, Quest, and Rift — covering system UI integrity, firmware upgrade paths, sensor calibration validation (head tracking, 6DOF motion, proximity, boundary detection), wireless connectivity, and permission models — across every Master, Release Candidate, HotFix, and Custom build pipeline. The primary challenge was certifying hardware-software integration across multiple controller generations simultaneously, where a firmware regression on one device generation could silently break controller input mapping on another. Identified and resolved 200+ critical OS defects during performance regression cycles, cutting test execution time by 35%.",
    metrics: [
      { value: "200+", label: "Critical defects resolved" },
      { value: "35%", label: "Faster execution" },
      { value: "50+", label: "VR app sign-offs" },
    ],
  },
  {
    id: "blockchain",
    num: "03",
    icon: "⛓",
    name: "Blockchain Platform — Smart Contracts & Ledger Integrity",
    client: "Confidential (via Apexon)",
    domain: "Fintech · DLT · Smart Contracts",
    year: "2022–2023",
    badges: [
      { label: "Smart Contracts", color: "amber" },
      { label: "Ledger Integrity", color: "purple" },
      { label: "Token Workflows", color: "blue" },
      { label: "Edge Cases", color: "coral" },
      { label: "REST/SOAP", color: "teal" },
      { label: "SQL", color: "green" },
    ],
    summary: "Distributed ledger platform for digital asset transactions and smart contract execution.",
    description:
      "QA scope covered end-to-end verification of smart contract logic, token transaction workflows (mint, transfer, burn, rollback) and ledger state consistency — with focus on edge-case failure paths including gas estimation failures, re-entrancy guard behavior, and partial transaction states. Blockchain's irreversibility makes pre-production verification mission-critical: a defect that reaches production cannot be patched with a database rollback. Complemented smart contract testing with REST/SOAP API validation across 20+ endpoints and SQL-based data sync checks across the multi-tier backend, delivering 12 consecutive major releases with zero defect leakage.",
    metrics: [
      { value: "12", label: "Releases, zero defect leak" },
      { value: "20+", label: "API endpoints covered" },
    ],
  },
  {
    id: "etl-insurance",
    num: "04",
    icon: "🚗",
    name: "ETL Vehicle Insurance — Data Pipeline Validation",
    client: "Insurance client (via Apexon)",
    domain: "Insurance · ETL · Data Engineering",
    year: "2021–2022",
    badges: [
      { label: "ETL Pipeline", color: "coral" },
      { label: "SQL Validation", color: "blue" },
      { label: "Transformation", color: "amber" },
      { label: "Integration", color: "purple" },
      { label: "Backend", color: "teal" },
      { label: "Data Integrity", color: "green" },
    ],
    summary: "Multi-stage ETL processing high-volume policyholder, claims, and vehicle records.",
    description:
      "QA focus centered on data transformation accuracy at every pipeline stage — verifying field-level mappings, type conversions, business rule applications, and aggregation logic produced exactly correct output records, with no data silently dropped, duplicated, or corrupted. ETL defects are often invisible at the UI layer and only surface through downstream reporting discrepancies, requiring deep SQL validation, row-count reconciliation, and boundary condition testing across statistically representative datasets. Designed integration test suites that traced data lineage from source extraction through transformation into the target schema for renewals, endorsements, and claims.",
    metrics: [
      { value: "100%", label: "Row-count fidelity" },
      { value: "0", label: "Silent data drops" },
    ],
  },
  {
    id: "onetouch",
    num: "05",
    icon: "💉",
    name: "OneTouch Glucose Monitoring — Clinical Accuracy & L10n",
    client: "OneTouch (via Apexon)",
    domain: "Digital Health · iOS & Android",
    year: "2021–2022",
    badges: [
      { label: "Clinical Accuracy", color: "blue" },
      { label: "Localization", color: "purple" },
      { label: "Graphs & Reports", color: "teal" },
      { label: "Cross-Platform", color: "amber" },
      { label: "Unit Conversion", color: "coral" },
      { label: "BLE Sync", color: "green" },
    ],
    summary: "Clinically regulated blood glucose monitoring app — aggregation, visualization, and reporting.",
    description:
      "QA covered the full reporting and visualization layer: trend graphs (daily, weekly, 90-day), statistical summaries (average glucose, time-in-range, standard deviation), logbook entries, and A1C estimations across edge-case data distributions. Localization added a distinct layer of complexity — validating clinical logic correctness across regional unit systems (mg/dL vs. mmol/L), date/time formats, and locale-specific numeric formatting in charts. Validated Bluetooth pairing reliability and glucose reading sync fidelity between glucometer hardware and app across iOS and Android — ensuring no readings dropped, duplicated, or misrepresented.",
    metrics: [
      { value: "2", label: "Unit systems validated" },
      { value: "iOS+Android", label: "Cross-platform parity" },
    ],
  },
  {
    id: "checktech",
    num: "06",
    icon: "📍",
    name: "CheckTech (شيِّك) — Real-Time Location Verification",
    client: "CheckTech, Riyadh",
    domain: "Location Services · Crowdsourcing",
    year: "2019–2021",
    badges: [
      { label: "Real-Time", color: "pink" },
      { label: "Geo-Matching", color: "coral" },
      { label: "Order Lifecycle", color: "blue" },
      { label: "In-App Chat", color: "amber" },
      { label: "Photo Verification", color: "teal" },
      { label: "200+ Test Cases", color: "purple" },
    ],
    summary: "Crowdsourced platform connecting requestors with on-the-ground 'Checkers' for verified, real-time location proof.",
    description:
      "QA scope covered the complete order lifecycle — location-based order creation, map accuracy, Checker geo-matching radius logic, offer submission, real-time order status, in-app bidirectional chat, and proof-of-presence verification. Complexity sat at the intersection of real-time location, dynamic state transitions, and crowdsourced concurrency: race conditions between simultaneous Checker offers, GPS latency, and chat ordering all represented live-data failure vectors. Serving 500K+ active users across the Middle East, I authored and executed 200+ manual test cases (BVA, equivalence partitioning) plus 100+ UI/UX reviews — correlating with a 20% uplift in user satisfaction scores.",
    metrics: [
      { value: "500K+", label: "Active users served" },
      { value: "200+", label: "Test cases authored" },
      { value: "20%", label: "Satisfaction uplift" },
    ],
  },
  {
    id: "biointellisense",
    num: "07",
    icon: "💓",
    name: "BioIntelliSense BioHub — Wearable Health Ecosystem",
    client: "BioIntelliSense (via Apexon)",
    domain: "Clinical IoT · Wearables · Cloud",
    year: "2022–2023",
    badges: [
      { label: "BioButton", color: "teal" },
      { label: "BLE", color: "blue" },
      { label: "Cloud Sync", color: "purple" },
      { label: "Doctor Dashboard", color: "amber" },
      { label: "FDA / HIPAA", color: "coral" },
      { label: "Multi-Tier", color: "green" },
    ],
    summary: "Four-tier health monitoring chain: BioButton sensor → BioHub gateway → cloud → physician dashboard.",
    description:
      "QA spanned all four tiers — validating BLE pairing stability and data transmission between BioButton and BioHub, cloud ingestion accuracy and retention under intermittent connectivity, and physician dashboard rendering of vitals, trends, and alert thresholds with clinical precision. The central challenge was end-to-end data fidelity across a multi-hop wireless-to-cloud architecture: a single dropped packet, timestamp misalignment, or incorrect aggregation at any tier could silently corrupt a clinician's view. Validation was conducted under FDA and HIPAA frameworks, requiring traceability from device sensor output through every transformation layer to the final clinical display.",
    metrics: [
      { value: "4-tier", label: "Pipeline coverage" },
      { value: "FDA+HIPAA", label: "Compliance maintained" },
    ],
  },
  {
    id: "grubbrr",
    num: "08",
    icon: "🖥",
    name: "GRUBBRR — Self-Ordering Kiosk & Omnichannel POS",
    client: "GRUBBRR",
    domain: "Retail Tech · Kiosk · POS · Payments",
    year: "2024–Present",
    badges: [
      { label: "Payment Validation", color: "amber" },
      { label: "10+ Methods", color: "coral" },
      { label: "POS Integration", color: "blue" },
      { label: "SQL / DB", color: "teal" },
      { label: "REST API", color: "purple" },
      { label: "Zero Defects", color: "green" },
    ],
    summary: "Integrated self-ordering ecosystem at restaurants, stadiums, and retail — kiosks, mobile, menu boards, POS, loyalty.",
    description:
      "Lead QA across the full product suite, with depth in payment verification — built and executed a validation framework covering 10+ distinct payment modalities (Verifone, FreedomPay, Clover, NFC, major digital wallets) — achieving zero production payment defects across all client deployments to date. API testing via Postman across payment gateway and POS integration endpoints is core to the workflow: payload accuracy, error code handling, timeout/retry behavior, and data integrity at every touchpoint. SQL-based database validation confirms order calculations, tax logic, discount applications, and transaction records are accurate at the backend — critical in high-throughput, multi-location environments where backend discrepancies compound across thousands of daily transactions.",
    metrics: [
      { value: "10+", label: "Payment methods" },
      { value: "0", label: "Production payment defects" },
      { value: "50+", label: "Defects triaged pre-prod" },
    ],
  },
];
