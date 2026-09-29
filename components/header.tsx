"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { BrandLogo } from "@/components/brand-logo";
import { Button } from "@/components/ui";

export function Header() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <header className="z-10 h-16 w-full shrink-0 border-b bg-background">
      <div className="mx-auto flex h-full w-full max-w-6xl items-center justify-between px-5">
        <BrandLogo />
        <Button
          type="button"
          onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
          variant="outline"
          size="icon"
          className="text-muted-foreground hover:text-foreground"
          aria-label="Toggle color theme"
          title="Toggle color theme"
        >
          <Sun aria-hidden="true" className="hidden size-4 dark:block" />
          <Moon aria-hidden="true" className="size-4 dark:hidden" />
        </Button>
      </div>
    </header>
  );
}