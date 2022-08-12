export type PostSummary = {
  id: number
  title: string
  body: string
  createdAt: string
}

export type PostFetchGet = {
  items: {
    number: number
    title: string
    body: string
    created_at: string
  }[]
}
