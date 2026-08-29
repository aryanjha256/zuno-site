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

/** Depth of each card, by how far it sits behind the front one. */
const layer = [
  { y: 0, scale: 1, opacity: 1 },
  { y: -14, scale: 0.97, opacity: 0.5 },
  { y: -26, scale: 0.94, opacity: 0.22 },
  // The card that just left the front drops away underneath the deck.
  { y: 20, scale: 1, opacity: 0 },
];

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
    <div className="relative aspect-[1360/860] w-full">
      {shots.map((shot, i) => {
        const depth = (i - active + shots.length) % shots.length;
        const { y, scale, opacity } = layer[depth];

        return (
          <motion.figure
            key={shot.src}
            animate={{ y, scale, opacity }}
            initial={false}
            transition={{ duration: 0.8, ease: easeOutExpo }}
            style={{ zIndex: shots.length - depth }}
            className="absolute inset-x-0 top-0 origin-top overflow-hidden rounded-t-xl bg-surface shadow-frame"
            aria-hidden={depth !== 0}
          >
            <img
              src={shot.src}
              alt={depth === 0 ? shot.alt : ""}
              width={1360}
              height={860}
              loading={i === 0 ? "eager" : "lazy"}
              className="block w-full"
            />
          </motion.figure>
        );
      })}
    </div>
  );
};
