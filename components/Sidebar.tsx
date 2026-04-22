"use client";
import Link from "next/link";
import {
  HarnessLogo, HarnessIcon,
  IconHome, IconActivity, IconPipeline, IconMore,
  IconPlus, IconChevronDown, IconChevronRight,
  IconSidebarCollapse, IconSidebarExpand,
  IconUpgrade, IconSettings,
} from "./icons";

const NAV_ITEMS = [
  { label: "Home", icon: IconHome, href: "/home" },
  { label: "Activity", icon: IconActivity, href: "#" },
  { label: "Pipelines", icon: IconPipeline, href: "#" },
  { label: "More", icon: IconMore, href: "#" },
];

const PIPELINE_ITEMS = [
  { label: "payments-service-ci", href: "/chat" },
  { label: "checkout-ui-ci", href: "#" },
  { label: "internal-tools-ci", href: "#" },
];

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
  activePage: "home" | "chat";
}

export function Sidebar({ collapsed, onToggle, activePage }: SidebarProps) {
  return (
    <aside
      className="flex-shrink-0 flex flex-col justify-between rounded-[var(--radius-sm)] transition-all duration-[var(--duration-slow)]"
      style={{
        width: collapsed ? "48px" : "264px",
        height: "100%",
        background: "rgba(28,28,28,0.9)",
        border: "1px solid var(--color-border-input)",
        padding: collapsed ? "16px 8px" : "16px",
        overflow: "hidden",
      }}
    >
      {/* Top */}
      <div className="flex flex-col gap-6">
        {/* Logo row */}
        <div className="flex items-center justify-between" style={{ minHeight: 24 }}>
          {!collapsed && (
            <div className="flex items-center gap-1.5 overflow-hidden">
              <HarnessIcon size={16} />
              <HarnessLogo size={16} />
            </div>
          )}
          <button
            onClick={onToggle}
            className="flex items-center justify-center rounded p-1 transition-colors hover:bg-white/10 cursor-pointer"
            style={{ color: "var(--color-text-muted)", flexShrink: 0 }}
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {collapsed ? <IconSidebarExpand size={16} /> : <IconSidebarCollapse size={16} />}
          </button>
        </div>

        {/* Nav items */}
        <nav className="flex flex-col gap-0.5">
          {NAV_ITEMS.map(({ label, icon: Icon, href }) => {
            const isActive =
              (label === "Home" && activePage === "home") ||
              (label === "Pipelines" && activePage === "chat");
            return (
              <Link
                key={label}
                href={href}
                className={`flex items-center gap-2.5 rounded-[6px] px-2 py-2 transition-colors hover:bg-white/5 ${isActive ? "bg-white/[0.04]" : ""}`}
                style={{
                  color: isActive ? "var(--color-text-primary)" : "var(--color-text-muted)",
                  whiteSpace: "nowrap",
                }}
                title={collapsed ? label : undefined}
              >
                <Icon size={16} />
                {!collapsed && (
                  <span className="text-[14px] font-normal tracking-[-0.01em] leading-5">{label}</span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Project section */}
        {!collapsed && (
          <div className="flex flex-col gap-6">
            {/* Project name + New pipeline */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-1 px-2">
                <span
                  className="text-[12px] font-normal leading-4 truncate"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  payments-service.github.io
                </span>
                <span style={{ color: "var(--color-text-muted)" }}><IconChevronDown size={9} /></span>
              </div>

              <button
                className="flex items-center gap-2.5 px-2 py-2 rounded-[6px] transition-colors hover:bg-white/5 cursor-pointer w-full text-left"
                style={{ color: "var(--color-text-muted)" }}
              >
                <IconPlus size={16} />
                <span className="text-[14px] font-normal tracking-[-0.01em] leading-5">New pipeline</span>
              </button>
            </div>

            {/* History */}
            <div className="flex flex-col gap-1">
              <span
                className="text-[11px] font-normal leading-[17px] px-2 tracking-[-0.01em]"
                style={{ color: "var(--color-text-muted)" }}
              >
                Today
              </span>
              <div className="flex flex-col gap-1">
                {PIPELINE_ITEMS.map(({ label, href }) => {
                  const isActive = label === "payments-service-ci" && activePage === "chat";
                  return (
                    <Link
                      key={label}
                      href={href}
                      className={`flex items-center gap-2.5 px-2 py-2 rounded-[6px] transition-colors hover:bg-white/5 ${isActive ? "bg-white/[0.04]" : ""}`}
                      style={{
                        color: isActive ? "var(--color-text-primary)" : "var(--color-text-muted)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      <IconPipeline size={16} />
                      <span className="text-[14px] font-normal tracking-[-0.01em] leading-4">{label}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom */}
      <div className="flex flex-col gap-6">
        {/* Upgrade card */}
        {!collapsed && (
          <div
            className="flex items-center justify-between p-[14px] rounded-[var(--radius-md)]"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div className="flex flex-col gap-2">
              <span className="text-[14px] font-normal text-white tracking-[-0.01em] leading-5">Upgrade to Pro</span>
              <span className="text-[11px] font-normal tracking-[-0.01em]" style={{ color: "var(--color-text-muted)" }}>
                Unlock more features
              </span>
            </div>
            <div
              className="flex items-center justify-center rounded-[40px] p-2"
              style={{ background: "rgba(255,255,255,0.1)" }}
            >
              <IconUpgrade size={16} />
            </div>
          </div>
        )}

        {/* User row */}
        <div className={`flex items-center ${collapsed ? "justify-center" : "justify-between"} px-1 py-1 rounded-[6px]`}>
          {!collapsed && (
            <div className="flex items-center gap-2">
              <div
                className="w-6 h-6 rounded-[100px] overflow-hidden flex-shrink-0 flex items-center justify-center text-[10px] font-medium"
                style={{ background: "var(--color-brand-cyan)", color: "white" }}
              >
                B
              </div>
              <span className="text-[12px] font-normal tracking-[-0.01em]" style={{ color: "var(--color-text-muted)" }}>
                Benjamin Sanders
              </span>
            </div>
          )}
          {collapsed ? (
            <div
              className="w-6 h-6 rounded-[100px] flex-shrink-0 flex items-center justify-center text-[10px] font-medium"
              style={{ background: "var(--color-brand-cyan)", color: "white" }}
            >
              B
            </div>
          ) : (
            <button className="cursor-pointer" style={{ color: "var(--color-text-muted)" }}>
              <IconSettings size={16} />
            </button>
          )}
        </div>
      </div>
    </aside>
  );
}
