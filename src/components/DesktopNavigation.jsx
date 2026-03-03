import { NavItem } from './NavItem';

export function DesktopNavigation(props) {
  return (
    <nav {...props}>
      <ul className="glass-panel flex items-center whitespace-nowrap rounded-full px-2 py-1 text-sm font-semibold text-ink">
        <NavItem href="/">Home</NavItem>
        <NavItem href="/about">About</NavItem>
        <NavItem href="/articles">Articles</NavItem>
        <NavItem href="/projects">Projects</NavItem>
        <NavItem href="/resume">Resume</NavItem>
        <NavItem href="/music">Music</NavItem>
        <NavItem href="/recruiters">For Recruiters</NavItem>
        <NavItem href="https://github.com/paulegradie/paulegradie.github.io">Code</NavItem>
      </ul>
    </nav>
  );
}
