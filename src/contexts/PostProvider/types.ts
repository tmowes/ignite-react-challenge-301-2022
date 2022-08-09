import { ReactNode } from 'react'

export type PostProviderProps = {
  children: ReactNode
}

export type PostContextData = {
  posts: Post[]
}

export type Post = {
  id: string
  title: string
  description: string
  body: string
}
