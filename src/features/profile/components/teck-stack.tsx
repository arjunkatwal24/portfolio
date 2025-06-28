"use client";

import Image from "next/image";
import React, { useState } from "react";

import { SimpleTooltip } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

import { TECH_STACK } from "../data/tech-stack";
import type { TechStack } from "../types/tech-stack";
import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel";

export function TeckStack() {
  return (
    <Panel id="stack">
      <PanelHeader>
        <PanelTitle>Stack</PanelTitle>
      </PanelHeader>

      <PanelContent
        className={cn(
          "[--pattern-foreground:var(--color-zinc-950)]/5 dark:[--pattern-foreground:var(--color-white)]/5",
          "bg-[radial-gradient(var(--pattern-foreground)_1px,transparent_0)] bg-size-[10px_10px] bg-center",
          "bg-zinc-950/0.75 dark:bg-white/0.75"
        )}
      >
        <ul className="flex flex-wrap gap-4 select-none">
          {TECH_STACK.map((tech) => {
            return (
              <li key={tech.key} className="flex">
                <SimpleTooltip content={tech.title}>
                  <a
                    href={tech.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={tech.title}
                  >
                    <TechIcon tech={tech} />
                    <span className="sr-only">{tech.title}</span>
                  </a>
                </SimpleTooltip>
              </li>
            );
          })}
        </ul>
      </PanelContent>
    </Panel>
  );
}

// Mapping from tech keys to Simple Icons slugs
const SIMPLE_ICONS_MAP: Record<string, string> = {
  java: "openjdk",
  kotlin: "kotlin",
  js: "javascript",
  php: "php",
  html: "html5",
  css: "css3",
  "android-studio": "androidstudio",
  "android-sdk": "android",
  wordpress: "wordpress",
  "premiere-pro": "adobepremierepro",
  "after-effects": "adobeaftereffects",
  mysql: "mysql",
  git: "git",
  github: "github",
  "google-play": "googleplay",
  vercel: "vercel",
  ps: "adobephotoshop",
};

function TechIcon({ tech }: { tech: TechStack }) {
  const [hasError, setHasError] = useState(false);

  // Check if we have a Simple Icons mapping
  const simpleIconSlug = SIMPLE_ICONS_MAP[tech.key];

  if (!simpleIconSlug || hasError) {
    // Fallback to a colorful box with first letter
    return (
      <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-blue-500 to-purple-600 text-xs font-bold text-white shadow-md">
        {tech.title.charAt(0).toUpperCase()}
      </div>
    );
  }

  return (
    <div className="flex h-8 w-8 items-center justify-center rounded-md border border-white/20 bg-white/10 shadow-md backdrop-blur-sm transition-all hover:scale-110 hover:shadow-lg dark:bg-white/5">
      <Image
        src={`https://cdn.jsdelivr.net/npm/simple-icons@v13/${simpleIconSlug}.svg`}
        alt={`${tech.title} icon`}
        width={24}
        height={24}
        onError={() => setHasError(true)}
        unoptimized
        className="brightness-0 invert filter dark:brightness-100 dark:invert-0"
      />
    </div>
  );
}
