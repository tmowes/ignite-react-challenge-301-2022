import { createGlobalStyle, css } from 'styled-components'

export default createGlobalStyle`
${({ theme: { colors } }) => css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
  }

  html {
    font-size: 62.5%;
    line-height: 160%;
    font: 400 1rem 'Nunito', sans-serif, -apple-system;
    line-height: 1.6;
    border: 0;
  }

  body {
    height: 100vh;
    width: 100vw;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${colors.background};
    color: ${colors.title};
    position: relative;
  }

  body,
  input,
  textarea,
  button {
    font: 400 1rem 'Nunito', sans-serif, -apple-system;
    line-height: 1.6;
    border: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  strong {
    font-weight: 700;
  }

  a {
    text-decoration: none;
    background: none;
    font-weight: 700;
    cursor: pointer;
    border: 0;
    transition: 180ms ease-in-out;
    color: inherit;
  }

  button {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  ul {
    list-style: none;
    text-align: left;
    padding: 0;
  }
`}
`
