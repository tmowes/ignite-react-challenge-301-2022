import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme: { colors } }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${colors.primary};
    svg {
      animation: spin 750ms linear infinite;
      font-size: 2.5rem;
      @keyframes spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
    }
  `}
`
