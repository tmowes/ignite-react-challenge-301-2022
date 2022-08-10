import { posts } from '../../../temp/profile'
import { PostSummaryCard } from './PostSummaryCard'
import * as S from './styles'

export function PostsSection() {
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
