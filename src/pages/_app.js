/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types'
import Page from '../components/Page'
import { ThemeProvider } from '../lib/themeState'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Page>
        <Component {...pageProps} />
      </Page>
    </ThemeProvider>
  )
}

MyApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any,
}

export default MyApp
