import { useEffect } from 'react'
import Head from 'next/head'
import { ThemeProvider } from '@material-ui/core/styles'
import { CacheProvider as EmotionCacheProvider } from '@emotion/react'
import AdapterDayjs from '@material-ui/lab/AdapterDayjs'
import LocalizationProvider from '@material-ui/lab/LocalizationProvider'
import createCache from '@emotion/cache'
import theme from '@libs/common/theme'
import { Provider as ReduxProvider } from 'react-redux'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { Hydrate } from 'react-query/hydration'
import reduxStore from '@libs/store'
import NextApp from 'next/app'
import 'swiper/swiper.min.css'
import CssBaseline from '@material-ui/core/CssBaseline'
import seoConfig from '@config/seo.config'
import Page from '@components/animation/Page'
import { DefaultSeo } from 'next-seo'

import products from '@data/products'
import slides from '@data/slides'
import featureds from '@data/featureds'
import categories from '@data/categories'
import socialMedia from '@data/socialMedia'
import storeProfile from '@data/storeProfile'

/*
  import makeServer from '../mock/server'

  if (process.env.NODE_ENV === 'development') {
    makeServer({ environment: 'development' })
  }
*/

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

export const emotionCache = createCache({ key: 'css', prepend: true })

function App(props) {
  const { Component, pageProps, router } = props

  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ReduxProvider store={reduxStore}>
          <EmotionCacheProvider value={emotionCache}>
            <Head>
              <meta
                name="viewport"
                content="initial-scale=1, width=device-width"
              />
            </Head>
            <DefaultSeo {...seoConfig} />
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Page animationKey={router.route} animate={false}>
                  <Component {...pageProps} />
                </Page>
              </LocalizationProvider>
            </ThemeProvider>
          </EmotionCacheProvider>
        </ReduxProvider>
        {process.env.NEXT_PUBLIC_SHOW_REACT_QUERY_DEVTOOLS && (
          <ReactQueryDevtools />
        )}
      </Hydrate>
    </QueryClientProvider>
  )
}

App.getInitialProps = async (appContext) => {
  const appProps = await NextApp.getInitialProps(appContext)
  /* APP PROP START */
  appProps.pageProps = {
    slides,
    featureds,
    categories,
    products,
    socialMedia,
    storeProfile,
  }
  /* APP PROP END */
  return { ...appProps }
}

export default App
