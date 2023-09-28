export function findPreviousAndNext(articles, currentArticleDate) {
    const sortedArticles = articles.sort(
        (a, b) => new Date(b.date) - new Date(a.date)
    );

    const currentIndex = sortedArticles.findIndex(
        (article) => article.date === currentArticleDate
    );

    const nextArticle = currentIndex > 0 ? sortedArticles[currentIndex - 1] : null;
    const previousArticle = currentIndex < sortedArticles.length - 1 ? sortedArticles[currentIndex + 1] : null;
    return { previousArticle, nextArticle };
}