import Link from 'next/link';
import { useRouter } from 'next/router';
import clsx from 'clsx';

export function NavItem({ href, children }) {
  let isActive = useRouter().pathname === href;

  return (
    <li>
      <Link
        href={href}
        className={clsx(
          'relative block whitespace-nowrap rounded-full px-3 py-1.5 transition duration-200',
          isActive
            ? 'bg-white/70 text-slate-900 shadow-sm dark:bg-slate-700/70 dark:text-slate-100'
            : 'text-slate-700 hover:bg-white/50 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-700/55 dark:hover:text-slate-100'
        )}
      >
        {children}
        {isActive && (
          <span className="absolute inset-x-2 -bottom-[2px] h-[2px] rounded-full bg-gradient-to-r from-cyan-500/0 via-cyan-500/80 to-blue-500/0 dark:from-cyan-300/0 dark:via-cyan-300/85 dark:to-blue-300/0" />
        )}
      </Link>
    </li>
  );
}


