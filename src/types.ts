export interface IGetAllPosts {
    status: string,
    totalResults: number,
    articles: IPost[]
}

export interface IPost {
    source: {
        id: string | null,
        name: string
    },
    author: string | null,
    title: string | null,
    description: string | null,
    url: string | null,
    urlToImage: string | null,
    publishedAt: string | null,
    content: string | null,
}