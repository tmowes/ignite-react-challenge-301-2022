import styled, { css } from 'styled-components'

export const Container = styled.div``

export const Content = styled.main`
  ${({ theme: { colors, shadows } }) => css`
    display: flex;
    justify-content: space-between;
    max-width: 54rem;
    width: 100%;
    padding: 2rem 2.5rem;
    background: ${colors.profile};
    margin: -5.5rem auto 2rem;
    border-radius: 10px;
    box-shadow: ${shadows.default}, rgba(20, 88, 156, 0.4) 0px -32px 96px -32px;
  `}
`

export const LeftSide = styled.section`
  width: 9.25rem;
  height: 9.25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  img {
    border-radius: 8px;
  }
`

export const Title = styled.h1`
  ${({ theme: { colors } }) => css`
    font-size: 3rem;
    font-weight: 800;
    color: ${colors.title};
    margin-bottom: 1rem;
  `}
`

export const SubTitle = styled.span`
  ${({ theme: { colors } }) => css`
    font-size: 1.25rem;
    font-weight: 400;
    color: ${colors.subtitle};
  `}
`
