import Link from 'next/link';

export function SocialLink({ icon: Icon, href, ...props }) {
    // Determine colors based on the platform
    const getHoverColors = (url) => {
        if (url?.includes('github')) {
            return 'group-hover:fill-[color:var(--brand-b)] dark:group-hover:fill-cyan-300';
        }
        if (url?.includes('linkedin')) {
            return 'group-hover:fill-[color:var(--brand-a)] dark:group-hover:fill-blue-300';
        }
        return 'group-hover:fill-[color:var(--brand-b)] dark:group-hover:fill-blue-300';
    };

    return (
        <Link className="icon-button group -m-1 border border-transparent p-2 transition-transform duration-200 hover:scale-110 hover:border-soft hover:bg-white/80 dark:hover:bg-slate-700/60" href={href} {...props}>
            <Icon className={`h-6 w-6 fill-[color:var(--ink-muted)] transition-all duration-200 dark:fill-slate-300 ${getHoverColors(href)}`} />
        </Link>
    );
}


