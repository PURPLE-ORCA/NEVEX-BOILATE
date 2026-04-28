"use client";

import { cn } from "@/lib/utils";
import { Text } from "@/components/ui/text";

export function AuthShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-svh w-full">
      {/* Left side - Visual */}
      <div className="relative hidden w-1/2 overflow-hidden bg-background lg:block">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-muted via-background to-background" />
        
        {/* Animated particles/shapes */}
        <div className="absolute inset-0">
          <div className="absolute left-1/4 top-1/4 h-2 w-2 rounded-full bg-primary/20 animate-pulse" />
          <div className="absolute left-1/3 top-1/2 h-3 w-3 rounded-full bg-primary/10 animate-pulse delay-300" />
          <div className="absolute left-2/3 top-1/3 h-1.5 w-1.5 rounded-full bg-primary/30 animate-pulse delay-700" />
          <div className="absolute left-1/2 top-3/4 h-2 w-2 rounded-full bg-primary/15 animate-pulse delay-500" />
          <div className="absolute left-3/4 top-1/4 h-2.5 w-2.5 rounded-full bg-primary/25 animate-pulse delay-1000" />
          <div className="absolute left-1/5 top-2/3 h-1 w-1 rounded-full bg-primary/20 animate-pulse delay-200" />
          <div className="absolute left-3/5 top-1/5 h-2 w-2 rounded-full bg-primary/10 animate-pulse delay-600" />
          <div className="absolute left-4/5 top-1/2 h-1.5 w-1.5 rounded-full bg-primary/20 animate-pulse delay-400" />
        </div>

        {/* Gradient orb */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col justify-between p-12">
          <div className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-foreground" />
            <Text className="font-mono tracking-[0.2em]" variant="small">
              Sean&apos;s scratch pad
            </Text>
          </div>

          <div className="space-y-4">
            <Text className="font-mono uppercase tracking-[0.3em]" variant="xs">
              Sign in design
            </Text>
            <Text as="h2" variant="h3">
              Grid layout with a particle field on the left and a single centered form on the right.
            </Text>
          </div>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="flex w-full items-center justify-center bg-background p-6 lg:w-1/2">
        {children}
      </div>
    </div>
  );
}
