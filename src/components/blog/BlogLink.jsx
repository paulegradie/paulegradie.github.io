export const BlogLink = ({ href, children, ...props }) => {
    return (
        <a className="decoration-none font-semibold antialiased" href={href} target="_blank" rel="noreferrer" {...props}>
            {children}
        </a>
    );
};
