import { Button } from "@mantine/core";
import { AnyVoidFunction } from "types";

export interface IColoredButton {
    color?: "primary" | "secondary";
    children: React.ReactNode;
    onClick?: AnyVoidFunction;
    variant?: "text" | "outlined" | "contained" | undefined;
    type?: "button" | "reset" | "submit" | undefined;
    disabled?: boolean;
    classes?: string;
    disableElevation?: boolean;
    styles?: Object;
    href?: string;
    startIcon?: React.ReactNode;
}

export const ColoredButton = ({
    color,
    children,
    onClick,
    variant = "contained",
    type,
    disabled,
    classes,
    disableElevation = false,
    styles = {},
    href,
    startIcon,
}: IColoredButton) => {
    return (
        <Button className={classes} style={styles} onClick={onClick} color={color} type={type} disabled={disabled}>
            {children}
        </Button>
    );
};
