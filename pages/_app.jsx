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
import { Hydrate } from 'react-query/hydration'
import reduxStore from '@libs/store'
import 'swiper/swiper.min.css'

import makeServer from '../mock/server'

if (process.env.NODE_ENV === 'development') {
  makeServer({ environment: 'development' })
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

export const emotionCache = createCache({ key: 'css', prepend: true })

export default function MyApp(props) {
  const { Component, pageProps } = props

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
              <title>My page</title>
              <meta name="viewport" content="initial-scale=1, width=device-width" />
            </Head>
            <ThemeProvider theme={theme}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Component {...pageProps} />
              </LocalizationProvider>
            </ThemeProvider>
          </EmotionCacheProvider>
        </ReduxProvider>
      </Hydrate>
    </QueryClientProvider>
  )
}
