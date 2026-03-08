import Link from 'next/link'
import clsx from 'clsx'

const variantStyles = {
  primary:
    'button-primary overflow-hidden font-semibold transition-all duration-200 hover:-translate-y-0.5',
  secondary:
    'button-secondary font-semibold transition-all duration-200 hover:-translate-y-0.5',
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


