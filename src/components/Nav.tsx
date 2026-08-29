import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Container } from "./ui/Container";
import { Button } from "./ui/Button";
import { Icon } from "./ui/Icon";
import { Logo } from "./Logo";
import { easeOutExpo } from "../lib/motion";

const REPO = "https://github.com/aryanjha256/zuno";

const links = [
  { label: "Docs", href: "#docs" },
  { label: "Changelog", href: "#changelog", flag: "new" },
  { label: "Releases", href: `${REPO}/releases` },
];

export const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-50 shrink-0 border-b border-border">
      <Container size="wide">
        {/* Three tracks so the links stay optically centred regardless of
            how wide the logo or the right-hand cluster get. */}
        <nav className="grid h-16 grid-cols-[1fr_auto_1fr] items-center gap-6">
          <Logo />

          <div className="hidden items-center gap-7 md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-[14px] text-ink-200 transition-colors hover:text-text"
              >
                {link.label}
                {link.flag && (
                  <span className="absolute -top-2.5 -right-4 font-mono text-[10px] lowercase text-accent-400">
                    {link.flag}
                  </span>
                )}
              </a>
            ))}
          </div>
          <span className="md:hidden" />

          <div className="flex items-center justify-end gap-4">
            <a
              href={REPO}
              className="hidden text-[14px] text-ink-200 transition-colors hover:text-text sm:block"
            >
              GitHub
            </a>
            <Button href="#download" size="sm" variant="outline">
              Download
            </Button>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="grid size-8 place-items-center rounded-[3px] text-ink-200 transition-colors hover:bg-ink-800 md:hidden"
            >
              <Icon name={open ? "close" : "menu"} />
            </button>
          </div>
        </nav>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: easeOutExpo }}
            className="overflow-hidden border-t border-border bg-canvas md:hidden"
          >
            <Container size="wide" className="flex flex-col py-2">
              {[...links, { label: "GitHub", href: REPO, flag: undefined }].map(
                (link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-[3px] px-2 py-2.5 text-[14px] text-ink-200 hover:bg-ink-800"
                  >
                    {link.label}
                  </a>
                ),
              )}
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
