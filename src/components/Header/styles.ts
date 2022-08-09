/* eslint-disable sonarjs/no-duplicate-string */
import styled, { css } from 'styled-components'

export const Wrapper = styled.header`
  ${({ theme: { colors } }) => css`
    background: ${colors.profile};
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `}
`

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 54rem;
  padding-top: 4rem;
  padding-bottom: 8.375rem;
`
