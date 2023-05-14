import { ChildProps } from "@/types/sharedTypes";
import AnimatedDownArrow from "../transferred/AnimatedDownArrow";
import { Text } from "@mantine/core";

export type AboutSectionProps = ChildProps & {
    title?: string;
    arrows?: boolean;
};

export const AboutSection = ({ title, children, arrows = true }: AboutSectionProps) => {
    return (
        <section style={{ height: "100vh" }} className="flex flex-col items-center justify-around h-full">
            {title && (
                <Text variant="text" fw={700} fz="xl">
                    {title}
                </Text>
            )}
            <Text>{children}</Text>
            {arrows && <AnimatedDownArrow />}
        </section>
    );
};
