import Base from '@layouts/Base'
import SiteHeader from '@components/SiteHeader'
import Carousel from '@components/Carousel'

const slides = [
  {
    title: 'a',
    image: { url: '/images/slides/1.png' },
    subtitle: 'a',
    alt: 'a',
  },
  {
    title: 'b',
    image: { url: '/images/slides/2.png' },
    subtitle: 'b',
    alt: 'b',
  },
  {
    title: 'c',
    image: { url: '/images/slides/3.png' },
    subtitle: 'c',
    alt: 'c',
  },
]

function Index() {
  return (
    <Base>
      <SiteHeader />
      <Carousel clients={slides} />
      <div>Abouts</div>
    </Base>
  )
}

export default Index
