import Link from "next/link";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Card } from "@/components/Card";
import { OrDivider } from "@/components/OrDivider";
import { PaginationDots } from "@/components/PaginationDots";
import { TestimonialCard } from "@/components/TestimonialCard";
import { HarnessIcon, HarnessLogo } from "@/components/icons";

/* ── Section wrapper ─────────────────────────────────────────────────────── */
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <h2 className="text-[12px] font-semibold text-[var(--color-text-muted)] tracking-[0.08em] uppercase shrink-0">
          {title}
        </h2>
        <div className="flex-1 h-px bg-[var(--color-divider)]" />
      </div>
      {children}
    </section>
  );
}

/* ── Color swatch ────────────────────────────────────────────────────────── */
function Swatch({ name, value, cssVar, style }: { name: string; value: string; cssVar?: string; style?: React.CSSProperties }) {
  return (
    <div className="flex flex-col gap-2">
      <div
        className="w-full h-14 rounded-[var(--radius-sm)] border border-[var(--color-border-input)]"
        style={style ?? { background: `var(${cssVar})` }}
      />
      <p className="text-[12px] font-medium text-[var(--color-text-primary)] tracking-[-0.01em]">{name}</p>
      <p className="text-[11px] text-[var(--color-text-muted)] font-mono tracking-[-0.01em]">{value}</p>
      {cssVar && <p className="text-[10px] text-[var(--color-text-faint)] font-mono tracking-[-0.01em]">{cssVar}</p>}
    </div>
  );
}

/* ── Type specimen row ───────────────────────────────────────────────────── */
function TypeRow({ label, size, weight, lineHeight, sample }: {
  label: string; size: string; weight: string; lineHeight: string; sample: string;
}) {
  return (
    <div className="flex items-baseline gap-6 py-4 border-b border-[var(--color-divider)] last:border-0 flex-wrap">
      <div className="w-36 shrink-0">
        <span className="text-[11px] text-[var(--color-text-muted)] font-mono tracking-[-0.01em] block">{label}</span>
        <span className="text-[10px] text-[var(--color-text-faint)] font-mono tracking-[-0.01em]">
          {size} / w{weight} / lh {lineHeight}
        </span>
      </div>
      <span className="text-[var(--color-text-primary)] tracking-[-0.01em]" style={{ fontSize: size, fontWeight: weight, lineHeight }}>
        {sample}
      </span>
    </div>
  );
}

/* ── Token row ───────────────────────────────────────────────────────────── */
function TokenRow({ token, value, preview }: { token: string; value: string; preview?: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 py-3 border-b border-[var(--color-divider)] last:border-0 flex-wrap">
      <code className="text-[12px] text-[var(--color-brand-light)] font-mono w-52 shrink-0 break-all">{token}</code>
      <span className="text-[12px] text-[var(--color-text-muted)] font-mono flex-1">{value}</span>
      {preview && <div className="shrink-0">{preview}</div>}
    </div>
  );
}

/* ── Screen card ─────────────────────────────────────────────────────────── */
function ScreenCard({
  href, label, description, tag, gradient,
}: {
  href: string; label: string; description: string; tag: string; gradient?: boolean;
}) {
  return (
    <Link href={href} className="group flex flex-col gap-0 rounded-[var(--radius-md)] overflow-hidden border border-[var(--color-border-card)] hover:border-[var(--color-brand-light)] transition-colors">
      {/* Preview strip */}
      <div
        className="h-28 w-full flex items-center justify-center relative overflow-hidden"
        style={{
          background: gradient
            ? "linear-gradient(180deg, #0f4759 0%, #027093 45%, #018aca 72%, #00a1fc 100%)"
            : "var(--color-harness-black)",
        }}
      >
        <div className="flex flex-col items-center gap-1 opacity-60">
          <HarnessIcon size={24} />
          <span className="text-[10px] font-medium text-white tracking-[-0.01em]">{label}</span>
        </div>
        <div
          className="absolute top-2 right-2 px-2 py-0.5 rounded-full text-[9px] font-semibold tracking-wide uppercase"
          style={{ background: "rgba(0,161,252,0.2)", color: "var(--color-brand-light)", border: "1px solid rgba(0,161,252,0.3)" }}
        >
          {tag}
        </div>
      </div>
      {/* Meta */}
      <div className="px-4 py-3 flex flex-col gap-1" style={{ background: "rgba(28,28,28,0.9)" }}>
        <p className="text-[13px] font-medium text-white tracking-[-0.01em] group-hover:text-[var(--color-brand-light)] transition-colors">
          {label} →
        </p>
        <p className="text-[11px] tracking-[-0.01em]" style={{ color: "var(--color-text-muted)" }}>{description}</p>
      </div>
    </Link>
  );
}

/* ── Page ─────────────────────────────────────────────────────────────────── */
export default function DesignSystemPage() {
  return (
    <div className="min-h-screen bg-[var(--color-harness-black)]">

      {/* Sticky header */}
      <header
        className="sticky top-0 z-50 border-b"
        style={{ borderColor: "var(--color-divider)", background: "rgba(28,28,28,0.9)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }}
      >
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 h-14 flex items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="flex items-center gap-1.5">
              <HarnessIcon size={18} />
              <HarnessLogo size={14} />
            </div>
            <span style={{ color: "var(--color-divider)" }}>/</span>
            <span className="text-[13px] font-medium text-[var(--color-text-muted)] tracking-[-0.01em]">Design System</span>
          </div>

          {/* Screen links */}
          <nav className="flex items-center gap-1">
            {[
              { href: "/home",   label: "Home" },
              { href: "/chat",   label: "Chat" },
              { href: "/signup", label: "Sign-up" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="px-3 py-1.5 rounded-[6px] text-[12px] font-medium tracking-[-0.01em] transition-colors hover:bg-white/5"
                style={{ color: "var(--color-text-muted)" }}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main className="max-w-[1200px] mx-auto px-6 md:px-10 py-16 flex flex-col gap-20">

        {/* Hero */}
        <div className="flex flex-col gap-4 max-w-[600px]">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-[100px] text-[11px] font-medium w-fit"
            style={{ background: "var(--color-surface-ghost)", border: "1px solid var(--color-border-subtle)", color: "var(--color-brand-light)" }}
          >
            v1.1 · Home · Chat · Sign-up
          </div>
          <h1 className="text-[40px] font-medium tracking-[-0.01em] leading-[1.1]" style={{ color: "var(--color-text-primary)" }}>
            Harness Design System
          </h1>
          <p className="text-[16px] font-normal tracking-[-0.01em] leading-[24px]" style={{ color: "var(--color-text-secondary)" }}>
            Tokens, components, and patterns powering the Harness.io UI — Home, Chat, and Sign-up screens.
            All values reference CSS custom properties; nothing is hardcoded.
          </p>
        </div>

        {/* ── Screens ──────────────────────────────────────────────────────── */}
        <Section title="Screens">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <ScreenCard
              href="/home"
              label="Home"
              description="AI prompt, suggestion chips, tabbed bottom bar with scroll-peek"
              tag="Page"
            />
            <ScreenCard
              href="/chat"
              label="Chat"
              description="Progressive message reveal, collapsible right panel, docked prompt"
              tag="Page"
            />
            <ScreenCard
              href="/signup"
              label="Sign-up"
              description="Three-slide carousel, OAuth providers, responsive two-column layout"
              tag="Page"
              gradient
            />
          </div>
        </Section>

        {/* ── Color Tokens ─────────────────────────────────────────────────── */}
        <Section title="Color Tokens">
          <div className="flex flex-col gap-8">

            {/* Brand palette */}
            <div>
              <p className="text-[13px] font-medium tracking-[-0.01em] mb-4" style={{ color: "var(--color-text-secondary)" }}>Brand Palette</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                <Swatch name="Harness Black" value="#1c1c1c" cssVar="--color-harness-black" />
                <Swatch name="Dark Teal" value="#0f4759" cssVar="--color-brand-dark-teal" />
                <Swatch name="Cyan" value="#027093" cssVar="--color-brand-cyan" />
                <Swatch name="Mid Blue" value="#018aca" cssVar="--color-brand-mid" />
                <Swatch name="Brand Light" value="#00a1fc" cssVar="--color-brand-light" />
              </div>
            </div>

            {/* Gradients */}
            <div>
              <p className="text-[13px] font-medium tracking-[-0.01em] mb-4" style={{ color: "var(--color-text-secondary)" }}>Gradients</p>
              <div className="flex flex-col gap-4">
                {/* Full brand gradient — home page background */}
                <div>
                  <p className="text-[11px] font-mono mb-2" style={{ color: "var(--color-text-muted)" }}>
                    .gradient-brand — Home & background blobs
                  </p>
                  <div className="gradient-brand w-full h-12 rounded-[var(--radius-sm)]" />
                  <p className="text-[10px] font-mono mt-1.5 tracking-[-0.01em]" style={{ color: "var(--color-text-faint)" }}>
                    #1c1c1c 0% → #0f4759 26% → #027093 50% → #018aca 76% → #00a1fc 100%
                  </p>
                </div>
                {/* Panel gradient — signup carousel */}
                <div>
                  <p className="text-[11px] font-mono mb-2" style={{ color: "var(--color-text-muted)" }}>
                    Panel gradient — Sign-up carousel (no black at top)
                  </p>
                  <div
                    className="w-full h-12 rounded-[var(--radius-sm)]"
                    style={{ background: "linear-gradient(180deg, #0f4759 0%, #027093 45%, #018aca 72%, #00a1fc 100%)" }}
                  />
                  <p className="text-[10px] font-mono mt-1.5 tracking-[-0.01em]" style={{ color: "var(--color-text-faint)" }}>
                    #0f4759 0% → #027093 45% → #018aca 72% → #00a1fc 100%
                  </p>
                </div>
              </div>
            </div>

            {/* Semantic text */}
            <div>
              <p className="text-[13px] font-medium tracking-[-0.01em] mb-4" style={{ color: "var(--color-text-secondary)" }}>Semantic Text</p>
              <Card>
                <TokenRow token="--color-text-primary"  value="rgba(255,255,255,1.0)" preview={<span className="text-sm" style={{ color: "var(--color-text-primary)" }}>Aa</span>} />
                <TokenRow token="--color-text-secondary" value="rgba(255,255,255,0.8)" preview={<span className="text-sm" style={{ color: "var(--color-text-secondary)" }}>Aa</span>} />
                <TokenRow token="--color-text-muted"    value="rgba(255,255,255,0.5) — arrows, icons, labels" preview={<span className="text-sm" style={{ color: "var(--color-text-muted)" }}>Aa</span>} />
                <TokenRow token="--color-text-disabled" value="rgba(255,255,255,0.4)" preview={<span className="text-sm" style={{ color: "var(--color-text-disabled)" }}>Aa</span>} />
                <TokenRow token="--color-text-faint"    value="rgba(255,255,255,0.3)" preview={<span className="text-sm" style={{ color: "var(--color-text-faint)" }}>Aa</span>} />
              </Card>
            </div>

            {/* Surfaces & borders */}
            <div>
              <p className="text-[13px] font-medium tracking-[-0.01em] mb-4" style={{ color: "var(--color-text-secondary)" }}>Surfaces & Borders</p>
              <Card>
                <TokenRow token="--color-surface-card"  value="rgba(28,28,28,0.16) — cards, bottom bar, tabs"
                  preview={<div className="w-10 h-6 rounded" style={{ background: "var(--color-surface-card)", border: "1px solid var(--color-border-card)" }} />} />
                <TokenRow token="--color-surface-ghost" value="rgba(255,255,255,0.06)"
                  preview={<div className="w-10 h-6 rounded" style={{ background: "var(--color-surface-ghost)", border: "1px solid var(--color-border-subtle)" }} />} />
                <TokenRow token="--color-border-card"   value="rgba(255,255,255,0.12) — card borders" />
                <TokenRow token="--color-border-input"  value="rgba(255,255,255,0.10) — prompt, sidebar" />
                <TokenRow token="--color-border-subtle" value="rgba(255,255,255,0.06) — ghost surfaces" />
                <TokenRow token="--color-divider"       value="rgba(255,255,255,0.06) — section dividers" />
              </Card>
            </div>
          </div>
        </Section>

        {/* ── Typography ───────────────────────────────────────────────────── */}
        <Section title="Typography">
          <div className="flex flex-col gap-6">
            <div
              className="inline-flex items-center gap-3 px-4 py-2 rounded-[var(--radius-sm)] w-fit flex-wrap"
              style={{ background: "var(--color-surface-ghost)", border: "1px solid var(--color-border-subtle)" }}
            >
              <span className="text-[12px] tracking-[-0.01em]" style={{ color: "var(--color-text-muted)" }}>Font:</span>
              <code className="text-[12px]" style={{ color: "var(--color-brand-light)" }}>Geist</code>
              <span className="text-[12px] tracking-[-0.01em]" style={{ color: "var(--color-text-muted)" }}>·</span>
              <a href="https://fonts.google.com/specimen/Geist" target="_blank" rel="noopener noreferrer"
                className="text-[12px] underline hover:opacity-80 tracking-[-0.01em]" style={{ color: "var(--color-text-muted)" }}>
                Google Fonts
              </a>
              <span className="text-[12px] tracking-[-0.01em]" style={{ color: "var(--color-text-muted)" }}>· loaded via next/font/google · letter-spacing: -0.01em globally</span>
            </div>
            <Card>
              <TypeRow label="micro / badge"   size="10px" weight="500" lineHeight="16px" sample="SECTION LABEL · BADGE · META" />
              <TypeRow label="xs / caption"    size="11px" weight="400" lineHeight="18px" sample="Stat labels, meta, captions, legal" />
              <TypeRow label="sm / label"      size="12px" weight="500" lineHeight="20px" sample="Labels, helper text, pipeline names" />
              <TypeRow label="base / body"     size="14px" weight="400" lineHeight="20px" sample="Body copy, chat steps, feature list, tab labels" />
              <TypeRow label="base-semi"       size="14px" weight="600" lineHeight="20px" sample="Continue with Google — primary CTA" />
              <TypeRow label="heading-sm"      size="24px" weight="500" lineHeight="32px" sample="Welcome to Harness" />
              <TypeRow label="heading-md"      size="28px" weight="500" lineHeight="36px" sample="Hi, Benjamin — Simplify your DevOps" />
              <TypeRow label="heading-lg"      size="40px" weight="500" lineHeight="44px" sample="Design System" />
            </Card>
          </div>
        </Section>

        {/* ── Spacing ───────────────────────────────────────────────────────── */}
        <Section title="Spacing Scale (8px base)">
          <Card>
            {([
              ["2px",  "gap-0.5"],
              ["4px",  "gap-1 / p-1"],
              ["6px",  "gap-1.5 / p-1.5"],
              ["8px",  "gap-2 / p-2"],
              ["10px", "gap-2.5 / p-2.5"],
              ["12px", "gap-3 / p-3"],
              ["14px", "gap-3.5 / p-3.5"],
              ["16px", "gap-4 / p-4"],
              ["20px", "gap-5 / p-5"],
              ["24px", "gap-6 / p-6"],
              ["28px", "gap-7 / p-7"],
              ["32px", "p-8"],
              ["36px", "gap-9 / p-9"],
              ["40px", "gap-10 / p-10"],
            ] as [string, string][]).map(([value, token]) => (
              <div key={value} className="flex items-center gap-4 py-2 border-b border-[var(--color-divider)] last:border-0">
                <code className="text-[12px] font-mono w-10 shrink-0" style={{ color: "var(--color-brand-light)" }}>{value}</code>
                <code className="text-[12px] font-mono flex-1" style={{ color: "var(--color-text-muted)" }}>{token}</code>
                <div className="h-2 rounded-[2px] shrink-0 opacity-60" style={{ width: value, background: "var(--color-brand-light)", minWidth: "2px" }} />
              </div>
            ))}
          </Card>
        </Section>

        {/* ── Border Radius ─────────────────────────────────────────────────── */}
        <Section title="Border Radius">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {([
              ["radius-sm",   "8px",   "--radius-sm",   "Buttons, inputs, chat steps"],
              ["radius-md",   "12px",  "--radius-md",   "Cards, tabs, right panel"],
              ["radius-lg",   "16px",  "--radius-lg",   "Prompt input, panels"],
              ["radius-pill", "100px", "--radius-pill", "Avatars, dots, badges"],
            ] as [string, string, string, string][]).map(([name, value, cssVar, usage]) => (
              <div key={name} className="flex flex-col gap-3">
                <div className="w-full h-16"
                  style={{ background: "var(--color-surface-ghost)", border: "1px solid var(--color-border-subtle)", borderRadius: `var(${cssVar})` }} />
                <div>
                  <p className="text-[12px] font-medium tracking-[-0.01em]" style={{ color: "var(--color-text-primary)" }}>{name}</p>
                  <p className="text-[11px] font-mono tracking-[-0.01em]" style={{ color: "var(--color-text-muted)" }}>{value}</p>
                  <p className="text-[11px] tracking-[-0.01em]" style={{ color: "var(--color-text-faint)" }}>{usage}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ── Animation Tokens ─────────────────────────────────────────────── */}
        <Section title="Animation Tokens">
          <Card>
            <TokenRow token="fadeSlideUp" value="opacity 0→1 + translateY 10px→0 · 0.45s ease-out"
              preview={<code className="text-[10px] font-mono" style={{ color: "var(--color-text-faint)" }}>.chat-reveal</code>} />
            <TokenRow token="spinSlow" value="rotate 0→360° · 1.8s linear infinite"
              preview={<code className="text-[10px] font-mono" style={{ color: "var(--color-text-faint)" }}>.spin-slow</code>} />
            <TokenRow token="blobFloat1" value="translate + scale drift · 22s ease-in-out infinite"
              preview={<code className="text-[10px] font-mono" style={{ color: "var(--color-text-faint)" }}>Background</code>} />
            <TokenRow token="blobFloat2" value="translate + scale drift · 28s ease-in-out infinite"
              preview={<code className="text-[10px] font-mono" style={{ color: "var(--color-text-faint)" }}>Background</code>} />
            <TokenRow token="--duration-fast"   value="150ms" />
            <TokenRow token="--duration-normal" value="250ms" />
            <TokenRow token="--duration-slow"   value="400ms — sidebar collapse transition" />
          </Card>
        </Section>

        {/* ── Components ───────────────────────────────────────────────────── */}
        <Section title="Components">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Buttons */}
            <Card>
              <p className="text-[12px] font-semibold tracking-[0.06em] uppercase mb-5" style={{ color: "var(--color-text-muted)" }}>Buttons</p>
              <div className="flex flex-col gap-3">
                <Button variant="primary" fullWidth>Primary — Continue with Google</Button>
                <Button variant="ghost" fullWidth>Ghost — Continue with Email</Button>
                <div className="flex gap-2">
                  {["GH", "GL", "BB", "Az"].map((p) => (
                    <button key={p} className="flex-1 h-10 flex items-center justify-center rounded-[var(--radius-sm)] text-[10px] font-medium transition-colors hover:bg-white/10 cursor-pointer"
                      style={{ background: "var(--color-surface-ghost)", border: "1px solid var(--color-border-subtle)", color: "var(--color-text-muted)" }}>
                      {p}
                    </button>
                  ))}
                </div>
                <p className="text-[11px] mt-1 tracking-[-0.01em]" style={{ color: "var(--color-text-faint)" }}>
                  variant="primary" · "ghost" · icon tile row
                </p>
              </div>
            </Card>

            {/* Inputs */}
            <Card>
              <p className="text-[12px] font-semibold tracking-[0.06em] uppercase mb-5" style={{ color: "var(--color-text-muted)" }}>Inputs</p>
              <div className="flex flex-col gap-4">
                <Input placeholder="name@work-email.com" type="email" />
                <Input label="With label" placeholder="Enter a value…" />
                <Input placeholder="Error state" error="This field is required" />
              </div>
            </Card>

            {/* Divider & Dots */}
            <Card>
              <p className="text-[12px] font-semibold tracking-[0.06em] uppercase mb-5" style={{ color: "var(--color-text-muted)" }}>Divider + Pagination Dots</p>
              <OrDivider />
              <div className="flex flex-col gap-3 mt-4 items-start">
                <PaginationDots count={3} active={0} />
                <PaginationDots count={3} active={1} />
                <PaginationDots count={3} active={2} />
              </div>
            </Card>

            {/* Glass surfaces */}
            <div className="rounded-[var(--radius-md)] p-6 flex flex-col gap-3"
                 style={{ background: "linear-gradient(180deg, #0f4759 0%, #027093 45%, #018aca 72%, #00a1fc 100%)" }}>
              <p className="text-[12px] font-semibold tracking-[0.06em] uppercase mb-1" style={{ color: "var(--color-text-muted)" }}>Glass Surfaces</p>
              <div className="card-glass p-4">
                <p className="text-[13px] font-medium tracking-[-0.01em]" style={{ color: "var(--color-text-primary)" }}>card-glass</p>
                <p className="text-[11px] tracking-[-0.01em] mt-0.5" style={{ color: "var(--color-text-muted)" }}>surface-card + border-card + backdrop-blur(12px)</p>
              </div>
              <div className="p-4 rounded-[var(--radius-sm)]"
                   style={{ background: "rgba(28,28,28,0.16)", border: "1px solid rgba(255,255,255,0.12)" }}>
                <p className="text-[13px] font-medium tracking-[-0.01em]" style={{ color: "var(--color-text-primary)" }}>Panel card</p>
                <p className="text-[11px] tracking-[-0.01em] mt-0.5" style={{ color: "var(--color-text-muted)" }}>rgba(28,28,28,0.16) + border rgba(255,255,255,0.12)</p>
              </div>
            </div>
          </div>

          {/* Chat cards */}
          <div className="flex flex-col gap-4">
            <p className="text-[12px] font-semibold tracking-[0.06em] uppercase" style={{ color: "var(--color-text-muted)" }}>Chat — Right Panel Card (Collapsible)</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-0.5 pb-3 pt-1.5 px-1.5 rounded-[var(--radius-md)] max-w-[320px]"
                   style={{ background: "var(--color-harness-black)", border: "1px solid rgba(255,255,255,0.06)" }}>
                <div className="flex items-center justify-between px-2 py-2 rounded-[6px]">
                  <span className="text-[14px] font-normal tracking-[-0.01em] leading-5" style={{ color: "var(--color-text-muted)" }}>Run status</span>
                  <span style={{ color: "var(--color-text-muted)", transform: "rotate(90deg)", display: "inline-flex" }}>›</span>
                </div>
                {["Completed successfully", "Run #1", "Runtime: 4m 12s"].map((item) => (
                  <div key={item} className="flex items-center gap-2 px-2 py-2 rounded-[6px]">
                    <span className="flex items-center justify-center w-4 h-4 flex-shrink-0" style={{ color: "var(--color-text-muted)" }}>✓</span>
                    <span className="text-[12px] tracking-[-0.01em] leading-4" style={{ color: "var(--color-text-muted)" }}>{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-2 text-[12px] tracking-[-0.01em]" style={{ color: "var(--color-text-muted)" }}>
                <p>· Dark card: <code style={{ color: "var(--color-brand-light)" }}>--color-harness-black</code> bg + <code style={{ color: "var(--color-brand-light)" }}>rgba(255,255,255,0.06)</code> border</p>
                <p>· Title row is a button — click to expand/collapse with chevron rotation</p>
                <p>· Icon cells: fixed <code style={{ color: "var(--color-brand-light)" }}>w-4 h-4</code> container for alignment</p>
                <p>· Used for: Run status · Run stages · Key signals</p>
              </div>
            </div>
          </div>

          {/* Testimonial */}
          <div>
            <p className="text-[12px] font-semibold tracking-[0.06em] uppercase mb-4" style={{ color: "var(--color-text-muted)" }}>Testimonial Card</p>
            <div className="max-w-lg">
              <TestimonialCard
                quote="Partnerships like this are critical to delivering better outcomes for our customers on a global scale"
                stats={[
                  { icon: "🌍", value: "40+", label: "Countries" },
                  { icon: "👥", value: "200M+", label: "Monthly consumers" },
                ]}
                name="John Arroyo"
                role="Head of Developer Pipelines"
              />
            </div>
          </div>
        </Section>

        {/* ── Patterns ─────────────────────────────────────────────────────── */}
        <Section title="Patterns">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Prompt input */}
            <Card>
              <p className="text-[12px] font-semibold tracking-[0.06em] uppercase mb-4" style={{ color: "var(--color-text-muted)" }}>Prompt Input</p>
              <div className="flex flex-col rounded-[16px]"
                   style={{ background: "rgba(28,28,28,0.5)", border: "1px solid rgba(255,255,255,0.2)" }}>
                <div className="px-3 pt-2">
                  <div className="w-full px-2 py-3 text-[14px] tracking-[-0.01em]" style={{ color: "var(--color-text-disabled)" }}>
                    Ask Harness…
                  </div>
                </div>
                <div className="flex items-center justify-between p-3">
                  <div className="flex items-center gap-2 px-2 py-2 rounded-[36px]"
                       style={{ background: "rgba(255,255,255,0.04)", color: "var(--color-text-muted)" }}>
                    <span className="text-[12px]">⊕</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-[6px]" style={{ color: "var(--color-text-muted)" }}>🎤</div>
                    <div className="p-2 rounded-[8px]" style={{ background: "var(--color-brand-light)" }}>↑</div>
                  </div>
                </div>
              </div>
              <p className="text-[11px] mt-3 tracking-[-0.01em]" style={{ color: "var(--color-text-faint)" }}>
                Rounded-16 container · textarea with outline-none · attach / mic / send actions
              </p>
            </Card>

            {/* Progressive reveal */}
            <Card>
              <p className="text-[12px] font-semibold tracking-[0.06em] uppercase mb-4" style={{ color: "var(--color-text-muted)" }}>Chat Progressive Reveal</p>
              <div className="flex flex-col gap-2 text-[12px] tracking-[-0.01em]" style={{ color: "var(--color-text-muted)" }}>
                {[
                  ["300ms",  "User bubble — Run pipeline"],
                  ["900ms",  "Init bar — Initialized new pipeline"],
                  ["2100ms", "Step — Kickstarting process"],
                  ["3600ms", "Step — Starting first run"],
                  ["5100ms", "Step — Run in progress"],
                  ["6600ms", "Step — Run completed"],
                  ["7800ms", "CTA — You can continue from here"],
                  ["8500ms", "Actions — copy / thumb / dots · spinner stops"],
                ].map(([time, label]) => (
                  <div key={time} className="flex items-start gap-3 py-1 border-b border-[var(--color-divider)] last:border-0">
                    <code className="shrink-0 w-14" style={{ color: "var(--color-brand-light)" }}>{time}</code>
                    <span>{label}</span>
                  </div>
                ))}
              </div>
              <p className="text-[11px] mt-3 tracking-[-0.01em]" style={{ color: "var(--color-text-faint)" }}>
                Show component defined outside ChatPage (stable type) · auto-scrolls bottomRef · Harness icon spins (.spin-slow) while loading
              </p>
            </Card>
          </div>
        </Section>

      </main>

      <footer className="border-t mt-20" style={{ borderColor: "var(--color-divider)" }}>
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-8 flex items-center justify-between flex-wrap gap-4">
          <p className="text-[12px] tracking-[-0.01em]" style={{ color: "var(--color-text-faint)" }}>
            Harness Design System · v1.1 · Home · Chat · Sign-up
          </p>
          <p className="text-[12px] tracking-[-0.01em]" style={{ color: "var(--color-text-faint)" }}>
            Font:{" "}
            <a href="https://fonts.google.com/specimen/Geist" target="_blank" rel="noopener noreferrer"
               className="underline hover:opacity-80" style={{ color: "var(--color-text-muted)" }}>Geist
            </a>{" "}via Google Fonts
          </p>
        </div>
      </footer>
    </div>
  );
}
