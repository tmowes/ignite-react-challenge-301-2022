import styled, { css } from 'styled-components'

export const Container = styled.main`
  ${({ theme: { colors, shadows } }) => css`
    display: flex;
    max-width: 54rem;
    width: 100%;
    padding: 2rem;
    background: ${colors.profile};
    margin: -5.5rem auto 0;
    border-radius: 10px;
    box-shadow: ${shadows.default}, rgba(20, 88, 156, 0.4) 0px -32px 96px -32px;
  `}
`

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 1rem;
`

export const Title = styled.h1`
  ${({ theme: { colors } }) => css`
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.3;
    color: ${colors.title};
  `}
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 2rem;
`

export const ExtraInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`

export const ExternalLink = styled.a`
  ${({ theme: { colors } }) => css`
    display: flex;
    align-items: center;
    font-size: 0.75rem;
    font-weight: 700;
    gap: 0.5rem;
    color: ${colors.primary};
    position: relative;
    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      height: 1.5px;
      width: 100%;
      border-radius: 1px;
      background: transparent;
      transition: background-color 150ms ease-in-out;
    }
    &:hover::before {
      background: ${colors.primary};
    }
  `}
`
