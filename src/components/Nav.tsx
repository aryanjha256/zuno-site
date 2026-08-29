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
  { label: "Changelog", href: "#changelog" },
  { label: "GitHub", href: REPO },
];

export const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-50 shrink-0 border-b border-border bg-canvas/80 backdrop-blur-xl">
      <Container size="wide">
        <nav className="flex h-14 items-center justify-between gap-6">
          <Logo />

          <div className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-1.5 text-[14px] text-ink-200 transition-colors hover:bg-ink-800 hover:text-text"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Button href="#download" size="sm">
              Download
            </Button>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="grid size-8 place-items-center rounded-lg text-ink-200 transition-colors hover:bg-ink-800 md:hidden"
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
            className="overflow-hidden border-t border-border md:hidden"
          >
            <Container size="wide" className="flex flex-col py-2">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-[14px] text-ink-200 hover:bg-ink-800"
                >
                  {link.label}
                </a>
              ))}
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
