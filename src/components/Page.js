import Head from 'next/head'
import PropTypes from 'prop-types'
import NavigationDesktop from './shared/Navigation/NavigationDesktop'
import NavigationMobile from './shared/Navigation/NavigationMobile'
import GlobalStyles from './styles/GlobalStyles'
import { ContentContainer } from './styles/LayoutStyles'
import TypographyStyles from './styles/Typography'

export default function Page({ children }) {
  return (
    <>
      <Head>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
        </style>
      </Head>
      <NavigationMobile />
      <NavigationDesktop />
      <GlobalStyles />
      <TypographyStyles />
      <ContentContainer>{children}</ContentContainer>
    </>
  )
}

Page.propTypes = {
  children: PropTypes.any,
}
