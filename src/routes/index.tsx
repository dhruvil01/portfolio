import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { headlineStats, profile, projects } from "@/data/portfolio";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Reveal } from "@/components/Reveal";
import { Badge } from "@/components/Badge";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dhruvil Parekh — Lead QA Engineer · ISTQB Certified" },
      {
        name: "description",
        content:
          "Lead QA Engineer with 9.5+ years across MedTech, Fintech, Retail Kiosks and VR/AR. Zero critical defects across 20+ releases.",
      },
      { property: "og:title", content: "Dhruvil Parekh — Lead QA Engineer" },
      {
        property: "og:description",
        content: "9.5+ years owning quality. FDA-grade validation. Zero critical defects.",
      },
    ],
  }),
  component: Index,
});

const tickerWords = [
  "FDA 21 CFR",
  "HIPAA",
  "HL7 / FHIR",
  "Payment Validation",
  "REST / SOAP",
  "SQL Database Testing",
  "Risk-Based Testing",
  "Oculus OS Qualification",
  "Smart Contract Testing",
  "Postman",
  "TestRail",
  "JIRA",
  "Kubernetes",
  "Traceability Matrix",
  "ISTQB Certified",
];

function Index() {
  const reduce = useReducedMotion();
  const featured = projects.slice(0, 4);

  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section className="relative pt-10 md:pt-16 pb-20 md:pb-28">
        <div className="absolute inset-0 grain opacity-60 pointer-events-none" />
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12 relative">
          <Reveal>
            <div className="flex items-center gap-3 text-[11px] tracking-[0.22em] uppercase text-muted-foreground">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500/60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
              </span>
              Available for senior & lead QA roles · {profile.location}
            </div>
          </Reveal>

          <h1 className="font-display text-[clamp(3rem,9vw,9rem)] leading-[0.92] tracking-tight mt-6">
            <Reveal as="span" className="block">Quality,</Reveal>
            <Reveal as="span" delay={0.1} className="block">
              <span className="italic font-light">engineered</span>
              <span className="text-clay">.</span>
            </Reveal>
          </h1>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-end">
            <Reveal delay={0.2} className="md:col-span-7 max-w-2xl">
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                I'm <span className="font-medium text-foreground">{profile.name}</span> — a{" "}
                {profile.title} with {profile.yearsExperience} years owning quality from
                strategy through production release across{" "}
                <span className="italic">MedTech, Fintech, Retail Kiosks, and VR/AR</span>.
                Zero critical defects. {profile.certification}.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/work"
                  className="inline-flex items-center gap-2 rounded-full bg-ink text-paper px-6 py-3 text-sm font-medium hover:bg-ink/85 transition-all hover:gap-3"
                >
                  View case studies <ArrowUpRight size={16} />
                </Link>
                <a
                  href="/Dhruvil_Parekh_Resume.pdf"
                  download
                  className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-6 py-3 text-sm font-medium hover:border-ink/60 transition-colors"
                >
                  Download CV ↓
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium link-underline"
                >
                  Get in touch
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.35} className="md:col-span-5">
              <div className="grid grid-cols-2 gap-x-4 gap-y-6">
                {headlineStats.map((s) => (
                  <div key={s.label} className="border-t border-ink/30 pt-3">
                    <div className="font-display text-4xl md:text-5xl">
                      <AnimatedCounter value={s.value} />
                    </div>
                    <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground mt-2">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SCROLLING TICKER */}
      <section
        aria-hidden
        className="border-y border-rule bg-cream py-5 overflow-hidden"
      >
        <motion.div
          className="flex gap-12 whitespace-nowrap"
          animate={reduce ? undefined : { x: ["0%", "-50%"] }}
          transition={{ duration: 45, ease: "linear", repeat: Infinity }}
        >
          {[...tickerWords, ...tickerWords].map((w, i) => (
            <span
              key={i}
              className="font-display text-2xl md:text-3xl text-foreground/40 italic flex items-center gap-12"
            >
              {w}
              <span className="text-clay">✦</span>
            </span>
          ))}
        </motion.div>
      </section>

      {/* FEATURED CASE STUDIES */}
      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="flex items-end justify-between gap-8 mb-12 md:mb-16">
            <Reveal>
              <div className="eyebrow">Selected work · 01</div>
              <h2 className="font-display text-4xl md:text-6xl mt-3 leading-[1.02]">
                Case studies that
                <br />
                <span className="italic font-light">shipped to production.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.15} className="hidden md:block">
              <Link
                to="/work"
                className="text-sm link-underline inline-flex items-center gap-2"
              >
                All 8 projects <ArrowUpRight size={14} />
              </Link>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {featured.map((p, i) => (
              <Reveal key={p.id} delay={i * 0.06}>
                <Link
                  to="/work"
                  hash={p.id}
                  className="group block bg-card border border-rule rounded-2xl p-6 md:p-8 h-full transition-all duration-500 hover:border-ink/40 hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.25)]"
                >
                  <div className="flex items-start justify-between mb-5">
                    <div className="text-3xl transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">
                      {p.icon}
                    </div>
                    <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
                      {p.num} / {p.year}
                    </div>
                  </div>
                  <h3 className="font-display text-2xl leading-tight">{p.name}</h3>
                  <div className="text-xs text-muted-foreground mt-2">{p.domain}</div>
                  <div className="flex flex-wrap gap-1.5 mt-5">
                    {p.badges.slice(0, 4).map((b) => (
                      <Badge key={b.label} color={b.color}>{b.label}</Badge>
                    ))}
                  </div>
                  <p className="mt-5 text-sm leading-relaxed text-foreground/75 line-clamp-3">
                    {p.summary}
                  </p>
                  <div className="mt-6 inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.18em] text-foreground/70 group-hover:text-foreground">
                    Read case study
                    <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 md:hidden">
            <Link to="/work" className="text-sm link-underline">
              View all 8 projects →
            </Link>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="py-20 md:py-32 bg-cream border-y border-rule">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12 grid grid-cols-1 md:grid-cols-12 gap-10">
          <Reveal className="md:col-span-4">
            <div className="eyebrow">Approach · 02</div>
            <h2 className="font-display text-4xl md:text-5xl mt-3 leading-[1.05]">
              Quality is a system,
              <br />
              <span className="italic font-light">not a stage.</span>
            </h2>
          </Reveal>
          <div className="md:col-span-8 space-y-8">
            {[
              {
                t: "Strategy before execution",
                d: "I lead with risk-based test strategies, traceability matrices, and clear acceptance criteria — so QA scales with the product, not against it.",
              },
              {
                t: "Compliance is non-negotiable",
                d: "FDA 21 CFR, HIPAA, HL7/FHIR, IEEE 11073 SDC — I've validated regulated workflows where a missed defect is a patient safety event, not a bug ticket.",
              },
              {
                t: "Numbers, not opinions",
                d: "Defect leakage, regression cycle time, traceability coverage. I track what matters and report what executives can act on.",
              },
            ].map((row, i) => (
              <Reveal key={row.t} delay={i * 0.08}>
                <div className="grid grid-cols-12 gap-4 border-t border-ink/15 pt-6">
                  <div className="col-span-12 sm:col-span-4 font-display text-xl">{row.t}</div>
                  <p className="col-span-12 sm:col-span-8 text-foreground/80 leading-relaxed">
                    {row.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
