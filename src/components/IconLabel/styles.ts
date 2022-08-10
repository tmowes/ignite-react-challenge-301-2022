import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme: { colors } }) => css`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${colors.label};
  `}
`

export const Label = styled.span`
  ${({ theme: { colors } }) => css`
    font-size: 1rem;
    font-weight: 400;
    color: ${colors.span};
  `}
`
