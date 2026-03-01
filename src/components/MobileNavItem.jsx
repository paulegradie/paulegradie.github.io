import Link from 'next/link';
import { Popover } from '@headlessui/react';


export function MobileNavItem({ href, children }) {
  return (
    <li>
      <Popover.Button
        as={Link}
        href={href}
        className="block rounded-xl py-3 font-medium transition hover:bg-white/55 hover:pl-2 dark:hover:bg-slate-700/50"
      >
        {children}
      </Popover.Button>
    </li>
  );
}
