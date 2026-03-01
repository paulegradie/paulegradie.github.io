const JUSTIFY_CLASS = {
    start: 'justify-start',
    center: 'justify-center',
    end: 'justify-end',
    between: 'justify-between',
};

export function Justify({ children, position = 'center' }) {
    return <div className={`flex ${JUSTIFY_CLASS[position] ?? JUSTIFY_CLASS.center}`}>{children}</div>;
}
