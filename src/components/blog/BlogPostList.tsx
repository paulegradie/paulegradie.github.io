import { BlogPostMeta } from "types";
import { BlogPreviewCard } from "./BlogPreviewCard";
import { Text } from "@mantine/core";

export interface BlogPostListProps {
    posts: BlogPostMeta[];
    blogType: "personal" | "technical" | "sailfish" | "product";
}

export const BlogPostList = ({ posts, blogType }: BlogPostListProps) => {
    const postList = posts
        .sort((a, b) => new Date(b.frontMatter.date).getTime() - new Date(a.frontMatter.date).getTime())
        .filter((post) => post.frontMatter.hide !== true)
        .map((post, index) => {
            return (
                <div key={index} className="bg-primary dark:bg-primary-dark pt-3 pb-3">
                    <BlogPreviewCard
                        key={post.slug}
                        url={`/blogs/${blogType}/${post.slug}`}
                        postMeta={post.frontMatter}
                        readingTime={post.readingTime}
                    />
                </div>
            );
        });

    return postList.length > 0 ? (
        <>{postList}</>
    ) : (
        <div className="h-screen flex flex-col items-center justify-center">
            <Text align="center">No Posts found yet for this blog type!</Text>
        </div>
    );
};
