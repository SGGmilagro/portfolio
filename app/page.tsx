"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import ParticleBackground from "./components/ParticleBackground";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const stats = [
  { value: "7", label: "Countries Lived" },
  { value: "3", label: "Languages" },
  { value: "3", label: "Continents Worked" },
  { value: "208", label: "Skydives" },
];

const skillGroups = [
  {
    category: "Languages",
    skills: [
      { name: "Python", color: "bg-blue-500/20 text-blue-300 border-blue-500/30" },
      { name: "R", color: "bg-sky-500/20 text-sky-300 border-sky-500/30" },
      { name: "SQL", color: "bg-orange-500/20 text-orange-300 border-orange-500/30" },
      { name: "JavaScript", color: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30" },
      { name: "HTML", color: "bg-red-500/20 text-red-300 border-red-500/30" },
      { name: "CSS", color: "bg-purple-500/20 text-purple-300 border-purple-500/30" },
    ]
  },
  {
    category: "Machine Learning",
    skills: [
      { name: "scikit-learn", color: "bg-orange-500/20 text-orange-300 border-orange-500/30" },
      { name: "XGBoost", color: "bg-blue-500/20 text-blue-300 border-blue-500/30" },
      { name: "TensorFlow", color: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30" },
      { name: "PyTorch", color: "bg-red-500/20 text-red-300 border-red-500/30" },
      { name: "OpenCV", color: "bg-green-500/20 text-green-300 border-green-500/30" },
      { name: "FAISS", color: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30" },
    ]
  },
  {
    category: "Analytics & BI",
    skills: [
      { name: "Power BI", color: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30" },
      { name: "Tableau", color: "bg-blue-500/20 text-blue-300 border-blue-500/30" },
      { name: "Matplotlib", color: "bg-sky-500/20 text-sky-300 border-sky-500/30" },
      { name: "Plotly", color: "bg-purple-500/20 text-purple-300 border-purple-500/30" },
      { name: "Seaborn", color: "bg-teal-500/20 text-teal-300 border-teal-500/30" },
      { name: "MongoDB", color: "bg-green-500/20 text-green-300 border-green-500/30" },
    ]
  },
  {
    category: "Security & Engineering",
    skills: [
      { name: "Burp Suite", color: "bg-orange-500/20 text-orange-300 border-orange-500/30" },
      { name: "OWASP", color: "bg-red-500/20 text-red-300 border-red-500/30" },
      { name: "JWT", color: "bg-pink-500/20 text-pink-300 border-pink-500/30" },
      { name: "Docker", color: "bg-blue-500/20 text-blue-300 border-blue-500/30" },
      { name: "AWS", color: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30" },
      { name: "Git", color: "bg-orange-500/20 text-orange-300 border-orange-500/30" },
    ]
  },
];

const projects = [
  {
    title: "LLM Learning Assistant",
    desc: "I wanted to understand how LLMs actually think — the embeddings, the architecture, the full system. So I built a personalized learning assistant to find out how tailored you can really make one.",
    tags: ["LLM", "API", "AI"],
    link: "https://github.com/SGGmilagro/llm-learning-assistant",
    image: "/llm.png"
  },
  {
    title: "Behavioral Anomaly Segmentation",
    desc: "I wanted to know what hides in high-dimensional data that normal models miss. Applied unsupervised segmentation with PCA and Gaussian Mixture Models to find out and cluster behavioral anomalies.",
    tags: ["Python", "PCA", "GMM"],
    link: "https://github.com/SGGmilagro/behavioral-anomaly-segmentation",
    image: "/anomaly.png"
  },
  {
    title: "Secure E-Commerce Auth Hardening",
    desc: "I wanted to understand how authentication actually breaks. Built a full JWT system with refresh token rotation, SHA-256 hashing and revocation to find out.",
    tags: ["Node.js", "JWT", "Security"],
    link: "https://github.com/SGGmilagro/secure-ecommerce-auth-hardening",
    image: "/auth.png"
  },
  {
    title: "SQL Portfolio Risk Diagnostics",
    desc: "I wanted to understand how much you can learn about a client's risk profile from just the right queries. Built multi-horizon return analysis and volatility modeling to turn raw data into real investment decisions.",
    tags: ["SQL", "Risk", "Finance"],
    link: "https://github.com/SGGmilagro/sql-portfolio-risk-diagnostics",
    image: "/risk.png"
  },
  {
    title: "Customer Segmentation & Campaign Analytics",
    desc: "KMeans and GMM clustering with Random Forest campaign response prediction.",
    tags: ["Python", "scikit-learn", "ML"],
    link: "https://github.com/SGGmilagro/customer-segmentation-campaign-analytics",
    image: "/segmentation.png"
  },
  {
    title: "Airbnb NLP & Text Analytics",
    desc: "Word frequency, sentiment analysis and TF-IDF with interactive Shiny dashboard.",
    tags: ["R", "NLP", "MongoDB"],
    link: "https://github.com/SGGmilagro/Airbnb-NLP-Text-Analytics",
    image: "/dashboard.png"
  },
];

const experience = [
  {
    role: "Data Analyst & Research Intern",
    company: "Cape RADD",
    location: "Simon's Town, South Africa",
    date: "May 2025",
    bullets: [
      "Contributed to Fin Spotter, an AI marine monitoring system — engineered data pipelines for dorsal fin recognition using HESAFF feature extraction, homography transformations, and affine image alignment with OpenCV and FAISS",
      "Collected and processed ecological field data (kelp forest mapping, BRUV deployment, microplastic sampling) using GIS-based spatial analytics in support of UN SDGs 13 and 14",
      "Obtained field data by scuba diving in shark-inhabited waters — then built the pipelines to model it",
    ]
  },
  {
    role: "Course Assistant — AI Strategy & Business Analytics",
    company: "Hult International Business School",
    location: "Boston, MA",
    date: "2025 – Present",
    bullets: [
      "Supporting undergraduate courses in AI strategy and business analytics — grading, feedback, and assignment design",
      "Assisting in teaching frameworks including AI business transformation and future-proofing strategies",
    ]
  },
  {
    role: "Business Strategist & Financial Associate",
    company: "Los Cues Inmobiliaria",
    location: "Querétaro, Mexico",
    date: "2019 – 2022",
    bullets: [
      "Reduced overdue receivables by 30%+ through CRM optimization and improved invoicing workflows across 100+ property transactions",
      "Delivered pricing insights based on customer behavior analysis, contributing to 25% YoY increase in qualified leads",
    ]
  },
  {
    role: "Client Advisor",
    company: "Ferragamo",
    location: "London, UK",
    date: "Feb – Mar 2023",
    bullets: [
      "Coordinated operations across Bond Street, Selfridges, and Dover Street Market flagship locations",
      "Reduced inter-store discrepancies by ~8% through streamlined back-of-house logistics",
    ]
  },
  {
    role: "Sales Associate",
    company: "NIKKEN LATAM",
    location: "Mexico City, Mexico",
    date: "June 2017 – May 2020",
    bullets: [
      "Led seminars and managed groups of 50+ people ranging from 16 to 43 years old",
    ]
  },
  {
    role: "Social Media & Marketing Director",
    company: "Formula One in Schools — Escudería NAHUALES",
    location: "Mexico City, Mexico",
    date: "Nov 2019 – 2020",
    bullets: [
      "Achieved the highest score for social media and marketing in the national competition",
      "Escudería NAHUALES won third place at the 2019–2020 national season",
    ]
  },
];

export default function Home() {
  return (
    <main className="bg-[#080808] text-white min-h-screen font-sans pt-16">
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06] bg-[#080808]/80 backdrop-blur-xl">
        <div className="px-8 md:px-24 h-16 flex items-center justify-between">
          <Link href="#home" className="text-cyan-400 font-semibold text-2xl tracking-tight">
            RG
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-white/50 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="/cv.pdf"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 text-sm text-cyan-400 transition-all hover:bg-cyan-400/20"
            >
              CV ↓
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex flex-col justify-center px-8 md:px-24 overflow-hidden pt-10">
        <ParticleBackground />
        <motion.div
          className="relative z-10 flex flex-col md:flex-row md:items-center gap-20"
          variants={stagger} initial="hidden" animate="visible">

          <div className="flex-1">
            <motion.h1 variants={fadeUp}
              className="text-6xl md:text-8xl font-bold tracking-tight mb-6 leading-none">
              Regina<br />
              <span className="text-white/20">Garfias</span>
            </motion.h1>

            <motion.p variants={fadeUp}
              className="text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed mb-4">
              Most people can either build the model or read the room. I grew up having to do both.
            </motion.p>
            <motion.p variants={fadeUp}
              className="text-lg md:text-xl text-white/35 max-w-2xl leading-relaxed">
              I've studied sharks, shorted stocks, and stress-tested systems — because nothing teaches you more about a system than finding where it fails.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mt-10">
              <a href="https://github.com/SGGmilagro" target="_blank"
                className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-full px-5 py-2.5 text-sm text-white/70 hover:text-white transition-all">
                GitHub
              </a>
              <a href="https://linkedin.com/in/reginagarfias" target="_blank"
                className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-full px-5 py-2.5 text-sm text-white/70 hover:text-white transition-all">
                LinkedIn
              </a>
              <a href="/cv.pdf" target="_blank"
                className="bg-cyan-400/10 hover:bg-cyan-400/20 border border-cyan-400/30 rounded-full px-5 py-2.5 text-sm text-cyan-400 transition-all">
                Download CV ↓
              </a>
            </motion.div>
          </div>

          <motion.div variants={fadeUp} className="flex-shrink-0">
            <div className="relative w-72 h-72 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full bg-cyan-400/5 border border-cyan-400/10" />
              <div className="absolute inset-2 rounded-full overflow-hidden">
                <Image src="/photo.jpg" alt="Regina Garfias" fill className="object-cover object-top" />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-[#0f0f0f] border border-white/10 rounded-2xl px-5 py-3">
                <p className="text-xs text-white/30 mb-1">Currently</p>
                <p className="text-sm text-white font-medium">MSc Business Analytics</p>
                <p className="text-xs text-cyan-400">Graduating August 2026</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-xs text-white/20 tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/20 to-transparent" />
        </motion.div>
      </section>

      {/* STATS */}
      <section className="px-8 md:px-24 py-20 border-y border-white/[0.06]">
        <motion.div
          variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <motion.div key={s.label} variants={fadeUp} className="text-left md:text-center">
              <p className="text-5xl font-bold text-cyan-400 mb-2">{s.value}</p>
              <p className="text-xs tracking-widest text-white/30 uppercase">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ABOUT PREVIEW */}
      <section id="about" className="px-8 md:px-24 py-32">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.p variants={fadeUp}
            className="text-xs tracking-widest text-white/30 uppercase mb-4">About</motion.p>

          <motion.p variants={fadeUp}
            className="text-4xl md:text-5xl font-light leading-tight text-white/90 max-w-5xl mb-8">
            I grew up between countries. I've worked across three continents.
          </motion.p>

          <motion.p variants={fadeUp}
            className="text-white/40 text-lg leading-relaxed max-w-3xl mb-12">
            At 15 I hacked my school system. My teacher gave me an A and taught me how to patch the vulnerability. I've been curious about broken systems ever since — it just took me a while to realize that was actually a career.
          </motion.p>

          <motion.div variants={stagger} className="grid md:grid-cols-3 gap-4 mb-12">
            {[
              { icon: "◈", label: "Focus", value: "Risk Analytics & AI" },
              { icon: "◎", label: "Languages", value: "EN · ES · FR" },
              { icon: "◉", label: "Visa", value: "OPT + STEM OPT Eligible" },
            ].map(item => (
              <motion.div key={item.label} variants={fadeUp}
                className="bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.06] rounded-2xl p-6 transition-all">
                <p className="text-cyan-400/60 text-lg mb-3">{item.icon}</p>
                <p className="text-white/30 text-xs tracking-widest uppercase mb-1">{item.label}</p>
                <p className="text-white text-sm font-medium">{item.value}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp}>
            <Link href="/about"
              className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-cyan-400 transition-colors group">
              The full story
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <div className="mx-8 md:mx-24 h-px bg-white/[0.06]" />

      {/* PROJECTS */}
      <section id="projects" className="px-8 md:px-24 py-32">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.p variants={fadeUp}
            className="text-xs tracking-widest text-white/30 uppercase mb-4">Projects</motion.p>
          <motion.h2 variants={fadeUp}
            className="text-4xl font-light text-white/90 mb-3">Work that started with an idea</motion.h2>
          <motion.p variants={fadeUp}
            className="text-white/30 text-lg mb-12 max-w-xl">
            A few projects built from curiosity, pressure-testing ideas, and figuring out how systems actually behave.
          </motion.p>
          <div className="grid md:grid-cols-2 gap-4">
            {projects.map((project) => (
              <motion.a key={project.title} variants={fadeUp}
                href={project.link} target="_blank"
                className="group bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.06] hover:border-cyan-400/20 rounded-2xl overflow-hidden transition-all duration-300">
                <div className="relative w-full h-44 overflow-hidden">
                  <Image src={project.image} alt={project.title} fill
                    className="object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-base font-semibold mb-2 text-white/80 group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/30 text-sm leading-relaxed mb-4">{project.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag}
                        className="text-xs bg-white/5 border border-white/10 rounded-full px-3 py-1 text-white/30">
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

      <div className="mx-8 md:mx-24 h-px bg-white/[0.06]" />

      {/* HACKATHON HIGHLIGHT */}
      <section className="px-8 md:px-24 py-24">
        <motion.div
          variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="bg-cyan-400/5 border border-cyan-400/10 rounded-3xl p-10 md:p-16">
          <motion.p variants={fadeUp}
            className="text-xs tracking-widest text-cyan-400 uppercase mb-4">Featured</motion.p>
          <motion.h2 variants={fadeUp}
            className="text-3xl md:text-4xl font-bold text-white mb-4">
            🏆 Boston AI Week Hackathon — 1st Place
          </motion.h2>
          <motion.p variants={fadeUp}
            className="text-white/50 text-lg leading-relaxed max-w-3xl mb-6">
            Built an AI onboarding platform for manufacturing teams facing knowledge loss from retiring managers. The idea was to capture years of operational know-how, pair it with mentor input and company knowledge, and turn it into a system that could help train new talent faster — while making the field feel more accessible to the next generation.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
            {["AI", "Google Developer & Scale Lab", "Hackathon Winner", "September 2025"].map(tag => (
              <span key={tag}
                className="text-xs bg-cyan-400/10 border border-cyan-400/20 rounded-full px-3 py-1 text-cyan-400">
                {tag}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <div className="mx-8 md:mx-24 h-px bg-white/[0.06]" />

      {/* EXPERIENCE */}
      <section id="experience" className="px-8 md:px-24 py-32">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.p variants={fadeUp}
            className="text-xs tracking-widest text-white/30 uppercase mb-4">Experience</motion.p>
          <motion.h2 variants={fadeUp}
            className="text-4xl font-light text-white/90 mb-12">Where I've worked</motion.h2>
          <div className="flex flex-col gap-6">
            {experience.map((job) => (
              <motion.div key={job.company + job.role} variants={fadeUp}
                className="bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.06] hover:border-cyan-400/20 rounded-2xl p-8 transition-all">
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

      <div className="mx-8 md:mx-24 h-px bg-white/[0.06]" />

      {/* SKILLS */}
      <section id="skills" className="px-8 md:px-24 py-32">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.p variants={fadeUp}
            className="text-xs tracking-widest text-white/30 uppercase mb-4">Skills</motion.p>
          <motion.h2 variants={fadeUp}
            className="text-4xl font-light text-white/90 mb-12">Tools & Technologies</motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillGroups.map((group) => (
              <motion.div key={group.category} variants={fadeUp}
                className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6">
                <p className="text-white/30 text-xs tracking-widest uppercase mb-5">{group.category}</p>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map(skill => (
                    <span key={skill.name}
                      className={`text-xs border rounded-full px-3 py-1 font-medium ${skill.color}`}>
                      {skill.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <div className="mx-8 md:mx-24 h-px bg-white/[0.06]" />

      {/* CONTACT */}
      <section id="contact" className="px-8 md:px-24 py-32">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.p variants={fadeUp}
            className="text-xs tracking-widest text-white/30 uppercase mb-4">Contact</motion.p>
          <motion.h2 variants={fadeUp}
            className="text-5xl md:text-6xl font-bold mb-4">
            Let's <span className="text-cyan-400">connect.</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-white/30 mb-4 text-lg max-w-lg">
            If you're working on something where the stakes are real
            and the problem is genuinely hard — I'd like to hear about it.
          </motion.p>
          <motion.p variants={fadeUp} className="text-white/20 mb-12 text-base max-w-lg">
            Open to Risk Analytics, Security Analytics, and Threat Intelligence roles in the US.
            OPT + STEM OPT eligible from August 2026.
          </motion.p>
          <motion.div variants={fadeUp} className="mb-10">
            <a href="mailto:reginagarfias@proton.me"
              className="inline-flex items-center gap-3 bg-cyan-400/10 hover:bg-cyan-400/20 border border-cyan-400/30 rounded-full px-8 py-4 text-cyan-400 text-sm font-medium transition-all">
              Say hello →
            </a>
          </motion.div>
          <motion.div variants={fadeUp} className="flex flex-col gap-3">
            {[
              { label: "linkedin.com/in/reginagarfias", href: "https://linkedin.com/in/reginagarfias" },
              { label: "github.com/SGGmilagro", href: "https://github.com/SGGmilagro" },
            ].map(link => (
              <a key={link.label} href={link.href} target="_blank"
                className="inline-flex items-center gap-3 text-white/40 hover:text-cyan-400 transition-colors text-lg group w-fit">
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