import Link from "next/link";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Card } from "@/components/Card";
import { OrDivider } from "@/components/OrDivider";
import { PaginationDots } from "@/components/PaginationDots";
import { TestimonialCard } from "@/components/TestimonialCard";

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
function Swatch({ name, value, cssVar }: { name: string; value: string; cssVar: string }) {
  return (
    <div className="flex flex-col gap-2">
      <div
        className="w-full h-14 rounded-[var(--radius-sm)] border border-[var(--color-border-input)]"
        style={{ background: `var(${cssVar})` }}
      />
      <p className="text-[12px] font-medium text-[var(--color-text-primary)] tracking-[-0.01em]">{name}</p>
      <p className="text-[11px] text-[var(--color-text-muted)] font-mono tracking-[-0.01em]">{value}</p>
      <p className="text-[10px] text-[var(--color-text-faint)] font-mono tracking-[-0.01em]">{cssVar}</p>
    </div>
  );
}

/* ── Type specimen row ───────────────────────────────────────────────────── */
function TypeRow({
  label, size, weight, lineHeight, sample,
}: { label: string; size: string; weight: string; lineHeight: string; sample: string }) {
  return (
    <div className="flex items-baseline gap-6 py-4 border-b border-[var(--color-divider)] last:border-0 flex-wrap">
      <div className="w-36 shrink-0">
        <span className="text-[11px] text-[var(--color-text-muted)] font-mono tracking-[-0.01em] block">{label}</span>
        <span className="text-[10px] text-[var(--color-text-faint)] font-mono tracking-[-0.01em]">
          {size} / w{weight} / lh {lineHeight}
        </span>
      </div>
      <span
        className="text-[var(--color-text-primary)] tracking-[-0.01em]"
        style={{ fontSize: size, fontWeight: weight, lineHeight }}
      >
        {sample}
      </span>
    </div>
  );
}

/* ── Token row ───────────────────────────────────────────────────────────── */
function TokenRow({
  token, value, preview,
}: { token: string; value: string; preview?: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 py-3 border-b border-[var(--color-divider)] last:border-0 flex-wrap">
      <code className="text-[12px] text-[var(--color-brand-light)] font-mono w-52 shrink-0 break-all">{token}</code>
      <span className="text-[12px] text-[var(--color-text-muted)] font-mono flex-1">{value}</span>
      {preview && <div className="shrink-0">{preview}</div>}
    </div>
  );
}

/* ── Page ─────────────────────────────────────────────────────────────────── */
export default function DesignSystemPage() {
  return (
    <div className="min-h-screen bg-[var(--color-harness-black)]">
      {/* Sticky header */}
      <header
        className="sticky top-0 z-50 border-b"
        style={{
          borderColor: "var(--color-divider)",
          background: "rgba(28,28,28,0.85)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
        }}
      >
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              {/* Harness mark */}
              <svg width="20" height="20" viewBox="0 0 36 36" fill="none">
                <path d="M18 2C9.16 2 2 9.16 2 18s7.16 16 16 16 16-7.16 16-16S26.84 2 18 2z"
                  fill="var(--color-brand-light)" opacity="0.2"/>
                <path d="M12 12h4v12h-4zM20 12h4v12h-4z" fill="var(--color-brand-light)"/>
                <path d="M12 17h12v2H12z" fill="var(--color-brand-light)"/>
              </svg>
              <span className="text-[16px] font-semibold text-[var(--color-text-primary)] tracking-[-0.01em]">harness</span>
            </div>
            <span className="text-[var(--color-divider)]">/</span>
            <span className="text-[14px] font-medium text-[var(--color-text-muted)] tracking-[-0.01em]">Design System</span>
          </div>
          <Link
            href="/signup"
            className="text-[13px] font-medium tracking-[-0.01em] hover:opacity-80 transition-opacity"
            style={{ color: "var(--color-brand-light)" }}
          >
            Signup screen →
          </Link>
        </div>
      </header>

      <main className="max-w-[1200px] mx-auto px-6 md:px-10 py-16 flex flex-col gap-20">
        {/* Hero */}
        <div className="flex flex-col gap-4 max-w-[600px]">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-[100px] text-[11px] font-medium w-fit"
            style={{
              background: "var(--color-surface-ghost)",
              border: "1px solid var(--color-border-subtle)",
              color: "var(--color-brand-light)",
            }}
          >
            v1.0 · Generated from Figma
          </div>
          <h1
            className="text-[40px] font-medium tracking-[-0.01em] leading-[1.1]"
            style={{ color: "var(--color-text-primary)" }}
          >
            Harness Design System
          </h1>
          <p
            className="text-[16px] font-normal tracking-[-0.01em] leading-[24px]"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Tokens, components, and patterns from the Harness.io Figma file.
            All values reference CSS custom properties — nothing is hardcoded.
          </p>
        </div>

        {/* ── Color Tokens ─────────────────────────────────────────────────── */}
        <Section title="Color Tokens">
          <div className="flex flex-col gap-8">
            {/* Brand palette */}
            <div>
              <p className="text-[13px] font-medium tracking-[-0.01em] mb-4" style={{ color: "var(--color-text-secondary)" }}>
                Brand Palette
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                <Swatch name="Black" value="#1c1c1c" cssVar="--color-harness-black" />
                <Swatch name="Dark Teal" value="#0f4759" cssVar="--color-brand-dark-teal" />
                <Swatch name="Cyan" value="#027093" cssVar="--color-brand-cyan" />
                <Swatch name="Mid Blue" value="#018aca" cssVar="--color-brand-mid" />
                <Swatch name="Brand Light" value="#00a1fc" cssVar="--color-brand-light" />
              </div>
            </div>

            {/* Gradient preview */}
            <div>
              <p className="text-[13px] font-medium tracking-[-0.01em] mb-4" style={{ color: "var(--color-text-secondary)" }}>
                Brand Gradient
              </p>
              <div className="gradient-brand w-full h-16 rounded-[var(--radius-sm)]" />
              <p className="text-[11px] font-mono mt-2 tracking-[-0.01em]" style={{ color: "var(--color-text-faint)" }}>
                linear-gradient(180deg, --color-brand-dark → --color-brand-dark-teal → --color-brand-cyan → --color-brand-mid → --color-brand-light)
              </p>
            </div>

            {/* Semantic text */}
            <div>
              <p className="text-[13px] font-medium tracking-[-0.01em] mb-4" style={{ color: "var(--color-text-secondary)" }}>
                Semantic Text
              </p>
              <Card>
                <TokenRow token="--color-text-primary" value="rgba(255,255,255,1)" preview={<span className="text-sm" style={{ color: "var(--color-text-primary)" }}>Aa</span>} />
                <TokenRow token="--color-text-secondary" value="rgba(255,255,255,0.8)" preview={<span className="text-sm" style={{ color: "var(--color-text-secondary)" }}>Aa</span>} />
                <TokenRow token="--color-text-muted" value="rgba(255,255,255,0.5)" preview={<span className="text-sm" style={{ color: "var(--color-text-muted)" }}>Aa</span>} />
                <TokenRow token="--color-text-disabled" value="rgba(255,255,255,0.4)" preview={<span className="text-sm" style={{ color: "var(--color-text-disabled)" }}>Aa</span>} />
                <TokenRow token="--color-text-faint" value="rgba(255,255,255,0.3)" preview={<span className="text-sm" style={{ color: "var(--color-text-faint)" }}>Aa</span>} />
              </Card>
            </div>

            {/* Surfaces */}
            <div>
              <p className="text-[13px] font-medium tracking-[-0.01em] mb-4" style={{ color: "var(--color-text-secondary)" }}>
                Surfaces &amp; Borders
              </p>
              <Card>
                <TokenRow token="--color-surface-card" value="rgba(28,28,28,0.16)" preview={<div className="w-10 h-6 rounded" style={{ background: "var(--color-surface-card)", border: "1px solid var(--color-border-card)" }} />} />
                <TokenRow token="--color-surface-ghost" value="rgba(255,255,255,0.06)" preview={<div className="w-10 h-6 rounded" style={{ background: "var(--color-surface-ghost)", border: "1px solid var(--color-border-subtle)" }} />} />
                <TokenRow token="--color-border-card" value="rgba(255,255,255,0.12)" />
                <TokenRow token="--color-border-input" value="rgba(255,255,255,0.10)" />
                <TokenRow token="--color-divider" value="rgba(255,255,255,0.06)" />
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
              <a
                href="https://fonts.google.com/specimen/Geist"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[12px] underline hover:opacity-80 tracking-[-0.01em]"
                style={{ color: "var(--color-text-muted)" }}
              >
                Google Fonts
              </a>
              <span className="text-[12px] tracking-[-0.01em]" style={{ color: "var(--color-text-muted)" }}>· loaded via next/font/google</span>
            </div>
            <Card>
              <TypeRow label="2xs / micro" size="10px" weight="500" lineHeight="38px" sample="DIVIDER LABEL · BADGE" />
              <TypeRow label="xs / caption" size="11px" weight="400" lineHeight="18px" sample="Stat labels, meta, captions" />
              <TypeRow label="sm / label" size="12px" weight="500" lineHeight="20px" sample="Labels, helper text, badges" />
              <TypeRow label="base / body" size="14px" weight="400" lineHeight="20px" sample="Body copy, input placeholder, feature list" />
              <TypeRow label="base-semi" size="14px" weight="600" lineHeight="20px" sample="Continue with Google — primary actions" />
              <TypeRow label="2xl / heading-sm" size="24px" weight="500" lineHeight="36px" sample="Welcome to Harness" />
              <TypeRow label="3xl / heading-lg" size="28px" weight="500" lineHeight="36px" sample="Simplify your DevOps" />
            </Card>
          </div>
        </Section>

        {/* ── Spacing ───────────────────────────────────────────────────────── */}
        <Section title="Spacing Scale (8px base)">
          <Card>
            {([
              ["4px", "gap-1 / p-1"],
              ["8px", "gap-2 / p-2"],
              ["10px", "gap-2.5 / p-2.5"],
              ["12px", "gap-3 / p-3"],
              ["16px", "gap-4 / p-4"],
              ["20px", "gap-5 / p-5"],
              ["24px", "gap-6 / p-6"],
              ["36px", "gap-9 / p-9"],
              ["40px", "gap-10 / p-10"],
              ["50px", "gap-[50px]"],
            ] as [string, string][]).map(([value, token]) => (
              <div key={value} className="flex items-center gap-4 py-2 border-b border-[var(--color-divider)] last:border-0">
                <code className="text-[12px] font-mono w-10 shrink-0" style={{ color: "var(--color-brand-light)" }}>{value}</code>
                <code className="text-[12px] font-mono flex-1" style={{ color: "var(--color-text-muted)" }}>{token}</code>
                <div
                  className="h-2 rounded-[2px] shrink-0 opacity-60"
                  style={{ width: value, background: "var(--color-brand-light)" }}
                />
              </div>
            ))}
          </Card>
        </Section>

        {/* ── Border Radius ─────────────────────────────────────────────────── */}
        <Section title="Border Radius">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {([
              ["radius-sm", "8px", "--radius-sm", "Buttons, inputs"],
              ["radius-md", "12px", "--radius-md", "Cards"],
              ["radius-lg", "16px", "--radius-lg", "Panels, page frames"],
              ["radius-pill", "100px", "--radius-pill", "Dots, pills, avatars"],
            ] as [string, string, string, string][]).map(([name, value, cssVar, usage]) => (
              <div key={name} className="flex flex-col gap-3">
                <div
                  className="w-full h-16"
                  style={{
                    background: "var(--color-surface-ghost)",
                    border: "1px solid var(--color-border-subtle)",
                    borderRadius: `var(${cssVar})`,
                  }}
                />
                <div>
                  <p className="text-[12px] font-medium tracking-[-0.01em]" style={{ color: "var(--color-text-primary)" }}>{name}</p>
                  <p className="text-[11px] font-mono tracking-[-0.01em]" style={{ color: "var(--color-text-muted)" }}>{value}</p>
                  <p className="text-[11px] tracking-[-0.01em]" style={{ color: "var(--color-text-faint)" }}>{usage}</p>
                </div>
              </div>
            ))}
          </div>
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
                  {["GitHub", "GitLab", "Bitbucket", "Azure"].map((p) => (
                    <button
                      key={p}
                      aria-label={p}
                      className="flex-1 h-10 flex items-center justify-center rounded-[var(--radius-sm)] text-[10px] font-medium transition-colors hover:bg-white/10 cursor-pointer"
                      style={{
                        background: "var(--color-surface-ghost)",
                        border: "1px solid var(--color-border-subtle)",
                        color: "var(--color-text-muted)",
                      }}
                    >
                      {p[0]}
                    </button>
                  ))}
                </div>
                <p className="text-[11px] mt-1 tracking-[-0.01em]" style={{ color: "var(--color-text-faint)" }}>
                  variant="primary" · "ghost" · icon row (flex-1 tiles)
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
              <p className="text-[12px] font-semibold tracking-[0.06em] uppercase mb-5" style={{ color: "var(--color-text-muted)" }}>Divider + Pagination</p>
              <OrDivider />
              <div className="flex flex-col gap-3 mt-4 items-start">
                <PaginationDots count={3} active={0} />
                <PaginationDots count={3} active={1} />
                <PaginationDots count={3} active={2} />
              </div>
            </Card>

            {/* Glass surfaces */}
            <div
              className="gradient-brand rounded-[var(--radius-md)] p-6 flex flex-col gap-3"
            >
              <p className="text-[12px] font-semibold tracking-[0.06em] uppercase mb-1" style={{ color: "var(--color-text-muted)" }}>Glass Surfaces</p>
              <div className="card-glass p-4">
                <p className="text-[13px] font-medium tracking-[-0.01em]" style={{ color: "var(--color-text-primary)" }}>Card — glass</p>
                <p className="text-[11px] tracking-[-0.01em] mt-0.5" style={{ color: "var(--color-text-muted)" }}>surface-card + border-card + backdrop-blur</p>
              </div>
              <div
                className="p-4 rounded-[var(--radius-sm)]"
                style={{ background: "var(--color-surface-ghost)", border: "1px solid var(--color-border-subtle)" }}
              >
                <p className="text-[13px] font-medium tracking-[-0.01em]" style={{ color: "var(--color-text-primary)" }}>Ghost surface</p>
                <p className="text-[11px] tracking-[-0.01em] mt-0.5" style={{ color: "var(--color-text-muted)" }}>surface-ghost + border-subtle</p>
              </div>
            </div>
          </div>

          {/* Testimonial full width */}
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

        {/* ── View live screen ─────────────────────────────────────────────── */}
        <Section title="Live Screen">
          <div className="flex items-center gap-4 flex-wrap">
            <p className="text-[14px] tracking-[-0.01em]" style={{ color: "var(--color-text-secondary)" }}>
              All components assembled into the Figma-accurate signup screen:
            </p>
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-[var(--radius-sm)] text-[14px] font-medium tracking-[-0.01em] hover:opacity-90 transition-opacity"
              style={{
                background: "var(--color-harness-white)",
                color: "var(--color-harness-black)",
              }}
            >
              Open Signup Screen →
            </Link>
          </div>
        </Section>
      </main>

      <footer className="border-t mt-20" style={{ borderColor: "var(--color-divider)" }}>
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-8 flex items-center justify-between flex-wrap gap-4">
          <p className="text-[12px] tracking-[-0.01em]" style={{ color: "var(--color-text-faint)" }}>
            Harness Design System · Generated from Figma
          </p>
          <p className="text-[12px] tracking-[-0.01em]" style={{ color: "var(--color-text-faint)" }}>
            Font:{" "}
            <a
              href="https://fonts.google.com/specimen/Geist"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:opacity-80"
              style={{ color: "var(--color-text-muted)" }}
            >
              Geist
            </a>{" "}
            via Google Fonts
          </p>
        </div>
      </footer>
    </div>
  );
}
