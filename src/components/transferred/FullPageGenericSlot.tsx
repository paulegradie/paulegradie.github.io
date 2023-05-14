import { ChildProps } from "@/types/sharedTypes";
import AnimatedDownArrow from "./AnimatedDownArrow";

export type FullPageGenericSlotProps = ChildProps & {
    aos_directive?: string;
};

export const FullPageGenericSlot = ({ aos_directive, children }: FullPageGenericSlotProps) => {
    return (
        <section style={{ height: "100vh" }} className="flex items-center justify-center h-full">
            <AnimatedDownArrow />
            {children}
        </section>
    );
};
