"use client";
import { useState, ReactNode } from "react";
import { Sidebar } from "./Sidebar";

interface AppLayoutProps {
  children: ReactNode;
  activePage: "home" | "chat";
  hasBg?: boolean; // home uses gradient bg
}

export function AppLayout({ children, activePage, hasBg = false }: AppLayoutProps) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div
      className="relative min-h-screen flex overflow-hidden"
      style={{ background: hasBg ? undefined : "var(--color-harness-black)" }}
    >
      {/* Gradient BG (home only) */}
      {hasBg && (
        <div className="absolute inset-0 gradient-brand" style={{ zIndex: 0 }}>
          <div
            className="absolute inset-0"
            style={{ backdropFilter: "blur(200px)", background: "rgba(28,28,28,0.45)" }}
          />
        </div>
      )}

      {/* Content layer */}
      <div className="relative z-10 flex w-full p-2 gap-0">
        <Sidebar
          collapsed={sidebarCollapsed}
          onToggle={() => setSidebarCollapsed((v) => !v)}
          activePage={activePage}
        />
        <main className="flex-1 min-w-0 overflow-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}
