"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { OrDivider } from "@/components/OrDivider";
import { TestimonialCard } from "@/components/TestimonialCard";
import { FeatureItem } from "@/components/FeatureItem";
import { PaginationDots } from "@/components/PaginationDots";
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
function IconCheck() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M3 8l3.5 3.5L13 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

/* ── Trust / cert helpers ────────────────────────────────────────────────────── */
function TrustLogos() {
  const logos = ["Bloomberg", "ebay", "NY Times", "Cisco", "VMware"];
  return (
    <div className="flex items-center gap-5 opacity-60 flex-wrap">
      {logos.map((logo) => (
        <span key={logo} className="text-white font-medium text-[11px] tracking-[-0.01em] whitespace-nowrap">
          {logo}
        </span>
      ))}
    </div>
  );
}
function CertBadge({ label, sub }: { label: string; sub: string }) {
  return (
    <div className="w-12 h-12 rounded-full border border-white/20 bg-white/[0.06] flex flex-col items-center justify-center">
      <span className="text-[8px] font-semibold text-white leading-tight">{label}</span>
      <span className="text-[7px] text-white/50 leading-tight">{sub}</span>
    </div>
  );
}

/* ── Slide data ─────────────────────────────────────────────────────────────── */
const SLIDES = [
  {
    headline: <>Simplify your <em className="not-italic text-white/50">DevOps</em> in minutes</>,
    features: [
      "Automate delivery with AI workflows.",
      "Ship secure, resilient software.",
      "Optimize cost with 100+ integrations.",
    ],
    testimonial: {
      quote: "Partnerships like this are critical to delivering better outcomes for our customers on a global scale.",
      stats: [
        { icon: "🌍", value: "40+", label: "Countries" },
        { icon: "👥", value: "200M+", label: "Monthly consumers" },
      ],
      name: "John Arroyo",
      role: "Head of Developer Pipelines",
    },
    footer: (
      <div className="flex flex-col gap-3">
        <TrustLogos />
      </div>
    ),
  },
  {
    headline: <>Ship faster with <em className="not-italic text-white/50">AI-native</em> CI/CD</>,
    features: [
      "Smart pipeline recommendations in seconds.",
      "Real-time run insights and auto-fix suggestions.",
      "One-click rollbacks and branch strategies.",
    ],
    testimonial: {
      quote: "Harness cut our release cycle from two weeks to two hours. It's the biggest productivity unlock we've had.",
      stats: [
        { icon: "⚡", value: "10×", label: "Faster deploys" },
        { icon: "📉", value: "60%", label: "Fewer incidents" },
      ],
      name: "Priya Shankar",
      role: "VP Engineering, FinScale",
    },
    footer: (
      <div className="flex flex-col gap-3">
        <TrustLogos />
      </div>
    ),
  },
  {
    headline: <>Enterprise <em className="not-italic text-white/50">security</em> you can trust</>,
    features: [
      "SOC2 Type II and ISO 27001 certified.",
      "Zero-trust architecture, end-to-end encryption.",
      "Full audit logs, RBAC and policy enforcement.",
    ],
    testimonial: {
      quote: "The compliance tooling alone saved us three months of work. We were audit-ready from day one.",
      stats: [
        { icon: "🔒", value: "SOC2", label: "Type II" },
        { icon: "✅", value: "100%", label: "Uptime SLA" },
      ],
      name: "Marcus Webb",
      role: "CISO, Nexus Financial",
    },
    footer: (
      <div className="flex items-center gap-2">
        <CertBadge label="SOC2" sub="Type II" />
        <CertBadge label="ISO" sub="42001" />
        <CertBadge label="ISO" sub="27001" />
      </div>
    ),
  },
];

/* ── Carousel panel ─────────────────────────────────────────────────────────── */
function CarouselPanel() {
  const [slide, setSlide] = useState(0);

  /* Auto-advance every 5 seconds */
  useEffect(() => {
    const id = setInterval(() => setSlide((s) => (s + 1) % SLIDES.length), 5000);
    return () => clearInterval(id);
  }, []);

  const current = SLIDES[slide];

  return (
    <div className="relative w-full h-full rounded-[20px] overflow-hidden flex flex-col"
         style={{ background: "linear-gradient(180deg, #1c1c1c 0%, #0f4759 25.96%, #027093 50.48%, #018aca 76.44%, #00a1fc 100%)" }}>

      {/* Decorative blobs */}
      <div className="absolute -bottom-32 -left-20 w-[500px] h-[500px] rounded-full opacity-10 blur-3xl pointer-events-none"
           style={{ background: "var(--color-brand-light)" }} />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full opacity-10 blur-3xl pointer-events-none"
           style={{ background: "var(--color-brand-light)" }} />

      {/* Slide content — cross-fade */}
      <div className="relative z-10 flex-1 flex flex-col justify-between p-10 overflow-hidden">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <HarnessIcon size={20} />
          <HarnessLogo size={16} />
        </div>

        {/* Sliding area */}
        <div className="flex flex-col gap-8 flex-1 justify-center py-8">
          {/* Headline */}
          <h2
            key={`h-${slide}`}
            className="chat-reveal text-[26px] font-medium text-white tracking-[-0.01em] leading-[34px]"
          >
            {current.headline}
          </h2>

          {/* Features */}
          <div key={`f-${slide}`} className="chat-reveal flex flex-col gap-3">
            {current.features.map((f) => (
              <FeatureItem key={f} icon={<IconCheck />} label={f} />
            ))}
          </div>

          {/* Testimonial */}
          <div key={`t-${slide}`} className="chat-reveal">
            <TestimonialCard
              quote={current.testimonial.quote}
              stats={current.testimonial.stats}
              name={current.testimonial.name}
              role={current.testimonial.role}
            />
          </div>
        </div>

        {/* Footer (trust logos or certs) */}
        <div key={`footer-${slide}`} className="chat-reveal flex flex-col gap-4">
          <div className="h-px bg-white/10" />
          <p className="text-[12px] text-white/60 tracking-[-0.01em]">Trusted by world-class engineering teams</p>
          {current.footer}
        </div>
      </div>

      {/* Pagination dots — at the very bottom */}
      <div className="relative z-10 flex justify-center pb-8">
        <div className="flex items-center gap-2">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setSlide(i)}
              className="cursor-pointer transition-all duration-300"
              aria-label={`Go to slide ${i + 1}`}
            >
              {i === slide
                ? <div className="h-[6px] w-[16px] rounded-full bg-white" />
                : <div className="h-[6px] w-[6px] rounded-full bg-white/30 hover:bg-white/50" />
              }
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
        <Button
          variant="primary"
          fullWidth
          icon={<IconGoogle />}
          onClick={() => router.push("/home")}
        >
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
              className="flex-1 h-10 flex items-center justify-center rounded-[8px] bg-white/[0.06] border border-white/[0.08] hover:bg-white/10 transition-colors cursor-pointer"
              style={{ color: "white" }}
            >
              {icon}
            </button>
          ))}
        </div>
      </div>

      {/* Divider */}
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

      {/* Left — form, always visible, scrollable if needed */}
      <div className="flex-1 flex items-center justify-center overflow-y-auto px-8 py-12">
        <SignupForm />
      </div>

      {/* Right — carousel, hidden on small screens, grows with viewport */}
      <div className="hidden lg:flex flex-1 h-full p-4">
        <CarouselPanel />
      </div>

    </div>
  );
}
