"use client";
import { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "ghost" | "icon";
type Size = "sm" | "md";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  icon?: ReactNode;
  children?: ReactNode;
  fullWidth?: boolean;
}

export function Button({
  variant = "primary",
  size = "md",
  icon,
  children,
  fullWidth = false,
  className = "",
  disabled,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-[10px] rounded-[var(--radius-sm)] font-medium transition-all duration-[var(--duration-base)] cursor-pointer select-none border";

  const sizes: Record<Size, string> = {
    sm: "h-8 px-3 text-[12px]",
    md: "h-10 px-3 text-[14px]",
  };

  const variants: Record<Variant, string> = {
    primary: [
      "bg-[var(--color-harness-white)] border-[var(--color-harness-white)]",
      "text-[var(--color-harness-black)] font-semibold",
      "hover:opacity-90 active:opacity-80",
      disabled ? "opacity-50 cursor-not-allowed" : "",
    ].join(" "),

    ghost: [
      "bg-[var(--color-surface-ghost)] border-[var(--color-border-subtle)]",
      "text-[var(--color-text-disabled)]",
      "hover:bg-white/10 hover:text-[var(--color-text-secondary)] active:bg-white/15",
      disabled ? "opacity-40 cursor-not-allowed" : "",
    ].join(" "),

    icon: [
      "bg-[var(--color-surface-ghost)] border-[var(--color-border-subtle)]",
      "text-[var(--color-text-primary)] p-3",
      "hover:bg-white/10 active:bg-white/15",
      disabled ? "opacity-40 cursor-not-allowed" : "",
    ].join(" "),
  };

  return (
    <button
      disabled={disabled}
      className={[base, sizes[size], variants[variant], fullWidth ? "w-full" : "", className]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {icon && <span className="flex-shrink-0 flex items-center">{icon}</span>}
      {children}
    </button>
  );
}
