import {
  FaGithub,
  FaExternalLinkAlt,
  FaChevronLeft,
  FaCalendarDay,
  FaComment,
} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

import { IconLabel } from '../../../components/IconLabel'
import * as S from './styles'
import { PostHeaderProps } from './types'

export function PostHeader(props: PostHeaderProps) {
  const { data } = props

  return (
    <S.Container>
      <S.Content>
        <S.Header>
          <NavLink to="/" title="Home">
            <S.ExternalLink>
              <FaChevronLeft />
              VOLTAR
            </S.ExternalLink>
          </NavLink>
          <S.ExternalLink href={data.url} target="_blank" rel="noopener">
            VER NO GITHUB
            <FaExternalLinkAlt />
          </S.ExternalLink>
        </S.Header>
        <S.Title>{data.title}</S.Title>
        <S.ExtraInfo>
          <IconLabel icon={<FaGithub />} label={data.login} />
          <IconLabel icon={<FaCalendarDay />} label={data.createdAt} />
          {data.comments > 0 && (
            <IconLabel
              icon={<FaComment />}
              label={`${data.comments} comentário ${data.comments > 1 ? 's' : ''}`}
            />
          )}
        </S.ExtraInfo>
      </S.Content>
    </S.Container>
  )
}
