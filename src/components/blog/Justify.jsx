export function Justify ({ children, position = 'center' }) {
    return <div className={`flex justify-${position}`}>{children}</div>;
};
