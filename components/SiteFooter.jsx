import Container from '@material-ui/core/Container'
import appConfig from '@config/app.config'
import Box from '@material-ui/core/Box'
import Toolbar from '@material-ui/core/Toolbar'
import Link from 'next/link'
import MuiLink from '@material-ui/core/Link'
import FooterSocialMedia from '@components/FooterSocialMedia'
import Typography from '@material-ui/core/Typography'
import { footer as menus } from '@config/menu.config'

const footerSX = {
  backgroundColor: (theme) => theme.palette.preference.blue,
  color: (theme) => theme.palette.preference.white,
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  paddingBottom: '30px',
}

const footerMenuSX = {
  '&.MuiToolbar-root': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 24,
    position: 'relative',
    paddingBottom: { xs: '0', sm: '15px', md: '20px' },
    marginBottom: '20px',
    flexDirection: { xs: 'column', sm: 'row' },
  },
  '&::after': {
    content: '" "',
    position: 'absolute',
    bottom: 0,
    display: { xs: 'none', sm: 'block' },
    width: '400px',
    height: '1px',
    borderBottom: (theme) => `1px solid ${theme.palette.preference.blue3}`,
  },
  '& > a:not(:last-of-type)': {
    marginBottom: { xs: '10px', sm: '0' },
    marginRight: { xs: '0', sm: '15px' },
  },
}

function Footer(props) {
  const { socialMedia } = props
  return (
    <Box sx={footerSX}>
      <Container maxWidth={appConfig.maxWidth} fixed>
        {socialMedia.length > 0 && (
          <FooterSocialMedia socialMedia={socialMedia} />
        )}
        <Box sx={footerMenuSX} clone>
          <Toolbar>
            {menus.map((menu) => (
              <Link key={menu.id} href={menu.href} passHref>
                <MuiLink
                  variant="headerMenu"
                  color="inherit"
                  underline="none"
                  noWrap
                >
                  {menu.title}
                </MuiLink>
              </Link>
            ))}
          </Toolbar>
        </Box>
        <Typography component="p" variant="footerCopyRight">
          {appConfig.copyRightText}
        </Typography>
      </Container>
    </Box>
  )
}

export default Footer
