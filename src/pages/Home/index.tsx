import { useCallback, useEffect, useState } from 'react'

import removeMarkdown from 'remove-markdown'

import { api } from '../../lib/axios'
import { formatDateDistance } from '../../utils/date/formatDateDistance'
import { PostsSection } from './PostsSection'
import { ProfileSection } from './ProfileSection'
import { SearchSection } from './SearchSection'
import * as S from './styles'
import type { PostFetchGet, PostSummary } from './types'

export function Home() {
  const [postsSummary, setPostsSummary] = useState<PostSummary[]>([])

  const fetchPosts = useCallback(async (query?: string) => {
    const queryString = query ? `${query}%20` : ''
    const { data } = await api.get<PostFetchGet>(
      `/search/issues?q=${queryString}repo:tmowes/ignite-react-challenge-301-2022`,
    )

    const parsePosts = data.items.map(({ created_at, body, title, number }) => {
      const maxSummaryLength = 167
      let parseBody = removeMarkdown(body).replace(/\s/g, ' ').replace(/\s$/, '') as string

      if (parseBody.length > maxSummaryLength) {
        parseBody = `${parseBody.substring(0, maxSummaryLength)}...`
      }

      return {
        id: number,
        title,
        body: parseBody,
        createdAt: formatDateDistance(created_at),
      }
    })

    setPostsSummary(parsePosts)
  }, [])

  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])

  return (
    <S.Container>
      <ProfileSection />
      <SearchSection filterPosts={fetchPosts} count={postsSummary.length} />
      <PostsSection posts={postsSummary} />
    </S.Container>
  )
}
