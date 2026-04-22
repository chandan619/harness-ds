import { ReactNode } from "react";

interface FeatureItemProps {
  icon: ReactNode;
  label: string;
}

export function FeatureItem({ icon, label }: FeatureItemProps) {
  return (
    <div className="flex items-center gap-2">
      <span className="shrink-0 w-4 h-4 flex items-center justify-center text-[var(--color-text-secondary)]">
        {icon}
      </span>
      <span className="text-[14px] font-normal text-[var(--color-text-secondary)] tracking-[-0.01em] leading-[18px]">
        {label}
      </span>
    </div>
  );
}
