import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'radnika_next' ;
    src: url('/static/radnikanext-medium-webfont.woff2') format('woff2');
    font-weight: normal;
    font-stretch: normal;
  }

  html {
    --max-width: 1000px;
    font-size: 8px;
  }

  body {
    font-family: ---apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-size: 2rem;
    line-height: 2;
    background: var(--color-background);
    color: var(--color-text);
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  a {
    text-decoration: none;
    cursor: pointer;
    color: var(--color-secondary);
  }

  a:hover {
    text-decoration: none;
  }

  button {
    font-family:  ---apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  .icon {
    height: 24px;
    width: 24px;
  }
`

export default GlobalStyles
