import { css, ClassNames } from '@emotion/react'
import Drawer from '@material-ui/core/Drawer'
import Button from '@material-ui/core/Button'
import { useState, Fragment } from 'react'
import Container from '@material-ui/core/Container'
import appConfig from '@config/app.config'
import Box from '@material-ui/core/Box'
import Stack from '@material-ui/core/Stack'
import IconButton from '@material-ui/core/IconButton'
import ShoppingBag from '@components/icons/ShoppingBag'
import User from '@components/icons/User'
import Badge from '@material-ui/core/Badge'
import HeaderMenu from '@components/HeaderMenu'
import HeaderSearch from '@components/HeaderSearch'

const siteHeaderSX = {
  marginBottom: '40px',
  paddingTop: { xs: '20px', md: '0' },
  boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.25)',
  display: 'flex',
  flexDirection: 'column',
  '& .MuiContainer-root': {
    display: 'flex',
    height: { md: '88px' },
    alignItems: 'center',
  },
}

const CSS2 = css`
  height: 700px;
  width: 476px;
  & .content {
    height: 100%;
    display: flex;
    flex-direction: column;
    & .top {
      flex: 1;
    }
  }
  & .bottom button {
    height: 78px;
    width: 238px;
    color: white;
  }
`

function Header() {
  const [openDrawer, setOpenDrawer] = useState(false)
  const handleClose = () => setOpenDrawer(false)
  return (
    <Fragment>
      <ClassNames>
        {({ css: cssToClassName, cx }) => (
          <Drawer
            PaperProps={{
              className: cx(cssToClassName`${CSS2}`),
            }}
            elevation={0}
            open={openDrawer}
            anchor="right"
            onClose={handleClose}
          >
            <div className="content">
              <div className="top">[]</div>
              <div className="bottom">
                <Button className="cart" type="button">
                  Lihat Keranjang
                </Button>
                <Button className="checkout" type="button">
                  Checkout
                </Button>
              </div>
            </div>
          </Drawer>
        )}
      </ClassNames>
      <Box sx={siteHeaderSX}>
        <Container
          component={Stack}
          direction={{ xs: 'column', md: 'row' }}
          maxWidth={appConfig.maxWidth}
          fixed
        >
          <Box sx={{ order: 1, marginBottom: { xs: '20px', md: '0' } }} clone>
            <img height="34" width="112" src="/images/logo/logo.svg" alt="" />
          </Box>
          <HeaderMenu />
          <Stack
            direction="row"
            spacing={1}
            sx={{ alignItems: 'center', order: { xs: 1, md: 2 } }}
          >
            <HeaderSearch />
            <Stack direction="row" spacing={1}>
              <Box
                sx={{
                  '& .MuiButtonBase-root': {
                    backgroundColor: (theme) => theme.palette.preference.blue4,
                  },
                  '& .MuiBadge-badge ': {
                    backgroundColor: (theme) => theme.palette.preference.red2,
                    color: (theme) => theme.palette.preference.white,
                  },
                }}
                clone
              >
                <Badge overlap="circular" badgeContent={20}>
                  <IconButton>
                    <ShoppingBag />
                  </IconButton>
                </Badge>
              </Box>
              <Box
                sx={{
                  '&.MuiButtonBase-root': {
                    backgroundColor: (theme) => theme.palette.preference.blue4,
                  },
                }}
                clone
              >
                <IconButton>
                  <User />
                </IconButton>
              </Box>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Fragment>
  )
}

export default Header
