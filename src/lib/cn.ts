/** Tiny class joiner — no need for a dependency at this size. */
export const cn = (...parts: (string | false | null | undefined)[]) =>
  parts.filter(Boolean).join(" ");
