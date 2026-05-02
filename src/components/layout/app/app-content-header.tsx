"use client";

import { useEffect, useState } from "react";
import { LogOut, Moon, Settings, Sun, User } from "lucide-react";
import { useTheme } from "next-themes";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Text } from "@/components/ui/text";
import { SidebarTrigger } from "@/components/ui/sidebar";

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
    <div className="flex items-center gap-4">
      <SidebarTrigger />

      <Text as="h1" variant="h3" className="flex-1 text-center">
        {title}
      </Text>

      <div className="flex items-center gap-2">
        <Button
          aria-label={mounted ? `Switch to ${isDark ? "light" : "dark"} mode` : "Theme toggle"}
          className="shrink-0"
          size="icon-sm"
          variant="ghost"
          onClick={() => setTheme(isDark ? "light" : "dark")}
        >
          {mounted && isDark ? <Sun /> : <Moon />}
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon-sm" className="relative rounded-full">
              <Avatar size="sm">
                <AvatarFallback>S</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <User className="mr-2 size-4" />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 size-4" />
              Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut className="mr-2 size-4" />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
