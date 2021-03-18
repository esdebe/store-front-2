import { Children } from 'react'
import Document, {
  Html, Head, Main, NextScript,
} from 'next/document'
import { ServerStyleSheets } from '@material-ui/core/styles'
import createEmotionServer from '@emotion/server/create-instance'
import theme from '@libs/common/theme'
import GoogleFonts from '@components/GoogleFonts'
import { emotionCache } from '@pages/_app'

const { extractCritical } = createEmotionServer(emotionCache)

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="theme-color" content={theme.palette.primary.main} />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <GoogleFonts />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const sheets = new ServerStyleSheets()
  const originalRenderPage = ctx.renderPage

  ctx.renderPage = () => originalRenderPage({
    enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
  })

  const initialProps = await Document.getInitialProps(ctx)
  const styles = extractCritical(initialProps.html)

  return {
    ...initialProps,
    styles: [
      ...Children.toArray(initialProps.styles),
      sheets.getStyleElement(),
      <style
        key="emotion-style-tag"
        data-emotion={`css ${styles.ids.join(' ')}`}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: styles.css }}
      />,
    ],
  }
}
