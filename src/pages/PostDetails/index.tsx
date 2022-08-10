import ReactMarkdown from 'react-markdown'
import { useParams } from 'react-router-dom'

import { issue } from '../../temp/issue'
import { PostHeader } from './PostHeader'
import * as S from './styles'
import { PostDetailsParams } from './types'

export function PostDetails() {
  const { issueId } = useParams<PostDetailsParams>()
  return (
    <S.Container>
      <PostHeader />
      <S.Content>
        <ReactMarkdown>{issue.body}</ReactMarkdown>
      </S.Content>
    </S.Container>
  )
}
