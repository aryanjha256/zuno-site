import { cn } from "../../lib/cn";

const paths = {
  arrowRight: "M5 12h14M13 6l6 6-6 6",
  arrowUpRight: "M8 16 16 8M9 8h7v7",
  download: "M12 3v12M7.5 10.5 12 15l4.5-4.5M4 20h16",
  terminal: "m5 8 3.5 3.5L5 15M11.5 16H19",
  menu: "M4 7h16M4 12h16M4 17h16",
  close: "M6 6l12 12M18 6 6 18",
  copy: "M9 9h10v10H9zM5 15V5h10",
  bolt: "M13 3 5 14h6l-1 7 8-11h-6z",
  keyboard: "M3 7h18v10H3zM7 11h.01M11 11h.01M15 11h.01M8 14h8",
  branch:
    "M6 3v12M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM18 9a9 9 0 0 1-9 9",
  lines: "M4 6h16M4 12h16M4 18h10",
  tiles: "M4 4h7v7H4zM13 13h7v7h-7zM13 4h7v7h-7z",
  check: "M5 12.5 10 17.5 19 7",
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
