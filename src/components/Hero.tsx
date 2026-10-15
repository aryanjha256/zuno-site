import { motion } from "motion/react";
import { DemoVideo } from "./DemoVideo";
import { InstallCommand } from "./InstallCommand";
import { easeOutExpo, fadeUp, stagger } from "../lib/motion";

const REPO = "https://github.com/aryanjha256/zuno";

export const Hero = () => (
  <section id="top" className="relative isolate">
    <div
      aria-hidden
      className="absolute top-[-380px] left-1/2 -z-10 h-[760px] w-[min(1000px,150vw)] -translate-x-1/2 rounded-[50%] bg-[radial-gradient(closest-side,rgba(228,61,18,0.12),transparent)]"
    />

    <motion.div
      initial="hidden"
      animate="show"
      variants={stagger(0.07, 0.05)}
      className="flex flex-col items-center px-4 pt-11 text-center sm:px-5 sm:pt-22"
    >
      <motion.h1
        variants={fadeUp}
        className="font-display max-w-4xl text-[clamp(2rem,4.6vw,3.5rem)] leading-[1.04] font-semibold tracking-[-0.035em] text-balance text-text"
      >
        A ridiculously fast API client. Native. Keyboard-driven.
      </motion.h1>

      <motion.p
        variants={fadeUp}
        className="mt-5 max-w-xl text-[15px] leading-[1.6] text-balance text-text-muted sm:mt-6 sm:text-[16px]"
      >
        Postman-level power with Zed-level feel. No account, no cloud. Your
        requests are plain files you own, versioned in git.
      </motion.p>

      <motion.div variants={fadeUp} className="mt-7 flex w-full flex-col items-center sm:mt-8">
        <InstallCommand />
        <a
          href={`${REPO}/releases/latest`}
          className="mt-3 text-[13px] text-ink-300 transition-colors hover:text-text"
        >
          Or download a .deb, AppImage, tarball, .app or zip
        </a>
      </motion.div>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.4, ease: easeOutExpo }}
      className="mt-11 sm:mt-16 sm:px-10"
    >
      <DemoVideo />
    </motion.div>
  </section>
);
