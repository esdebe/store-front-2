import Toolbar from '@material-ui/core/Toolbar'
import Link from 'next/link'
import MuiLink from '@material-ui/core/Link'
import { header as menus } from '@config/menu.config'
import Box from '@material-ui/core/Box'
import Stack from '@material-ui/core/Stack'
import { useRouter } from 'next/router'
import { Children, cloneElement } from 'react'

const ActiveLink = ({ children, activeClassName, ...props }) => {
  const { asPath } = useRouter()
  const child = Children.only(children)
  const childClassName = child.props.className || ''

  const className =
    asPath === props.href || asPath === props.as
      ? `${childClassName} ${activeClassName}`.trim()
      : childClassName

  return (
    <Link {...props}>
      {cloneElement(child, {
        className: className || null,
      })}
    </Link>
  )
}

function HeaderMenu() {
  return (
    <Toolbar
      component={Stack}
      direction="row"
      spacing={{ xs: 1, sm: 2, md: 3 }}
      paddingLeft={{ xs: 0, sm: 24 }}
      paddingRight={{ xs: 0, sm: 24 }}
      sx={{
        order: { xs: 2, md: 1 },
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'stretch',
      }}
    >
      {menus.map((menu) => (
        <ActiveLink
          activeClassName="active"
          key={menu.id}
          href={menu.href}
          passHref
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'stretch',
              position: 'relative',
              paddingLeft: '5px',
              paddingRight: '5px',
              '& a': {
                cursor: 'pointer',
              },
              '.active&:after': {
                content: '""',
                display: 'block',
                position: 'absolute',
                bottom: '0',
                height: '3px',
                width: '100%',
                backgroundColor: '#556FB5',
              },
            }}
            component="span"
          >
            <MuiLink
              variant="headerMenu"
              color="inherit"
              underline="none"
              noWrap
            >
              {menu.title}
            </MuiLink>
          </Box>
        </ActiveLink>
      ))}
    </Toolbar>
  )
}

export default HeaderMenu
