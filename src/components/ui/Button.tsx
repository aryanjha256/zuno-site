import type { ComponentPropsWithoutRef } from "react";
import { cn } from "../../lib/cn";

type Variant = "accent" | "outline" | "ghost";
type Size = "sm" | "md";

type Props = ComponentPropsWithoutRef<"a"> & {
  variant?: Variant;
  size?: Size;
};

/** Flat and square-shouldered — the color does the work, not the geometry. */
const base =
  "inline-flex select-none items-center justify-center gap-2 rounded-[3px] " +
  "font-medium tracking-[-0.005em] whitespace-nowrap transition-colors duration-150";

const variants: Record<Variant, string> = {
  accent: "bg-accent-500 text-white hover:bg-accent-400 active:bg-accent-600",
  outline:
    "border border-border-strong text-ink-100 hover:border-ink-400 hover:text-text",
  ghost: "text-ink-200 hover:text-text",
};

const sizes: Record<Size, string> = {
  sm: "h-8 px-3.5 text-[13px]",
  md: "h-11 px-6 text-[15px]",
};

export const Button = ({
  variant = "accent",
  size = "md",
  className,
  href = "#",
  ...rest
}: Props) => (
  <a
    href={href}
    className={cn(base, variants[variant], sizes[size], className)}
    {...rest}
  />
);
