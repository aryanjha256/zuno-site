import type { ComponentPropsWithoutRef } from "react";
import { cn } from "../../lib/cn";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md";

type Props = ComponentPropsWithoutRef<"a"> & {
  variant?: Variant;
  size?: Size;
};

/**
 * Keycap buttons: lit top edge, hard bottom edge, and a real press. They lift
 * 1px on hover and bottom out on click — the travel is the whole point, so the
 * timing is short and the easing linear-ish.
 */
const base =
  "group relative inline-flex select-none items-center justify-center gap-2 " +
  "rounded-[10px] font-medium tracking-[-0.01em] whitespace-nowrap " +
  "transition-[transform,box-shadow,background-color,border-color] duration-100 ease-out " +
  "will-change-transform";

const variants: Record<Variant, string> = {
  primary: cn(
    "bg-linear-to-b from-white to-ink-100 text-ink-900",
    "shadow-cap-light hover:-translate-y-px hover:shadow-cap-light-hover",
    "active:translate-y-px active:from-ink-100 active:to-ink-100 active:shadow-cap-press",
  ),
  secondary: cn(
    "bg-linear-to-b from-ink-700 to-ink-800 text-ink-100 ring-1 ring-border-strong",
    "shadow-cap-dark hover:-translate-y-px hover:text-text hover:shadow-cap-dark-hover",
    "active:translate-y-px active:from-ink-800 active:to-ink-800 active:shadow-cap-press",
  ),
  ghost:
    "text-ink-200 hover:bg-ink-800 hover:text-text active:translate-y-px active:bg-ink-700",
};

const sizes: Record<Size, string> = {
  sm: "h-8 px-3.5 text-[13px]",
  md: "h-10 px-4.5 text-[14px]",
};

export const Button = ({
  variant = "primary",
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
