import { ChildProps } from "@/types/sharedTypes";

export type WideContentProps = ChildProps & {
    className?: string;
};

export const WideContent = ({ children, className = "" }: WideContentProps) => {
    return <article className={`px-8 mx-auto max-w-1xl ${className}`}>{children}</article>;
};
