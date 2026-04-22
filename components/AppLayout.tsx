"use client";
import { useState, ReactNode } from "react";
import { Sidebar } from "./Sidebar";
import { Background } from "./Background";

interface AppLayoutProps {
  children: ReactNode;
  activePage: "home" | "chat";
  hasBg?: boolean; // home / sign-up use animated gradient bg
}

export function AppLayout({ children, activePage, hasBg = false }: AppLayoutProps) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div
      className="relative h-screen flex overflow-hidden"
      style={{ background: hasBg ? undefined : "var(--color-harness-black)" }}
    >
      {/* Animated gradient background */}
      {hasBg && <Background />}

      {/* Content layer — fills exactly the viewport, no overflow */}
      <div className="relative z-10 flex w-full h-full p-2 gap-0">
        <Sidebar
          collapsed={sidebarCollapsed}
          onToggle={() => setSidebarCollapsed((v) => !v)}
          activePage={activePage}
        />
        <main className="flex-1 min-w-0 overflow-hidden h-full">
          {children}
        </main>
      </div>
    </div>
  );
}
