export const Quote = ({ children }) => {
    return (
        <div className="p-2 pl-6 pr-6 rounded-2xl rounded-bl-none no-underline">
            <span className="italic">{children}</span>
        </div>
    );
};
