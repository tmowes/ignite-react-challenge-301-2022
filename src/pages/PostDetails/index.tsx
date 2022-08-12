import { useCallback, useEffect, useState } from 'react'

import ReactMarkdown from 'react-markdown'
import { useParams } from 'react-router-dom'

import { Loading } from '../../components/Loading'
import { api } from '../../lib/axios'
import { formatDistanceDate } from '../../utils/date/formatDistanceDate'
import { PostHeader } from './PostHeader'
import * as S from './styles'
import { PostData, PostDetailsParams, PostFetchGet } from './types'

export function PostDetails() {
  const { issueId } = useParams<PostDetailsParams>()
  const [postData, setPostData] = useState<PostData | null>(null)

  const fetchPostDetails = useCallback(async (id: string) => {
    const { data } = await api.get<PostFetchGet>(
      `repos/tmowes/ignite-react-challenge-301-2022/issues/${id}`,
    )

    setPostData({
      login: data.user.login,
      url: data.html_url,
      title: data.title,
      body: data.body,
      comments: data.comments,
      createdAt: formatDistanceDate(data.created_at),
      updatedAt: formatDistanceDate(data.updated_at),
    })
  }, [])

  useEffect(() => {
    if (issueId) {
      fetchPostDetails(issueId)
    }
  }, [fetchPostDetails, issueId])

  if (!postData) {
    return <Loading />
  }

  return (
    <S.Container>
      <PostHeader data={postData} />
      <S.Content>
        <ReactMarkdown>{postData.body}</ReactMarkdown>
      </S.Content>
    </S.Container>
  )
}
