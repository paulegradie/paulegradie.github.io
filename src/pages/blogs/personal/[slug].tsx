import { BlogFrontMatter } from "types";
import { serialize } from "next-mdx-remote/serialize";
import rehypePrism from "rehype-prism-plus/common";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { BlogPostPage } from "@/components/blog/BlogPostPage";
import { getGenericStaticPaths, getPostBySlug } from "@/lib/posts";
import { computeReadingTime } from "@/lib/utils";
import PublicPageLayout from "@/components/layouts/PublicPageLayout";

export interface BlogPostProps {
    frontMatter: BlogFrontMatter;
    serializedMarkdown: string;
    readingTime: number;
}

const PersonalBlogPost = ({ frontMatter, serializedMarkdown, readingTime }: BlogPostProps) => {
    if (!frontMatter) return <></>;

    return (
        <PublicPageLayout pageName="Personal Blog Posts  ">
            <BlogPostPage frontMatter={frontMatter} serializedMarkdown={serializedMarkdown} readingTime={readingTime} />
        </PublicPageLayout>
    );
};

export async function getStaticProps({ params }: Params) {
    const { frontMatter, markdownBody } = getPostBySlug("personal", params.slug);
    const serializedMarkdown = await serialize(markdownBody, {
        mdxOptions: {
            rehypePlugins: [rehypePrism],
        },
    });
    const readingTime = computeReadingTime(markdownBody);
    return {
        props: {
            frontMatter,
            serializedMarkdown,
            readingTime,
        },
    };
}

export async function getStaticPaths() {
    const paths = getGenericStaticPaths("personal");

    return {
        paths,
        fallback: false,
    };
}

export default PersonalBlogPost;
