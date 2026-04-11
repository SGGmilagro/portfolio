"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import ParticleBackground from "./components/ParticleBackground";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function Home() {
  return (
    <main className="bg-[#080808] text-white min-h-screen font-sans pt-16">

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-center px-8 md:px-24 overflow-hidden">
        <ParticleBackground />
        <motion.div
          className="relative z-10 flex flex-col md:flex-row md:items-center gap-20"
          variants={stagger} initial="hidden" animate="visible">
          <div className="flex-1">
            <motion.div variants={fadeUp}
              className="inline-flex items-center gap-2 bg-cyan-400/5 border border-cyan-400/20 rounded-full px-4 py-2 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-xs tracking-widest text-cyan-400 uppercase">Risk Analytics & AI</span>
            </motion.div>
            <motion.h1 variants={fadeUp}
              className="text-6xl md:text-8xl font-bold tracking-tight mb-6 leading-none">
              Regina<br />
              <span className="text-white/20">Garfias</span>
            </motion.h1>
            <motion.p variants={fadeUp}
              className="text-lg md:text-xl text-white/40 max-w-xl leading-relaxed">
              I model risk, detect anomalies, and translate complex system behavior
              into decisions that matter.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mt-10">
              <a href="https://github.com/SGGmilagro" target="_blank"
                className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full px-5 py-2.5 text-sm text-white/70 hover:text-white transition-all">
                GitHub
              </a>
              <a href="https://linkedin.com/in/reginagarfias" target="_blank"
                className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full px-5 py-2.5 text-sm text-white/70 hover:text-white transition-all">
                LinkedIn
              </a>
              <a href="/cv.pdf" target="_blank"
                className="flex items-center gap-2 bg-cyan-400/10 hover:bg-cyan-400/20 border border-cyan-400/30 rounded-full px-5 py-2.5 text-sm text-cyan-400 transition-all">
                Download CV ↓
              </a>
            </motion.div>
          </div>
          <motion.div variants={fadeUp} className="flex-shrink-0">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 rounded-3xl bg-cyan-400/5 border border-cyan-400/10" />
              <div className="absolute inset-3 rounded-2xl overflow-hidden">
                <Image src="/photo.jpg" alt="Regina Garfias" fill className="object-cover object-top" />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-[#0f0f0f] border border-white/10 rounded-2xl px-5 py-3">
                <p className="text-xs text-white/30 mb-1">Current</p>
                <p className="text-sm text-white font-medium">MSc Business Analytics</p>
                <p className="text-xs text-cyan-400">Hult · Boston</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-xs text-white/20 tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/20 to-transparent" />
        </motion.div>
      </section>

      {/* ABOUT PREVIEW */}
      <section id="about" className="px-8 md:px-24 py-32">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.p variants={fadeUp}
            className="text-xs tracking-widest text-white/30 uppercase mb-4">About</motion.p>
          <motion.p variants={fadeUp}
            className="text-4xl md:text-5xl font-light leading-tight text-white/90 max-w-3xl mb-12">
            I am drawn to systems that<br />
            <span className="text-cyan-400">fail in interesting ways.</span>
          </motion.p>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { label: "Focus", value: "Risk Analytics & AI", icon: "◈" },
              { label: "Location", value: "Boston, MA", icon: "◎" },
              { label: "Languages", value: "EN · ES · FR", icon: "◉" },
              { label: "Licenses", value: "USPA B · SSI · Pilot", icon: "◐" },
            ].map(item => (
              <motion.div key={item.label} variants={fadeUp}
                className="bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.06] rounded-2xl p-6 transition-all">
                <p className="text-cyan-400/60 text-lg mb-3">{item.icon}</p>
                <p className="text-white/30 text-xs tracking-widest uppercase mb-1">{item.label}</p>
                <p className="text-white text-sm font-medium">{item.value}</p>
              </motion.div>
            ))}
          </div>
          <motion.div variants={fadeUp}>
            <Link href="/about"
              className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-cyan-400 transition-colors group">
              Learn more about me
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* DIVIDER */}
      <div className="mx-8 md:mx-24 h-px bg-white/[0.06]" />

      {/* PROJECTS */}
      <section id="projects" className="px-8 md:px-24 py-32">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.p variants={fadeUp}
            className="text-xs tracking-widest text-white/30 uppercase mb-4">Projects</motion.p>
          <motion.h2 variants={fadeUp}
            className="text-4xl font-light text-white/90 mb-12">Selected work</motion.h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                title: "LLM Learning Assistant",
                desc: "LLM-powered learning assistant with API integration and structured prompt orchestration.",
                tags: ["LLM", "API", "AI"],
                link: "https://github.com/SGGmilagro/llm-learning-assistant",
                image: "/llm.png"
              },
              {
                title: "Behavioral Anomaly Segmentation",
                desc: "Unsupervised segmentation using PCA and Gaussian Mixture Models for anomaly detection.",
                tags: ["Python", "PCA", "GMM"],
                link: "https://github.com/SGGmilagro/behavioral-anomaly-segmentation",
                image: "/anomaly.png"
              },
              {
                title: "Secure E-Commerce Auth Hardening",
                desc: "JWT authentication with refresh token rotation, SHA-256 hashing and revocation.",
                tags: ["Node.js", "JWT", "Security"],
                link: "https://github.com/SGGmilagro/secure-ecommerce-auth-hardening",
                image: "/auth.png"
              },
              {
                title: "SQL Portfolio Risk Diagnostics",
                desc: "Multi-horizon returns, volatility modeling and risk-adjusted performance diagnostics.",
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
            ].map((project) => (
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

      {/* DIVIDER */}
      <div className="mx-8 md:mx-24 h-px bg-white/[0.06]" />

      {/* SKILLS */}
      <section id="skills" className="px-8 md:px-24 py-32">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.p variants={fadeUp}
            className="text-xs tracking-widest text-white/30 uppercase mb-4">Skills</motion.p>
          <motion.h2 variants={fadeUp}
            className="text-4xl font-light text-white/90 mb-12">Tools & Technologies</motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { category: "Languages", items: ["Python", "R", "SQL", "JavaScript", "HTML", "CSS"] },
              { category: "Machine Learning", items: ["scikit-learn", "XGBoost", "LightGBM", "TensorFlow", "PyTorch"] },
              { category: "Analytics & BI", items: ["Power BI", "Tableau", "Matplotlib", "Seaborn", "Plotly"] },
              { category: "Engineering", items: ["AWS", "Docker", "Flask", "Git", "MongoDB", "GitHub Actions"] }
            ].map((group) => (
              <motion.div key={group.category} variants={fadeUp}
                className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6">
                <p className="text-white/30 text-xs tracking-widest uppercase mb-4">{group.category}</p>
                <ul className="space-y-2">
                  {group.items.map(item => (
                    <li key={item} className="text-white/60 text-sm flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-cyan-400/40" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* DIVIDER */}
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
          <motion.p variants={fadeUp} className="text-white/30 mb-12 text-lg">
            Open to Risk Analytics, Security Analytics and Threat Intelligence roles.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col gap-3">
            {[
              { label: "reginagarfias@proton.me", href: "mailto:reginagarfias@proton.me" },
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