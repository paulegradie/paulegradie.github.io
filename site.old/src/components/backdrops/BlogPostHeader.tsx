/* eslint-disable @next/next/no-img-element */
import { format } from "date-fns";
import { BlogAuthorAndDataDetails } from "../blog/BlogAuthorAndDataDetails";
import cls from "./BlogPostHeader.module.scss";
import { Container, Text } from "@mantine/core";

export interface BlogPostHeaderProps {
    title: string;
    img: string;
    date: string;
    readingTime: string;
    author: string;
    author_img: string;
}

export const BlogPostHeader = ({ title, author, author_img, date, readingTime, img }: BlogPostHeaderProps) => {
    return (
        <div className="pt-6 text-center flex justify-center flex-col align-items-center">
            <div className="flex flex-row justify-center h-1/4 w-1/2 mx-auto">
                <img className={cls.img} src={img} alt="" />
            </div>
            <div>
                <Text align="center" fz="xl" fw={800} size={"xl"}>
                    {title}
                </Text>
            </div>
            <BlogAuthorAndDataDetails
                author={author}
                author_img={author_img}
                dateFormatted={format(new Date(date), "PPP")}
                readingTime={readingTime}
            />
        </div>
    );
};
