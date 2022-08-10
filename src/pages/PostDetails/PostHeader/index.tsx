import {
  FaGithub,
  FaBuilding,
  FaUserFriends,
  FaExternalLinkAlt,
  FaChevronLeft,
  FaCalendarDay,
  FaComment,
} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

import { IconLabel } from '../../../components/IconLabel'
import { profile } from '../../../temp/profile'
import * as S from './styles'

export function PostHeader() {
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
          <S.ExternalLink href={profile.html_url} target="_blank" rel="noopener">
            VER NO GITHUB
            <FaExternalLinkAlt />
          </S.ExternalLink>
        </S.Header>
        <S.Title>{profile.bio}</S.Title>
        <S.ExtraInfo>
          <IconLabel icon={<FaGithub />} label={profile.login} />
          <IconLabel icon={<FaCalendarDay />} label="Há 1 dia" />
          <IconLabel icon={<FaComment />} label={`${profile.followers} comentários`} />
        </S.ExtraInfo>
      </S.Content>
    </S.Container>
  )
}
