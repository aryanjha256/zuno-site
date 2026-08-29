import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { easeOutExpo } from "../lib/motion";

const shots = [
  { src: "/images/1.png", alt: "Zuno request and response panes side by side" },
  { src: "/images/2.png", alt: "Zuno response viewer" },
  { src: "/images/3.png", alt: "Zuno request editor" },
  { src: "/images/4.png", alt: "Zuno command palette" },
];

const ROTATE_MS = 5000;

/**
 * Depth of each card, by how far it sits behind the front one. Only the top
 * ledge of a back card is ever visible, so the steps have to be large enough
 * to read at a glance: ~20px of lift and ~4.5% of width per layer.
 *
 * `scrim` darkens a back card toward the page instead of making it
 * translucent — a receding card should still look solid, not ghosted.
 */
const layer = [
  { y: 0, scale: 1, opacity: 1, scrim: 0 },
  { y: -20, scale: 0.955, opacity: 1, scrim: 0.5 },
  { y: -38, scale: 0.912, opacity: 1, scrim: 0.72 },
  // The card that just left the front drops away underneath the deck.
  { y: 24, scale: 1, opacity: 0, scrim: 0 },
];

const transition = { duration: 0.85, ease: easeOutExpo };

export const ScreenshotStack = () => {
  const reduced = useReducedMotion();
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (reduced) return;
    const id = setInterval(
      () => setActive((i) => (i + 1) % shots.length),
      ROTATE_MS,
    );
    return () => clearInterval(id);
  }, [reduced]);

  return (
    <div className="relative h-full w-full">
      {shots.map((shot, i) => {
        const depth = (i - active + shots.length) % shots.length;
        const { y, scale, opacity, scrim } = layer[depth];

        return (
          <motion.figure
            key={shot.src}
            animate={{ y, scale, opacity }}
            initial={false}
            transition={transition}
            style={{ zIndex: shots.length - depth }}
            className="absolute inset-0 origin-top overflow-hidden rounded-t-xl bg-surface ring-1 ring-white/10 shadow-frame"
            aria-hidden={depth !== 0}
          >
            <img
              src={shot.src}
              alt={depth === 0 ? shot.alt : ""}
              width={1360}
              height={860}
              loading={i === 0 ? "eager" : "lazy"}
              className="size-full object-cover object-top"
            />
            <motion.div
              aria-hidden
              animate={{ opacity: scrim }}
              initial={false}
              transition={transition}
              className="absolute inset-0 bg-canvas"
            />
          </motion.figure>
        );
      })}
    </div>
  );
};
