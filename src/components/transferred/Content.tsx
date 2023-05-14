import { ChildProps } from "@/types/sharedTypes";

export type ContentProps = ChildProps & {
    className?: string;
};

export const Content = ({ children, className = "" }: ContentProps) => {
    return <article className={`px-8 mt-5 mx-auto my-auto max-w-3xl ${className}`}>{children}</article>;
};
