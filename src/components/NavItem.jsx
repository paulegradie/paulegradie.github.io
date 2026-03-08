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
            ? 'surface-card-strong text-ink shadow-sm'
            : 'text-muted hover:bg-white/45 hover:text-ink dark:hover:bg-slate-700/55 dark:hover:text-slate-100'
        )}
      >
        {children}
        {isActive && (
          <span className="absolute inset-x-2 -bottom-[2px] h-[2px] rounded-full bg-gradient-to-r from-transparent via-[color:var(--brand-a)] to-transparent opacity-80 dark:via-cyan-300/85" />
        )}
      </Link>
    </li>
  );
}


