import { Container } from '@/components/Container'

export function SimpleLayout({ title, intro, children, subtitle = "" }) {
  return (
    <div className="relative">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 via-transparent to-accent-creative/5 rounded-3xl blur-3xl"></div>
      <Container className="relative mt-24 sm:mt-32">
        <header className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-zinc-100 to-zinc-300 bg-clip-text text-transparent dark:from-zinc-100 dark:to-zinc-300 sm:text-5xl">
            {title}
          </h1>
          {subtitle && (
            <span className="text-md font-bold tracking-tight text-teal-400 dark:text-teal-300 sm:text-md">
              {subtitle}
            </span>
          )}
          <p className="mt-6 text-base text-zinc-300 dark:text-zinc-400 leading-relaxed">
            {intro}
          </p>
        </header>
        <div className="mt-16 sm:mt-20">{children}</div>
      </Container>
    </div>
  )
}
