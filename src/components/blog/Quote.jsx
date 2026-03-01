export const Quote = ({ children }) => {
    return (
        <div className="relative my-8 not-prose">
            <div className="absolute bottom-0 left-0 top-0 w-1 rounded-full bg-gradient-to-b from-cyan-500 via-cyan-400 to-blue-500" />
            <div className="ml-6 rounded-r-xl bg-gradient-to-r from-cyan-500/[0.1] to-transparent px-5 py-4">
                <span className="absolute -top-3 left-4 select-none font-display text-4xl leading-none text-cyan-600/45 dark:text-cyan-200/40" aria-hidden="true">&ldquo;</span>
                <div className="text-base italic leading-relaxed text-slate-800 dark:text-slate-200">
                    {children}
                </div>
            </div>
        </div>
    );
};


