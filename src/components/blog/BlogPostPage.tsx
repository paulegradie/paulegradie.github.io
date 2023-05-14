import { BlogFrontMatter } from "types";
import { MDXRemote } from "next-mdx-remote";
import { BlogFullPageCard } from "../backdrops/BlogFullPageCard";
import { BlogImage } from "./BlogImage";
import { BlogLink } from "./BlogLink";
import { HPos } from "./HPos";
import { Quote } from "./Quote";

export interface BlogPostPageProps {
    serializedMarkdown: Object;
    readingTime: number;
    frontMatter: BlogFrontMatter;
}

export const BlogPostPage = ({ frontMatter, serializedMarkdown, readingTime }: BlogPostPageProps) => {
    const { title, image, date, author, author_img, hide } = frontMatter;

    return (
        <BlogFullPageCard
            title={title}
            date={date}
            img={"/" + image}
            readingTime={readingTime.toString()}
            author={author}
            author_img={author_img}
        >
            {/* @ts-ignore */}
            <MDXRemote
                {...serializedMarkdown}
                components={{
                    /* @ts-ignore */
                    a: BlogLink,
                    BlogLink,
                    BlogImage,
                    HPos,
                    Quote,
                }}
            />
        </BlogFullPageCard>
    );
};
