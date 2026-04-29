import { animate, useInView, useMotionValue, useReducedMotion, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

interface Props {
  value: string; // "9.5+", "20+", "0", "60%"
  className?: string;
}

// Parses a value like "9.5+" -> { num: 9.5, prefix: "", suffix: "+", decimals: 1 }
function parse(value: string) {
  const match = value.match(/^([^\d.-]*)(-?\d+(?:\.\d+)?)(.*)$/);
  if (!match) return null;
  const num = parseFloat(match[2]);
  const decimals = match[2].includes(".") ? match[2].split(".")[1].length : 0;
  return { prefix: match[1] ?? "", num, suffix: match[3] ?? "", decimals };
}

export function AnimatedCounter({ value, className }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const parsed = parse(value);
  const mv = useMotionValue(0);
  const display = useTransform(mv, (v) => {
    if (!parsed) return value;
    return `${parsed.prefix}${v.toFixed(parsed.decimals)}${parsed.suffix}`;
  });

  useEffect(() => {
    if (!parsed || !inView) return;
    if (reduce) {
      mv.set(parsed.num);
      return;
    }
    const controls = animate(mv, parsed.num, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
    });
    return controls.stop;
  }, [inView, parsed, mv, reduce]);

  if (!parsed) return <span ref={ref} className={className}>{value}</span>;

  return (
    <motion.span ref={ref} className={className}>
      {display}
    </motion.span>
  );
}
