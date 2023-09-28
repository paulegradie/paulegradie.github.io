import { getAllArticles } from './getAllArticles';

export async function getArticlesProps() {
  const articles = (await getAllArticles()).map(({ component, ...rest }) => rest);
  return {
    props: {
      articles,
    },
  };
}
