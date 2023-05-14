import { Container } from "@mantine/core";
import { BlogPostHeader } from "./BlogPostHeader";

export interface FullPageCardProps {
    children: React.ReactNode;
    title: string;
    img: string;
    date: string;
    readingTime: string;
    author: string;
    author_img: string;
}

export const BlogFullPageCard = ({
    title,
    author,
    author_img,
    readingTime,
    date,
    children,
    img,
}: FullPageCardProps) => {
    return (
        <Container>
            <BlogPostHeader
                title={title}
                author={author}
                author_img={author_img}
                readingTime={readingTime}
                date={date}
                img={img}
            />

            <article className="prose max-w-none dark:bg-primary-dark bg-primary dark:text-dark text-text dark:text-dark">
                {children}
            </article>
        </Container>
    );
};
