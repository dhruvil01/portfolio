import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, ExternalLink as Linkedin, MapPin, Download } from "lucide-react";
import { profile } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Dhruvil Parekh, Lead QA Engineer" },
      {
        name: "description",
        content: "Get in touch with Dhruvil Parekh — Lead QA Engineer. Email, phone, LinkedIn.",
      },
      { property: "og:title", content: "Contact — Dhruvil Parekh" },
      { property: "og:description", content: "Reach out for senior & lead QA engagements." },
    ],
  }),
  component: ContactPage,
});

const channels = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
    cta: "Send a message",
  },
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, "")}`,
    icon: Phone,
    cta: "Call directly",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/dhruvilparekh",
    href: profile.linkedin,
    icon: Linkedin,
    cta: "Open profile ↗",
    external: true,
  },
];

function ContactPage() {
  return (
    <div className="overflow-hidden">
      <section className="pt-10 md:pt-16 pb-20 md:pb-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <Reveal>
            <div className="eyebrow">Contact · 03</div>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="font-display text-5xl md:text-7xl mt-4 leading-[0.98] max-w-4xl">
              Let's talk about your
              <br />
              <span className="italic font-light">next release.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-2xl text-lg text-foreground/75 leading-relaxed">
              Open to senior and lead QA engagements — full-time, contract, or advisory.
              Particularly interested in regulated domains (MedTech, Fintech) and
              high-stakes payment systems.
            </p>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
            {channels.map((c, i) => (
              <Reveal key={c.label} delay={i * 0.07}>
                <a
                  href={c.href}
                  target={c.external ? "_blank" : undefined}
                  rel={c.external ? "noopener noreferrer" : undefined}
                  className="group block bg-card border border-rule rounded-2xl p-7 h-full transition-all duration-500 hover:border-ink/40 hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.25)]"
                >
                  <div className="w-11 h-11 rounded-full bg-cream flex items-center justify-center text-foreground/70 group-hover:bg-ink group-hover:text-paper transition-colors duration-500">
                    <c.icon size={18} />
                  </div>
                  <div className="eyebrow mt-6">{c.label}</div>
                  <div className="font-display text-xl mt-2 break-words">{c.value}</div>
                  <div className="mt-6 inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.18em] text-foreground/70 group-hover:text-foreground">
                    {c.cta}
                    <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <div className="mt-12 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <MapPin size={14} /> {profile.location}
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500/60" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
                </span>
                Typically responds within 24 hours
              </span>
              <a
                href="/Dhruvil_Parekh_Resume.pdf"
                download
                className="inline-flex items-center gap-2 link-underline text-foreground"
              >
                <Download size={14} /> Download CV (PDF)
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
