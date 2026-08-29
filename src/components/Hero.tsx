import { motion } from "motion/react";
import { Button } from "./ui/Button";
import { ScreenshotStack } from "./ScreenshotStack";
import { easeOutExpo, fadeUp, stagger } from "../lib/motion";

const REPO = "https://github.com/aryanjha256/zuno";

export const Hero = () => (
  <section
    id="top"
    className="relative isolate flex min-h-0 flex-1 flex-col overflow-hidden"
  >
    <div
      aria-hidden
      className="absolute top-[-40%] left-1/2 -z-10 h-[65vh] w-[110vw] -translate-x-1/2 rounded-[50%] bg-[radial-gradient(closest-side,rgba(228,61,18,0.1),transparent)]"
    />

    <motion.div
      initial="hidden"
      animate="show"
      variants={stagger(0.07, 0.05)}
      className="flex shrink-0 flex-col items-center px-5 pt-[6vh] text-center"
    >
      <motion.h1
        variants={fadeUp}
        className="font-display max-w-4xl text-[clamp(2rem,4.6vw,3.5rem)] leading-[1.03] font-semibold tracking-[-0.035em] text-balance text-text"
      >
        A ridiculously fast API client. Native. Keyboard-driven.
      </motion.h1>

      <motion.p
        variants={fadeUp}
        className="mt-6 max-w-xl text-[15px] leading-[1.6] text-balance text-text-muted sm:text-[16px]"
      >
        Postman-level capability, Zed-level feel — local-first, and fast enough
        that you forget it is there.
      </motion.p>

      <motion.div variants={fadeUp} className="mt-8">
        <Button href={REPO}>Download Zuno</Button>
      </motion.div>
    </motion.div>

    {/* Takes the remaining height; the deck bleeds past the fold. */}
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.4, ease: easeOutExpo }}
      className="mx-auto mt-[7vh] min-h-[clamp(220px,32vh,440px)] w-full max-w-[1400px] flex-1 px-5 sm:px-10"
    >
      <ScreenshotStack />
    </motion.div>
  </section>
);
