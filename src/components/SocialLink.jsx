import Link from 'next/link';

export function SocialLink({ icon: Icon, href, ...props }) {
    // Determine colors based on the platform
    const getHoverColors = (url) => {
        if (url?.includes('github')) {
            return 'group-hover:fill-github dark:group-hover:fill-github';
        }
        if (url?.includes('linkedin')) {
            return 'group-hover:fill-linkedin dark:group-hover:fill-linkedin';
        }
        return 'group-hover:fill-teal-500 dark:group-hover:fill-teal-400';
    };

    return (
        <Link className="group -m-1 p-1 hover:scale-110 transition-transform duration-200" href={href} {...props}>
            <Icon className={`h-6 w-6 fill-zinc-200 transition-all duration-200 dark:fill-zinc-400 ${getHoverColors(href)}`} />
        </Link>
    );
}
