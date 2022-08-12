export type PostDetailsParams = {
  issueId: string
}

export type PostFetchGet = {
  user: {
    login: string
  }
  title: string
  html_url: string
  body: string
  comments: number
  created_at: string
  updated_at: string
}

export type PostData = {
  login: string
  url: string
  comments: number
  title: string
  body: string
  createdAt: string
  updatedAt: string
}
