import { GlobeIcon } from "lucide-react";

import { Input } from "@/components/ui/input";

import { SettingsField } from "./settings-field";
import { SettingsNativeSelect } from "./settings-native-select";
import { SettingsSection } from "./settings-section";

interface SettingsLocaleSectionProps {
  onDirtyChange: () => void;
}

export function SettingsLocaleSection({ onDirtyChange }: SettingsLocaleSectionProps) {
  return (
    <SettingsSection title="Locale">
      <SettingsField label="Email" htmlFor="p-email">
        <Input id="p-email" type="email" defaultValue="sean@cal.com" readOnly />
      </SettingsField>

      <SettingsField label="Language" htmlFor="p-lang">
        <SettingsNativeSelect id="p-lang" defaultValue="en" onChange={onDirtyChange}>
          <option value="en">English</option>
          <option value="es">Español</option>
          <option value="fr">Français</option>
          <option value="de">Deutsch</option>
          <option value="ja">日本語</option>
        </SettingsNativeSelect>
      </SettingsField>

      <SettingsField label="Timezone" htmlFor="p-tz">
        <SettingsNativeSelect
          id="p-tz"
          defaultValue="utc-5"
          onChange={onDirtyChange}
          icon={<GlobeIcon className="size-3.5 opacity-60" />}
        >
          <option value="utc-8">Pacific (UTC−8)</option>
          <option value="utc-5">Eastern (UTC−5)</option>
          <option value="utc">UTC</option>
          <option value="utc+1">Central European (UTC+1)</option>
          <option value="utc+9">Japan (UTC+9)</option>
        </SettingsNativeSelect>
      </SettingsField>
    </SettingsSection>
  );
}
