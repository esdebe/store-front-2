import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import ProductsGridCard from '@components/ProductsGridCard'
import appConfig from '@config/app.config'

function ProductsGrid(props) {
  const { products } = props
  return (
    <Container maxWidth={appConfig.maxWidth} fixed>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <ProductsGridCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default ProductsGrid
