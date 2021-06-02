import PropTypes from 'prop-types'
import styled from 'styled-components'
import Navigation from './shared/Navigation'
import GlobalStyles from './styles/GlobalStyles'

const InnerStyles = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 2rem;
`

export default function Page({ children }) {
  return (
    <>
      <Navigation />
      <GlobalStyles />
      <InnerStyles>{children}</InnerStyles>
    </>
  )
}

Page.propTypes = {
  children: PropTypes.any,
}
