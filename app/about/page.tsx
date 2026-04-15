import Link from "next/link";
import Image from "next/image";

const mindsetBlocks = [
  "I weigh risk and reward before most decisions — in markets, in projects, and in life. If the upside is real and the downside is manageable, I’ll take the position.",
  "I started investing young, and it shaped how I think long before it shaped what I studied. Markets taught me discipline, patience, and the importance of managing downside before getting attached to upside.",
  "I tend to see structure where others see noise. Pattern recognition is not just technical to me — it is a way of approaching complexity.",
  "Novelty does not intimidate me. New environments, new fields, and new constraints are usually where the interesting work begins.",
];

const certificationGroups = [
  {
    category: "Selected Certifications",
    icon: "🏅",
    items: [
      "GE Aerospace Digital Technology",
      "Google Cybersecurity Certificate",
      "Joining Data in SQL",
      "Hypothesis Testing in Python",
    ],
  },
  {
    category: "Data & Analytics",
    icon: "📊",
    items: [
      "Sampling in Python",
      "Introduction to Shell",
      "Introduction to SQL",
      "Object-Oriented Programming in Python",
    ],
  },
];

const interests = [
  { icon: "🪂", title: "Skydiving" },
  { icon: "🤿", title: "Scuba Diving" },
  { icon: "✈️", title: "Flying" },
  { icon: "⛳", title: "Golf" },
  { icon: "🃏", title: "Poker" },
  { icon: "🎨", title: "Art" },
  { icon: "🗳️", title: "Politics" },
  { icon: "🥃", title: "Whiskey" },
];

const featuredCertificates = [
  {
    title: "Joining Data in SQL",
    file: "/certifications/certificate-17.pdf",
  },
  {
    title: "Hypothesis Testing in Python",
    file: "/certifications/certificate-18.pdf",
  },
  {
    title: "Sampling in Python",
    file: "/certifications/certificate-19.pdf",
  },
  {
    title: "Introduction to Shell",
    file: "/certifications/Introduction to shell.pdf",
  },
  {
    title: "Introduction to SQL",
    file: "/certifications/Introduction to SQL.pdf",
  },
  {
    title: "Object-Oriented Programming in Python",
    file: "/certifications/Object Orientated in Python.pdf",
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
          I’m drawn to systems, incentives, and decision-making under pressure. Most of
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
              Seven countries. Three languages. One non-linear path.
            </p>

            <p className="mt-6 text-white/70 text-lg leading-relaxed">
              I grew up across seven countries, which taught me early how to adapt fast,
              read people, and notice when something did not add up. Long before I had
              the language for it, I was already paying attention to systems, incentives,
              and the small details that reveal where something is off.
            </p>

            <p className="mt-6 text-white/70 text-lg leading-relaxed">
              At 10, I found a vulnerability in my school’s grading system. My teacher
              turned it into a lesson: he gave me an A, patched the issue, and showed me
              that curiosity is most useful when it improves a system rather than just
              breaking it. I have been interested in failure points ever since.
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

      {/* CERTIFICATIONS */}
      <section className="px-6 sm:px-8 md:px-24 py-20 md:py-24 border-b border-white/10">
        <p className="text-xs tracking-widest text-cyan-400 uppercase mb-4">
          Selected Certifications
        </p>

        <p className="text-3xl font-light text-white/80 mb-12 max-w-2xl">
          A curated selection for now — the rest can be organized once every file is renamed cleanly.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {featuredCertificates.map((cert) => (
            <a
              key={cert.title}
              href={cert.file}
              target="_blank"
              rel="noreferrer"
              className="group bg-white/[0.02] border border-white/[0.06] hover:border-cyan-400/20 rounded-2xl p-5 transition-all hover:bg-white/[0.04]"
            >
              <div className="relative h-40 w-full rounded-xl overflow-hidden border border-white/10 mb-4 bg-white/5">
                <Image
                  src="/dashboard.png"
                  alt={cert.title}
                  fill
                  className="object-cover opacity-30 group-hover:opacity-40 transition-all"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/20 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-xs tracking-widest uppercase text-cyan-300/80 mb-1">
                    Certificate
                  </p>
                  <p className="text-sm text-white/90 font-medium leading-snug">{cert.title}</p>
                </div>
              </div>
              <span className="text-sm text-white/40 group-hover:text-cyan-400 transition-colors">
                Open credential →
              </span>
            </a>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {certificationGroups.map((group) => (
            <div
              key={group.category}
              className="border border-white/10 rounded-2xl p-8 hover:border-cyan-400/20 transition-all"
            >
              <div className="text-2xl mb-4">{group.icon}</div>
              <p className="text-white/30 text-xs tracking-widest uppercase mb-4">
                {group.category}
              </p>

              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="text-white/60 text-sm leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* OUTSIDE OF WORK */}
      <section className="px-6 sm:px-8 md:px-24 py-20 md:py-24 border-b border-white/10">
        <p className="text-xs tracking-widest text-cyan-400 uppercase mb-4">Outside of work</p>

        <p className="text-3xl font-light text-white/80 mb-4 max-w-2xl">
          Interests & hobbies
        </p>

        <p className="text-white/40 text-lg leading-relaxed max-w-3xl mb-12">
          Most of the things I do outside work reward the same instincts I rely on
          professionally: patience, precision, situational awareness, and good judgment
          under pressure.
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
          Let’s <span className="text-cyan-400">connect.</span>
        </h2>

        <p className="text-white/30 mb-10 text-lg max-w-xl">
          I’m always open to a good conversation — especially about risk, systems, analytics, security, or work that sits at the intersection of technical depth and business judgment.
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