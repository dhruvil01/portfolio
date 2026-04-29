import { createFileRoute } from "@tanstack/react-router";
import { achievements, expertise, experience, profile } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Dhruvil Parekh, Lead QA Engineer (ISTQB)" },
      {
        name: "description",
        content:
          "9.5+ years across MedTech, Fintech, Retail and VR. Skills, certifications, and full professional experience timeline.",
      },
      { property: "og:title", content: "About — Dhruvil Parekh" },
      {
        property: "og:description",
        content: "Lead QA Engineer · ISTQB · 9.5+ years experience.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="overflow-hidden">
      {/* Intro */}
      <section className="pt-10 md:pt-16 pb-16 md:pb-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12 grid grid-cols-1 md:grid-cols-12 gap-10">
          <Reveal className="md:col-span-4">
            <div className="eyebrow">About · 02</div>
            <h1 className="font-display text-5xl md:text-6xl mt-4 leading-[0.98]">
              Senior QA leader,
              <br />
              <span className="italic font-light">domain-fluent.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-8 md:pt-8">
            <p className="text-lg leading-[1.7] text-foreground/85">
              {profile.summary}
            </p>
            <ul className="mt-8 space-y-3">
              {achievements.map((a, i) => (
                <Reveal as="li" key={a} delay={0.05 + i * 0.04} y={12}>
                  <div className="flex gap-4 text-foreground/85">
                    <span className="font-mono text-xs text-clay mt-1.5 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{a}</span>
                  </div>
                </Reveal>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Expertise grid */}
      <section className="py-16 md:py-24 bg-cream border-y border-rule">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <Reveal>
            <div className="eyebrow">Capabilities</div>
            <h2 className="font-display text-4xl md:text-5xl mt-3">
              Where I've built deep expertise.
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-rule rounded-2xl overflow-hidden">
            {expertise.map((cat, i) => (
              <Reveal
                key={cat.title}
                delay={(i % 3) * 0.06}
                className="bg-paper p-7"
              >
                <div className="font-display text-xl">{cat.title}</div>
                <div className="rule-line my-4" />
                <ul className="flex flex-wrap gap-1.5">
                  {cat.items.map((it) => (
                    <li
                      key={it}
                      className="text-[12px] px-2.5 py-1 rounded-md bg-cream border border-rule text-foreground/80"
                    >
                      {it}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.3}>
            <div className="mt-8 text-sm text-muted-foreground italic">
              Currently learning: <span className="text-foreground not-italic">Playwright (Test Automation)</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Experience timeline */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <Reveal>
            <div className="eyebrow">Experience · timeline</div>
            <h2 className="font-display text-4xl md:text-5xl mt-3">
              <span className="italic font-light">9.5 years.</span> Six companies. One discipline.
            </h2>
          </Reveal>

          <div className="mt-14 relative">
            <div className="absolute left-3 md:left-1/2 top-0 bottom-0 w-px bg-rule" aria-hidden />
            <div className="space-y-12">
              {experience.map((job, i) => (
                <Reveal key={job.company + job.period} delay={i * 0.05}>
                  <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
                    <span
                      className="absolute left-3 md:left-1/2 -translate-x-1/2 top-2 w-2.5 h-2.5 rounded-full bg-clay ring-4 ring-paper"
                      aria-hidden
                    />
                    <div className={`pl-10 md:pl-0 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:col-start-2 md:pl-12"}`}>
                      <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
                        {job.period}
                      </div>
                      <div className="font-display text-2xl mt-2">{job.role}</div>
                      <div className="text-sm text-foreground/80 mt-1">
                        {job.company} <span className="text-muted-foreground">· {job.location}</span>
                      </div>
                      <p className="text-sm text-muted-foreground italic mt-2">{job.blurb}</p>
                    </div>
                    <div className={`pl-10 md:pl-0 ${i % 2 === 0 ? "md:pl-12" : "md:col-start-1 md:row-start-1 md:pr-12 md:text-right"}`}>
                      <ul className={`space-y-2 text-sm text-foreground/85 ${i % 2 === 0 ? "" : "md:list-none"}`}>
                        {job.bullets.map((b) => (
                          <li key={b} className="flex gap-2 md:justify-start text-left">
                            <span className="text-clay shrink-0">→</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-16 md:py-20 bg-cream border-t border-rule">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Reveal>
            <div className="eyebrow">Certification</div>
            <div className="font-display text-2xl mt-3">ISTQB Certified Tester</div>
            <div className="text-sm text-muted-foreground mt-1">Foundation Level · March 2025</div>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="eyebrow">Education</div>
            <div className="font-display text-2xl mt-3">MCA</div>
            <div className="text-sm text-muted-foreground mt-1">
              Gujarat Technological University, 2015
            </div>
            <div className="font-display text-lg mt-3">BCA</div>
            <div className="text-sm text-muted-foreground mt-1">
              GLS Institute of Computer Technology, 2013
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="eyebrow">Languages</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {["English", "Hindi", "Gujarati"].map((l) => (
                <span key={l} className="text-sm px-3 py-1 rounded-full border border-rule bg-paper">
                  {l}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
