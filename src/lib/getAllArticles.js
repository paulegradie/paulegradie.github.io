import glob from 'fast-glob'
import * as path from 'path'
import fs from "fs";

const galleryDirectory = path.join(process.cwd(), "src", "images", "photos", "about");

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


async function importArticle(articleFilename) {
  let { meta, default: component } = await import(
    `../pages/articles/${articleFilename}`
  )
  return {
    slug: articleFilename.replace(/(\/index)?\.mdx$/, ''),
    ...meta,
    component,
  }
}

export async function getAllArticles() {
  let articleFilenames = await glob(['*.mdx', '*/index.mdx'], {
    cwd: path.join(process.cwd(), 'src/pages/articles'),
  })

  let articles = await Promise.all(articleFilenames.map(importArticle))

  return articles.sort((a, z) => new Date(z.date) - new Date(a.date))
}


