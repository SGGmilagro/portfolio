import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <main className="bg-[#0a0a0a] text-white min-h-screen font-sans">

      {/* NAV BACK */}
      <div className="px-8 md:px-24 pt-12">
        <Link href="/" className="text-sm text-white/30 hover:text-cyan-400 transition-colors">
          ← Back
        </Link>
      </div>

      {/* HEADER */}
      <section className="px-8 md:px-24 py-24 border-b border-white/10">
        <p className="text-sm tracking-widest text-cyan-400 uppercase mb-4">About</p>
        <h1 className="text-6xl md:text-7xl font-bold tracking-tight mb-8">
          Regina<br />Garfias
        </h1>
        <p className="text-2xl text-white/50 max-w-3xl leading-relaxed">
          Security is not only technical — it is structural. I am fascinated by how 
          systems fail, how incentives distort behavior, and how data reveals hidden 
          patterns.
        </p>
      </section>

      {/* STORY */}
      <section className="px-8 md:px-24 py-24 border-b border-white/10">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-sm tracking-widest text-white/30 uppercase mb-6">Background</p>
            <p className="text-white/70 text-lg leading-relaxed">
              Mexican-Spanish, based in Boston. I came to analytics through a deep 
              obsession with understanding why things break — markets, systems, 
              organizations, incentive structures. That obsession led me to risk modeling, 
              anomaly detection, and eventually cybersecurity.
            </p>
            <p className="mt-6 text-white/70 text-lg leading-relaxed">
              I speak English, Spanish and French. I am currently completing my MSc in 
              Business Analytics at Hult International Business School, where I also work 
              as a Course Assistant teaching AI strategy to undergraduates.
            </p>
            <p className="mt-6 text-white/70 text-lg leading-relaxed">
              My long-term goal is to build advisory frameworks that strengthen resilience 
              in high-stakes environments — where the cost of being wrong is not just 
              financial, but structural.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <p className="text-sm tracking-widest text-white/30 uppercase mb-2">Philosophy</p>
            {[
              "I see things differently — pattern recognition is not just a technical skill, it is a way of thinking.",
              "High-stakes environments don't scare me. They focus me.",
              "I am obsessed with learning. Not credentials — actual understanding.",
              "Data is only useful when it changes a decision."
            ].map((q, i) => (
              <div key={i} className="border-l-2 border-cyan-400/30 pl-6">
                <p className="text-white/60 text-lg italic">{q}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LICENSES & CERTIFICATIONS */}
      <section className="px-8 md:px-24 py-24 border-b border-white/10">
        <p className="text-sm tracking-widest text-cyan-400 uppercase mb-12">Licenses & Certifications</p>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              category: "Skydiving",
              icon: "🪂",
              items: [
                "USPA B License — 208 jumps",
                "British Skydiving License",
              ]
            },
            {
              category: "Diving",
              icon: "🤿",
              items: [
                "SSI Specialty Diver",
                "PADI Certified",
              ]
            },
            {
              category: "Aviation",
              icon: "✈️",
              items: [
                "Student Pilot",
              ]
            },
            {
              category: "Cybersecurity",
              icon: "🔐",
              items: [
                "Google Cybersecurity Certificate",
                "GE Aerospace Digital Technology",
                "J.P. Morgan Investment Banking",
                "Oliver Wyman Financial Services",
              ]
            },
            {
              category: "Data & Analytics",
              icon: "📊",
              items: [
                "Supervised Learning — scikit-learn",
                "Intermediate Regression — statsmodels",
                "Hypothesis Testing in Python",
                "Joining Data in SQL",
                "Excel Skills for Business — Goldman Sachs",
              ]
            },
            {
              category: "Finance",
              icon: "📈",
              items: [
                "Asset Allocation in Investment",
                "Financial Valuation",
              ]
            },
          ].map((group) => (
            <div key={group.category} className="border border-white/10 p-8">
              <div className="text-2xl mb-4">{group.icon}</div>
              <p className="text-white/30 text-xs tracking-widest uppercase mb-4">{group.category}</p>
              <ul className="space-y-2">
                {group.items.map(item => (
                  <li key={item} className="text-white/60 text-sm">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* OUTSIDE WORK */}
      <section className="px-8 md:px-24 py-24 border-b border-white/10">
        <p className="text-sm tracking-widest text-cyan-400 uppercase mb-12">Outside of Work</p>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { icon: "🪂", title: "Skydiving", desc: "208 jumps. USPA B + British license. The closest thing to applied risk tolerance." },
            { icon: "🤿", title: "Scuba Diving", desc: "SSI Specialty Diver. Precision and calm in environments that punish mistakes." },
            { icon: "✈️", title: "Student Pilot", desc: "Learning to fly. Because why not add another high-stakes skill." },
            { icon: "⛳", title: "Golf & Poker", desc: "Strategy, patience, reading patterns. Not that different from risk modeling." },
          ].map((item) => (
            <div key={item.title} className="border border-white/10 p-8 hover:border-cyan-400/30 transition-all">
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="text-white font-semibold mb-3">{item.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 md:px-24 py-24">
        <h2 className="text-5xl font-bold mb-8">Let's connect.</h2>
        <div className="flex flex-col gap-4 text-white/50">
          <a href="mailto:reginagarfias@proton.me"
            className="hover:text-cyan-400 transition-colors text-lg">
            reginagarfias@proton.me →
          </a>
          <a href="https://linkedin.com/in/reginagarfias" target="_blank"
            className="hover:text-cyan-400 transition-colors text-lg">
            linkedin.com/in/reginagarfias →
          </a>
        </div>
      </section>

    </main>
  );
}