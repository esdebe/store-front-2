import Base from '@layouts/Base'
import Featureds from '@components/Featureds'
import SiteHeader from '@components/SiteHeader'
import SiteFooter from '@components/SiteFooter'
import ProductsGrid from '@components/ProductsGrid'
import FilterBar from '@components/FilterBar'
import AfterContent from '@components/AfterContent'
import LoadMore from '@components/LoadMore'

function Produk(props) {
  const { featureds, categories, products, socialMedia } = props
  return (
    <Base>
      <SiteHeader />
      <Featureds featureds={featureds} />
      <FilterBar categories={categories} />
      <ProductsGrid products={products} />
      <LoadMore />
      <AfterContent />
      <SiteFooter socialMedia={socialMedia} />
    </Base>
  )
}

export default Produk
