interface StatItem {
  icon: string;
  value: string;
  label: string;
}

interface TestimonialCardProps {
  quote: string;
  stats: StatItem[];
  avatar?: string;
  name: string;
  role: string;
}

export function TestimonialCard({
  quote,
  stats,
  avatar,
  name,
  role,
}: TestimonialCardProps) {
  return (
    <div className="card-glass p-5 flex flex-col gap-6">
      {/* Quote */}
      <div className="flex flex-col gap-5">
        {/* Quote mark */}
        <svg width="38" height="22" viewBox="0 0 38 22" fill="none" className="opacity-80">
          <path
            d="M0 22V13.2C0 9.6 0.933333 6.6 2.8 4.2C4.66667 1.8 7.33333 0.4 10.8 0L12.4 2.4C10.1333 2.93333 8.4 4.06667 7.2 5.8C6 7.53333 5.46667 9.4 5.6 11.4H11.2V22H0ZM20.8 22V13.2C20.8 9.6 21.7333 6.6 23.6 4.2C25.4667 1.8 28.1333 0.4 31.6 0L33.2 2.4C30.9333 2.93333 29.2 4.06667 28 5.8C26.8 7.53333 26.2667 9.4 26.4 11.4H32V22H20.8Z"
            fill="white"
          />
        </svg>
        <p className="text-[14px] font-normal text-[var(--color-text-primary)] leading-[18px] tracking-[-0.01em]">
          {quote}
        </p>
      </div>

      {/* Stats + attribution */}
      <div className="flex flex-col gap-[18px]">
        {/* Stats row */}
        <div className="flex gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-px self-stretch bg-[var(--color-border-stat)]" />
              <div className="flex items-start gap-2">
                <span className="text-[16px] mt-0.5">{stat.icon}</span>
                <div className="flex flex-col gap-1">
                  <span className="text-[12px] font-medium text-[var(--color-text-primary)] tracking-[-0.01em] leading-5">
                    {stat.value}
                  </span>
                  <span className="text-[11px] font-normal text-[var(--color-text-muted)] tracking-[-0.01em] leading-5">
                    {stat.label}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Attribution */}
        <div className="flex items-center gap-[10px]">
          {avatar ? (
            <img
              src={avatar}
              alt={name}
              className="w-8 h-8 rounded-[100px] object-cover shrink-0"
            />
          ) : (
            <div className="w-8 h-8 rounded-[100px] bg-[var(--color-surface-ghost)] border border-[var(--color-border-subtle)] shrink-0 flex items-center justify-center">
              <span className="text-[11px] font-medium text-[var(--color-text-muted)]">
                {name[0]}
              </span>
            </div>
          )}
          <div className="flex flex-col gap-1 leading-5">
            <span className="text-[12px] font-medium text-[var(--color-text-primary)] tracking-[-0.01em]">
              {name}
            </span>
            <span className="text-[11px] font-normal text-[var(--color-text-muted)] tracking-[-0.01em]">
              {role}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
