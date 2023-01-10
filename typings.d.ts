type Article = {
    author: string | null,
    category: string | null,
    country: string | null,
    description: string | null,
    image: string | null,
    language: string,
    published_at: string,
    source: string,
    title: string,
    url: string,
}

type Pagination = {
    count: Int,
    limit: Int,
    offset: Int,
    total: Int,
}

type NewsResponse = {
    pagination: Pagination;
    data: Article[]
}


type Category = | "general" |
"sports" | "business" | "health" | "science" | "technology" | "entertainment";