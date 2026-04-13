export const Quote = ({ children }) => {
  return (
    <figure className="glass-panel-strong relative my-10 not-prose overflow-hidden rounded-[28px] px-5 py-5 sm:px-7 sm:py-6">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-90"
        style={{
          background: `
            radial-gradient(circle at top left, rgba(34, 211, 238, 0.18), transparent 34%),
            radial-gradient(circle at bottom right, rgba(59, 130, 246, 0.14), transparent 30%)
          `,
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-4 bottom-4 w-[3px] rounded-full"
        style={{
          background: 'linear-gradient(180deg, rgba(34, 211, 238, 0.95) 0%, rgba(14, 165, 233, 0.82) 48%, rgba(59, 130, 246, 0.92) 100%)',
          boxShadow: '0 0 24px rgba(34, 211, 238, 0.35)',
        }}
      />

      <div className="relative flex gap-4 sm:gap-5">
        <div className="flex shrink-0 flex-col items-center pt-0.5">
          <div
            aria-hidden="true"
            className="mt-3 w-px flex-1"
            style={{
              minHeight: '2.75rem',
              background: 'linear-gradient(180deg, rgba(34, 211, 238, 0.75) 0%, rgba(59, 130, 246, 0) 100%)',
            }}
          />
        </div>

        <blockquote className="relative flex-1 py-1">
          <div
            className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.24em]"
            style={{ color: 'color-mix(in oklab, var(--brand-a) 72%, var(--ink-muted))' }}
          >
            { " " }
          </div>
          <div
            className="text-lg italic leading-8 sm:text-[1.35rem] sm:leading-9"
            style={{ color: 'color-mix(in oklab, var(--ink) 92%, var(--brand-c) 8%)' }}
          >
            {children}
          </div>
        </blockquote>
      </div>
    </figure>
  )
}


