import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'

function Featured(props) {
  const { featureds } = props
  const theme = useTheme()
  const lgDown = useMediaQuery(theme.breakpoints.down('lg'))
  const handleHover = () => null
  return (
    <Container maxWidth="lg" fixed>
      <Grid container spacing={3}>
        {featureds.map(
          (featured, index) =>
            (index < 2 || (index === 2 && !lgDown)) && (
              <Grid item xs={12} md={6} lg={4} key={featured.id}>
                <Card>
                  <CardMedia
                    component="img"
                    image={featured.img}
                    title={featured.title}
                    onMouseOver={handleHover}
                  />
                </Card>
                <h2>{featured.title}</h2>
              </Grid>
            )
        )}
      </Grid>
    </Container>
  )
}

export default Featured
