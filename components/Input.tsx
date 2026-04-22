"use client";
import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export function Input({ label, error, className = "", ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-[8px] w-full">
      {label && (
        <label className="text-[12px] font-medium text-[var(--color-text-secondary)] tracking-[-0.01em]">
          {label}
        </label>
      )}
      <input
        className={[
          "h-10 w-full rounded-[var(--radius-sm)]",
          "border border-[var(--color-border-input)]",
          "bg-transparent",
          "px-3 text-[14px] text-[var(--color-text-primary)]",
          "placeholder:text-[var(--color-text-faint)]",
          "tracking-[-0.01em]",
          "transition-colors duration-[var(--duration-base)]",
          "focus:outline-none focus:border-[var(--color-brand-light)]",
          error ? "border-red-500" : "",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        {...props}
      />
      {error && (
        <p className="text-[12px] text-red-400 tracking-[-0.01em]">{error}</p>
      )}
    </div>
  );
}
