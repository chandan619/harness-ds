"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { OrDivider } from "@/components/OrDivider";
import { HarnessIcon, HarnessLogo } from "@/components/icons";

/* ── Provider icons ─────────────────────────────────────────────────────────── */
function IconGoogle() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M15.68 8.18c0-.57-.05-1.12-.14-1.64H8v3.1h4.3a3.67 3.67 0 01-1.6 2.41v2h2.58c1.51-1.39 2.4-3.44 2.4-5.87z" fill="#4285F4"/>
      <path d="M8 16c2.16 0 3.97-.71 5.3-1.93l-2.59-2a5.01 5.01 0 01-7.48-2.63H.64v2.07A8 8 0 008 16z" fill="#34A853"/>
      <path d="M3.23 9.44A4.83 4.83 0 013 8c0-.5.09-.98.23-1.44V4.49H.64A8 8 0 000 8c0 1.29.31 2.51.64 3.51l2.59-2.07z" fill="#FBBC05"/>
      <path d="M8 3.18c1.23 0 2.32.42 3.19 1.25l2.38-2.38A8 8 0 00.64 4.49l2.59 2.07A4.77 4.77 0 018 3.18z" fill="#EA4335"/>
    </svg>
  );
}
function IconGitHub() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.65 7.65 0 012-.27c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z"/>
    </svg>
  );
}
function IconGitLab() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M8 14.5L5.1 5.9h5.8L8 14.5z" fill="#E24329"/>
      <path d="M8 14.5L5.1 5.9H1.7L8 14.5z" fill="#FC6D26"/>
      <path d="M1.7 5.9L.2 10.3a.96.96 0 00.35 1.08L8 14.5 1.7 5.9z" fill="#FCA326"/>
      <path d="M1.7 5.9H5.1L3.5 1a.48.48 0 00-.9 0L1.7 5.9z" fill="#E24329"/>
      <path d="M8 14.5l2.9-8.6h3.4L8 14.5z" fill="#FC6D26"/>
      <path d="M14.3 5.9l1.5 4.4a.96.96 0 01-.35 1.08L8 14.5l6.3-8.6z" fill="#FCA326"/>
      <path d="M14.3 5.9h-3.4l1.6-4.9a.48.48 0 01.9 0l.9 4.9z" fill="#E24329"/>
    </svg>
  );
}
function IconBitbucket() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M1.1 1a.29.29 0 00-.29.33l2.17 13.27c.05.28.29.48.57.48h8.93c.21 0 .4-.14.44-.35L15.19 1.34A.29.29 0 0014.9 1H1.1z" fill="#2684FF"/>
      <path d="M9.8 10.1H6.24L5.4 5.9h5.23l-.82 4.2z" fill="white"/>
    </svg>
  );
}
function IconAzure() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M9.3 1L5.1 5.6l-4.3 7.6h3.8L9.3 1z" fill="#0078D4"/>
      <path d="M9.3 1l2.1 9.1L4.6 13.2h10.6L9.3 1z" fill="#0078D4"/>
    </svg>
  );
}

/* ── Shared panel sub-components ────────────────────────────────────────────── */
function CertBadge({ label, sub, small }: { label: string; sub: string; small?: string }) {
  return (
    <div className="w-[52px] h-[52px] rounded-full border border-white/25 bg-white/[0.07] flex flex-col items-center justify-center gap-0.5">
      {small && <span className="text-[5px] font-medium text-white/50 leading-none tracking-wide">{small}</span>}
      <span className="text-[9px] font-bold text-white leading-tight tracking-wide">{label}</span>
      <span className="text-[7px] text-white/55 leading-tight">{sub}</span>
    </div>
  );
}

function SlideFooter() {
  return (
    <div className="flex flex-col gap-3">
      <div className="h-px bg-white/10" />
      <p className="text-[12px] text-white/55 tracking-[-0.01em]">Trusted by world-class engineering teams</p>
      <div className="flex items-center gap-5 flex-wrap">
        {["Bloomberg", "ebay", "cisco", "VMware"].map((logo) => (
          <span key={logo} className="text-[12px] font-semibold text-white/70 tracking-tight">{logo}</span>
        ))}
      </div>
      <div className="flex flex-col gap-2 mt-1">
        <div className="flex items-center gap-1.5">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M6 1L2 3v3c0 2.5 1.79 4 4 4s4-1.5 4-4V3L6 1z" stroke="rgba(255,255,255,0.55)" strokeWidth="1" fill="none"/>
          </svg>
          <span className="text-[11px] text-white/55 tracking-[-0.01em]">Enterprise-grade security</span>
        </div>
        <div className="flex items-center gap-2">
          <CertBadge small="AICPA" label="SOC2" sub="TYPE II" />
          <CertBadge label="ISO" sub="42001" />
          <CertBadge label="ISO" sub="27001" />
        </div>
      </div>
    </div>
  );
}

/* ── Slide 1: Testimonial ────────────────────────────────────────────────────── */
function Slide1() {
  return (
    <div className="flex flex-col gap-7">
      <h2 className="text-[28px] font-medium text-white tracking-[-0.02em] leading-[34px]">
        Simplify your<br />
        <em className="not-italic text-white/45">DevOps</em> in minutes
      </h2>

      {/* Feature items */}
      <div className="flex flex-col gap-3">
        {[
          { icon: "⬡", label: "Automate delivery with AI workflows." },
          { icon: "⚡", label: "Ship secure, resilient software." },
          { icon: "◎", label: "Optimize cost with 100+ integrations." },
        ].map(({ icon, label }) => (
          <div key={label} className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-[6px] flex items-center justify-center text-[11px] text-white/70 flex-shrink-0"
                 style={{ background: "rgba(0,0,0,0.3)", border: "1px solid rgba(255,255,255,0.1)" }}>
              {icon}
            </div>
            <span className="text-[13px] text-white/80 tracking-[-0.01em] leading-[18px]">{label}</span>
          </div>
        ))}
      </div>

      {/* Testimonial card */}
      <div className="flex flex-col gap-4 rounded-[12px] p-4"
           style={{ background: "rgba(0,0,0,0.35)", border: "1px solid rgba(255,255,255,0.1)" }}>
        {/* Company placeholder — replace with <img> when asset is ready */}
        <span className="text-[20px] font-light text-white/80 tracking-[0.05em] italic">citi</span>
        <p className="text-[13px] text-white/85 leading-[19px] tracking-[-0.01em]">
          Partnerships like this are critical to delivering better outcomes for our customers on a global scale
        </p>
        {/* Stats */}
        <div className="flex gap-4">
          {[{ value: "40+", label: "Countries" }, { value: "200M+", label: "Monthly consumers" }].map(({ value, label }) => (
            <div key={label} className="flex items-center gap-2">
              <div className="w-px h-8 bg-white/20" />
              <div className="flex flex-col">
                <span className="text-[13px] font-semibold text-white">{value}</span>
                <span className="text-[10px] text-white/45">{label}</span>
              </div>
            </div>
          ))}
        </div>
        {/* Attribution */}
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-medium text-white flex-shrink-0"
               style={{ background: "rgba(0,161,252,0.4)", border: "1px solid rgba(255,255,255,0.15)" }}>
            JA
          </div>
          <div>
            <p className="text-[12px] font-medium text-white">John Arroyo</p>
            <p className="text-[10px] text-white/45">Head of Developer Pipelines</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Slide 2: Grid + agents ──────────────────────────────────────────────────── */
const GRID_ITEMS = [
  { label: "DevOps &\nAutomation",    icon: "⬡" },
  { label: "Testing &\nResilience",   icon: "◈" },
  { label: "Security &\nCompliance",  icon: "◉" },
  { label: "Cost &\nOptimization",    icon: "⟳" },
];
const AGENTS = [
  ["DevOps Agent",       "Release Agent"],
  ["IDP Knowledge Agent","SRE Agent"],
  ["Test Agent",         "AppSec Agent"],
  ["Reliability Agent",  "FinOps Agent"],
];

function Slide2() {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-[28px] font-medium text-white tracking-[-0.02em] leading-[34px]">
        DevOps AI<br />
        <em className="not-italic text-white/45">Across</em> the SDLC
      </h2>

      {/* 2×2 capability grid */}
      <div className="grid grid-cols-2 gap-2.5">
        {GRID_ITEMS.map(({ label, icon }) => (
          <div key={label} className="flex items-center gap-3 p-3 rounded-[10px]"
               style={{ background: "rgba(0,0,0,0.35)", border: "1px solid rgba(255,255,255,0.1)" }}>
            <div className="w-8 h-8 rounded-[8px] flex items-center justify-center text-[14px] text-white/70 flex-shrink-0"
                 style={{ background: "rgba(0,0,0,0.25)" }}>
              {icon}
            </div>
            <span className="text-[12px] text-white/80 tracking-[-0.01em] leading-[16px] flex-1 whitespace-pre-line">{label}</span>
            <span className="text-white/40 text-[11px]">✓</span>
          </div>
        ))}
      </div>

      {/* Agent network */}
      <div className="flex flex-col gap-2.5">
        <p className="text-[12px] text-white/55 tracking-[-0.01em]">
          A network of intelligent agents, specialized in DevOps
        </p>
        <div className="grid grid-cols-2 gap-x-4 gap-y-1.5">
          {AGENTS.flatMap(([left, right]) => [
            <div key={left} className="flex items-center gap-2">
              <span className="text-white/40 text-[10px]">✓</span>
              <span className="text-[12px] text-white/70 tracking-[-0.01em]">{left}</span>
            </div>,
            <div key={right} className="flex items-center gap-2">
              <span className="text-white/40 text-[10px]">✓</span>
              <span className="text-[12px] text-white/70 tracking-[-0.01em]">{right}</span>
            </div>,
          ])}
        </div>
      </div>
    </div>
  );
}

/* ── Slide 3: Steps ─────────────────────────────────────────────────────────── */
const STEPS = [
  { num: "1", label: "Connect\nCode",                icon: "{ }" },
  { num: "2", label: "Choose a\nRepository",         icon: "⊡" },
  { num: "3", label: "Review &\nCreate Pipeline",    icon: "✓" },
];

function Slide3() {
  return (
    <div className="flex flex-col gap-7">
      <div className="flex flex-col gap-3">
        <h2 className="text-[28px] font-medium text-white tracking-[-0.02em] leading-[34px]">
          Set up your<br />
          <em className="not-italic text-white/45">CI Pipeline</em> instantly
        </h2>
        <p className="text-[13px] text-white/60 leading-[19px] tracking-[-0.01em]">
          Connect your codebase, let Harness understand your repository,
          and launch a recommended pipeline with guided setup.
        </p>
      </div>

      {/* Step cards */}
      <div className="grid grid-cols-3 gap-2.5">
        {STEPS.map(({ num, label, icon }) => (
          <div key={num} className="flex flex-col justify-between p-3 rounded-[10px] min-h-[90px]"
               style={{ background: "rgba(0,0,0,0.35)", border: "1px solid rgba(255,255,255,0.1)" }}>
            <div className="flex items-start justify-between">
              <span className="text-[11px] font-semibold text-white/40">{num}</span>
              <span className="text-[14px] text-white/50">{icon}</span>
            </div>
            <span className="text-[12px] text-white/85 tracking-[-0.01em] leading-[16px] whitespace-pre-line mt-3">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Carousel panel ─────────────────────────────────────────────────────────── */
const SLIDE_COUNT = 3;
const SLIDE_CONTENTS = [<Slide1 key={0} />, <Slide2 key={1} />, <Slide3 key={2} />];

function CarouselPanel() {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setSlide((s) => (s + 1) % SLIDE_COUNT), 5500);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className="relative w-full h-full rounded-[20px] overflow-hidden flex flex-col"
      style={{
        background: "linear-gradient(180deg, #1c1c1c 0%, #0f4759 26%, #027093 50%, #018aca 76%, #00a1fc 100%)",
      }}
    >
      {/* Decorative blobs */}
      <div className="absolute -bottom-40 -left-24 w-[480px] h-[480px] rounded-full opacity-10 blur-3xl pointer-events-none"
           style={{ background: "#00a1fc" }} />
      <div className="absolute top-[40%] right-[-80px] w-[360px] h-[360px] rounded-full opacity-10 blur-3xl pointer-events-none"
           style={{ background: "#00a1fc" }} />

      {/* Content area — vertically + horizontally centred, scrollable */}
      <div className="relative z-10 flex-1 flex items-center justify-center overflow-y-auto py-10 px-8">
        <div className="w-full max-w-[520px] flex flex-col gap-7">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <HarnessIcon size={20} />
            <HarnessLogo size={16} />
          </div>

          {/* Slide content — key forces remount + fade on slide change */}
          <div key={slide} className="chat-reveal flex flex-col gap-7">
            {SLIDE_CONTENTS[slide]}
          </div>

          {/* Footer — same on every slide */}
          <SlideFooter />
        </div>
      </div>

      {/* Pagination dots */}
      <div className="relative z-10 flex-shrink-0 flex justify-center pb-6 pt-2">
        <div className="flex items-center gap-2">
          {Array.from({ length: SLIDE_COUNT }).map((_, i) => (
            <button
              key={i}
              onClick={() => setSlide(i)}
              className="cursor-pointer transition-all duration-300"
              aria-label={`Go to slide ${i + 1}`}
            >
              {i === slide
                ? <div className="h-[6px] w-4 rounded-full bg-white" />
                : <div className="h-[6px] w-[6px] rounded-full bg-white/30 hover:bg-white/50" />}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Sign-up Form ────────────────────────────────────────────────────────────── */
function SignupForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  return (
    <div className="flex flex-col gap-9 w-full max-w-[360px]">
      {/* Logo + heading */}
      <div className="flex flex-col gap-5">
        <HarnessIcon size={36} />
        <div className="flex flex-col gap-2">
          <h1 className="text-[24px] font-medium text-white tracking-[-0.01em] leading-[32px]">
            Welcome to Harness
          </h1>
          <p className="text-[14px] text-white/50 tracking-[-0.01em] leading-[20px]">
            Your AI-native workspace for pipelines, runs, and delivery workflows.
          </p>
        </div>
      </div>

      {/* OAuth */}
      <div className="flex flex-col gap-3">
        <Button variant="primary" fullWidth icon={<IconGoogle />} onClick={() => router.push("/home")}>
          Continue with Google
        </Button>
        <div className="flex gap-2">
          {[
            { icon: <IconGitHub />, label: "GitHub" },
            { icon: <IconGitLab />, label: "GitLab" },
            { icon: <IconBitbucket />, label: "Bitbucket" },
            { icon: <IconAzure />, label: "Azure" },
          ].map(({ icon, label }) => (
            <button
              key={label}
              aria-label={`Continue with ${label}`}
              onClick={() => router.push("/home")}
              className="flex-1 h-10 flex items-center justify-center rounded-[8px] bg-white/[0.06] border border-white/[0.08] hover:bg-white/10 transition-colors cursor-pointer text-white"
            >
              {icon}
            </button>
          ))}
        </div>
      </div>

      <OrDivider />

      {/* Email form */}
      <div className="flex flex-col gap-4">
        <Input
          type="email"
          placeholder="name@work-email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button
          variant="ghost"
          fullWidth
          icon={
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 3.5h12M1 3.5l6 5 6-5M1 3.5v7h12v-7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          }
          onClick={() => router.push("/home")}
        >
          Continue with Email
        </Button>
        <p className="text-[11px] text-white/30 tracking-[-0.01em] leading-[18px] text-center">
          By continuing, you agree to our{" "}
          <a href="#" className="text-white/50 underline hover:text-white/70 transition-colors">Privacy Policy</a>
          {" "}and{" "}
          <a href="#" className="text-white/50 underline hover:text-white/70 transition-colors">Terms of Use</a>.
        </p>
      </div>
    </div>
  );
}

/* ── Page ────────────────────────────────────────────────────────────────────── */
export default function SignupPage() {
  return (
    <div className="h-screen flex overflow-hidden" style={{ background: "var(--color-harness-black)" }}>
      {/* Left — form */}
      <div className="flex-1 flex items-center justify-center overflow-y-auto px-8 py-12">
        <SignupForm />
      </div>
      {/* Right — carousel, hidden on mobile */}
      <div className="hidden lg:flex flex-1 h-full p-4">
        <CarouselPanel />
      </div>
    </div>
  );
}
