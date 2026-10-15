import { useReducedMotion } from "motion/react";

const backdrop = {
  backgroundImage:
    "radial-gradient(120% 90% at 50% 0%, var(--color-accent-600) 0%, #2a0d05 70%)",
};

/**
 * The video sits on a backdrop panel. Below `sm` it keeps a readable height and
 * runs off the right edge instead of shrinking, so the side panel and request
 * on the left always show.
 *
 * Muted, looping and inline, so browsers allow it to autoplay. With reduced
 * motion it holds on the poster and waits for the controls instead.
 */
export const DemoVideo = () => {
  const reduced = useReducedMotion();

  return (
    <div
      style={backdrop}
      className="ml-4 overflow-hidden rounded-l-[10px] py-5 pl-5 ring-1 ring-white/5 sm:mx-auto sm:max-w-[1200px] sm:rounded-[10px] sm:p-6 lg:p-10"
    >
      <video
        src="/demo.mp4"
        poster="/demo.jpg"
        width={1920}
        height={1080}
        autoPlay={!reduced}
        controls={!!reduced}
        muted
        loop
        playsInline
        preload="auto"
        aria-label="Zuno: opening a request from the palette, sending it, searching the response, then committing the collection with git"
        className="block aspect-video w-[max(480px,100%)] max-w-none rounded-l-[6px] bg-surface shadow-[0_0_0_1px_rgb(0_0_0/0.5),0_24px_60px_-20px_rgb(0_0_0/0.75)] sm:w-full sm:rounded-[6px]"
      />
    </div>
  );
};
