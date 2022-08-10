import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme: { colors } }) => css`
    background-color: ${colors.post};
    height: 16.25rem;
    padding: 2rem;
    overflow: hidden;
    border-radius: 10px;
    transition: all 150ms ease-in-out;
    border: 2px solid ${colors.post};
    &:hover {
      border: 2px solid ${colors.label};
    }
  `}
`

export const Header = styled.div`
  height: 4rem;
  display: flex;
  margin-bottom: 1rem;
`

export const Title = styled.h2`
  ${({ theme: { colors } }) => css`
    max-width: 80%;
    font-size: 1.25rem;
    font-weight: 700;
    color: ${colors.title};
  `}
`

export const CreatedAt = styled.span`
  ${({ theme: { colors } }) => css`
    font-size: 0.875rem;
    color: ${colors.span};
  `}
`

export const Summary = styled.p`
  ${({ theme: { colors } }) => css`
    font-size: 1rem;
    color: ${colors.text};
    display: inline-block;
    direction: ltr;
    overflow: hidden;
    text-overflow: ellipsis;
    height: 6.5rem;
  `}
`
