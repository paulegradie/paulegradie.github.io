export const Quote = ({ children }) => {
    return (
        <div className="relative my-8 not-prose">
            {/* Gradient left border */}
            <div className="absolute left-0 top-0 bottom-0 w-1 rounded-full bg-gradient-to-b from-teal-400 via-teal-500 to-cyan-500" />
            {/* Content */}
            <div className="ml-6 py-4 px-5 rounded-r-xl bg-gradient-to-r from-teal-500/[0.07] to-transparent">
                {/* Decorative quote mark */}
                <span className="absolute -top-3 left-4 text-4xl leading-none font-serif text-teal-500/30 select-none" aria-hidden="true">&ldquo;</span>
                <div className="text-base italic text-zinc-200 leading-relaxed">
                    {children}
                </div>
            </div>
        </div>
    );
};
