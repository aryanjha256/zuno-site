import type { ReactNode } from "react";
import { cn } from "../../lib/cn";

type Props = {
  children: ReactNode;
  className?: string;
  /** `wide` is for full-bleed showcases, `narrow` for reading columns. */
  size?: "narrow" | "default" | "wide";
};

const sizes = {
  narrow: "max-w-3xl",
  default: "max-w-6xl",
  wide: "max-w-7xl",
};

export const Container = ({ children, className, size = "default" }: Props) => (
  <div className={cn("mx-auto w-full px-5 sm:px-8", sizes[size], className)}>
    {children}
  </div>
);
