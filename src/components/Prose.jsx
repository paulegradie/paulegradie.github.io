import clsx from 'clsx'

export function Prose({ children, className, countRef }) {
  return (
    <div ref={countRef} className={clsx(className, 'prose dark:prose-invert')}>{children}</div>
  )
}
