import styled, { css } from 'styled-components'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  max-width: 54rem;
  width: 100%;
  margin: 0 auto 3rem;
  gap: 0.75rem;
`

export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Title = styled.h2`
  ${({ theme: { colors } }) => css`
    font-size: 1.125rem;
    font-weight: 700;
    color: ${colors.subtitle};
  `}
`

export const InfoCount = styled.span``

export const SearchForm = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const SearchInput = styled.input`
  ${({ theme: { colors } }) => css`
    display: flex;
    align-items: center;
    flex: 1;
    height: 3rem;
    padding: 0.75rem 1rem;
    background-color: ${colors.input};
    border-radius: 6px;
    border: 1px solid ${colors.border};
    font-size: 1rem;
    font-weight: 400;
    color: ${colors.text};
    transition: all 0.2s ease-in-out;
    &::placeholder {
      color: ${colors.label};
    }
    &:focus {
      border: 1px solid ${colors.primary};
    }
  `}
`

export const SearchButton = styled.button`
  ${({ theme: { colors } }) => css`
    display: flex;
    align-items: center;
    padding: 0.75rem;
    color: ${colors.primary};
    background-color: ${colors.input};
    border: 1px solid ${colors.border};
    border-radius: 6px;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
    &:not(:disabled):hover {
      background: ${colors.profile};
      color: ${colors.title};
      border: 1px solid ${colors.primary};
    }
  `}
`
