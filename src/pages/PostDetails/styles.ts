import styled, { css } from 'styled-components'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  max-width: 54rem;
  width: 100%;
  margin: 0 auto;
  gap: 0.75rem;
`

export const Content = styled.div`
  ${({ theme: { colors } }) => css`
    display: flex;
    flex: 1;
    flex-direction: column;
    max-width: 54rem;
    padding: 2rem;

    font-size: 1rem;
    font-weight: 400;
    line-height: 1.6;
    color: ${colors.text};

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-size: 1.5rem;
      margin: 1.5rem 0 0.5rem;
    }

    img {
      max-width: 50rem;
      margin: 1.5rem 0;
    }
  `}
`
