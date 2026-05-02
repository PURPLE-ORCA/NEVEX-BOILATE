import type { ReactNode } from "react";

import { Label } from "@/components/ui/label";
import { Text } from "@/components/ui/text";

interface SettingsFieldProps {
  label: string;
  htmlFor: string;
  hint?: string;
  children: ReactNode;
}

export function SettingsField({ label, htmlFor, hint, children }: SettingsFieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
      {hint ? (
        <Text variant="muted" className="text-xs">
          {hint}
        </Text>
      ) : null}
    </div>
  );
}
