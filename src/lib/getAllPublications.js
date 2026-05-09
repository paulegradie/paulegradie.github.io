import glob from 'fast-glob'
import * as path from 'path'

async function importPublication(filename) {
  let { meta, default: component } = await import(
    `../pages/research/${filename}`
  )
  return {
    slug: filename.replace(/(\/index)?\.mdx$/, ''),
    ...meta,
    component,
  }
}

export async function getAllPublications() {
  let filenames = await glob(['**/*.mdx'], {
    cwd: path.join(process.cwd(), 'src/pages/research'),
  })

  filenames = filenames.filter(
    (filename) => !filename.split('/').some((segment) => segment.startsWith('.'))
  )

  return Promise.all(filenames.map(importPublication))
}
