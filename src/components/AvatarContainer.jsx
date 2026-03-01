import clsx from 'clsx';

export function AvatarContainer({ className, ...props }) {
  return (
    <div
      className={clsx(
        className,
        'glass-panel h-20 w-20 rounded-full p-0.5'
      )}
      {...props} />
  );
}
