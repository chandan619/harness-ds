export function OrDivider() {
  return (
    <div className="flex items-center gap-[10px] w-full py-[10px]">
      <div className="flex-1 h-px bg-[var(--color-divider)]" />
      <span className="text-[10px] font-medium text-[var(--color-text-muted)] tracking-[-0.01em] shrink-0">
        OR
      </span>
      <div className="flex-1 h-px bg-[var(--color-divider)]" />
    </div>
  );
}
