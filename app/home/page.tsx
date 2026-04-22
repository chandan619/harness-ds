"use client";
import { useState } from "react";
import { AppLayout } from "@/components/AppLayout";
import {
  HarnessIcon, IconPipeline, IconAttach, IconMic, IconSend,
  IconActionItems, IconKeySignals, IconRecentActivity,
} from "@/components/icons";

const SUGGESTIONS = [
  "Explain my last run",
  "Show flaky stages",
  "Why did build success drop?",
  "What should I fix first?",
];

type Tab = "Pipelines" | "Action Items" | "Key Signals" | "Recent Activity";

const TABS: { id: Tab; icon: React.ComponentType<{ size?: number }> }[] = [
  { id: "Action Items",    icon: IconActionItems },
  { id: "Key Signals",     icon: IconKeySignals },
  { id: "Recent Activity", icon: IconRecentActivity },
  { id: "Pipelines",       icon: IconPipeline },
];

/* ── Prompt input ──────────────────────────────────────────────────────────── */
function PromptInput() {
  const [value, setValue] = useState("");
  return (
    <div className="flex flex-col gap-3 w-full max-w-[740px]">
      <div
        className="flex flex-col rounded-[16px]"
        style={{ background: "rgba(28,28,28,0.5)", border: "1px solid rgba(255,255,255,0.2)" }}
      >
        <div className="px-3 pt-2">
          <textarea
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Ask Harness..."
            rows={2}
            className="w-full bg-transparent resize-none outline-none px-2 py-3"
            style={{
              color: value ? "var(--color-text-primary)" : "var(--color-text-disabled)",
              fontSize: "14px",
              fontFamily: "inherit",
              letterSpacing: "-0.01em",
              lineHeight: "20px",
            }}
          />
        </div>
        <div className="flex items-center justify-between p-3">
          <button
            className="flex items-center gap-2 px-2 py-2 rounded-[36px] cursor-pointer transition-colors hover:bg-white/10"
            style={{ background: "rgba(255,255,255,0.04)", color: "var(--color-text-muted)" }}
          >
            <IconAttach size={16} />
          </button>
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-[6px] cursor-pointer transition-colors hover:bg-white/10" style={{ color: "var(--color-text-muted)" }}>
              <IconMic size={16} />
            </button>
            <button
              className="flex items-center justify-center p-2 rounded-[8px] cursor-pointer transition-opacity hover:opacity-90"
              style={{ background: "var(--color-brand-light)" }}
            >
              <IconSend size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Suggestion chips */}
      <div className="flex gap-2.5 flex-wrap px-3">
        {SUGGESTIONS.map((s) => (
          <button
            key={s}
            className="flex items-center gap-1.5 px-[18px] py-3 rounded-[var(--radius-md)] text-[12px] font-normal tracking-[-0.01em] leading-4 cursor-pointer transition-colors hover:bg-white/10"
            style={{ background: "rgba(28,28,28,0.3)", color: "rgba(255,255,255,0.8)", whiteSpace: "nowrap" }}
          >
            {s}
            <span style={{ color: "var(--color-text-faint)", fontSize: "10px" }}>↗</span>
          </button>
        ))}
      </div>
    </div>
  );
}

/* ── Tab: Pipelines ────────────────────────────────────────────────────────── */
const PIPELINES = [
  { name: "payments-service-ci", status: "Last run: Success", runtime: "4m 12s" },
  { name: "checkout-ui-ci",      status: "Last run: Failed",  runtime: "5m 03s" },
  { name: "internal-tools-ci",   status: "Not configured",    runtime: null },
];

function PipelinesContent() {
  return (
    <div className="flex flex-col gap-2.5">
      {PIPELINES.map(({ name, status, runtime }) => (
        <div
          key={name}
          className="flex items-center gap-[14px] p-[14px] rounded-[var(--radius-md)] h-[60px]"
          style={{ background: "rgba(28,28,28,0.16)", border: "1px solid rgba(255,255,255,0.1)" }}
        >
          <div
            className="w-9 h-9 rounded-[28px] flex items-center justify-center flex-shrink-0"
            style={{ background: "rgba(28,28,28,0.5)", color: "var(--color-text-muted)" }}
          >
            <IconPipeline size={16} />
          </div>
          <div className="flex-1 flex flex-col gap-1 justify-center min-w-0">
            <span className="text-[14px] font-normal text-white tracking-[-0.01em] leading-[18px] truncate">{name}</span>
            <div className="flex items-center gap-2 text-[11px] font-normal tracking-[-0.01em] leading-[18px]" style={{ color: "rgba(255,255,255,0.5)" }}>
              <span>{status}</span>
              {runtime && <><span>·</span><span>Runtime: {runtime}</span></>}
            </div>
          </div>
          <button
            className="flex-shrink-0 px-3 py-1.5 rounded-[8px] text-[11px] font-normal tracking-[-0.01em] cursor-pointer transition-colors hover:bg-white/10"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "var(--color-text-muted)" }}
          >
            View details
          </button>
        </div>
      ))}
    </div>
  );
}

/* ── Tab: Action Items ─────────────────────────────────────────────────────── */
const ACTION_ITEMS = [
  { title: "Optimize pipeline performance",     desc: "AI detected 1 bottleneck that could reduce runtime by 18%.",        cta: "Review suggestion" },
  { title: "Add CI coverage to internal-tools", desc: "Repository connected but not yet configured for CI.",                cta: "Review" },
  { title: "Investigate flaky test stage",      desc: "Unit test duration is inconsistent across recent runs.",              cta: "Inspect stage" },
  { title: "Enable security scan",              desc: "Your starter pipeline is active without a security check.",           cta: "Enable scan" },
];

function ActionItemsContent() {
  return (
    <div className="grid grid-cols-2 gap-2.5">
      {ACTION_ITEMS.map(({ title, desc, cta }) => (
        <div
          key={title}
          className="flex flex-col gap-6 p-[14px] rounded-[var(--radius-md)]"
          style={{ background: "rgba(28,28,28,0.16)", border: "1px solid rgba(255,255,255,0.1)" }}
        >
          <div className="flex flex-col gap-3">
            <div
              className="w-9 h-9 rounded-[28px] flex items-center justify-center"
              style={{ background: "rgba(28,28,28,0.5)", color: "var(--color-text-muted)" }}
            >
              <IconActionItems size={16} />
            </div>
            <div className="flex flex-col gap-1.5">
              <p className="text-[14px] text-white font-normal tracking-[-0.01em] leading-[18px]">{title}</p>
              <p className="text-[11px] font-normal tracking-[-0.01em] leading-[18px]" style={{ color: "rgba(255,255,255,0.5)" }}>{desc}</p>
            </div>
          </div>
          <button
            className="self-start px-3 py-[6px] rounded-[6px] text-[11px] font-normal tracking-[-0.01em] cursor-pointer transition-colors hover:bg-white/10"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "var(--color-text-muted)" }}
          >
            {cta}
          </button>
        </div>
      ))}
    </div>
  );
}

/* ── Tab: Key Signals ──────────────────────────────────────────────────────── */
const KEY_SIGNALS = [
  { label: "Pipeline health", value: "Healthy",      icon: IconKeySignals },
  { label: "Average runtime", value: "4m 12s",       icon: IconKeySignals },
  { label: "CI coverage",     value: "1 of 3 repos", icon: IconPipeline },
  { label: "Security",        value: "Scan off",      icon: IconActionItems },
];

function KeySignalsContent() {
  return (
    <div className="grid grid-cols-4 gap-2.5">
      {KEY_SIGNALS.map(({ label, value, icon: Icon }) => (
        <div
          key={label}
          className="flex flex-col gap-6 p-[14px] rounded-[var(--radius-md)]"
          style={{ background: "rgba(28,28,28,0.16)", border: "1px solid rgba(255,255,255,0.1)" }}
        >
          <div className="flex flex-col gap-3">
            <div
              className="w-9 h-9 rounded-[28px] flex items-center justify-center"
              style={{ background: "rgba(28,28,28,0.5)", color: "var(--color-text-muted)" }}
            >
              <Icon size={16} />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-[14px] text-white font-normal tracking-[-0.01em] leading-[18px]">{value}</p>
              <p className="text-[11px] font-normal tracking-[-0.01em] leading-[18px]" style={{ color: "rgba(255,255,255,0.5)" }}>{label}</p>
            </div>
          </div>
          <button
            className="self-start px-3 py-[6px] rounded-[6px] text-[11px] font-normal tracking-[-0.01em] cursor-pointer transition-colors hover:bg-white/10"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "var(--color-text-muted)" }}
          >
            View
          </button>
        </div>
      ))}
    </div>
  );
}

/* ── Tab: Recent Activity ──────────────────────────────────────────────────── */
const ACTIVITY = [
  { title: "Pipeline created",                       desc: "payments-service-ci was created from the recommended starter configuration.", meta: "CI · 8m ago" },
  { title: "First run completed",                    desc: "All configured stages completed successfully in 4m 12s.",                     meta: "Run · 7m ago" },
  { title: "Optimization recommendation generated",  desc: "Dependency install is taking longer than expected across recent runs.",        meta: "Harness · 6m ago" },
  { title: "Security scan still disabled",           desc: "The pipeline is active, but no security scan step has been enabled yet.",      meta: "Security · 6m ago" },
];

function RecentActivityContent() {
  return (
    <div className="flex flex-col gap-2.5">
      {ACTIVITY.map(({ title, desc, meta }) => (
        <div
          key={title}
          className="flex items-center gap-[14px] p-[14px] rounded-[var(--radius-md)]"
          style={{ background: "rgba(28,28,28,0.16)", border: "1px solid rgba(255,255,255,0.1)" }}
        >
          <div
            className="w-9 h-9 rounded-full flex-shrink-0 flex items-center justify-center"
            style={{ background: "rgba(28,28,28,0.5)" }}
          >
            <HarnessIcon size={20} />
          </div>
          <div className="flex-1 flex flex-col gap-0.5 min-w-0">
            <p className="text-[14px] text-white font-normal tracking-[-0.01em] leading-[18px] truncate">{title}</p>
            <p className="text-[11px] font-normal tracking-[-0.01em] leading-[18px] truncate" style={{ color: "rgba(255,255,255,0.5)" }}>{desc}</p>
            <p className="text-[11px] font-normal tracking-[-0.01em] leading-[18px]" style={{ color: "rgba(255,255,255,0.35)" }}>{meta}</p>
          </div>
          <button
            className="flex-shrink-0 px-3 py-1.5 rounded-[6px] text-[11px] font-normal tracking-[-0.01em] cursor-pointer transition-colors hover:bg-white/10"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "var(--color-text-muted)" }}
          >
            View
          </button>
        </div>
      ))}
    </div>
  );
}

/* ── Bottom bar with functional tabs ──────────────────────────────────────── */
function BottomBar() {
  const [activeTab, setActiveTab] = useState<Tab>("Pipelines");

  return (
    <div
      className="w-full rounded-[24px] p-8 flex flex-col gap-8"
      style={{ background: "rgba(28,28,28,0.9)", border: "1px solid var(--color-border-input)" }}
    >
      {/* Tab bar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          {TABS.map(({ id, icon: Icon }) => {
            const active = id === activeTab;
            return (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className="flex items-center gap-2.5 px-2 py-2 rounded-[8px] text-[14px] font-normal tracking-[-0.01em] leading-5 cursor-pointer transition-all"
                style={{
                  background: active ? "rgba(255,255,255,0.04)" : "transparent",
                  border: active ? "1px solid rgba(255,255,255,0.08)" : "1px solid transparent",
                  color: active ? "var(--color-text-primary)" : "var(--color-text-muted)",
                }}
              >
                <Icon size={16} />
                {id}
              </button>
            );
          })}
        </div>
        <button
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-[6px] text-[14px] font-normal tracking-[-0.01em] cursor-pointer transition-colors hover:bg-white/5"
          style={{ color: "var(--color-text-muted)" }}
        >
          View all
          <span style={{ fontSize: "10px" }}>›</span>
        </button>
      </div>

      {/* Tab content */}
      {activeTab === "Pipelines"       && <PipelinesContent />}
      {activeTab === "Action Items"    && <ActionItemsContent />}
      {activeTab === "Key Signals"     && <KeySignalsContent />}
      {activeTab === "Recent Activity" && <RecentActivityContent />}
    </div>
  );
}

/* ── Page ──────────────────────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <AppLayout activePage="home" hasBg>
      {/* Outer scroll container — h-full so the viewport is fixed */}
      <div className="h-full overflow-y-auto">

        {/* Hero section — sized so exactly the bottom bar's tab row peeks below the fold */}
        <div
          className="flex flex-col items-center px-8 py-8"
          style={{ minHeight: "calc(100% - 88px)" }}
        >
          <div className="flex flex-col items-start gap-10 w-full max-w-[740px] my-auto">
            <div className="flex flex-col gap-7 w-full">
              <HarnessIcon size={36} />
              <div className="flex flex-col gap-2">
                <h1
                  className="text-[28px] font-medium tracking-[-0.01em] leading-9"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  Hi, Benjamin
                </h1>
                <p
                  className="text-[14px] font-normal tracking-[-0.01em] leading-5"
                  style={{ color: "rgba(255,255,255,0.6)" }}
                >
                  Ask Harness AI about your pipelines, runs, repositories, or next steps.
                </p>
              </div>
            </div>
            <PromptInput />
          </div>
        </div>

        {/* Bottom bar — revealed by scrolling down */}
        <div className="flex justify-center px-8 pb-8">
          <div className="w-full max-w-[1104px]">
            <BottomBar />
          </div>
        </div>

      </div>
    </AppLayout>
  );
}
