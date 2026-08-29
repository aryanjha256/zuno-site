import { cn } from "../lib/cn";

export const Logo = ({ className }: { className?: string }) => (
  <a
    href="#top"
    aria-label="Zuno home"
    className={cn("inline-flex items-center gap-2.5", className)}
  >
    <img src="/zuno.svg" alt="" className="size-7 rounded-lg" />
    <span className="font-display text-[17px] font-medium tracking-[-0.02em] text-text">
      Zuno
    </span>
  </a>
);
