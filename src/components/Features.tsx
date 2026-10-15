import { Container } from "./ui/Container";
import { Icon, type IconName } from "./ui/Icon";

const features: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "bolt",
    title: "60fps on huge responses",
    body: "A virtualized viewer folds, searches and scrolls multi-megabyte JSON without a stutter.",
  },
  {
    icon: "keyboard",
    title: "Keyboard first",
    body: "Ctrl+P to any request, Ctrl+Enter to send, Ctrl+K for every command. The mouse is optional.",
  },
  {
    icon: "branch",
    title: "Files you own, in git",
    body: "One file per request. Commit, sync and review changes from the side panel. No account, no cloud.",
  },
  {
    icon: "lines",
    title: "HTTP, GraphQL, WebSocket, gRPC",
    body: "Each a request kind of its own, with schema-aware GraphQL and gRPC reflection.",
  },
  {
    icon: "download",
    title: "Bring your collections",
    body: "Import Postman collections and environments, OpenAPI specs, or paste a curl command.",
  },
  {
    icon: "tiles",
    title: "Linux, macOS, Windows",
    body: "One command installs and updates. Open source under GPL-3.0.",
  },
];

export const Features = () => (
  <section className="pt-18 sm:pt-35">
    <Container size="wide">
      <p className="font-mono text-[11.5px] tracking-[0.08em] text-accent-400 uppercase sm:text-[12px]">
        Why Zuno
      </p>
      <h2 className="font-display mt-3 max-w-2xl text-[28px] leading-[1.12] font-semibold tracking-[-0.03em] text-balance sm:mt-3.5 sm:text-[40px] sm:leading-[1.1]">
        Everything you use Postman for, without waiting on it.
      </h2>

      <div className="mt-8 grid border-t border-border sm:mt-14 md:grid-cols-3 md:border-l">
        {features.map((f) => (
          <div
            key={f.title}
            className="flex gap-3.5 border-b border-border py-5.5 md:block md:border-r md:px-7 md:py-8"
          >
            <Icon name={f.icon} className="mt-px size-5 text-accent-400" />
            <div className="md:mt-4.5">
              <h3 className="text-[15.5px] font-medium sm:text-[16px]">{f.title}</h3>
              <p className="mt-1.5 text-[14px] leading-[1.55] text-text-muted sm:mt-2 sm:text-[14.5px] sm:leading-[1.6]">
                {f.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  </section>
);
