"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";

interface AppContentHeaderProps {
  title: string;
}

export function AppContentHeader({ title }: AppContentHeaderProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === "dark";

  return (
    <div className="flex items-start justify-between gap-4">
      <Text as="h1" variant="h3">
        {title}
      </Text>

      <Button
        aria-label={mounted ? `Switch to ${isDark ? "light" : "dark"} mode` : "Theme toggle"}
        className="shrink-0"
        size="icon-sm"
        variant="ghost"
        onClick={() => setTheme(isDark ? "light" : "dark")}
      >
        {mounted && isDark ? <Sun /> : <Moon />}
      </Button>
    </div>
  );
}
