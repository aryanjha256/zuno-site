import { motion } from "motion/react";
import { Container } from "./ui/Container";
import { Button } from "./ui/Button";
import { Icon } from "./ui/Icon";
import { ScreenshotStack } from "./ScreenshotStack";
import { easeOutExpo, fadeUp, stagger } from "../lib/motion";

const REPO = "https://github.com/aryanjha256/zuno";

export const Hero = () => (
  <section
    id="top"
    className="relative isolate flex min-h-0 flex-1 flex-col overflow-hidden"
  >
    {/* One soft pool of light behind the headline — no gradient wash. */}
    <div
      aria-hidden
      className="absolute top-[-35%] left-1/2 -z-10 h-[65vh] w-[110vw] -translate-x-1/2 rounded-[50%] bg-[radial-gradient(closest-side,rgba(59,116,224,0.16),transparent)]"
    />
    {/* Hairline rules, the way an editor gutters a page. */}
    <div
      aria-hidden
      className="absolute inset-y-0 left-1/2 -z-10 hidden w-full max-w-6xl -translate-x-1/2 border-x border-border/60 lg:block"
    />

    <Container size="wide" className="flex min-h-0 flex-1 flex-col">
      <motion.div
        initial="hidden"
        animate="show"
        variants={stagger(0.07, 0.05)}
        className="flex shrink-0 flex-col items-center pt-[5vh] text-center"
      >
        <motion.h1
          variants={fadeUp}
          className="font-display mt-6 max-w-3xl text-[2.25rem] leading-[1.03] font-medium tracking-[-0.035em] text-balance text-text sm:text-5xl md:text-[3.5rem]"
        >
          A ridiculously fast API client.
          <span className="block text-ink-400">Native. Keyboard-driven.</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-5 max-w-md text-[15px] leading-relaxed text-pretty text-text-muted sm:text-[16px]"
        >
          Postman-level capability, Zed-level feel — local-first, and fast
          enough that you forget it is there.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-7 flex flex-col items-center gap-2.5 sm:flex-row"
        >
          <Button href="#download">
            <Icon name="download" />
            Download for macOS
          </Button>
          <Button href={REPO} variant="secondary">
            View on GitHub
            <Icon name="arrowUpRight" className="size-3.5 text-ink-300" />
          </Button>
        </motion.div>
      </motion.div>

      {/* Takes the remaining height and lets the deck bleed past the fold. */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.35, ease: easeOutExpo }}
        className="mx-auto mt-[6vh] w-full max-w-4xl min-h-0 flex-1"
      >
        <ScreenshotStack />
      </motion.div>
    </Container>
  </section>
);
