import { createContext, useContext, useEffect, useMemo } from 'react'

import { POST_KEY_STORAGE } from '../../constants/localStorageKeys'
import { PostContextData, PostProviderProps, Post } from './types'

const PostContext = createContext({} as PostContextData)

export function PostProvider(props: PostProviderProps) {
  const { children } = props

  const posts = useMemo(
    () => [
      {
        id: 'string',
        title: 'string',
        description: 'string',
        body: 'string',
      },
    ],
    [],
  )

  const provideValues = useMemo(() => ({ posts }), [posts])

  return <PostContext.Provider value={provideValues}>{children}</PostContext.Provider>
}

export function usePost() {
  const context = useContext(PostContext)
  if (!context) {
    throw new Error('usePost must be used within a PostProvider')
  }
  return context
}
