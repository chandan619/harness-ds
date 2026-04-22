// Inline SVG icons — all sized 16×16 unless noted
export function IconHome({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M2 6.5L8 2l6 4.5V14a1 1 0 01-1 1H3a1 1 0 01-1-1V6.5z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
      <path d="M6 15V9h4v6" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
    </svg>
  );
}

export function IconActivity({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <polyline points="1,8 4,4 7,10 10,6 13,8 15,7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function IconPipeline({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <rect x="1" y="4" width="4" height="8" rx="1" stroke="currentColor" strokeWidth="1.2"/>
      <rect x="6" y="2" width="4" height="12" rx="1" stroke="currentColor" strokeWidth="1.2"/>
      <rect x="11" y="5" width="4" height="7" rx="1" stroke="currentColor" strokeWidth="1.2"/>
    </svg>
  );
}

export function IconMore({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <circle cx="4" cy="8" r="1.2" fill="currentColor"/>
      <circle cx="8" cy="8" r="1.2" fill="currentColor"/>
      <circle cx="12" cy="8" r="1.2" fill="currentColor"/>
    </svg>
  );
}

export function IconPlus({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  );
}

export function IconChevronRight({ size = 9 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 9 9" fill="none">
      <path d="M3 2l3 2.5L3 7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function IconChevronDown({ size = 9 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 9 9" fill="none">
      <path d="M2 3l2.5 3L7 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function IconSidebarCollapse({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <rect x="1.5" y="2.5" width="13" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
      <path d="M5.5 2.5v11" stroke="currentColor" strokeWidth="1.2"/>
      <path d="M9 6.5L7 8l2 1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function IconSidebarExpand({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <rect x="1.5" y="2.5" width="13" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
      <path d="M5.5 2.5v11" stroke="currentColor" strokeWidth="1.2"/>
      <path d="M8 6.5l2 1.5-2 1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function IconShare({ size = 9 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 9 9" fill="none">
      <circle cx="7" cy="2" r="1.3" stroke="currentColor" strokeWidth="1"/>
      <circle cx="7" cy="7" r="1.3" stroke="currentColor" strokeWidth="1"/>
      <circle cx="2" cy="4.5" r="1.3" stroke="currentColor" strokeWidth="1"/>
      <path d="M3.2 3.9L5.8 2.6M3.2 5.1L5.8 6.4" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
    </svg>
  );
}

export function IconBranch({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <circle cx="4" cy="4" r="1.5" stroke="currentColor" strokeWidth="1.2"/>
      <circle cx="4" cy="12" r="1.5" stroke="currentColor" strokeWidth="1.2"/>
      <circle cx="12" cy="4" r="1.5" stroke="currentColor" strokeWidth="1.2"/>
      <path d="M4 5.5v5M4 5.5C4 8 12 8 12 5.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  );
}

export function IconRunner({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <rect x="1.5" y="3.5" width="13" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
      <path d="M5 12.5v1.5M11 12.5v1.5M3.5 14h9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      <circle cx="8" cy="8" r="1.5" stroke="currentColor" strokeWidth="1.2"/>
    </svg>
  );
}

export function IconCheck({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="5.5" fill="rgba(0,171,228,0.15)" stroke="#00abe4" strokeWidth="1.2"/>
      <path d="M5.5 8l2 2 3-3" stroke="#00abe4" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function IconAttach({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M13 7.5L7 13.5a4 4 0 01-5.66-5.66l6.6-6.6a2.5 2.5 0 013.54 3.54L5 11.3a1 1 0 01-1.41-1.42L9.5 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  );
}

export function IconMic({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <rect x="5.5" y="1.5" width="5" height="7" rx="2.5" stroke="currentColor" strokeWidth="1.2"/>
      <path d="M3 8.5a5 5 0 0010 0M8 13.5v1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  );
}

export function IconSend({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M8 4.5V12M4.5 8L8 4.5 11.5 8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function IconCopy({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <rect x="5" y="5" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
      <path d="M3 11V3h8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function IconThumb({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M6 7L8 2h1a1 1 0 011 1v4h3a1 1 0 011 1l-1 5H6V7zM6 7H3.5A1.5 1.5 0 002 8.5V12a1.5 1.5 0 001.5 1.5H6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function IconDots({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <circle cx="4.5" cy="8" r="1.2" fill="currentColor"/>
      <circle cx="8" cy="8" r="1.2" fill="currentColor"/>
      <circle cx="11.5" cy="8" r="1.2" fill="currentColor"/>
    </svg>
  );
}

export function IconUpgrade({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M8 2l2 4h4l-3 3 1 4-4-2-4 2 1-4L2 6h4z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
    </svg>
  );
}

export function IconSettings({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.2"/>
      <path d="M8 1v2M8 13v2M1 8h2M13 8h2M3.05 3.05l1.41 1.41M11.54 11.54l1.41 1.41M3.05 12.95l1.41-1.41M11.54 4.46l1.41-1.41" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  );
}

export function IconHealthy({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M2 7h3l2 5 3-10 2 5h2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function HarnessLogo({ size = 16 }: { size?: number }) {
  return (
    <svg width={size * 4.75} height={size} viewBox="0 0 76 16" fill="none">
      <text x="0" y="13" fontFamily="var(--font-sans, sans-serif)" fontSize="14" fontWeight="500" fill="white" letterSpacing="-0.3">harness</text>
    </svg>
  );
}

export function HarnessIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M33.2987 11.786L24.2296 2.70528C23.1556 1.6899 21.8764 0.916712 20.4781 0.437887C17.3797 -0.593759 14.296 0.211513 11.7987 2.70528L2.70738 11.786C1.69207 12.8601 0.918921 14.1394 0.440124 15.5377C-0.595169 18.6364 0.210059 21.7203 2.70738 24.2141L11.7875 33.2948C12.8598 34.3104 14.138 35.0838 15.5353 35.5621C16.3819 35.8483 17.2689 35.9961 18.1625 36C20.3408 36 22.4263 35.0798 24.2148 33.2948L33.2913 24.2141C34.3079 23.1404 35.0822 21.8609 35.5622 20.4623C36.5938 17.3636 35.7886 14.2835 33.2913 11.786H33.2987ZM18.7006 5.34006C19.3865 5.55999 20.0187 5.92158 20.556 6.4014L23.2388 9.08812L18.0067 14.3169L12.7746 9.08442L15.4722 6.38283C16.1959 5.6629 17.2163 4.89844 18.708 5.33634L18.7006 5.34006ZM5.34943 17.2968C5.57003 16.6103 5.93293 15.978 6.4144 15.4413L9.09726 12.7583L14.3294 17.9907L9.09354 23.2231L6.39585 20.5216C5.67225 19.8016 4.91155 18.7812 5.3457 17.2893L5.34943 17.2968ZM17.3054 30.6488C16.6186 30.4308 15.9861 30.069 15.45 29.5875L12.7746 26.9342L18.0067 21.6979L23.2388 26.9304L20.5412 29.632C19.8175 30.3519 18.8008 31.1163 17.3054 30.6784V30.6488ZM30.664 18.718C30.4435 19.4038 30.0819 20.0358 29.6027 20.5736L26.9199 23.2231L21.6877 17.9907L26.9199 12.7583L29.6177 15.4562C30.3412 16.176 31.1018 17.1966 30.6677 18.6884" fill="#00ABE4"/>
    </svg>
  );
}

export function IconActionItems({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M6 4h7M6 8h7M6 12h7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      <path d="M3 3.5l1 1.5 1.5-2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3 7.5l1 1.5 1.5-2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3 11.5l1 1.5 1.5-2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function IconKeySignals({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="5.5" stroke="currentColor" strokeWidth="1.2"/>
      <path d="M8 5.5V8l2 1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function IconRecentActivity({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M9.5 2L4 9h5l-2.5 5L14 7H9L9.5 2z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
