import Link from "next/link";

export default function About() {
  return (
    <main className="bg-[#0a0a0a] text-white min-h-screen font-sans">

      {/* NAV BACK */}
      <div className="px-8 md:px-24 pt-24">
        <Link href="/" className="text-sm text-white/30 hover:text-cyan-400 transition-colors">
          ← Back
        </Link>
      </div>

      {/* HEADER */}
      <section className="px-8 md:px-24 py-24 border-b border-white/10">
        <p className="text-xs tracking-widest text-cyan-400 uppercase mb-4">About</p>
        <h1 className="text-6xl md:text-7xl font-bold tracking-tight mb-8">
          Regina<br />Garfias
        </h1>
        <p className="text-2xl text-white/50 max-w-3xl leading-relaxed">
          I am fascinated by how systems fail, how incentives distort behavior,
          and how data reveals what people miss when they're not paying attention.
        </p>
      </section>

      {/* STORY */}
      <section className="px-8 md:px-24 py-24 border-b border-white/10">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-xs tracking-widest text-white/30 uppercase mb-6">Background</p>
            <p className="text-white/70 text-lg leading-relaxed">
              Seven countries. Three languages. One very non-linear path.
            </p>
            <p className="mt-6 text-white/70 text-lg leading-relaxed">
              Mexican and Spanish by origin, London by education, Boston by choice.
            </p>
            <p className="mt-6 text-white/70 text-lg leading-relaxed">
              Seven countries will teach you things no classroom can. How to read a room
              in thirty seconds. How to find the pattern underneath the noise. How to be
              the person who doesn't quite fit — and make that the advantage.
            </p>
            <p className="mt-6 text-white/70 text-lg leading-relaxed">
              I hacked my school system at ten. The teacher gave me an A and patched
              the vulnerability. That's probably when I knew.
            </p>
            <p className="mt-6 text-white/70 text-lg leading-relaxed">
              Since then — two degrees (one on scholarship, one a full ride), sharks
              in South Africa, skydiving, and markets since I was fifteen. The common
              thread is curiosity and a fairly high tolerance for uncertainty.
            </p>
            <p className="mt-6 text-white/70 text-lg leading-relaxed">
              I ended up in risk analytics because it's the one field where both of
              those things are actually useful.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <p className="text-xs tracking-widest text-white/30 uppercase mb-2">How I think</p>
            {[
              "I weigh risk and reward before most decisions — in markets, in projects, and in life. If the spread is reasonable and the upside is real, I'll take the position.",
              "I've been investing since I was 15. The most useful thing I learned wasn't a strategy — it was that time in the market beats timing the market, and that a stop loss matters.",
              "I tend to see structure where others see noise. Pattern recognition isn't just technical — it's a way of approaching problems.",
              "Novelty doesn't intimidate me. New environments, new fields, new constraints — that's usually where the interesting work is.",
            ].map((q, i) => (
              <div key={i} className="border-l-2 border-cyan-400/30 pl-6">
                <p className="text-white/60 text-base leading-relaxed">{q}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LICENSES */}
      <section className="px-8 md:px-24 py-24 border-b border-white/10">
        <p className="text-xs tracking-widest text-cyan-400 uppercase mb-12">Licenses & Certifications</p>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              category: "Skydiving",
              icon: "🪂",
              items: ["USPA B License — 208 jumps", "British Skydiving License"]
            },
            {
              category: "Diving",
              icon: "🤿",
              items: ["PADI Certified", "SSI Specialty Diver"]
            },
            {
              category: "Aviation",
              icon: "✈️",
              items: ["Student Pilot"]
            },
            {
              category: "Cybersecurity",
              icon: "🔐",
              items: [
                "Google Cybersecurity Certificate",
                "GE Aerospace Digital Technology",
                "J.P. Morgan Investment Banking",
                "Goldman Sachs Software Engineering",
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
                "Machine Learning for Business",
              ]
            },
            {
              category: "Finance",
              icon: "📈",
              items: [
                "Asset Allocation in Investment",
                "CONDUSEF Financial Education — A+",
                "BGG Venture & Business Builds",
              ]
            },
          ].map((group) => (
            <div key={group.category}
              className="border border-white/10 rounded-2xl p-8 hover:border-cyan-400/20 transition-all">
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

      {/* OUTSIDE OF WORK */}
      <section className="px-8 md:px-24 py-24 border-b border-white/10">
        <p className="text-xs tracking-widest text-cyan-400 uppercase mb-4">Outside of work</p>
        <p className="text-3xl font-light text-white/80 mb-12 max-w-2xl">
          Interests & hobbies
        </p>
        <div className="flex flex-wrap gap-4">
          {[
            { icon: "🪂", title: "Skydiving" },
            { icon: "🤿", title: "Scuba Diving" },
            { icon: "✈️", title: "Flying" },
            { icon: "⛳", title: "Golf" },
            { icon: "🃏", title: "Poker" },
            { icon: "🎨", title: "Art" },
            { icon: "🗳️", title: "Politics" },
            { icon: "🚬", title: "Cigars" },
          ].map((item) => (
            <div key={item.title}
              className="flex items-center gap-3 bg-white/[0.02] border border-white/[0.06] hover:border-cyan-400/20 rounded-full px-6 py-3 transition-all">
              <span className="text-xl">{item.icon}</span>
              <span className="text-white/60 text-sm font-medium">{item.title}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 md:px-24 py-24">
        <h2 className="text-5xl font-bold mb-4">
          Let's <span className="text-cyan-400">connect.</span>
        </h2>
        <p className="text-white/30 mb-10 text-lg max-w-md">
          Always open to a good conversation — whether it's about work,
          markets, or something else entirely.
        </p>
        <a href="mailto:reginagarfias@proton.me"
          className="inline-flex items-center gap-3 bg-cyan-400/10 hover:bg-cyan-400/20 border border-cyan-400/30 rounded-full px-8 py-4 text-cyan-400 text-sm font-medium transition-all">
          Say hello →
        </a>
      </section>

    </main>
  );
}