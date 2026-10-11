"use client";
import { useEffect, useRef, useState } from "react";
import { CheckIcon, LinkIcon } from "@/components/icons";

type Status = "idle" | "copied" | "failed";

async function copyText(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // Older browsers and non-secure contexts: fall back to a hidden textarea.
    const field = document.createElement("textarea");
    field.value = text;
    field.setAttribute("readonly", "");
    field.style.position = "fixed";
    field.style.opacity = "0";
    document.body.appendChild(field);
    field.select();
    const ok = document.execCommand("copy");
    field.remove();
    return ok;
  }
}

function CopyLinkButton({ url }: { url: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  async function onClick() {
    setStatus((await copyText(url)) ? "copied" : "failed");
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setStatus("idle"), 2000);
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex min-h-11 cursor-pointer items-center gap-2 font-mono text-[13px] transition-colors hover:text-accent ${
        status === "copied" ? "text-accent" : "text-muted"
      }`}
    >
      {status === "copied" ? <CheckIcon /> : <LinkIcon />}
      <span aria-live="polite">
        {status === "copied" ? "Link copied" : status === "failed" ? "Couldn't copy" : "Copy link to share"}
      </span>
    </button>
  );
}

export default CopyLinkButton;
