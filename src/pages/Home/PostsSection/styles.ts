import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 54rem;
  width: 100%;
  margin: 0 auto;
`
export const Posts = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(26rem, 1fr));
  grid-gap: 2rem;
`
