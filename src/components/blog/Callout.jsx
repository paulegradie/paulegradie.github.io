export const Callout = ({ children, label }) => {
  return (
    <div className="relative my-6 overflow-hidden rounded-xl border border-slate-300/70 bg-white/70 not-prose backdrop-blur-sm dark:border-slate-600/70 dark:bg-slate-800/50">
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/70 to-transparent" />
      {label && (
        <div className="px-5 pb-0 pt-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-cyan-800/80 dark:text-cyan-300/80">{label}</span>
        </div>
      )}
      <div className="px-5 py-4 text-sm leading-relaxed text-slate-700 dark:text-slate-200">{children}</div>
    </div>
  )
}

export const Objection = ({ question, children }) => {
  return (
    <div className="relative my-5 not-prose">
      <div className="overflow-hidden rounded-xl border border-slate-300/65 bg-white/70 dark:border-slate-600/65 dark:bg-slate-800/50">
        <div className="flex items-start gap-3 border-b border-slate-300/60 bg-slate-100/75 px-5 py-3 dark:border-slate-600/60 dark:bg-slate-700/60">
          <span className="mt-0.5 flex-shrink-0 text-sm text-cyan-800/80 dark:text-cyan-300/80">{'>'}</span>
          <div className="text-sm font-medium italic text-slate-800 dark:text-slate-100">{question}</div>
        </div>
        <div className="px-5 py-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300">{children}</div>
      </div>
    </div>
  )
}

export const KeyPoint = ({ children }) => {
  return (
    <div className="relative my-8 overflow-hidden rounded-2xl not-prose">
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(135deg, rgba(8, 47, 73, 0.92) 0%, rgba(15, 23, 42, 0.92) 52%, rgba(30, 41, 59, 0.94) 100%),
            radial-gradient(circle at top left, rgba(34, 211, 238, 0.28), transparent 36%),
            radial-gradient(circle at bottom right, rgba(59, 130, 246, 0.2), transparent 34%)
          `,
        }}
      />
      <div
        className="absolute inset-0 rounded-2xl"
        style={{
          border: '1px solid rgba(34, 211, 238, 0.3)',
          boxShadow: '0 24px 60px -32px rgba(8, 145, 178, 0.55), inset 0 1px 0 rgba(255,255,255,0.08)',
        }}
      />
      <div
        aria-hidden="true"
        className="absolute left-0 top-4 bottom-4 w-1 rounded-full"
        style={{
          background: 'linear-gradient(180deg, rgba(103, 232, 249, 0.95) 0%, rgba(34, 211, 238, 0.95) 45%, rgba(59, 130, 246, 0.95) 100%)',
          boxShadow: '0 0 24px rgba(34, 211, 238, 0.5)',
        }}
      />

      <div className="relative flex items-start gap-4 px-5 py-5 sm:px-6 sm:py-6">
        <div className="min-w-0 flex-1">
          <div className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-cyan-100/75">
            Key Point
          </div>
          <div className="mt-2 text-base font-semibold leading-7 text-slate-50 sm:text-[1.05rem]">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
