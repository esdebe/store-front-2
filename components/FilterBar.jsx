import Container from '@material-ui/core/Container'
import Toolbar from '@material-ui/core/Toolbar'
import Link from 'next/link'
import MuiLink from '@material-ui/core/Link'
import Box from '@material-ui/core/Box'
import appConfig from '@config/app.config'

function FilterBar(props) {
  const { categories } = props
  return (
    <Container maxWidth={appConfig.maxWidth} fixed>
      <Box>
        <Toolbar>
          <Box
            component="span"
            sx={{
              display: 'inline-flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Link href="/" passHref>
              <Box
                component="span"
                sx={{
                  '&:after': {
                    content: 'url(/images/assets/dot.svg)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  },
                  display: 'inline-flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <MuiLink
                  variant="filterBarItem"
                  color="inherit"
                  underline="none"
                  noWrap
                >
                  Lihat Semua
                </MuiLink>
              </Box>
            </Link>
            {categories.map((menu) => (
              <Link key={menu.id} href={menu.href} passHref>
                <Box
                  component="span"
                  sx={{
                    '&:after': {
                      content: 'url(/images/assets/dot.svg)',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    },
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <MuiLink
                    variant="filterBarItem"
                    color="inherit"
                    underline="none"
                    noWrap
                  >
                    {menu.title}
                  </MuiLink>
                </Box>
              </Link>
            ))}
            <Link href="/" passHref>
              <MuiLink
                variant="filterBarItem"
                color="inherit"
                underline="none"
                noWrap
              >
                Lainnya
              </MuiLink>
            </Link>
          </Box>
        </Toolbar>
      </Box>
    </Container>
  )
}

export default FilterBar
