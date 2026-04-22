"use client";
import { useState, useEffect, useRef } from "react";
import { AppLayout } from "@/components/AppLayout";
import {
  HarnessIcon, IconPipeline, IconChevronRight, IconCheck,
  IconBranch, IconRunner, IconAttach, IconMic, IconSend,
  IconCopy, IconThumb, IconDots, IconSidebarCollapse, IconShare,
  IconHealthy,
} from "@/components/icons";

/* ── Right panel ────────────────────────────────────────────────────────────── */
function RightPanelCard({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(true);
  return (
    <div
      className="flex flex-col gap-0.5 pb-1.5 pt-1.5 px-1.5 rounded-[var(--radius-md)]"
      style={{ background: "var(--color-harness-black)", border: "1px solid rgba(255,255,255,0.06)" }}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center justify-between px-2 py-2 rounded-[6px] w-full cursor-pointer hover:bg-white/5 transition-colors"
      >
        <span className="text-[14px] font-normal tracking-[-0.01em] leading-5" style={{ color: "var(--color-text-muted)" }}>
          {title}
        </span>
        <span
          className="transition-transform duration-200"
          style={{
            color: "var(--color-text-muted)",
            display: "inline-flex",
            transform: open ? "rotate(90deg)" : "rotate(0deg)",
          }}
        >
          <IconChevronRight size={9} />
        </span>
      </button>
      {open && <div className="flex flex-col gap-0.5 pb-1.5">{children}</div>}
    </div>
  );
}

function MetaRow({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2 px-2 py-2 rounded-[6px]">
      <span className="flex items-center justify-center w-4 h-4 flex-shrink-0" style={{ color: "var(--color-text-muted)" }}>{icon}</span>
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
    <div className="flex flex-col gap-3.5">
      <RightPanelCard title="Run status">
        <MetaRow icon={<IconCheck size={16} />} label="Completed successfully" />
        <MetaRow icon={<IconPipeline size={16} />} label="Run #1" />
        <MetaRow icon={<span className="text-[12px]">⏱</span>} label="Runtime: 4m 12s" />
      </RightPanelCard>

      <RightPanelCard title="Run stages">
        {["Repository connected", "Pipeline created", "Install dependencies", "Run unit tests", "Build application", "Security scan"].map((stage) => (
          <div key={stage} className="flex items-center gap-2 px-2 py-2 rounded-[6px]">
            <span className="flex items-center justify-center w-4 h-4 flex-shrink-0" style={{ color: "var(--color-text-muted)" }}>
              <IconCheck size={14} />
            </span>
            <span className="text-[12px] font-normal tracking-[-0.01em] leading-4" style={{ color: "var(--color-text-muted)" }}>
              {stage}
            </span>
          </div>
        ))}
      </RightPanelCard>

      <RightPanelCard title="Key signals">
        <SignalRow label="Pipeline health" value="Healthy" />
        <SignalRow label="Setup completeness" value="80%" />
        <SignalRow label="CI coverage" value="Starter enabled" />
      </RightPanelCard>
    </div>
  );
}

/* ── Chat step ──────────────────────────────────────────────────────────────── */
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

/* ── Chat prompt ────────────────────────────────────────────────────────────── */
function ChatPrompt() {
  const [value, setValue] = useState("");
  return (
    <div className="flex flex-col gap-2 w-full">
      <div
        className="flex flex-col rounded-[var(--radius-md)]"
        style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }}
      >
        <div className="px-3 pt-2">
          <textarea
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Ask about this run..."
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
        <div className="flex items-center justify-between p-2">
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
            <span className="text-[12px] font-normal tracking-[-0.01em] leading-4" style={{ color: "var(--color-text-muted)" }}>master</span>
          </button>
          <span style={{ color: "var(--color-text-disabled)", fontSize: "8px" }}>→</span>
          <button className="px-2 py-2 rounded-[6px] cursor-pointer hover:bg-white/5 transition-colors">
            <span className="text-[12px] font-normal tracking-[-0.01em] leading-4" style={{ color: "var(--color-text-muted)" }}>harness/co-pipeline-GYg8J</span>
          </button>
        </div>
        <button className="flex items-center gap-2 px-2 py-2 rounded-[6px] cursor-pointer hover:bg-white/5 transition-colors">
          <IconRunner size={16} />
          <span className="text-[12px] font-normal tracking-[-0.01em] leading-4" style={{ color: "var(--color-text-muted)" }}>harness-hosted runner</span>
        </button>
      </div>
    </div>
  );
}

/* ── Progressive reveal schedule ───────────────────────────────────────────── */
type StepId = "bubble" | "init" | "kickstart" | "first-run" | "in-progress" | "completed" | "cta" | "actions";

const REVEAL: { id: StepId; delay: number }[] = [
  { id: "bubble",      delay: 300  },
  { id: "init",        delay: 900  },
  { id: "kickstart",   delay: 2100 },
  { id: "first-run",   delay: 3600 },
  { id: "in-progress", delay: 5100 },
  { id: "completed",   delay: 6600 },
  { id: "cta",         delay: 7800 },
  { id: "actions",     delay: 8500 },
];

/* ── Page ───────────────────────────────────────────────────────────────────── */
export default function ChatPage() {
  const [rightPanelOpen, setRightPanelOpen] = useState(true);
  const [visible, setVisible] = useState<Set<StepId>>(new Set());
  const [done, setDone] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  /* Kick off the reveal timers on mount */
  useEffect(() => {
    const timers = REVEAL.map(({ id, delay }) =>
      setTimeout(() => {
        setVisible((v) => new Set([...v, id]));
        if (id === "actions") setDone(true);
      }, delay)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  /* Smooth-scroll to bottom whenever a new step appears */
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [visible]);

  /* Shorthand: render children only when step is visible, with fade+slide animation */
  const Show = ({ id, children }: { id: StepId; children: React.ReactNode }) =>
    visible.has(id) ? <div className="chat-reveal">{children}</div> : null;

  return (
    <AppLayout activePage="chat">
      <div className="h-full flex flex-col">

        {/* ── Top header bar ───────────────────────────────────────────────── */}
        <header className="flex-shrink-0 flex items-center justify-between px-7 py-5">
          <div className="flex items-center gap-1.5">
            <span className="text-[12px] font-normal tracking-[-0.01em] leading-4" style={{ color: "var(--color-text-muted)" }}>
              payments-service-ci
            </span>
            <span style={{ color: "var(--color-text-muted)" }}><IconChevronRight size={9} /></span>
          </div>
          <div className="flex items-center gap-5">
            <button
              className="flex items-center gap-1.5 cursor-pointer hover:opacity-80 transition-opacity"
              style={{ color: "var(--color-text-muted)" }}
            >
              <IconShare size={9} />
              <span className="text-[12px] font-normal tracking-[-0.01em] leading-4">Share</span>
            </button>
            <button
              onClick={() => setRightPanelOpen((v) => !v)}
              className="cursor-pointer hover:opacity-80 transition-opacity"
              style={{ color: rightPanelOpen ? "var(--color-text-primary)" : "var(--color-text-muted)" }}
              title={rightPanelOpen ? "Hide panel" : "Show panel"}
            >
              <IconSidebarCollapse size={16} />
            </button>
          </div>
        </header>

        {/* ── Body: chat + right panel ─────────────────────────────────────── */}
        <div className="flex-1 flex overflow-hidden">

          {/* Center: conversation + prompt docked at bottom */}
          <div className="flex-1 flex flex-col min-w-0 overflow-hidden">

            {/* Messages — scrolls independently */}
            <div className="flex-1 overflow-y-auto">
              <div className="max-w-[740px] mx-auto px-6 py-6 flex flex-col gap-7">

                {/* 1 · User bubble */}
                <Show id="bubble">
                  <div className="flex justify-end">
                    <div
                      className="px-3 py-2 rounded-[8px]"
                      style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.06)" }}
                    >
                      <span className="text-[14px] font-normal tracking-[-0.01em] leading-5" style={{ color: "var(--color-brand-light)" }}>
                        Run pipeline
                      </span>
                    </div>
                  </div>
                </Show>

                {/* 2 · Init block */}
                <Show id="init">
                  <div
                    className="flex items-center p-1 rounded-[var(--radius-md)]"
                    style={{ background: "var(--color-harness-black)", border: "1px solid rgba(255,255,255,0.06)" }}
                  >
                    <div className="flex items-center gap-2 px-2 py-2 rounded-[6px]">
                      <HarnessIcon size={16} />
                      <span className="text-[14px] font-normal tracking-[-0.01em] leading-5" style={{ color: "var(--color-text-muted)" }}>
                        Initialized new pipeline
                      </span>
                    </div>
                  </div>
                </Show>

                {/* 3–6 · Steps */}
                <div className="flex flex-col gap-9 px-4">
                  <Show id="kickstart">
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
                  </Show>

                  <Show id="first-run">
                    <Step label="Starting first run" text="I'm now running the pipeline to validate your repository setup." />
                  </Show>

                  <Show id="in-progress">
                    <Step label="Run in progress" text="I'm executing the configured stages and collecting the first results." />
                  </Show>

                  <Show id="completed">
                    <Step label="Run completed successfully" text="Tests passed, build completed, and I found one suggested improvement for future runs." />
                  </Show>

                  {/* 7 · Continue from here */}
                  <Show id="cta">
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
                  </Show>

                  {/* 8 · Action icons */}
                  <Show id="actions">
                    <div className="flex items-center gap-3">
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
                  </Show>
                </div>

                {/* Harness logo — always visible, spins while loading, anchors scroll */}
                {visible.has("init") && (
                  <div className="px-4 pb-4">
                    <div className={done ? undefined : "spin-slow"} style={{ display: "inline-flex" }}>
                      <HarnessIcon size={20} />
                    </div>
                  </div>
                )}

                {/* Scroll anchor — keeps view at the latest message */}
                <div ref={bottomRef} />
              </div>
            </div>

            {/* Prompt — docked at bottom of chat column */}
            <div className="flex-shrink-0 px-6 pb-5 pt-2">
              <div className="max-w-[740px] mx-auto">
                <ChatPrompt />
              </div>
            </div>
          </div>

          {/* Right panel — fixed width, scrolls independently, no border */}
          <div
            className="flex-shrink-0 overflow-y-auto transition-all duration-[var(--duration-slow)]"
            style={{
              width: rightPanelOpen ? "280px" : "0px",
              opacity: rightPanelOpen ? 1 : 0,
              padding: rightPanelOpen ? "8px 16px 20px 0" : "0",
            }}
          >
            {rightPanelOpen && <RightPanel />}
          </div>

        </div>
      </div>
    </AppLayout>
  );
}
