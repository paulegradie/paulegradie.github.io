import { Container } from '@/components/Container'

export function SimpleLayout({ title, intro, children, subtitle = "" }) {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-0 -z-10 rounded-[3rem] bg-gradient-to-br from-[color:var(--brand-c)]/18 via-transparent to-[color:var(--brand-a)]/10 blur-3xl" />
      <Container className="relative mt-20 sm:mt-28">
        <header className="max-w-3xl reveal-up">
          {subtitle && (
            <span className="section-chip">
              {subtitle}
            </span>
          )}
          <h1 className="font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {intro}
          </p>
        </header>
        <div className="mt-14 reveal-up reveal-delay-1 sm:mt-16">{children}</div>
      </Container>
    </div>
  )
}


