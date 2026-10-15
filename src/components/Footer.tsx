import { Container } from "./ui/Container";

const REPO = "https://github.com/aryanjha256/zuno";

const links = [
  { label: "GitHub", href: REPO },
  { label: "Releases", href: `${REPO}/releases` },
  { label: "Report a bug", href: `${REPO}/issues/new` },
];

export const Footer = () => (
  <footer className="mt-18 border-t border-border sm:mt-35">
    <Container
      size="wide"
      className="flex flex-col gap-3.5 py-6 text-[13px] text-ink-300 sm:h-22 sm:flex-row-reverse sm:items-center sm:justify-between sm:py-0"
    >
      <div className="flex gap-5 sm:gap-6">
        {links.map((link) => (
          <a key={link.href} href={link.href} className="transition-colors hover:text-text">
            {link.label}
          </a>
        ))}
      </div>
      <p>Zuno · built in Rust on GPUI · GPL-3.0</p>
    </Container>
  </footer>
);
