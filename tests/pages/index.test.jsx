import { render, screen } from '@testing-library/react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import theme from '@styles/default.theme'
import App from '@pages/index'

import products from '@data/products'
import slides from '@data/slides'
import featureds from '@data/featureds'
import categories from '@data/categories'
import socialMedia from '@data/socialMedia'

const props = { slides, featureds, categories, products, socialMedia }

describe('App', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    })
  })

  it('renders without crashing', () => {
    render(
      <MuiThemeProvider theme={theme}>
        <App {...props} />
      </MuiThemeProvider>
    )
    expect(screen.getAllByText('Hanya di Bulan Desember', {})).toHaveLength(2)
  })
})
