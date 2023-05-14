/* eslint-disable @next/next/no-img-element */
import cls from "./BlogImage.module.css";

export interface BlogImageProps {
    src: string;
}

export const BlogImage = ({ src }: BlogImageProps) => {
    return (
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "2rem" }}>
            <img alt={src} src={src} className={cls.blogImg} />
        </div>
    );
};
