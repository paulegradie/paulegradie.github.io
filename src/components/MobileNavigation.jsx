import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from './ChevronDownIcon';
import { CloseIcon } from './CloseIcon';
import { MobileNavItem } from './MobileNavItem';

export function MobileNavigation(props) {
  return (
    <Popover {...props}>
      <Popover.Button className="glass-panel group flex items-center rounded-full px-4 py-2 text-sm font-semibold text-ink transition hover:shadow-md whitespace-nowrap">
        Menu
        <ChevronDownIcon className="ml-3 h-auto w-2 stroke-[color:var(--ink-muted)] transition group-hover:stroke-[color:var(--ink)] dark:stroke-slate-300 dark:group-hover:stroke-slate-100" />
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 z-50 bg-slate-900/25 backdrop-blur-sm dark:bg-slate-950/65" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="glass-panel-strong fixed inset-x-4 top-8 z-50 origin-top rounded-3xl p-8"
          >
            <div className="flex flex-row-reverse items-center justify-between">
              <Popover.Button aria-label="Close menu" className="-m-1 p-1">
                <CloseIcon className="h-6 w-6 text-[color:var(--ink-muted)] dark:text-slate-300" />
              </Popover.Button>
              <h2 className="eyebrow-label dark:text-slate-300">
                Navigation
              </h2>
            </div>
            <nav className="mt-6">
              <ul className="-my-2 divide-y divider-line text-base text-ink dark:divide-slate-600/50 dark:text-slate-100">
                <MobileNavItem href="/">Home</MobileNavItem>
                <MobileNavItem href="/about">About</MobileNavItem>
                <MobileNavItem href="/articles">Articles</MobileNavItem>
                <MobileNavItem href="/projects">Projects</MobileNavItem>
                <MobileNavItem href="/resume">Resume</MobileNavItem>
                <MobileNavItem href="/music">Music</MobileNavItem>
                <MobileNavItem href="/recruiters">For Recruiters</MobileNavItem>
                <MobileNavItem href="https://github.com/paulegradie/paulegradie.github.io">Code</MobileNavItem>
              </ul>
            </nav>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  );
}
