import type { BadgeColor } from "@/data/portfolio";

const map: Record<BadgeColor, string> = {
  teal: "bg-badge-teal-bg text-badge-teal-fg",
  blue: "bg-badge-blue-bg text-badge-blue-fg",
  amber: "bg-badge-amber-bg text-badge-amber-fg",
  purple: "bg-badge-purple-bg text-badge-purple-fg",
  coral: "bg-badge-coral-bg text-badge-coral-fg",
  green: "bg-badge-green-bg text-badge-green-fg",
  pink: "bg-badge-pink-bg text-badge-pink-fg",
};

export function Badge({ color, children }: { color: BadgeColor; children: React.ReactNode }) {
  return (
    <span
      className={`inline-flex items-center text-[11px] font-medium px-2.5 py-1 rounded-full whitespace-nowrap ${map[color]}`}
    >
      {children}
    </span>
  );
}
