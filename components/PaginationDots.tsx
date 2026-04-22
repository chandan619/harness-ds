interface PaginationDotsProps {
  count: number;
  active: number;
}

export function PaginationDots({ count, active }: PaginationDotsProps) {
  return (
    <div className="flex items-center gap-[8px]">
      {Array.from({ length: count }).map((_, i) =>
        i === active ? (
          <div
            key={i}
            className="h-[6px] w-[16px] rounded-[100px] bg-[var(--color-harness-white)]"
          />
        ) : (
          <div
            key={i}
            className="h-[6px] w-[6px] rounded-[100px] bg-white/30"
          />
        )
      )}
    </div>
  );
}
