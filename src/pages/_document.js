/* eslint-disable react/jsx-props-no-spreading */
import Document, { Html, Head, NextScript, Main } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { MagicScriptTag } from '../lib/loadThemeVariables'

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />)
    )
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render() {
    return (
      <Html lang="en-US">
        <Head>
          <link rel="icon" href="/favicon.svg" />
          {/* IMPORTANT: REMOVE BEFORE LAUCH */}
          <meta name="robots" content="noindex" />
          <meta name="googlebot" content="noindex" />
        </Head>
        <body>
          <MagicScriptTag />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
