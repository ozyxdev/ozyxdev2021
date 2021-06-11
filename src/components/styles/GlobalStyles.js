import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'radnika_next' ;
    src: url('/static/radnikanext-medium-webfont.woff2') format('woff2');
    font-weight: normal;
    font-stretch: normal;
  }

  html {
    // CSS VARIABLES
    --max-width: 1000px;
    --nav-drop-shadow: 0px 4px 30px rgba(0, 0, 0, 0.15);
    --shadow-1: 0 3px 6px rgba(0,0,0,0.06), 0 3px 6px rgba(0,0,0,0.13);
    --nav-z-index: 1000;
    --nav-sheet-z-index: 990;
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

  .container-full-width {
    width: 100vw;
    position: relative;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
  }

  .container {
    max-width: var(--max-width);
    margin: auto 0;
  }

  .text-gradient {
    transition: background-position 0.5s ease-out, color 0.5s ease-out;
    text-decoration: none;
    color: var(--color-primary200);
    background-color: var(--color-primary200);
    background-image: linear-gradient(90deg, var(--color-primary200), var(--color-primary), var(--color-primary200));
    background-position: 100% 0%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    background-size: 200% 100%;
    font-size: 2.5rem;
    font-weight: bold;
    -webkit-text-fill-color: transparent;

    :hover {
      color: var(--color-primary);
      background-position: 0% 0%;
    }
  }
`

export default GlobalStyles
