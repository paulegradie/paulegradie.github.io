import { BlogPage, BlogPostsProps } from "@/components/blog/BlogPage";
import { getGenericStaticProps } from "@/lib/posts";

const blogType = "technical";

export async function getStaticProps() {
    const posts = getGenericStaticProps(blogType);
    return {
        props: {
            posts,
        },
    };
}

export default function Blog({ posts = [] }: BlogPostsProps) {
    return <BlogPage posts={posts} blogType={blogType} />;
}
