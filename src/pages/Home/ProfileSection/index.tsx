import { useEffect, useState } from 'react'

import { FaGithub, FaBuilding, FaUserFriends, FaExternalLinkAlt } from 'react-icons/fa'

import { IconLabel } from '../../../components/IconLabel'
import { api } from '../../../lib/axios'
import * as S from './styles'
import { ProfileModel } from './types'

export function ProfileSection() {
  const [profile, setProfile] = useState<ProfileModel | null>(null)

  useEffect(() => {
    // eslint-disable-next-line prettier/prettier
    (async () => {
      const { data } = await api.get('users/tmowes')
      setProfile(data)
    })()
  }, [])

  return (
    <S.Container>
      {profile && (
        <>
          <S.ProfileImage src={profile.avatar_url} alt={profile.name} />
          <S.Content>
            <S.Header>
              <S.Title>{profile.name}</S.Title>
              <S.ExternalLink href={profile.html_url} target="_blank" rel="noopener">
                GITHUB
                <FaExternalLinkAlt />
              </S.ExternalLink>
            </S.Header>
            <S.Description>{profile.bio}</S.Description>
            <S.Footer>
              <IconLabel icon={<FaGithub />} label={profile.login} />
              <IconLabel
                icon={<FaBuilding />}
                label={`${profile.company ?? profile.location}`}
              />
              <IconLabel icon={<FaUserFriends />} label={`${profile.followers} seguidores`} />
            </S.Footer>
          </S.Content>
        </>
      )}
    </S.Container>
  )
}
