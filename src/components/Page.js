import PropTypes from 'prop-types'
import { isMobile } from 'react-device-detect'
import NavigationDesktop from './shared/Navigation/NavigationDesktop'
import NavigationMobile from './shared/Navigation/NavigationMobile'
import GlobalStyles from './styles/GlobalStyles'
import { ContentContainer } from './styles/LayoutStyles'

export default function Page({ children }) {
  return (
    <>
      {isMobile ? <NavigationMobile /> : <NavigationDesktop />}

      <GlobalStyles />
      <ContentContainer>{children}</ContentContainer>
    </>
  )
}

Page.propTypes = {
  children: PropTypes.any,
}
