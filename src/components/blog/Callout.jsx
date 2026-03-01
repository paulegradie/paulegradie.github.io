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
    <div className="relative my-6 flex items-center gap-3 rounded-xl border-l-2 border-cyan-500/45 bg-gradient-to-r from-cyan-500/[0.1] to-transparent px-5 py-4 not-prose">
      <span className="flex-shrink-0 text-sm text-cyan-800 dark:text-cyan-300">*</span>
      <div className="text-sm font-medium leading-relaxed text-slate-800 dark:text-slate-100">{children}</div>
    </div>
  )
}
