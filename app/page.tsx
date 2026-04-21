"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import ParticleBackground from "./components/ParticleBackground";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const navItems = [
  { label: "About", href: "/about", isPage: true },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const stats = [
  { value: "80%", label: "Research Time Saved via Python Scraping" },
  { value: "10+", label: "Analytics Projects Shipped" },
  { value: "500K+", label: "H-1B Records Architected & Ranked in SQL" },
  { value: "208", label: "Skydives Logged" },
];

const previewCards = [
  { icon: "◈", label: "Focus", value: "Risk, Analytics & AI Strategy" },
  { icon: "◎", label: "Languages", value: "English · Spanish · French" },
  {
    icon: "◉",
    label: "Work Authorization",
    value: "OPT Eligible · STEM Extension Available",
  },
];

const tagColors: Record<string, string> = {
  "OpenAI API": "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
  LLM: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
  "AI Product": "bg-sky-500/10 text-sky-300 border-sky-500/20",
  Python: "bg-blue-500/10 text-blue-300 border-blue-500/20",
  PCA: "bg-violet-500/10 text-violet-300 border-violet-500/20",
  GMM: "bg-fuchsia-500/10 text-fuchsia-300 border-fuchsia-500/20",
  "Node.js": "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
  JWT: "bg-rose-500/10 text-rose-300 border-rose-500/20",
  Security: "bg-red-500/10 text-red-300 border-red-500/20",
  SQL: "bg-amber-500/10 text-amber-300 border-amber-500/20",
  Risk: "bg-yellow-500/10 text-yellow-300 border-yellow-500/20",
  Finance: "bg-lime-500/10 text-lime-300 border-lime-500/20",
  Segmentation: "bg-purple-500/10 text-purple-300 border-purple-500/20",
  ML: "bg-indigo-500/10 text-indigo-300 border-indigo-500/20",
  R: "bg-sky-500/10 text-sky-300 border-sky-500/20",
  NLP: "bg-pink-500/10 text-pink-300 border-pink-500/20",
  MongoDB: "bg-green-500/10 text-green-300 border-green-500/20",
};

const skillGroups = [
  {
    category: "Programming",
    skills: [
      { name: "Python", color: "bg-blue-500/20 text-blue-300 border-blue-500/30" },
      { name: "R", color: "bg-sky-500/20 text-sky-300 border-sky-500/30" },
      { name: "SQL", color: "bg-orange-500/20 text-orange-300 border-orange-500/30" },
      { name: "JavaScript", color: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30" },
      { name: "HTML", color: "bg-red-500/20 text-red-300 border-red-500/30" },
      { name: "CSS", color: "bg-purple-500/20 text-purple-300 border-purple-500/30" },
    ],
  },
  {
    category: "Machine Learning & Analytics",
    skills: [
      { name: "scikit-learn", color: "bg-orange-500/20 text-orange-300 border-orange-500/30" },
      { name: "XGBoost", color: "bg-blue-500/20 text-blue-300 border-blue-500/30" },
      { name: "TensorFlow", color: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30" },
      { name: "PyTorch", color: "bg-red-500/20 text-red-300 border-red-500/30" },
      { name: "PCA", color: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30" },
      { name: "GMM", color: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30" },
      { name: "Isolation Forest", color: "bg-teal-500/20 text-teal-300 border-teal-500/30" },
    ],
  },
  {
    category: "Visualization & Data Tools",
    skills: [
      { name: "Power BI", color: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30" },
      { name: "Tableau", color: "bg-blue-500/20 text-blue-300 border-blue-500/30" },
      { name: "Matplotlib", color: "bg-sky-500/20 text-sky-300 border-sky-500/30" },
      { name: "Plotly", color: "bg-purple-500/20 text-purple-300 border-purple-500/30" },
      { name: "Seaborn", color: "bg-teal-500/20 text-teal-300 border-teal-500/30" },
      { name: "MongoDB", color: "bg-green-500/20 text-green-300 border-green-500/30" },
      { name: "Shiny", color: "bg-pink-500/20 text-pink-300 border-pink-500/30" },
    ],
  },
  {
    category: "Security & Systems",
    skills: [
      { name: "OpenCV", color: "bg-green-500/20 text-green-300 border-green-500/30" },
      { name: "FAISS", color: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30" },
      { name: "Burp Suite", color: "bg-orange-500/20 text-orange-300 border-orange-500/30" },
      { name: "OWASP", color: "bg-red-500/20 text-red-300 border-red-500/30" },
      { name: "JWT", color: "bg-pink-500/20 text-pink-300 border-pink-500/30" },
      { name: "Docker", color: "bg-blue-500/20 text-blue-300 border-blue-500/30" },
      { name: "AWS", color: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30" },
      { name: "Git", color: "bg-orange-500/20 text-orange-300 border-orange-500/30" },
    ],
  },
];

const certifications = [
  { title: "Asset Allocation in Investment", file: "/certifications/Asset allocation in investment certificate.pdf" },
  { title: "BCG Venture & Business Builds", file: "/certifications/BCG-Venture & Business Builds Job Simulation.pdf" },
  { title: "DAX Functions in Power BI", file: "/certifications/DAX Functions in Power BI.pdf" },
  { title: "Data Analysis in Excel", file: "/certifications/Data Analysis in Excel.pdf" },
  { title: "Data-Driven Decision Making", file: "/certifications/Data-Driven Decision Making for Business.pdf" },
  { title: "Diploma in Financial Education", file: "/certifications/Diploma in Financial Education.pdf" },
  { title: "GE Aerospace Digital Technology", file: "/certifications/GE Aerospace.pdf" },
  { title: "Goldman Sachs Excel Skills", file: "/certifications/Goldman Sachs Excel Skills .pdf" },
  { title: "Hypothesis Testing in Python", file: "/certifications/Hypothesis Testing in Python.pdf" },
  { title: "Intermediate SQL", file: "/certifications/Intermediate SQL.pdf" },
  { title: "Introduction to SQL", file: "/certifications/Introduction to SQL.pdf" },
  { title: "Introduction to Git", file: "/certifications/Introduction to git .pdf" },
  { title: "Introduction to Shell", file: "/certifications/Introduction to shell.pdf" },
  { title: "JPM Investment Banking", file: "/certifications/JPM Investment Banking Job Simulation.pdf" },
  { title: "Joining Data in SQL", file: "/certifications/Joining Data in SQL.pdf" },
  { title: "Object-Oriented Programming in Python", file: "/certifications/Object Orientated in Python.pdf" },
  { title: "Sampling in Python", file: "/certifications/Sampling in Python.pdf" },
  { title: "Working with Geospatial Data in Python", file: "/certifications/Working with Geospatial Data in Python.pdf" },
];

const projects = [
  {
    title: "EllishGPT — Personalized AI Learning Assistant",
    desc: "Explored how far LLM behavior, memory, and user experience could be tailored through a personalized AI learning assistant using the OpenAI API and a custom backend. The project focused on prompt orchestration, product-layer design, and how AI systems can be shaped around specific user needs.",
    tags: ["OpenAI API", "LLM", "AI Product"],
    link: "https://github.com/SGGmilagro/llm-learning-assistant",
    image: "/llm.png",
  },
  {
    title: "Behavioral Anomaly Segmentation",
    desc: "An unsupervised anomaly segmentation pipeline designed to detect unusual behavioral patterns in high-dimensional data using PCA, Gaussian Mixture Models, and Isolation Forest. The goal was to surface outliers and hidden clusters that standard supervised workflows often miss.",
    tags: ["Python", "PCA", "GMM"],
    link: "https://github.com/SGGmilagro/behavioral-anomaly-segmentation",
    image: "/anomaly.png",
  },
  {
    title: "Secure E-Commerce Auth Hardening",
    desc: "Focused on strengthening a legacy e-commerce authentication flow by implementing JWT-based access control, refresh token rotation, revocation logic, and stronger hashing practices. The project was built to understand where authentication systems break and how practical controls reduce real security risk.",
    tags: ["Node.js", "JWT", "Security"],
    link: "https://github.com/SGGmilagro/secure-ecommerce-auth-hardening",
    image: "/auth.png",
  },
  {
    title: "SQL Portfolio Risk Diagnostics",
    desc: "A SQL-based portfolio risk diagnostics workflow for analyzing multi-horizon returns, volatility, and risk-adjusted performance. Designed to turn raw investment data into clearer signals for evaluating risk exposure and supporting decision-making under uncertainty.",
    tags: ["SQL", "Risk", "Finance"],
    link: "https://github.com/SGGmilagro/sql-portfolio-risk-diagnostics",
    image: "/risk.png",
  },
  {
    title: "Customer Segmentation & Campaign Analytics",
    desc: "Used KMeans, Gaussian Mixture Models, and classification models to identify customer clusters and predict campaign response. The project turned customer data into more actionable targeting and retention insights.",
    tags: ["Python", "Segmentation", "ML"],
    link: "https://github.com/SGGmilagro/customer-segmentation-campaign-analytics",
    image: "/segmentation.png",
  },
  {
    title: "Airbnb NLP & Text Analytics",
    desc: "An end-to-end text analytics workflow using R, tidytext, MongoDB Atlas, and Shiny to analyze Airbnb listing narratives, sentiment, and market positioning. The project combined NLP and dashboarding to show how language helps shape perceived value in marketplace listings.",
    tags: ["R", "NLP", "MongoDB"],
    link: "https://github.com/SGGmilagro/Airbnb-NLP-Text-Analytics",
    image: "/dashboard.png",
  },
];

const experience = [
  {
    role: "Data Analyst & Research Intern",
    company: "Cape RADD",
    location: "Simon's Town, South Africa",
    date: "May 2025",
    bullets: [
      "Built computer vision pipelines for dorsal fin recognition using HESAFF feature extraction, homography transforms, affine alignment, OpenCV, and FAISS.",
      "Collected and processed ecological field data across kelp forest mapping, BRUV deployment, and microplastic sampling using GIS-based spatial analytics.",
      "Combined field research and technical modeling in a marine monitoring environment where data collection was physically demanding and operationally uncertain.",
    ],
  },
  {
    role: "Course Assistant — AI Strategy & Business Analytics",
    company: "Hult International Business School",
    location: "Boston, MA",
    date: "2025 – Present",
    bullets: [
      "Supported undergraduate coursework in AI strategy and business analytics through grading, feedback, and assignment design.",
      "Helped translate technical frameworks into business-facing concepts for students with different levels of analytical experience.",
    ],
  },
  {
    role: "Business Strategist & Financial Associate",
    company: "Los Cues Inmobiliaria",
    location: "Querétaro, Mexico",
    date: "2019 – 2022",
    bullets: [
      "Reduced overdue receivables by more than 30% through CRM optimization and stronger invoicing workflows across 100+ property transactions.",
      "Delivered pricing and customer behavior insights that contributed to a 25% year-over-year increase in qualified leads.",
    ],
  },
  {
    role: "Client Advisor",
    company: "Ferragamo",
    location: "London, UK",
    date: "Feb – Mar 2023",
    bullets: [
      "Supported operations across Bond Street, Selfridges, and Dover Street Market, adapting quickly across flagship retail environments.",
      "Improved back-of-house coordination and reduced inter-store discrepancies through tighter operational follow-through.",
    ],
  },
  {
    role: "Sales Associate",
    company: "NIKKEN LATAM",
    location: "Mexico City, Mexico",
    date: "June 2017 – May 2020",
    bullets: [
      "Led seminars and group sessions for audiences of 50+ people across a wide age range, building early experience in public speaking, persuasion, and audience engagement.",
    ],
  },
  {
    role: "Social Media & Marketing Director",
    company: "Formula One in Schools — Escudería NAHUALES",
    location: "Mexico City, Mexico",
    date: "Nov 2019 – 2020",
    bullets: [
      "Led social media and marketing strategy for Escudería NAHUALES, earning the highest national score in the category.",
      "Contributed to the team's third-place finish in the 2019–2020 national season.",
    ],
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <main className="bg-[#080808] text-white min-h-screen font-sans pt-16">
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06] bg-[#080808]/80 backdrop-blur-xl">
        <div className="px-6 sm:px-8 md:px-24 h-16 flex items-center justify-between">
          <Link href="#home" className="text-cyan-400 font-semibold text-2xl tracking-tight">
            RG
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) =>
              "isPage" in item && item.isPage ? (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm text-white/50 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm text-white/50 hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              )
            )}
            <a
              href="/cv.pdf"
              download
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 text-sm text-cyan-400 transition-all hover:bg-cyan-400/20"
            >
              CV ↓
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-px bg-white transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-px bg-white transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#080808] border-t border-white/[0.06] px-8 py-10 flex flex-col gap-7"
          >
            {navItems.map((item) =>
              "isPage" in item && item.isPage ? (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-2xl font-light text-white/70 hover:text-cyan-400 transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-2xl font-light text-white/70 hover:text-cyan-400 transition-colors"
                >
                  {item.label}
                </a>
              )
            )}
            <a
              href="/cv.pdf"
              download
              target="_blank"
              rel="noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-2 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-6 py-3 text-sm text-cyan-400 w-fit"
            >
              Download CV ↓
            </a>
          </motion.div>
        )}
      </header>

      {/* HERO */}
      <section
        id="home"
        className="relative min-h-screen flex flex-col justify-center px-6 sm:px-8 md:px-24 overflow-hidden pt-16 md:pt-10"
      >
        <ParticleBackground />

        <motion.div
          className="relative z-10 flex flex-col md:flex-row md:items-center gap-12 md:gap-20"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <div className="flex-1">
            <motion.p
              variants={fadeUp}
              className="text-sm text-cyan-400/70 mb-4 tracking-wide"
            >
              Hi, I'm
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="text-6xl md:text-8xl font-bold tracking-tight mb-6 leading-none"
            >
              Regina
              <br />
              <span className="text-white/20">Garfias</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-xl sm:text-2xl md:text-2xl text-white/75 max-w-2xl leading-relaxed mb-4"
            >
              I work where analytics, risk, and strategy meet. I build technical solutions across machine learning, AI, security, and finance.
            </motion.p>



            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mt-10">
              <a
                href="#projects"
                className="bg-cyan-400/10 hover:bg-cyan-400/20 border border-cyan-400/30 rounded-full px-5 py-2.5 text-sm text-cyan-400 transition-all"
              >
                View Projects
              </a>

              <a
                href="/cv.pdf"
                download
                target="_blank"
                rel="noreferrer"
                className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-full px-5 py-2.5 text-sm text-white/70 hover:text-white transition-all"
              >
                Download Resume
              </a>

              <a
                href="https://linkedin.com/in/reginagarfias"
                target="_blank"
                rel="noreferrer"
                className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-full px-5 py-2.5 text-sm text-white/70 hover:text-white transition-all"
              >
                LinkedIn
              </a>
            </motion.div>
          </div>

          <motion.div variants={fadeUp} className="flex-shrink-0 self-start md:self-auto">
            <div className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full bg-cyan-400/5 border border-cyan-400/10" />
              <div className="absolute inset-2 rounded-full overflow-hidden">
                <Image
                  src="/photo.jpg"
                  alt="Regina Garfias"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 bg-[#0f0f0f] border border-white/10 rounded-2xl px-4 py-3">
                <p className="text-xs text-cyan-400">Graduating August 2026</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-white/20 tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/20 to-transparent" />
        </motion.div>
      </section>

      {/* STATS */}
      <section className="px-6 sm:px-8 md:px-24 py-16 md:py-20 border-y border-white/[0.06]">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10"
        >
          {stats.map((s) => (
            <motion.div key={s.label} variants={fadeUp} className="text-left md:text-center">
              <p className="text-4xl sm:text-5xl font-bold text-cyan-400 mb-2">{s.value}</p>
              <p className="text-xs tracking-widest text-white/30 uppercase">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ABOUT PREVIEW */}
      <section id="about" className="px-6 sm:px-8 md:px-24 py-24 md:py-32">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.p
            variants={fadeUp}
            className="text-xs tracking-widest text-white/30 uppercase mb-4"
          >
            About
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="text-lg leading-relaxed text-white/70 max-w-3xl mb-6"
          >
            I grew up across seven countries, which taught me early how to adapt fast,
            read people, and notice when something does not add up.
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="text-white/40 text-lg leading-relaxed max-w-3xl mb-6"
          >
            That instinct eventually became the throughline of my work: understanding
            systems, spotting vulnerabilities, and learning quickly enough to be useful
            in unfamiliar environments.
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="text-white/35 text-lg leading-relaxed max-w-3xl mb-12"
          >
            At 15, I hacked my school system. My teacher gave me an A and taught me how
            to patch the vulnerability. I've been curious about broken systems ever since
            — it just took me a while to realize that was actually a career.
          </motion.p>

          <motion.div variants={stagger} className="grid md:grid-cols-3 gap-4 mb-12">
            {previewCards.map((item) => (
              <motion.div
                key={item.label}
                variants={fadeUp}
                className="bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.06] rounded-2xl p-6 transition-all"
              >
                <p className="text-cyan-400/60 text-lg mb-3">{item.icon}</p>
                <p className="text-white/30 text-xs tracking-widest uppercase mb-1">
                  {item.label}
                </p>
                <p className="text-white text-sm font-medium">{item.value}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp}>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-cyan-400 transition-colors group"
            >
              How I think
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <div className="mx-6 sm:mx-8 md:mx-24 h-px bg-white/[0.06]" />

      {/* PROJECTS */}
      <section id="projects" className="px-6 sm:px-8 md:px-24 py-24 md:py-32">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.p
            variants={fadeUp}
            className="text-xs tracking-widest text-white/30 uppercase mb-4"
          >
            Selected Projects
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="text-4xl font-light mb-12"
          >
            <span className="text-cyan-400 drop-shadow-[0_0_20px_rgba(34,211,238,0.4)]">Selected Work</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-4">
            {projects.map((project) => (
              <motion.a
                key={project.title}
                variants={fadeUp}
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="group bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.06] hover:border-cyan-400/20 rounded-2xl overflow-hidden transition-all duration-300"
              >
                <div className="relative w-full h-52 sm:h-56 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="text-base font-semibold mb-2 text-white/80 group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/30 text-sm leading-relaxed mb-4">{project.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-xs border rounded-full px-3 py-1 ${tagColors[tag] ?? "bg-white/5 border-white/10 text-white/30"}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </section>

      <div className="mx-6 sm:mx-8 md:mx-24 h-px bg-white/[0.06]" />

      {/* FEATURED — HACKATHON */}
      <section className="px-6 sm:px-8 md:px-24 py-20 md:py-24">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-6"
        >
          {/* Hackathon */}
          <motion.div
            variants={fadeUp}
            className="bg-gradient-to-br from-cyan-400/10 via-cyan-400/5 to-transparent border border-cyan-400/20 shadow-[0_0_60px_rgba(34,211,238,0.08)] rounded-3xl p-8 md:p-16"
          >
            <p className="text-xs tracking-widest text-cyan-400 uppercase mb-4">Featured</p>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              🏆 Boston AI Week Hackathon — Won 1st Place
            </h2>

            <p className="text-white/50 text-lg leading-relaxed max-w-3xl mb-6">
              Built a prototype AI onboarding platform for small U.S. manufacturers
              struggling with knowledge transfer from retiring managers. The solution
              captured operational knowledge and mentor input to help train new workers
              faster and reduce onboarding friction.
            </p>

            <div className="flex flex-wrap gap-3">
              {["AI", "Google Developer & Scale Lab", "Hackathon Winner", "September 2025"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-cyan-400/10 border border-cyan-400/20 rounded-full px-3 py-1 text-cyan-400"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </motion.div>

          {/* Licenses */}
          <motion.div
            variants={fadeUp}
            className="bg-white/[0.02] border border-white/[0.06] rounded-3xl p-8 md:p-12"
          >
            <p className="text-xs tracking-widest text-white/30 uppercase mb-6">Licensed & Certified</p>

            <div className="grid md:grid-cols-3 gap-6">
              {/* USPA B License */}
              <div className="flex flex-col gap-3 border border-white/[0.06] rounded-2xl p-6 hover:border-cyan-400/20 transition-all">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-2xl">🪂</span>
                  <p className="text-white font-semibold text-sm">USPA B License</p>
                </div>
                <p className="text-white/30 text-xs leading-relaxed">United States Parachute Association</p>
                <p className="text-cyan-400 text-sm font-medium">208 skydives logged</p>
                <p className="text-white/20 text-xs italic">Only one accident. Pretty good odds.</p>
              </div>

              {/* British Skydiving */}
              <div className="flex flex-col gap-3 border border-white/[0.06] rounded-2xl p-6 hover:border-cyan-400/20 transition-all">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-2xl">🇬🇧</span>
                  <p className="text-white font-semibold text-sm">British Skydiving License</p>
                </div>
                <p className="text-white/30 text-xs leading-relaxed">British Skydiving Federation</p>
                <p className="text-cyan-400 text-sm font-medium">Licensed jumper, UK</p>
              </div>

              {/* Scuba */}
              <div className="flex flex-col gap-3 border border-white/[0.06] rounded-2xl p-6 hover:border-cyan-400/20 transition-all">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-2xl">🤿</span>
                  <p className="text-white font-semibold text-sm">SSI & PADI Certified</p>
                </div>
                <p className="text-white/30 text-xs leading-relaxed">Scuba Schools International · PADI</p>
                <p className="text-cyan-400 text-sm font-medium">Specialty Diver</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <div className="mx-6 sm:mx-8 md:mx-24 h-px bg-white/[0.06]" />

      {/* EXPERIENCE */}
      <section id="experience" className="px-6 sm:px-8 md:px-24 py-24 md:py-32">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.p
            variants={fadeUp}
            className="text-xs tracking-widest text-white/30 uppercase mb-4"
          >
            Experience
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="text-4xl font-light text-white/90 mb-12"
          >
            Work Experience
          </motion.h2>

          <div className="flex flex-col gap-6">
            {experience.map((job) => (
              <motion.div
                key={job.company + job.role}
                variants={fadeUp}
                className="bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.06] hover:border-cyan-400/20 rounded-2xl p-8 transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-white font-semibold text-lg">{job.role}</h3>
                    <p className="text-cyan-400 text-sm mt-1">{job.company}</p>
                    <p className="text-white/30 text-xs mt-1">{job.location}</p>
                  </div>
                  <span className="text-white/20 text-sm shrink-0">{job.date}</span>
                </div>

                <ul className="space-y-2">
                  {job.bullets.map((b, i) => (
                    <li key={i} className="flex gap-3 text-white/40 text-sm leading-relaxed">
                      <span className="text-cyan-400/40 mt-1 shrink-0">—</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <div className="mx-6 sm:mx-8 md:mx-24 h-px bg-white/[0.06]" />

      {/* SKILLS */}
      <section id="skills" className="px-6 sm:px-8 md:px-24 py-24 md:py-32">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.p
            variants={fadeUp}
            className="text-xs tracking-widest text-white/30 uppercase mb-4"
          >
            Skills
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="text-4xl font-light text-white/90 mb-12"
          >
            Tools, Technologies & Methods
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {skillGroups.map((group) => (
              <motion.div
                key={group.category}
                variants={fadeUp}
                className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6"
              >
                <p className="text-white/30 text-xs tracking-widest uppercase mb-5">
                  {group.category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`text-xs border rounded-full px-3 py-1 font-medium ${skill.color}`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* CERTIFICATIONS inside Skills */}
          <motion.div variants={fadeUp}>
            <p className="text-xs tracking-widest text-white/30 uppercase mb-6">Certifications</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {certifications.map((cert) => (
                <a
                  key={cert.title}
                  href={cert.file}
                  target="_blank"
                  rel="noreferrer"
                  className="group bg-white/[0.02] border border-white/[0.06] hover:border-cyan-400/20 rounded-xl p-4 transition-all hover:bg-white/[0.04] flex flex-col gap-2"
                >
                  <p className="text-cyan-400/50 text-xs tracking-widest uppercase">Certificate</p>
                  <p className="text-white/70 text-xs font-medium leading-snug group-hover:text-white transition-colors">
                    {cert.title}
                  </p>
                  <span className="text-white/20 text-xs group-hover:text-cyan-400 transition-colors mt-auto">
                    View →
                  </span>
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      <div className="mx-6 sm:mx-8 md:mx-24 h-px bg-white/[0.06]" />

      {/* CONTACT */}
      <section id="contact" className="px-6 sm:px-8 md:px-24 py-24 md:py-32">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.p
            variants={fadeUp}
            className="text-xs tracking-widest text-white/30 uppercase mb-4"
          >
            Contact
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="text-5xl md:text-6xl font-bold mb-4"
          >
            Let's <span className="text-cyan-400">connect.</span>
          </motion.h2>

          <motion.p variants={fadeUp} className="text-white/30 mb-12 text-lg max-w-xl">
            I'm always open to a good conversation.
          </motion.p>

          <motion.p variants={fadeUp} className="text-white/20 mb-12 text-base max-w-lg">
            Boston-based. Full-time roles starting August 2026. OPT eligible, with STEM
            extension available.
          </motion.p>

          <motion.div variants={fadeUp} className="mb-10">
            <a
              href="mailto:reginagarfias@proton.me"
              className="inline-flex items-center gap-3 bg-cyan-400/10 hover:bg-cyan-400/20 border border-cyan-400/30 rounded-full px-8 py-4 text-cyan-400 text-sm font-medium transition-all"
            >
              Say hello →
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-col gap-3">
            {[
              { label: "linkedin.com/in/reginagarfias", href: "https://linkedin.com/in/reginagarfias" },
              { label: "github.com/SGGmilagro", href: "https://github.com/SGGmilagro" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 text-white/40 hover:text-cyan-400 transition-colors text-lg group w-fit"
              >
                <span className="w-8 h-px bg-white/10 group-hover:bg-cyan-400/50 group-hover:w-12 transition-all" />
                {link.label}
              </a>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}