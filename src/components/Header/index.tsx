import { NavLink } from 'react-router-dom'

import { LeftEffect } from './LeftEffect'
import { Logo } from './Logo'
import { RightEffect } from './RightEffect'
import * as S from './styles'

export function Header() {
  return (
    <S.Wrapper>
      <LeftEffect />
      <S.Container>
        <NavLink to="/" title="Home">
          <Logo />
        </NavLink>
      </S.Container>
      <RightEffect />
    </S.Wrapper>
  )
}
