import { PostSummaryCard } from './PostSummaryCard'
import * as S from './styles'
import { PostsSectionProps } from './types'

export function PostsSection(props: PostsSectionProps) {
  const { posts } = props
  return (
    <S.Container>
      <S.Posts>
        {posts.map((post) => (
          <PostSummaryCard key={post.id} post={post} />
        ))}
      </S.Posts>
    </S.Container>
  )
}
