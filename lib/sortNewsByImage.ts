export default function sortNewsByImage(news: NewsResponse){
    console.log('🔥',news.data);
    
    const newsWithImage = news.data.filter((item) => item.image !== null);
    const newsWithoutImage = news.data.filter((item) => item.image === null);

    const sortedNewsResponse = {
        pagination: news.pagination,
        data: [...newsWithImage, ...newsWithoutImage]
    }

    return sortedNewsResponse;
}