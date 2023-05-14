import { BlogPostMeta } from "types";
import PublicPageLayout from "../layouts/PublicPageLayout";

import { BlogPostList } from "./BlogPostList";

export type BlogPostsProps = {
    posts: BlogPostMeta[];
    blogType: "personal" | "technical" | "sailfish" | "product";
};

export const BlogPage = ({ posts, blogType }: BlogPostsProps) => {
    return (
        <PublicPageLayout pageName={blogType}>
            <BlogPostList posts={posts} blogType={blogType} />
        </PublicPageLayout>
    );
};
