import Base from '@layouts/Base'
import Featureds from '@components/Featureds'
import SiteHeader from '@components/SiteHeader'
import SiteFooter from '@components/SiteFooter'
import ProductsGrid from '@components/ProductsGrid'
import Carousel from '@components/Carousel'
import FilterBar from '@components/FilterBar'
import AfterContent from '@components/AfterContent'
import LoadMore from '@components/LoadMore'

function LacakOrder(props) {
  const { slides, featureds, categories, products, socialMedia } = props
  return (
    <Base>
      <SiteHeader />
      <Carousel clients={slides} />
      <Featureds featureds={featureds} />
      <FilterBar categories={categories} />
      <ProductsGrid products={products} />
      <LoadMore />
      <AfterContent />
      <SiteFooter socialMedia={socialMedia} />
    </Base>
  )
}

export default LacakOrder
