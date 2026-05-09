import { getAllPublications } from './getAllPublications'

export async function getPublicationsProps() {
  const publications = (await getAllPublications()).map(({ component, ...rest }) => rest)
  return {
    props: {
      publications,
    },
  }
}
