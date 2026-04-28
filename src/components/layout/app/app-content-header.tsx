import { Text } from "@/components/ui/text";

interface AppContentHeaderProps {
  title: string;
}

export function AppContentHeader({ title }: AppContentHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <Text as="h1" variant="h3">{title}</Text>
    </div>
  );
}
