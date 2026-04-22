"use client";
import { AppLayout } from "@/components/AppLayout";
import { HarnessIcon, IconPipeline, IconAttach, IconMic, IconSend } from "@/components/icons";

const SUGGESTIONS = [
  "Explain my last run",
  "Show flaky stages",
  "Why did build success drop?",
  "What should I fix first?",
];

const PIPELINES = [
  { name: "payments-service-ci", status: "Last run: Success", runtime: "4m 12s" },
  { name: "checkout-ui-ci", status: "Last run: Failed", runtime: "5m 03s" },
  { name: "internal-tools-ci", status: "Not configured", runtime: null },
];

const BOTTOM_TABS = ["Action Items", "Key Signals", "Recent Activity", "Pipelines"];

function PromptInput() {
  return (
    <div className="flex flex-col gap-3 w-full max-w-[740px]">
      {/* Main input */}
      <div
        className="flex flex-col rounded-[16px]"
        style={{ background: "rgba(28,28,28,0.5)", border: "1px solid rgba(255,255,255,0.2)" }}
      >
        {/* Text area */}
        <div className="px-3 pt-2">
          <div className="px-2 py-3">
            <p className="text-[14px] font-normal tracking-[-0.01em] leading-5" style={{ color: "var(--color-text-disabled)" }}>
              Ask Harness...
            </p>
          </div>
        </div>
        {/* Bottom toolbar */}
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
            style={{
              background: "rgba(28,28,28,0.3)",
              color: "rgba(255,255,255,0.8)",
              whiteSpace: "nowrap",
            }}
          >
            {s}
            <span style={{ color: "var(--color-text-faint)", fontSize: "10px" }}>↗</span>
          </button>
        ))}
      </div>
    </div>
  );
}

function BottomBar() {
  return (
    <div
      className="w-full rounded-[24px] p-8 flex flex-col gap-8"
      style={{ background: "rgba(28,28,28,0.9)", border: "1px solid var(--color-border-input)" }}
    >
      {/* Tab bar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 flex-wrap">
          {BOTTOM_TABS.map((tab) => {
            const active = tab === "Pipelines";
            return (
              <button
                key={tab}
                className="flex items-center gap-2.5 px-2 py-2 rounded-[8px] text-[14px] font-normal tracking-[-0.01em] leading-5 cursor-pointer transition-colors"
                style={{
                  background: active ? "rgba(255,255,255,0.04)" : "transparent",
                  border: active ? "1px solid rgba(255,255,255,0.08)" : "none",
                  color: active ? "var(--color-text-primary)" : "var(--color-text-muted)",
                }}
              >
                {tab === "Pipelines" && <IconPipeline size={16} />}
                {tab}
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

      {/* Pipeline rows */}
      <div className="flex flex-col gap-2.5">
        {PIPELINES.map(({ name, status, runtime }) => (
          <div
            key={name}
            className="flex items-center gap-[14px] p-[14px] rounded-[var(--radius-md)] h-[60px]"
            style={{ background: "rgba(28,28,28,0.16)", border: "1px solid rgba(255,255,255,0.1)" }}
          >
            {/* Icon */}
            <div
              className="w-9 h-9 rounded-[28px] flex items-center justify-center flex-shrink-0"
              style={{ background: "rgba(28,28,28,0.5)", color: "var(--color-text-muted)" }}
            >
              <IconPipeline size={16} />
            </div>

            {/* Name + meta */}
            <div className="flex-1 flex flex-col gap-2 justify-center min-w-0">
              <span className="text-[14px] font-normal text-white tracking-[-0.01em] leading-[18px] truncate">{name}</span>
              <div className="flex items-center gap-2 text-[11px] font-normal tracking-[-0.01em] leading-[18px]" style={{ color: "rgba(255,255,255,0.5)" }}>
                <span>{status}</span>
                {runtime && <><span>·</span><span>Runtime: {runtime}</span></>}
              </div>
            </div>

            {/* View details */}
            <button
              className="flex-shrink-0 px-3 py-1.5 rounded-[8px] text-[11px] font-normal tracking-[-0.01em] cursor-pointer transition-colors hover:bg-white/10"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                color: "var(--color-text-muted)",
              }}
            >
              View details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <AppLayout activePage="home" hasBg>
      <div className="flex flex-col items-center gap-5 px-8 py-8 min-h-screen justify-between">
        {/* Center hero */}
        <div className="flex flex-col items-start gap-10 w-full max-w-[740px] mt-auto mb-auto pt-16">
          <div className="flex flex-col gap-7 w-full">
            <HarnessIcon size={36} />
            <div className="flex flex-col gap-6">
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

        {/* Bottom bar */}
        <div className="w-full max-w-[1104px]">
          <BottomBar />
        </div>
      </div>
    </AppLayout>
  );
}
