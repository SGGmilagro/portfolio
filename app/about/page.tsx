import Link from "next/link";
import Image from "next/image";

const mindsetBlocks = [
  "I weigh risk and reward before most decisions — in markets, in projects, and in life. If the upside is real and the downside is manageable, I'll take the position.",
  "I started investing young, and it shaped how I think long before it shaped what I studied. Markets taught me discipline, patience, and the importance of managing downside before getting attached to upside.",
  "I tend to see structure where others see noise. Pattern recognition is not just technical to me — it is a way of approaching complexity.",
  "Novelty does not intimidate me. New environments, new fields, and new constraints are usually where the interesting work begins.",
];

const interests = [
  { icon: "🪂", title: "Skydiving" },
  { icon: "🤿", title: "Scuba Diving" },
  { icon: "✈️", title: "Flying" },
  { icon: "⛳", title: "Golf" },
  { icon: "🚬", title: "Cigars" },
  { icon: "🎨", title: "Art" },
  { icon: "🗳️", title: "Politics" },
  { icon: "🥃", title: "Whiskey" },
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

export default function About() {
  return (
    <main className="bg-[#0a0a0a] text-white min-h-screen font-sans overflow-x-hidden">
      {/* NAV BACK */}
      <div className="px-6 sm:px-8 md:px-24 pt-24">
        <Link href="/" className="text-sm text-white/30 hover:text-cyan-400 transition-colors">
          ← Back
        </Link>
      </div>

      {/* HEADER */}
      <section className="px-6 sm:px-8 md:px-24 py-20 md:py-24 border-b border-white/10">
        <p className="text-xs tracking-widest text-cyan-400 uppercase mb-4">About</p>

        <h1 className="text-6xl md:text-7xl font-bold tracking-tight mb-8">
          Regina
          <br />
          Garfias
        </h1>

        <p className="text-2xl text-white/50 max-w-4xl leading-relaxed">
          I'm drawn to systems, incentives, and decision-making under pressure. Most of
          my work sits somewhere between analytics, risk, and strategy — using technical
          tools to understand how complex environments behave, where they break, and what
          they reveal when you look closely.
        </p>
      </section>

      {/* STORY */}
      <section className="px-6 sm:px-8 md:px-24 py-20 md:py-24 border-b border-white/10">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-xs tracking-widest text-white/30 uppercase mb-6">Background</p>

            <p className="text-white/70 text-lg leading-relaxed">
              I grew up across seven countries, which taught me early how to adapt fast,
              read people, and notice when something did not add up. Long before I had
              the language for it, I was already paying attention to systems, incentives,
              and the small details that reveal where something is off.
            </p>

            <p className="mt-6 text-white/70 text-lg leading-relaxed">
              At 15, I hacked my school system. My teacher gave me an A and taught me
              how to patch the vulnerability. I've been curious about broken systems ever
              since — it just took me a while to realize that was actually a career.
            </p>

            <p className="mt-6 text-white/70 text-lg leading-relaxed">
              Academically, my path has been equally cross-functional: a BBA in Finance
              and Computer Science in London, completed on scholarship and with honours,
              followed by a full-ride MSc in Business Analytics in Boston. That mix gave
              me both the quantitative toolkit and the commercial instinct to move
              comfortably between technical depth and business reality.
            </p>

            <p className="mt-6 text-white/70 text-lg leading-relaxed">
              Professionally, that has taken me from markets to machine learning to field
              research in South Africa, where I helped build computer vision pipelines
              from data collected underwater. The settings have changed, but the
              throughline has stayed the same: learn fast, understand the system, and get
              useful quickly in unfamiliar environments.
            </p>

            <p className="mt-6 text-white/70 text-lg leading-relaxed">
              That is why I am drawn to risk, analytics, and security-oriented work. It
              is one of the few areas where pattern recognition, technical fluency, and
              judgment under uncertainty all matter at the same time.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <p className="text-xs tracking-widest text-white/30 uppercase mb-2">How I think</p>

            {mindsetBlocks.map((q, i) => (
              <div key={i} className="border-l-2 border-cyan-400/30 pl-6">
                <p className="text-white/60 text-base leading-relaxed">{q}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS & CERTIFICATIONS */}
      <section className="px-6 sm:px-8 md:px-24 py-20 md:py-24 border-b border-white/10">
        <p className="text-xs tracking-widest text-cyan-400 uppercase mb-4">Skills</p>

        <p className="text-3xl font-light text-white/80 mb-12 max-w-2xl">
          Tools, Technologies & Methods
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillGroups.map((group) => (
            <div
              key={group.category}
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
            </div>
          ))}
        </div>

        {/* Certifications inside Skills */}
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
      </section>

      {/* OUTSIDE OF WORK */}
      <section className="px-6 sm:px-8 md:px-24 py-20 md:py-24 border-b border-white/10">
        <p className="text-xs tracking-widest text-cyan-400 uppercase mb-4">Outside of work</p>

        <p className="text-3xl font-light text-white/80 mb-12 max-w-2xl">
          Interests & hobbies
        </p>

        <div className="flex flex-wrap gap-4">
          {interests.map((item) => (
            <div
              key={item.title}
              className="flex items-center gap-3 bg-white/[0.02] border border-white/[0.06] hover:border-cyan-400/20 rounded-full px-6 py-3 transition-all"
            >
              <span className="text-xl">{item.icon}</span>
              <span className="text-white/60 text-sm font-medium">{item.title}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 sm:px-8 md:px-24 py-20 md:py-24">
        <h2 className="text-5xl font-bold mb-4">
          Let's <span className="text-cyan-400">connect.</span>
        </h2>

        <p className="text-white/30 mb-10 text-lg max-w-xl">
          I'm always open to a good conversation.
        </p>

        <a
          href="mailto:reginagarfias@proton.me"
          className="inline-flex items-center gap-3 bg-cyan-400/10 hover:bg-cyan-400/20 border border-cyan-400/30 rounded-full px-8 py-4 text-cyan-400 text-sm font-medium transition-all"
        >
          Say hello →
        </a>
      </section>
    </main>
  );
}