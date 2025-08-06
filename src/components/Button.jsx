import Link from 'next/link'
import clsx from 'clsx'

const variantStyles = {
  primary:
    'bg-gradient-to-r from-teal-500 to-teal-600 font-semibold text-white hover:from-teal-400 hover:to-teal-500 active:from-teal-600 active:to-teal-700 shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 transition-all duration-200 hover:scale-105',
  secondary:
    'bg-gradient-to-r from-zinc-50 to-zinc-100 font-medium text-zinc-900 hover:from-zinc-100 hover:to-zinc-200 active:from-zinc-200 active:to-zinc-300 shadow-lg shadow-zinc-500/25 hover:shadow-zinc-500/40 dark:from-zinc-700 dark:to-zinc-600 dark:text-zinc-100 dark:hover:from-zinc-600 dark:hover:to-zinc-500 transition-all duration-200 hover:scale-105',
}

export function Button({ variant = 'primary', className, href, target, ...props }) {
  className = clsx(
    'inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none dark:hover:bg-zinc-400',
    variantStyles[variant],
    className
  )

  return href ? (
    <Link href={href} className={className} {...props} target={target} />
  ) : (
    <button className={className} {...props} />
  )
}
