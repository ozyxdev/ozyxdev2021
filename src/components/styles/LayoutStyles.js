import styled from 'styled-components'

const MaxWidthContainer = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
`

const ContentContainer = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 2rem;
`

const FullWidthContainer = styled.div`
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
`
export { ContentContainer, FullWidthContainer, MaxWidthContainer }
