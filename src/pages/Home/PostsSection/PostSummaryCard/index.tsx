import { NavLink } from 'react-router-dom'

import * as S from './styles'
import { PostSummaryCardProps } from './types'

export function PostSummaryCard(props: PostSummaryCardProps) {
  const { post } = props

  return (
    <NavLink to={`${post.id}`} title={post.title}>
      <S.Container>
        <S.Header>
          <S.Title>{post.title}</S.Title>
          <S.CreatedAt>{post.createAt}</S.CreatedAt>
        </S.Header>
        <S.Summary>{post.description}</S.Summary>
      </S.Container>
    </NavLink>
  )
}
