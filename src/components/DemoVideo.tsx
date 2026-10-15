import { useReducedMotion } from "motion/react";

/** Muted, looping and inline, so browsers allow it to autoplay. With reduced
    motion it holds on the poster and waits for the controls instead. */
export const DemoVideo = () => {
  const reduced = useReducedMotion();

  return (
    <figure className="relative h-full w-full overflow-hidden rounded-t-xl bg-surface ring-1 ring-white/10 shadow-frame">
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
        className="size-full object-cover object-top"
      />
    </figure>
  );
};
