import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  padding?: "sm" | "md" | "lg";
}

export function Card({ children, className = "", padding = "md" }: CardProps) {
  const paddings = {
    sm: "p-3",
    md: "p-5",
    lg: "p-6",
  };

  return (
    <div className={["card-glass", paddings[padding], className].filter(Boolean).join(" ")}>
      {children}
    </div>
  );
}
