import { CustomImageGallery } from "@/components/images/ImageGallery";
import PublicPageLayout from "@/components/layouts/PublicPageLayout";
import { AboutSection } from "@/components/layouts/AboutSection";
import { getGalleryPhotos } from "@/lib/galleryPhotos";
import { Container } from "@mantine/core";
import Link from "next/link";
import { ReactImageGalleryItem } from "react-image-gallery";

export async function getStaticProps() {
    const galleryPhotoList = getGalleryPhotos();
    return { props: { images: galleryPhotoList } };
}

export default function AboutPage({ images }: { images: ReactImageGalleryItem[] }) {
    return (
        <PublicPageLayout pageName="About Paul">
            <Container fluid>
                <AboutSection title="Hi 😄">I am Paul</AboutSection>
                <AboutSection title="I'm a full stack software engineer, generally working with C#, Typescript, and Python.">
                    I have spent the last few years working for Octopus Deploy where I have helped migrate webserver
                    frameworks, fix a ton of bugs, added features, and, more recently, developed the organizations
                    understanding of the CI/CD pipeline, increase its reliablity by over 100%, and decrease the build
                    chain runtime from nearly two hours down to currently about half an hour.
                </AboutSection>
                <AboutSection title="Here are a few photos that can give you an impression of what my life is like.">
                    <div className="h-1/2">
                        <CustomImageGallery images={images} />
                    </div>
                </AboutSection>
                <AboutSection title="I have a pretty wild story">
                    I have chronologically ordered stories available on my personal blog. It may suffice here simply to
                    say that I am many things: a Software engineer, a Scientist, a Problem Solver, a Team Player, and a
                    New Father who enjoys pair programming, learning, and building things well.
                </AboutSection>
                <AboutSection title="I also have a diverse background">
                    My background intersects with Software Engineering, Biology, Bioinformatics, Machine Learning
                    (including Deep Learning), and Natural Language Processing.
                </AboutSection>
                <AboutSection title="I maintain a couple different blogs for personal use - but I make them public.">
                    <Link href="/blogs"> My Blogs</Link>
                </AboutSection>
                <AboutSection title="This is some music that I've written. I hope you enjoy it." arrows={false}>
                    <iframe
                        width="1000px"
                        height="500px"
                        allow="autoplay"
                        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1416113062&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=false"
                    ></iframe>
                </AboutSection>
            </Container>
        </PublicPageLayout>
    );
}
