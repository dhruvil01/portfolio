import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Badge } from "./Badge";
import type { Project } from "@/data/portfolio";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  return (
    <motion.article
      initial={reduce ? false : { opacity: 0, y: 30 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group relative bg-card border border-rule rounded-2xl p-6 md:p-8 transition-all duration-500 hover:border-ink/40 hover:shadow-[0_20px_60px_-30px_rgba(0,0,0,0.25)]"
    >
      <div className="flex items-start justify-between gap-4 mb-6">
        <div className="flex items-start gap-4 min-w-0">
          <div className="text-3xl md:text-4xl select-none transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">
            {project.icon}
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
              <span>{project.num}</span>
              <span>·</span>
              <span>{project.year}</span>
            </div>
            <h3 className="font-display text-xl md:text-2xl leading-tight mt-2">
              {project.name}
            </h3>
            <div className="text-xs text-muted-foreground mt-1.5">
              {project.client} <span className="opacity-50">·</span> {project.domain}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-1.5 mb-6">
        {project.badges.map((b) => (
          <Badge key={b.label} color={b.color}>{b.label}</Badge>
        ))}
      </div>

      <p className="text-[15px] leading-relaxed text-foreground/85">
        {project.summary}
      </p>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="full"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="rule-line my-6" />
            <p className="text-[15px] leading-[1.75] text-foreground/85">
              {project.description}
            </p>
            {project.metrics.length > 0 && (
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4">
                {project.metrics.map((m) => (
                  <div key={m.label} className="border-t border-rule pt-3">
                    <div className="font-display text-2xl">{m.value}</div>
                    <div className="text-[11px] uppercase tracking-wider text-muted-foreground mt-1">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-6 flex items-center justify-between">
        <button
          onClick={() => setOpen((v) => !v)}
          className="text-xs font-mono uppercase tracking-[0.18em] text-foreground/70 hover:text-foreground inline-flex items-center gap-2 group/btn"
        >
          <span>{open ? "Collapse" : "Read case study"}</span>
          <span className={`transition-transform duration-500 ${open ? "rotate-90" : ""}`}>→</span>
        </button>
        <div className="text-[10px] font-mono text-muted-foreground">
          {project.metrics[0]?.value} · {project.metrics[0]?.label}
        </div>
      </div>
    </motion.article>
  );
}
