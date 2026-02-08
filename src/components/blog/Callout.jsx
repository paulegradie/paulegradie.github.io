export const Callout = ({ children, label }) => {
    return (
        <div className="relative my-6 not-prose rounded-xl border border-zinc-700/50 bg-zinc-800/40 backdrop-blur-sm overflow-hidden">
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-400/50 to-transparent" />
            {label && (
                <div className="px-5 pt-4 pb-0">
                    <span className="text-xs font-semibold uppercase tracking-widest text-teal-400/80">{label}</span>
                </div>
            )}
            <div className="px-5 py-4 text-sm leading-relaxed text-zinc-300">
                {children}
            </div>
        </div>
    );
};

export const Objection = ({ question, children }) => {
    return (
        <div className="relative my-5 not-prose">
            <div className="rounded-xl border border-zinc-700/40 bg-zinc-800/30 overflow-hidden">
                {/* Question bar */}
                <div className="flex items-start gap-3 px-5 py-3 border-b border-zinc-700/30 bg-zinc-800/40">
                    <span className="mt-0.5 flex-shrink-0 text-teal-400/70 text-sm">▸</span>
                    <div className="text-sm font-medium text-zinc-200 italic">{question}</div>
                </div>
                {/* Answer */}
                <div className="px-5 py-3 text-sm leading-relaxed text-zinc-400">
                    {children}
                </div>
            </div>
        </div>
    );
};

export const KeyPoint = ({ children }) => {
    return (
        <div className="relative my-6 not-prose flex items-center gap-3 px-5 py-4 rounded-xl bg-gradient-to-r from-teal-500/[0.08] to-transparent border-l-2 border-teal-400/40">
            <span className="flex-shrink-0 text-teal-400 text-sm">✦</span>
            <div className="text-sm font-medium text-zinc-200 leading-relaxed">{children}</div>
        </div>
    );
};



