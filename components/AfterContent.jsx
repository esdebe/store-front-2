import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import afterContents from '@data/afterContents'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

const cardSX = {
  '&.MuiCard-root': {
    borderRadius: '0',
  },
  '.MuiGrid-item:not(:last-of-type) &:after': {
    content: '""',
    width: { xs: '60%', sm: '1px' },
    height: { xs: '1px', sm: '70%' },
    position: 'absolute',
    right: { sm: '0' },
    bottom: { xs: '0', sm: 'auto' },
    marginTop: { sm: '15%' },
    marginBottom: { sm: '15%' },
    borderRight: { xs: 'none', sm: '1px solid #b7c1da' },
    borderBottom: { xs: '1px solid #b7c1da', sm: 'none' },
    boxSizing: 'border-box',
    display: { xs: 'block', sm: 'none', md: 'none', lg: 'block' },
  },
  backgroundColor: 'transparent',
  boxShadow: 'none',
  color: (theme) => theme.palette.preference.white,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: { xs: 120, sm: 140, md: 160 },
  position: 'relative',
}

const cardImageSX = {
  '&.MuiCardMedia-img': {
    maxWidth: 46,
    marginBottom: { xs: '10px', sm: '15px', md: '20px' },
  },
}

function AfterContent() {
  return (
    <Box
      sx={{
        backgroundColor: (theme) => theme.palette.preference.blue2,
        color: (theme) => theme.palette.preference.white,
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Container>
        <Grid container>
          {afterContents.map((afterContent) => (
            <Grid item xs={12} sm={6} md={6} lg={3} key={afterContent.id}>
              <Box sx={cardSX} clone>
                <Card>
                  <Box sx={cardImageSX} clone>
                    <CardMedia
                      component="img"
                      image={afterContent.image}
                      title={afterContent.title}
                    />
                  </Box>
                  <Typography component="p" variant="afterContentTitle">
                    {afterContent.title}
                  </Typography>
                </Card>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default AfterContent
