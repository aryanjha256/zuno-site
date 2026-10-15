import { useState } from "react";
import { cn } from "../lib/cn";
import { Icon } from "./ui/Icon";

const RAW = "https://raw.githubusercontent.com/aryanjha256/zuno/main/scripts";

const platforms = [
  { id: "unix", label: "macOS / Linux", command: `curl -fsSL ${RAW}/install.sh | sh` },
  { id: "windows", label: "Windows", command: `irm ${RAW}/install.ps1 | iex` },
] as const;

const isWindows =
  typeof navigator !== "undefined" && /Win/i.test(navigator.userAgent);

/** The same command installs and updates, so it is the whole download story. */
export const InstallCommand = () => {
  const [platform, setPlatform] = useState(isWindows ? 1 : 0);
  const [copied, setCopied] = useState(false);
  const { command } = platforms[platform];

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // No clipboard access; the command is still selectable.
    }
  };

  return (
    <div id="download" className="w-full max-w-2xl scroll-mt-20">
      <div className="flex justify-center gap-1" role="tablist">
        {platforms.map((p, i) => (
          <button
            key={p.id}
            type="button"
            role="tab"
            aria-selected={i === platform}
            onClick={() => setPlatform(i)}
            className={cn(
              "rounded-[3px] px-2.5 py-1 text-[12px] transition-colors",
              i === platform ? "bg-ink-800 text-text" : "text-ink-300 hover:text-ink-100",
            )}
          >
            {p.label}
          </button>
        ))}
      </div>

      <div className="mt-2 flex items-center gap-2 rounded-[3px] border border-border-strong bg-surface py-1.5 pr-1.5 pl-3 text-left">
        <span aria-hidden className="font-mono text-[13px] text-ink-400 select-none">
          $
        </span>
        <code className="min-w-0 flex-1 overflow-x-auto font-mono text-[13px] whitespace-nowrap text-ink-100">
          {command}
        </code>
        <button
          type="button"
          onClick={copy}
          aria-label={copied ? "Copied" : "Copy install command"}
          className="grid size-8 shrink-0 place-items-center rounded-[3px] text-ink-200 transition-colors hover:bg-ink-800 hover:text-text"
        >
          <Icon name={copied ? "check" : "copy"} className={copied ? "text-status-ok" : undefined} />
        </button>
      </div>
    </div>
  );
};
