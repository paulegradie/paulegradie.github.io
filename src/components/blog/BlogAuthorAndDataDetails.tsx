/* eslint-disable @next/next/no-img-element */
import cls from "./BlogPreviewCard.module.scss";
import { Text } from "@mantine/core";

export const BlogAuthorAndDataDetails = ({
    author,
    author_img,
    dateFormatted,
    readingTime,
}: {
    author: string;
    author_img: string;
    dateFormatted: string;
    readingTime: string;
}) => {
    return (
        <div className="flex flex-row items-center justify-start mt-2 mb-2">
            <div className="rounded-full mr-4 w-28">
                <img src={author_img} alt={author} width="384" height="512" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>
                <Text align="left">{author}</Text>
                <Text className={cls.dateandreading}>{`${dateFormatted} • ${readingTime} mins`}</Text>
            </div>
        </div>
    );
};
