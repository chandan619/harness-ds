"use client";
import { useState } from "react";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { OrDivider } from "@/components/OrDivider";
import { TestimonialCard } from "@/components/TestimonialCard";
import { FeatureItem } from "@/components/FeatureItem";
import { PaginationDots } from "@/components/PaginationDots";

/* ── Provider icons ─────────────────────────────────────────────────────── */
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

/* ── Feature Icons ────────────────────────────────────────────────────────── */
function IconCheck() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M3 8l3.5 3.5L13 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

/* ── Harness Logo Icon ────────────────────────────────────────────────────── */
function HarnessIcon({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" fill="none">
      <path d="M18 2C9.16 2 2 9.16 2 18s7.16 16 16 16 16-7.16 16-16S26.84 2 18 2z" fill="var(--color-brand-light)" opacity="0.15"/>
      <path d="M12 12h4v12h-4zM20 12h4v12h-4z" fill="var(--color-brand-light)"/>
      <path d="M12 17h12v2H12z" fill="var(--color-brand-light)"/>
    </svg>
  );
}

function HarnessWordmark() {
  return (
    <svg width="92" height="20" viewBox="0 0 92 20" fill="none">
      <text x="0" y="16" fontFamily="var(--font-sans)" fontSize="18" fontWeight="600" fill="white" letterSpacing="-0.5">harness</text>
    </svg>
  );
}

/* ── Trust Logos ─────────────────────────────────────────────────────────── */
function TrustLogos() {
  const logos = ["Bloomberg", "ebay", "The New York Times", "cisco", "VMware"];
  return (
    <div className="flex items-center gap-6 opacity-70 flex-wrap">
      {logos.map((logo) => (
        <span
          key={logo}
          className="text-[var(--color-text-primary)] font-medium text-[11px] tracking-[-0.01em] whitespace-nowrap"
          style={{ fontStyle: logo === "The New York Times" ? "serif" : "normal" }}
        >
          {logo}
        </span>
      ))}
    </div>
  );
}

/* ── Certification Badges ─────────────────────────────────────────────────── */
function CertBadge({ label, sub }: { label: string; sub: string }) {
  return (
    <div className="w-12 h-12 rounded-[100px] border border-[var(--color-border-input)] bg-[var(--color-surface-ghost)] flex flex-col items-center justify-center">
      <span className="text-[8px] font-semibold text-[var(--color-text-primary)] leading-tight">{label}</span>
      <span className="text-[7px] font-normal text-[var(--color-text-muted)] leading-tight">{sub}</span>
    </div>
  );
}

/* ── Slide Panel ─────────────────────────────────────────────────────────── */
function SlidePanel() {
  return (
    <div className="gradient-brand relative overflow-hidden rounded-[var(--radius-lg)] flex flex-col justify-between p-10 lg:p-[60px] min-h-[600px]">
      {/* BG decorative blobs */}
      <div
        className="absolute -bottom-32 -left-20 w-[500px] h-[500px] rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "var(--color-brand-light)" }}
      />
      <div
        className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "var(--color-brand-light)" }}
      />

      <div className="relative z-10 flex flex-col gap-10">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <HarnessIcon size={20} />
          <span className="text-[16px] font-semibold text-[var(--color-text-primary)] tracking-[-0.01em]">
            harness
          </span>
        </div>

        {/* Hero text */}
        <div>
          <h2 className="text-[28px] font-medium text-[var(--color-text-primary)] tracking-[-0.01em] leading-[36px]">
            Simplify your{" "}
            <em className="not-italic text-[var(--color-text-muted)]">DevOps</em>{" "}
            in minutes
          </h2>
        </div>

        {/* Feature list */}
        <div className="flex flex-col gap-4">
          <FeatureItem icon={<IconCheck />} label="Automate delivery with AI workflows." />
          <FeatureItem icon={<IconCheck />} label="Ship secure, resilient software." />
          <FeatureItem icon={<IconCheck />} label="Optimize cost with 100+ integrations." />
        </div>

        {/* Testimonial */}
        <TestimonialCard
          quote="Partnerships like this are critical to delivering better outcomes for our customers on a global scale"
          stats={[
            { icon: "🌍", value: "40+", label: "Countries" },
            { icon: "👥", value: "200M+", label: "Monthly consumers" },
          ]}
          name="John Arroyo"
          role="Head of Developer Pipelines"
        />

        {/* Divider */}
        <div className="h-px bg-[var(--color-surface-card)]" />

        {/* Trust section */}
        <div className="flex flex-col gap-[18px]">
          <p className="text-[14px] font-normal text-[var(--color-text-secondary)] tracking-[-0.01em]">
            Trusted by world-class engineering teams
          </p>
          <TrustLogos />
        </div>

        {/* Security badges */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M6 1L2 3v4c0 2.21 1.79 4 4 4s4-1.79 4-4V3L6 1z" stroke="var(--color-text-secondary)" strokeWidth="1" fill="none"/>
            </svg>
            <span className="text-[12px] font-normal text-[var(--color-text-secondary)] tracking-[-0.01em]">
              Enterprise-grade security
            </span>
          </div>
          <div className="flex items-center gap-2">
            <CertBadge label="SOC2" sub="Type II" />
            <CertBadge label="ISO" sub="42001" />
            <CertBadge label="ISO" sub="27001" />
          </div>
        </div>
      </div>

      {/* Pagination dots */}
      <div className="relative z-10 flex justify-center mt-10">
        <PaginationDots count={3} active={0} />
      </div>
    </div>
  );
}

/* ── Sign-up Form ─────────────────────────────────────────────────────────── */
function SignupForm() {
  const [email, setEmail] = useState("");

  return (
    <div className="flex flex-col gap-10 w-full max-w-[348px] mx-auto">
      {/* Heading */}
      <div className="flex flex-col gap-4">
        <HarnessIcon size={36} />
        <div className="flex flex-col gap-4">
          <h1 className="text-[24px] font-medium text-[var(--color-text-primary)] tracking-[-0.01em] leading-[36px]">
            Welcome to Harness
          </h1>
          <p className="text-[14px] font-normal text-[var(--color-text-muted)] tracking-[-0.01em] leading-[20px]">
            Your AI-native workspace for pipelines, runs, and delivery workflows.
          </p>
        </div>
      </div>

      {/* OAuth buttons */}
      <div className="flex flex-col gap-4">
        <Button variant="primary" fullWidth icon={<IconGoogle />}>
          Continue with Google
        </Button>

        {/* Icon row */}
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
              className="flex-1 h-10 flex items-center justify-center rounded-[var(--radius-sm)] bg-[var(--color-surface-ghost)] border border-[var(--color-border-subtle)] hover:bg-white/10 transition-colors duration-[var(--duration-base)] cursor-pointer"
            >
              {icon}
            </button>
          ))}
        </div>
      </div>

      {/* OR divider */}
      <OrDivider />

      {/* Email form */}
      <div className="flex flex-col gap-4">
        <Input
          type="email"
          placeholder="name@work-email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button variant="ghost" fullWidth icon={
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M1 3.5h12M1 3.5l6 5 6-5M1 3.5v7h12v-7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        }>
          Continue with Email
        </Button>

        {/* Legal */}
        <p className="text-[11px] font-normal text-[var(--color-text-faint)] tracking-[-0.01em] leading-[18px] text-center px-4">
          By continuing, you agree to our{" "}
          <a href="#" className="text-[var(--color-text-muted)] underline decoration-solid hover:text-[var(--color-text-secondary)] transition-colors">
            Privacy Policy
          </a>{" "}
          and{" "}
          <a href="#" className="text-[var(--color-text-muted)] underline decoration-solid hover:text-[var(--color-text-secondary)] transition-colors">
            Terms of Use
          </a>
          .
        </p>
      </div>
    </div>
  );
}

/* ── Page ─────────────────────────────────────────────────────────────────── */
export default function SignupPage() {
  return (
    <div className="min-h-screen bg-[var(--color-harness-black)] flex items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-[1200px] rounded-[var(--radius-lg)] bg-[var(--color-harness-black)] overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-0 min-h-[640px]">
          {/* Form — left on desktop, top on mobile */}
          <div className="flex items-center justify-center p-8 lg:p-16 order-2 lg:order-1">
            <SignupForm />
          </div>
          {/* Slide panel — right on desktop, top on mobile */}
          <div className="order-1 lg:order-2 p-4 lg:p-4">
            <SlidePanel />
          </div>
        </div>
      </div>
    </div>
  );
}
