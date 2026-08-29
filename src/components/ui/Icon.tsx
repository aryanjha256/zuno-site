import { cn } from "../../lib/cn";

const paths = {
  arrowRight: "M5 12h14M13 6l6 6-6 6",
  arrowUpRight: "M8 16 16 8M9 8h7v7",
  download: "M12 3v12M7.5 10.5 12 15l4.5-4.5M4 20h16",
  terminal: "m5 8 3.5 3.5L5 15M11.5 16H19",
  menu: "M4 7h16M4 12h16M4 17h16",
  close: "M6 6l12 12M18 6 6 18",
} as const;

export type IconName = keyof typeof paths;

export const Icon = ({
  name,
  className,
  strokeWidth = 1.6,
}: {
  name: IconName;
  className?: string;
  strokeWidth?: number;
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={cn("size-4 shrink-0", className)}
  >
    <path d={paths[name]} />
  </svg>
);
