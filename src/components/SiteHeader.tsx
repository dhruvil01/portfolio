import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "Index", num: "00" },
  { to: "/work", label: "Work", num: "01" },
  { to: "/about", label: "About", num: "02" },
  { to: "/contact", label: "Contact", num: "03" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-paper/85 backdrop-blur-md border-b border-rule"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 h-16 flex items-center justify-between">
        <Link to="/" className="group flex items-center gap-3">
          <div className="w-7 h-7 rounded-full bg-ink text-paper flex items-center justify-center text-[11px] font-mono font-bold tracking-tighter">
            DP
          </div>
          <div className="hidden sm:block">
            <div className="font-display text-base leading-none">Dhruvil Parekh</div>
            <div className="text-[10px] tracking-[0.2em] text-muted-foreground uppercase mt-0.5">
              Lead QA · ISTQB
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="group relative px-4 py-2 text-sm text-foreground/80 hover:text-foreground transition-colors"
              activeProps={{ className: "!text-foreground font-medium" }}
              activeOptions={{ exact: true }}
            >
              <span className="text-[10px] font-mono text-muted-foreground mr-1.5">
                {n.num}
              </span>
              <span className="link-underline">{n.label}</span>
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="/Dhruvil_Parekh_Resume.pdf"
            download
            className="text-sm px-4 py-2 rounded-full bg-ink text-paper hover:opacity-90 transition-opacity inline-flex items-center gap-2"
          >
            Download CV
            <span className="text-xs">↓</span>
          </a>
        </div>

        <button
          className="md:hidden p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-rule bg-paper">
          <nav className="px-6 py-4 flex flex-col gap-2">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-2 text-sm flex items-center gap-3"
                activeProps={{ className: "font-medium" }}
              >
                <span className="text-[10px] font-mono text-muted-foreground">{n.num}</span>
                {n.label}
              </Link>
            ))}
            <a
              href="/Dhruvil_Parekh_Resume.pdf"
              download
              className="mt-2 text-sm px-4 py-2.5 rounded-full bg-ink text-paper text-center"
            >
              Download CV ↓
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
