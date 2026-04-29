import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { projects } from "@/data/portfolio";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Selected Work — 8 QA Case Studies · Dhruvil Parekh" },
      {
        name: "description",
        content:
          "Eight detailed QA case studies across MedTech (Sibel Health, BioIntelliSense, OneTouch), VR (Meta/Oculus), Fintech (Blockchain), Insurance ETL, Location Services, and Retail Kiosks (GRUBBRR).",
      },
      { property: "og:title", content: "Selected Work — Dhruvil Parekh" },
      {
        property: "og:description",
        content: "Eight detailed QA case studies — FDA, payments, blockchain, VR/AR.",
      },
    ],
  }),
  component: WorkPage,
});

function WorkPage() {
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      requestAnimationFrame(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }, []);

  return (
    <div className="overflow-hidden">
      <section className="pt-10 md:pt-16 pb-12 md:pb-20">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <Reveal>
            <div className="eyebrow">Selected work · 01</div>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="font-display text-5xl md:text-7xl mt-4 leading-[0.98]">
              Eight case studies.
              <br />
              <span className="italic font-light">One discipline.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-foreground/75 text-lg leading-relaxed">
              From FDA-regulated wearables to blockchain ledgers, kiosk payment ecosystems
              to Oculus VR qualification — each project is a record of quality owned end
              to end.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {projects.map((p, i) => (
              <div key={p.id} id={p.id} className="scroll-mt-24">
                <ProjectCard project={p} index={i} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
