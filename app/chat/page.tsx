"use client";
import { useState } from "react";
import { AppLayout } from "@/components/AppLayout";
import {
  HarnessIcon, IconPipeline, IconChevronRight, IconCheck,
  IconBranch, IconRunner, IconAttach, IconMic, IconSend,
  IconCopy, IconThumb, IconDots, IconSidebarCollapse, IconShare,
  IconHealthy,
} from "@/components/icons";

/* ── Right panel cards ─────────────────────────────────────────────────── */
function RightPanelCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div
      className="flex flex-col gap-0.5 pb-3 pt-1.5 px-1.5 rounded-[var(--radius-md)]"
      style={{ background: "var(--color-harness-black)", border: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div className="flex items-center justify-between px-2 py-2 rounded-[6px]">
        <span className="text-[14px] font-normal tracking-[-0.01em] leading-5" style={{ color: "var(--color-text-muted)" }}>
          {title}
        </span>
        <IconChevronRight size={9} />
      </div>
      {children}
    </div>
  );
}

function MetaRow({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2 px-2 py-2 rounded-[6px]">
      <span style={{ color: "var(--color-text-muted)" }}>{icon}</span>
      <span className="text-[12px] font-normal tracking-[-0.01em] leading-4" style={{ color: "var(--color-text-muted)" }}>
        {label}
      </span>
    </div>
  );
}

function SignalRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col">
      <div className="px-2 py-2">
        <span className="text-[12px] font-normal tracking-[-0.01em]" style={{ color: "var(--color-text-disabled)" }}>
          {label}
        </span>
      </div>
      <div className="flex items-center gap-3 px-2 py-2 rounded-[6px]">
        <div className="flex items-center justify-center p-1.5 rounded-[6px]" style={{ background: "rgba(255,255,255,0.06)" }}>
          <IconHealthy size={12} />
        </div>
        <span className="text-[12px] font-normal tracking-[-0.01em] leading-4" style={{ color: "var(--color-text-muted)" }}>
          {value}
        </span>
      </div>
    </div>
  );
}

function RightPanel() {
  return (
    <div className="flex flex-col gap-3.5 py-6 w-full">
      {/* Run status */}
      <RightPanelCard title="Run status">
        <MetaRow icon={<IconCheck size={16} />} label="Completed successfully" />
        <MetaRow icon={<IconPipeline size={16} />} label="Run #1" />
        <MetaRow icon={<span className="text-[12px]">⏱</span>} label="Runtime: 4m 12s" />
      </RightPanelCard>

      {/* Run stages */}
      <RightPanelCard title="Run stages">
        {["Repository connected", "Pipeline created", "Install dependencies", "Run unit tests", "Build application", "Security scan"].map((stage) => (
          <div key={stage} className="flex items-center gap-2 px-2 py-2 rounded-[6px]">
            <IconCheck size={16} />
            <span className="text-[12px] font-normal tracking-[-0.01em] leading-4" style={{ color: "var(--color-text-muted)" }}>
              {stage}
            </span>
          </div>
        ))}
      </RightPanelCard>

      {/* Key signals */}
      <RightPanelCard title="Key signals">
        <SignalRow label="Pipeline health" value="Healthy" />
        <SignalRow label="Setup completeness" value="80%" />
        <SignalRow label="CI coverage" value="Starter enabled" />
      </RightPanelCard>
    </div>
  );
}

/* ── Chat step ─────────────────────────────────────────────────────────── */
function Step({ label, text }: { label: string; text: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-5 w-full">
      <div className="flex items-center gap-2.5">
        <span style={{ color: "var(--color-text-muted)", fontSize: "6px" }}>●</span>
        <span className="text-[12px] font-normal tracking-[-0.01em] leading-4" style={{ color: "var(--color-text-disabled)" }}>
          {label}
        </span>
      </div>
      <div className="text-[14px] font-normal tracking-[-0.01em] leading-5 text-white">
        {text}
      </div>
    </div>
  );
}

/* ── Prompt input ──────────────────────────────────────────────────────── */
function ChatPrompt() {
  return (
    <div className="flex flex-col gap-2 w-full">
      {/* Main input */}
      <div
        className="flex flex-col rounded-[var(--radius-md)]"
        style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }}
      >
        <div className="flex items-center justify-between px-1.5 py-2 rounded-[var(--radius-md)]">
          <div className="flex-1 px-2 py-3">
            <span className="text-[14px] font-normal tracking-[-0.01em] leading-5" style={{ color: "var(--color-text-disabled)" }}>
              Ask about this run...
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between p-2 rounded-[var(--radius-md)]">
          <button
            className="flex items-center gap-2 p-2 rounded-[36px] cursor-pointer transition-colors hover:bg-white/10"
            style={{ background: "rgba(255,255,255,0.04)", color: "var(--color-text-muted)" }}
          >
            <IconAttach size={16} />
          </button>
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-[6px] cursor-pointer hover:bg-white/10 transition-colors" style={{ color: "var(--color-text-muted)" }}>
              <IconMic size={16} />
            </button>
            <button
              className="flex items-center justify-center p-2 rounded-[8px] cursor-pointer hover:opacity-90 transition-opacity"
              style={{ background: "var(--color-brand-light)" }}
            >
              <IconSend size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Context bar */}
      <div
        className="flex items-center justify-between p-1.5 rounded-[var(--radius-md)]"
        style={{ background: "rgba(255,255,255,0.03)" }}
      >
        <div className="flex items-center gap-1.5">
          <button className="flex items-center gap-2 px-2 py-2 rounded-[6px] cursor-pointer hover:bg-white/5 transition-colors">
            <IconBranch size={16} />
            <span className="text-[12px] font-normal tracking-[-0.01em] leading-4" style={{ color: "var(--color-text-muted)" }}>
              master
            </span>
          </button>
          <span style={{ color: "var(--color-text-disabled)", fontSize: "8px" }}>→</span>
          <button className="px-2 py-2 rounded-[6px] cursor-pointer hover:bg-white/5 transition-colors">
            <span className="text-[12px] font-normal tracking-[-0.01em] leading-4" style={{ color: "var(--color-text-muted)" }}>
              harness/co-pipeline-GYg8J
            </span>
          </button>
        </div>
        <button className="flex items-center gap-2 px-2 py-2 rounded-[6px] cursor-pointer hover:bg-white/5 transition-colors">
          <IconRunner size={16} />
          <span className="text-[12px] font-normal tracking-[-0.01em] leading-4" style={{ color: "var(--color-text-muted)" }}>
            harness-hosted runner
          </span>
        </button>
      </div>
    </div>
  );
}

/* ── Page ──────────────────────────────────────────────────────────────── */
export default function ChatPage() {
  const [rightPanelOpen, setRightPanelOpen] = useState(true);

  return (
    <AppLayout activePage="chat">
      <div className="flex flex-col h-screen overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-7 pt-7 pb-4 flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="text-[12px] font-normal tracking-[-0.01em] leading-4" style={{ color: "var(--color-text-muted)" }}>
                payments-service-ci
              </span>
              <IconChevronRight size={9} />
            </div>
          </div>
          <div className="flex items-center gap-5">
            <button
              className="flex items-center gap-1.5 cursor-pointer hover:opacity-80 transition-opacity"
              style={{ color: "var(--color-text-muted)" }}
            >
              <IconShare size={9} />
              <span className="text-[12px] font-normal tracking-[-0.01em] leading-4">Share</span>
            </button>
            {/* Toggle right panel */}
            <button
              onClick={() => setRightPanelOpen((v) => !v)}
              className="cursor-pointer transition-colors hover:opacity-80"
              style={{ color: rightPanelOpen ? "var(--color-text-primary)" : "var(--color-text-muted)" }}
              title={rightPanelOpen ? "Hide stages panel" : "Show stages panel"}
            >
              <IconSidebarCollapse size={16} />
            </button>
          </div>
        </div>

        {/* Main content */}
        <div className="flex flex-1 overflow-hidden gap-[66px] px-7 pb-5">
          {/* Left: conversation */}
          <div className="flex flex-col justify-between flex-1 min-w-0 max-w-[740px] overflow-y-auto">
            <div className="flex flex-col gap-4 py-6 px-4">
              {/* User message */}
              <div className="flex justify-end pr-5">
                <div
                  className="px-3 py-2 rounded-[8px]"
                  style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <span className="text-[14px] font-normal tracking-[-0.01em] leading-5" style={{ color: "var(--color-brand-light)" }}>
                    Run pipeline
                  </span>
                </div>
              </div>

              {/* AI response */}
              <div className="flex flex-col gap-7 w-full">
                {/* Init block */}
                <div
                  className="flex items-center justify-between p-1 rounded-[var(--radius-md)]"
                  style={{ background: "var(--color-harness-black)", border: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <div className="flex items-center gap-2 px-2 py-2 rounded-[6px]">
                    <HarnessIcon size={16} />
                    <span className="text-[14px] font-normal tracking-[-0.01em] leading-5" style={{ color: "var(--color-text-muted)" }}>
                      Initialized new pipeline
                    </span>
                  </div>
                </div>

                {/* Steps */}
                <div className="flex flex-col gap-9 px-4">
                  <Step
                    label="Kickstarting process"
                    text={
                      <div className="flex flex-col gap-3">
                        <p>Your CI pipeline is ready.</p>
                        <div className="flex items-center gap-1 flex-wrap">
                          <span>I created </span>
                          <span
                            className="px-1 py-0.5 rounded text-[14px]"
                            style={{ background: "var(--color-harness-black)", border: "1px solid rgba(255,255,255,0.06)", color: "#fc6d26" }}
                          >
                            payments-service-ci
                          </span>
                          <span> using the repository and setup you approved.</span>
                        </div>
                      </div>
                    }
                  />
                  <Step
                    label="Starting first run"
                    text="I'm now running the pipeline to validate your repository setup."
                  />
                  <Step
                    label="Run in progress"
                    text="I'm executing the configured stages and collecting the first results."
                  />
                  <Step
                    label="Run completed successfully"
                    text="Tests passed, build completed, and I found one suggested improvement for future runs."
                  />

                  {/* Continue from here */}
                  <div className="flex flex-col gap-5">
                    <span className="text-[14px] font-normal tracking-[-0.01em] leading-5" style={{ color: "var(--color-text-muted)" }}>
                      You can continue from here
                    </span>
                    <div className="flex flex-col gap-3">
                      {["Explain this run", "Improve this pipeline", "Run on another branch"].map((action) => (
                        <button
                          key={action}
                          className="flex items-center gap-2.5 w-fit cursor-pointer hover:opacity-80 transition-opacity"
                          style={{ color: "var(--color-brand-light)" }}
                        >
                          <span className="text-[14px] font-normal tracking-[-0.01em] leading-5">{action}</span>
                          <span style={{ fontSize: "10px" }}>↗</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action row */}
                <div className="flex items-center gap-3 px-4">
                  <button className="cursor-pointer hover:opacity-70 transition-opacity" style={{ color: "var(--color-text-muted)" }}>
                    <IconCopy size={16} />
                  </button>
                  <button className="cursor-pointer hover:opacity-70 transition-opacity" style={{ color: "var(--color-text-muted)" }}>
                    <IconThumb size={16} />
                  </button>
                  <button className="cursor-pointer hover:opacity-70 transition-opacity" style={{ color: "var(--color-text-muted)" }}>
                    <IconDots size={16} />
                  </button>
                </div>

                {/* Harness icon */}
                <div className="flex items-center gap-5 px-4">
                  <HarnessIcon size={20} />
                </div>
              </div>
            </div>

            {/* Prompt */}
            <div className="pt-4 pb-2">
              <ChatPrompt />
            </div>
          </div>

          {/* Right: stages panel */}
          <div
            className="transition-all duration-[var(--duration-slow)] overflow-hidden flex-shrink-0"
            style={{ width: rightPanelOpen ? "280px" : "0px", opacity: rightPanelOpen ? 1 : 0 }}
          >
            <RightPanel />
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
