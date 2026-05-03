import Link from 'next/link'

import { Container } from '@/components/Container'

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="theme-link text-muted"
    >
      {children}
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="footer-band mt-24 sm:mt-28">
      <Container.Outer className="py-10 sm:py-12">
        <Container.Inner>
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-semibold">
              <NavLink href="/about">About</NavLink>
              <NavLink href="/articles">Articles</NavLink>
              <NavLink href="/projects">Projects</NavLink>
              <NavLink href="/resume">Resume</NavLink>
              <NavLink href="/music">Music</NavLink>
              <NavLink href="/recruiters">For Recruiters</NavLink>
              <NavLink href="https://github.com/paulegradie/paulegradie.github.io">Code</NavLink>
            </div>
            <p className="text-sm text-muted">
              &copy; {new Date().getFullYear()} Paul Gradie. All rights
              reserved.
            </p>
          </div>
        </Container.Inner>
      </Container.Outer>
    </footer>
  )
}
