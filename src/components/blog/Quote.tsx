import cls from "./Quote.module.css";
import { Text } from '@mantine/core';

export interface QuoteProps {
    children: React.ReactNode;
}

export const Quote = ({ children }: QuoteProps) => {
    return (
        <div className={cls.quoteContainer}>
            <Text className={cls.text}>{children}</Text>
        </div>
    );
};
