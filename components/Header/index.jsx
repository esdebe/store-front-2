import { css, ClassNames } from '@emotion/react'
import Drawer from '@material-ui/core/Drawer'
import Button from '@material-ui/core/Button'
import { Fragment, useState } from 'react'

const menus = [
  'Beranda',
  'Toko',
  'Blog',
  'Kontak',
  'Tentang Kami',
]

const CSS = css`
  height: 88px;
  display: flex;
  & > .menu {
    display: flex;
    flex-direction: row;
    & > div {
      margin: 17px;
    }
  }
`

const CSS2 = css`
  height: 700px;
  width: 476px;
  background-image: url('/temp/chart-drawer.component.svg');
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
  const openDrawerClick = () => setOpenDrawer(true)
  // eslint-disable-next-line no-console
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
              <div className="top">
                []
              </div>
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
      <div css={CSS}>
        <img src="/logo.svg" alt="" />
        <div className="menu">
          {
            menus.map((menu) => (
              <div key={menu}>{menu}</div>
            ))
          }
        </div>
        <img src="/temp/search.component.svg" alt="" />
        <button type="button" onClick={openDrawerClick}>
          <img src="/temp/shopping-bag.component.svg" alt="" />
        </button>
        <img src="/temp/user.component.svg" alt="" />
      </div>
    </Fragment>
  )
}

export default Header
