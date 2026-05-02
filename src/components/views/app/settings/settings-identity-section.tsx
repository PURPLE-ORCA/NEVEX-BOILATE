import { AtSignIcon } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { SettingsField } from "./settings-field";
import { SettingsSection } from "./settings-section";

interface SettingsIdentitySectionProps {
  onDirtyChange: () => void;
}

export function SettingsIdentitySection({ onDirtyChange }: SettingsIdentitySectionProps) {
  return (
    <>
      <SettingsSection title="Identity">
        <SettingsField label="Display name" htmlFor="p-name">
          <Input id="p-name" defaultValue="Sean Brydon" onChange={onDirtyChange} />
        </SettingsField>

        <SettingsField label="Handle" htmlFor="p-handle">
          <div className="flex h-9 items-center gap-1 rounded-lg border border-input bg-background px-3 font-mono text-sm focus-within:border-ring focus-within:ring-[3px] focus-within:ring-ring/24">
            <AtSignIcon className="size-3.5 opacity-60" />
            <input
              id="p-handle"
              defaultValue="seancassiere"
              onChange={onDirtyChange}
              className="flex-1 bg-transparent outline-none"
            />
          </div>
        </SettingsField>

        <SettingsField label="Pronouns" htmlFor="p-pron">
          <Input id="p-pron" placeholder="e.g. they / them" onChange={onDirtyChange} />
        </SettingsField>

        <SettingsField label="Bio" htmlFor="p-bio" hint="Up to 240 characters.">
          <Textarea
            id="p-bio"
            rows={3}
            placeholder="Designer, engineer, generally indoors."
            onChange={onDirtyChange}
          />
        </SettingsField>
      </SettingsSection>
    </>
  );
}
