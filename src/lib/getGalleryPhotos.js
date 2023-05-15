import fs from "fs";
import path from "path";

const galleryDirectory = path.join(process.cwd(), "src", "images", "about");

export function getGalleryPhotos() {
    const files = fs.readdirSync(galleryDirectory);
    const galleryPhotoList = files.map((file) => {
        return {
            original: `/aboutimages/${file}`,
            thumbnail: `/aboutimages/${file}`,
            thumbnailWidth: "25%",
        };
    });

    return galleryPhotoList;
}
