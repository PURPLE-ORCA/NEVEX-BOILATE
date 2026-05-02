import type { SelectHTMLAttributes, ReactNode } from "react";

interface SettingsNativeSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  icon?: ReactNode;
}

export function SettingsNativeSelect({ className, icon, ...props }: SettingsNativeSelectProps) {
  return (
    <div className="relative">
      {icon ? (
        <span className="pointer-events-none absolute start-3 top-1/2 -translate-y-1/2">
          {icon}
        </span>
      ) : null}
      <select
        className={`h-9 w-full appearance-none rounded-lg border border-input bg-background ${icon ? "pl-8" : "pl-3"} pr-9 text-sm outline-none transition-shadow focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/24 ${className ?? ""}`}
        {...props}
      />
      <svg
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
        className="pointer-events-none absolute end-3 top-1/2 size-3.5 -translate-y-1/2 opacity-60"
      >
        <polyline points="4 6 8 10 12 6" />
      </svg>
    </div>
  );
}
