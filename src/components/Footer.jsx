import Link from 'next/link'

import { Container } from '@/components/Container'

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="transition hover:text-cyan-800 dark:hover:text-cyan-300"
    >
      {children}
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="mt-24 sm:mt-28">
      <Container.Outer>
        <div className="glass-panel mx-4 rounded-3xl px-4 pb-12 pt-8 sm:px-6">
          <Container.Inner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
                <NavLink href="/about">About</NavLink>
                <NavLink href="/articles">Articles</NavLink>
                <NavLink href="/projects">Projects</NavLink>
                <NavLink href="/music">Music</NavLink>
                <NavLink href="/recruiters">For Recruiters</NavLink>
                <NavLink href="https://github.com/paulegradie/paulegradie.github.io">Code</NavLink>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                &copy; {new Date().getFullYear()} Paul Gradie. All rights
                reserved.
              </p>
            </div>
          </Container.Inner>
        </div>
      </Container.Outer>
    </footer>
  )
}
