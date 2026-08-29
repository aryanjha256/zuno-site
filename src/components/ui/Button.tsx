import type { ComponentPropsWithoutRef } from "react";
import { cn } from "../../lib/cn";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md";

type Props = ComponentPropsWithoutRef<"a"> & {
  variant?: Variant;
  size?: Size;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg font-medium " +
  "transition-colors duration-150 whitespace-nowrap";

const variants: Record<Variant, string> = {
  // Editor-chrome buttons: flat fills, 1px rings, no lift or glow.
  primary: "bg-ink-50 text-ink-900 hover:bg-white",
  secondary:
    "bg-raised text-ink-100 ring-1 ring-border-strong hover:bg-ink-700 hover:text-text",
  ghost: "text-ink-200 hover:bg-ink-800 hover:text-text",
};

const sizes: Record<Size, string> = {
  sm: "h-8 px-3 text-[13px]",
  md: "h-10 px-4 text-[14px]",
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
