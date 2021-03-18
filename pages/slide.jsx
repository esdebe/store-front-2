import Base from '@layouts/Base'
import Carousel from '@components/Carousel'
import { Fragment, useEffect } from 'react'
import Header from '@components/Header'
import Featured from '@components/Featured'
import Footer from '@components/Footer'
import Products from '@components/Products'
import Axios from 'axios'

export default function Home() {
  //
  useEffect(() => {
    // eslint-disable-next-line no-console
    Axios.get('/api/movies').then((resp) => console.log(resp))
  }, [])

  return (
    <Fragment>
      <Base>
        <Header />
        <Carousel
          clients={[
            {
              title: 'a',
              image: { url: '/slides/1.png' },
              subtitle: 'a',
              alt: 'a',
            },
            {
              title: 'b',
              image: { url: '/slides/2.png' },
              subtitle: 'b',
              alt: 'b',
            },
            {
              title: 'c',
              image: { url: '/slides/3.png' },
              subtitle: 'c',
              alt: 'c',
            },
          ]}
        />
      </Base>
      <Featured />
      <Products />
      <Footer />
    </Fragment>
  )
}
