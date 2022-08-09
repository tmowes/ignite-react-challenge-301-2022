import { PostsSection } from './PostsSection'
import { ProfileSection } from './ProfileSection'
import { SearchSection } from './SearchSection'
import * as S from './styles'

export function Home() {
  return (
    <S.Container>
      <ProfileSection />
      <SearchSection />
      <PostsSection />
    </S.Container>
  )
}
