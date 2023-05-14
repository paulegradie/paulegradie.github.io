import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";

export type CustomImageGalleryProps = {
    images: ReactImageGalleryItem[];
};

export const CustomImageGallery = ({ images }: CustomImageGalleryProps) => {
    return (
        <div className="w-full h-1/2">
            <div className="flex mb-12 w-full">
                <ImageGallery items={images} />
            </div>
        </div>
    );
};
