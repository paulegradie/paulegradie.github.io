import Link from 'next/link';

export function SocialLink({ icon: Icon, href, ...props }) {
    // Determine colors based on the platform
    const getHoverColors = (url) => {
        if (url?.includes('github')) {
            return 'group-hover:fill-cyan-700 dark:group-hover:fill-cyan-300';
        }
        if (url?.includes('linkedin')) {
            return 'group-hover:fill-blue-600 dark:group-hover:fill-blue-300';
        }
        return 'group-hover:fill-blue-700 dark:group-hover:fill-blue-300';
    };

    return (
        <Link className="group -m-1 rounded-full p-2 transition-transform duration-200 hover:scale-110 hover:bg-white/70 dark:hover:bg-slate-700/60" href={href} {...props}>
            <Icon className={`h-6 w-6 fill-slate-600 transition-all duration-200 dark:fill-slate-300 ${getHoverColors(href)}`} />
        </Link>
    );
}


