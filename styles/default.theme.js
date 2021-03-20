import { createMuiTheme, alpha } from '@material-ui/core/styles'
import colorPreference from '@config/color.config'

const theme = createMuiTheme({
  palette: {
    preference: {
      ...colorPreference,
    },
    primary: {
      main: colorPreference.blue,
    },
    secondary: {
      main: colorPreference.green,
    },
    error: {
      main: colorPreference.red,
    },
    background: {
      default: colorPreference.white,
    },
  },
  typography: {
    fontFamily: 'Poppins',
    headerMenu: {
      fontSize: 14,
    },
    filterBarItem: {
      fontSize: 14,
      fontStyle: 'normal',
      fontWeight: 500,
      lineHeight: 1.5,
      letterSpacing: '0.03em',
      textAlign: 'left',
    },
    productGridTitle: {
      fontSize: 16,
      fontStyle: 'normal',
      fontWeight: 500,
      lineHeight: 1.688,
      letterSpacing: '0em',
      textAlign: 'left',
      color: colorPreference.black,
    },
    mainSlideTitle: {
      fontSize: 16,
      fontStyle: 'normal',
      fontWeight: 500,
      lineHeight: 1.688,
      letterSpacing: '0em',
      textAlign: 'left',
      color: colorPreference.black,
    },
    mainSlideSubTitle: {
      fontSize: 16,
      fontStyle: 'normal',
      fontWeight: 500,
      lineHeight: 1.688,
      letterSpacing: '0em',
      textAlign: 'left',
      color: colorPreference.black,
    },
    afterContentTitle: {
      fontSize: 16,
      fontStyle: 'normal',
      fontWeight: 600,
      lineHeight: 1.7,
      letterSpacing: '0.05em',
      textAlign: 'center',
      color: '#b7c1da',
    },
    socialMediaTitle: {
      fontSize: 12,
      fontStyle: 'normal',
      fontWeight: 500,
      lineHeight: 1.25,
      letterSpacing: '0.03em',
      textAlign: 'center',
      textTransform: 'uppercase',
    },
    footerCopyRight: {
      fontSize: 12,
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: 1.25,
      letterSpacing: '0.03em',
      textAlign: 'center',
      color: alpha(colorPreference.white, 0.62),
    },
  },
})

export default theme
