import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';
import avatarImage from '@/images/avatar.jpg';

export function Avatar({ large = false, className, ...props }) {
  return (
    <Link
      href="/"
      aria-label="Home"
      className={clsx(className, 'pointer-events-auto')}
      {...props}
    >
      <Image
        src={avatarImage}
        alt=""
        sizes={large ? '8rem' : '4.5rem'}
        className={clsx(
          'rounded-full bg-zinc-100 object-cover dark:bg-zinc-800',
          large ? 'h-16 w-16' : 'h-18 w-18'
        )}
        priority />
    </Link>
  );
}
