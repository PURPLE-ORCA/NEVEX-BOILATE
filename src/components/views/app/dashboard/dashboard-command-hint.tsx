import { CommandIcon } from "lucide-react";

import { Text } from "@/components/ui/text";

interface DashboardCommandHintProps {
  label: string;
}

export function DashboardCommandHint({ label }: DashboardCommandHintProps) {
  return (
    <div className="fixed bottom-6 end-6 z-50 flex items-center gap-2 rounded-md border border-border/70 bg-background/70 px-3 py-1.5 backdrop-blur">
      <CommandIcon className="size-3" />
      <Text as="span" variant="xs" className="font-mono uppercase tracking-[0.25em] text-muted-foreground">
        {label}
      </Text>
    </div>
  );
}
