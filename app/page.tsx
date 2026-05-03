export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] text-[#58a6ff] text-xs font-semibold tracking-widest uppercase border border-[#30363d]">
          Local SEO
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Fix NAP Inconsistencies<br />Across Local Directories
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Scan 50+ directories — Google Business Profile, Yelp, Yellow Pages, and more — to find every mismatch in your business Name, Address, and Phone. Get ready-to-use correction templates with direct update links.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Fixing Citations — $9/mo
        </a>
        <p className="mt-4 text-xs text-[#6e7681]">Cancel anytime. No contracts.</p>
        <div className="mt-14 grid grid-cols-3 gap-6 text-center">
          {[
            ["50+", "Directories Scanned"],
            ["NAP", "Inconsistencies Found"],
            ["1-Click", "Correction Templates"]
          ].map(([stat, label]) => (
            <div key={label} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl font-bold text-[#58a6ff]">{stat}</div>
              <div className="text-xs text-[#8b949e] mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <div className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$9<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to dominate local search</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Scan 50+ local directories",
              "Detect all NAP mismatches",
              "Correction templates per listing",
              "Direct links to update each directory",
              "Monthly re-scan & alerts",
              "Unlimited business locations"
            ].map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-sm transition-colors"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "What is a NAP inconsistency and why does it matter?",
              a: "NAP stands for Name, Address, and Phone. When these details differ across directories, search engines lose trust in your business data, hurting your local rankings. Consistent citations are a top local SEO ranking factor."
            },
            {
              q: "Which directories do you scan?",
              a: "We scan 50+ directories including Google Business Profile, Yelp, Yellow Pages, Bing Places, Apple Maps, Facebook, Foursquare, TripAdvisor, and many more niche and regional directories."
            },
            {
              q: "How do I fix the inconsistencies once found?",
              a: "After the scan, you receive a report with each mismatch highlighted and a correction template pre-filled with your correct details, plus a direct link to the listing so you can update it in seconds."
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-sm text-[#8b949e]">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#6e7681] pb-8">
        &copy; {new Date().getFullYear()} Local SEO Citation Fixer. All rights reserved.
      </footer>
    </main>
  );
}
