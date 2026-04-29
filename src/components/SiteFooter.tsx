import { Link } from "@tanstack/react-router";
import { profile } from "@/data/portfolio";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-32 border-t border-rule bg-cream">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-6">
            <div className="eyebrow">Let's build quality, together</div>
            <h3 className="font-display text-4xl md:text-5xl mt-4 leading-[1.05]">
              Have a release on the line?
              <br />
              <a
                href={`mailto:${profile.email}`}
                className="link-underline italic"
              >
                Say hello.
              </a>
            </h3>
          </div>

          <div className="md:col-span-3">
            <div className="eyebrow mb-4">Reach</div>
            <ul className="space-y-2 text-sm">
              <li>
                <a className="link-underline" href={`mailto:${profile.email}`}>
                  {profile.email}
                </a>
              </li>
              <li>
                <a className="link-underline" href={`tel:${profile.phone.replace(/\s/g, "")}`}>
                  {profile.phone}
                </a>
              </li>
              <li>
                <a
                  className="link-underline"
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn ↗
                </a>
              </li>
              <li className="text-muted-foreground">{profile.location}</li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="eyebrow mb-4">Navigate</div>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="link-underline">Index</Link></li>
              <li><Link to="/work" className="link-underline">Selected work</Link></li>
              <li><Link to="/about" className="link-underline">About & experience</Link></li>
              <li><Link to="/contact" className="link-underline">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="rule-line mt-14" />
        <div className="mt-6 flex flex-col md:flex-row justify-between gap-3 text-xs text-muted-foreground font-mono">
          <div>© {year} Dhruvil Parekh — All rights reserved</div>
          <div>Crafted with care · Ahmedabad → Worldwide</div>
        </div>
      </div>
    </footer>
  );
}
