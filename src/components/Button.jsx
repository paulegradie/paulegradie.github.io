import Link from 'next/link'
import clsx from 'clsx'

const variantStyles = {
  primary:
    'overflow-hidden ring-1 ring-inset ring-cyan-300/35 bg-gradient-to-r from-slate-900 via-blue-700 to-cyan-500 font-semibold text-white hover:from-slate-800 hover:via-blue-600 hover:to-cyan-400 active:from-slate-950 active:via-blue-800 active:to-cyan-600 shadow-lg shadow-blue-900/45 hover:shadow-cyan-500/35 transition-all duration-200 hover:-translate-y-0.5',
  secondary:
    'border border-slate-300/80 bg-white/80 font-semibold text-slate-800 hover:bg-white hover:text-slate-900 active:bg-slate-200 dark:border-slate-600/80 dark:bg-slate-800/70 dark:text-slate-100 dark:hover:bg-slate-700 transition-all duration-200 hover:-translate-y-0.5',
}

export function Button({ variant = 'primary', className, href, target, ...props }) {
  className = clsx(
    'inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm outline-offset-2 transition active:transition-none',
    variantStyles[variant],
    className
  )

  return href ? (
    <Link href={href} className={className} {...props} target={target} />
  ) : (
    <button className={className} {...props} />
  )
}


