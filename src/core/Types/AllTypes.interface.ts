export interface IResponeOfArticle {
  status: string
  totalResults: number
  articles: Article[]
}

export interface Article {
  source: Source
  author: string
  title: string
  description: string
  url: string
  image: string
  publishedAt: string
  content: string
}

export interface Source {
  id: string
  name: string
}
