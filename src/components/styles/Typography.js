import { createGlobalStyle } from 'styled-components'

const TypographyStyles = createGlobalStyle`
  h1,
  h2,
  h3,
  h4 {
    margin: 0;
  }

  h2 {
    font-size: 5rem;
  }
  
  h3 {
    font-size: 4rem;
  }
`

export default TypographyStyles
