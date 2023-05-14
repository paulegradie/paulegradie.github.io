/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import format from "date-fns/format";
import { Box } from "@mantine/core";
import { Text } from "@mantine/core";

import cls from "./BlogPreviewCard.module.scss";
import { BlogFrontMatter } from "types";
import { BlogAuthorAndDataDetails } from "./BlogAuthorAndDataDetails";
import { Chip } from "@mantine/core";
export interface BlogCardProps {
    url: string;
    postMeta: BlogFrontMatter;
    readingTime: string;
}

export const BlogPreviewCard = ({ url, postMeta, readingTime }: BlogCardProps) => {
    const { date, title, snippet, tags, author, author_img } = postMeta;
    const dateFormatted = format(new Date(date), "PPP");



    const snippetStyle = "text-bold text-text cursor-pointer hover:red"

    return (
        <Link href={url} legacyBehavior>
            <div className="bg-secondary dark:bg-secondary-dark min-w-fit p-10 text-left rounded-md shadow-sm">
                <Box p={2}>
                    <Link href={url}>
                        <Text fz="lg" fw={200}>
                            {title}
                        </Text>
                    </Link>
                    <BlogAuthorAndDataDetails
                        author={author}
                        author_img={author_img}
                        dateFormatted={dateFormatted}
                        readingTime={readingTime}
                    />
                    <Text className={snippetStyle}>
                        {snippet}
                        <Text className={cls.link}> read more...</Text>
                    </Text>
                    {tags && tags.length > 0 && (
                        <div className="flex flex-row">
                            {tags.map((tag, index) => (
                                <Chip
                                    className="bg-primary dark:bg-primary-dark"
                                    style={{ fontSize: "12px", fontWeight: 300, border: "1px solid white" }}
                                    key={index}
                                >
                                    {tag}
                                </Chip>
                            ))}
                        </div>
                    )}
                </Box>
            </div>
        </Link>
    );
};
