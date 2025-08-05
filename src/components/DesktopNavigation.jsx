import { NavItem } from './NavItem';

export function DesktopNavigation(props) {
  return (
    <nav {...props}>
      <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 whitespace-nowrap">
        <NavItem href="/">Home</NavItem>
        <NavItem href="/about">About</NavItem>
        <NavItem href="/articles">Articles</NavItem>
        <NavItem href="/projects">Projects</NavItem>
        <NavItem href="/music">Music</NavItem>
        <NavItem href="/recruiters">For Recruiters</NavItem>
        <NavItem href="https://github.com/paulegradie/paulegradie.github.io">Code</NavItem>
      </ul>
    </nav>
  );
}
