import PublicPageLayout from "@/components/layouts/PublicPageLayout";
import Link from "next/link";
import { Text } from "@mantine/core";
import fs from "fs";
import path from "path";

import { GetStaticProps } from "next";

async function getSubdirectories(dir: string): Promise<string[]> {
    const dirents = await fs.promises.readdir(dir, { withFileTypes: true });
    const subdirs = dirents.filter((dirent) => dirent.isDirectory()).map((dirent) => path.join(dir, dirent.name));
    return subdirs;
}

export const getStaticProps: GetStaticProps = async () => {
    const subdirectories = await getSubdirectories("posts");
    return {
        props: {
            subdirectories,
        },
    };
};

export default function BlogsPage({ subdirectories }: { subdirectories: string[] }) {
    console.log("blogspage subdirectories props: " + subdirectories);
    return (
        <PublicPageLayout pageName="Blogs">
            <div style={{ height: "4rem" }} />
            <Text align="center" fz="lg" fw={700}>Blog Streams</Text>
            <div style={{ height: "75vh" }} className="pt-12 flex flex-col items-center justify-around h-full">
                {subdirectories.map((subdir) => {

                    const postPath = "\\" + subdir.replace("posts", "blogs");
                    const linkPrettyName = subdir.slice(6,).toUpperCase();

                    return (
                        <Link key={subdir} href={postPath.replace(/\\/g, "/")} className="ease-in duration-300 bg-secondary shadow-2xl rounded-full w-full text-center pt-12 pb-12">
                            <div key={subdir} >
                                <Text fw={700} fz="xl">
                                    {linkPrettyName}
                                </Text>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </PublicPageLayout>
    );
}
