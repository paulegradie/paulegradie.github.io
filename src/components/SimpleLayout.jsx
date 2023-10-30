import { Container } from '@/components/Container'

export function SimpleLayout({ title, intro, children, subtitle = "" }) {
  return (
    <Container className="mt-16 sm:mt-32 ">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-200 dark:text-zinc-100 sm:text-5xl">
          {title}
        </h1>
        {subtitle && <span className="text-md font-bold tracking-tight text-zinc-200 dark:text-zinc-100 sm:text-md">{subtitle}</span>}
        <p className="mt-6 text-base text-zinc-300 dark:text-zinc-400">
          {intro}
        </p>
      </header>
      <div className="mt-16 sm:mt-20">{children}</div>
    </Container>
  )
}
