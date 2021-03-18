import { css } from '@emotion/react'

const products = [
  {
    id: 1,
    img: '/products/1.png',
    title: 'Hat Collection',
    text: '23 items',
  },
  {
    id: 2,
    img: '/products/2.png',
    title: 'Denim',
    text: '23 items',
  },
  {
    id: 3,
    img: '/products/3.png',
    title: 'Sunglasses',
    text: '23 items',
  },
  {
    id: 4,
    img: '/products/4.png',
    title: 'Hat Collection',
    text: '23 items',
  },
  {
    id: 5,
    img: '/products/5.png',
    title: 'Denim',
    text: '23 items',
  },
  {
    id: 6,
    img: '/products/6.png',
    title: 'Sunglasses',
    text: '23 items',
  },
]

const CSS = css`
  display: flex;
  & > div {
    width: 289px;
    height: 289px;
    display: flex;
  }
`

function Featured() {
  return (
    <div css={CSS}>
      {
        products.map((product) => (
          <div key={product.id}>
            <h2>{product.title}</h2>
            <img src={product.img} alt="" />
            <p>{product.text}</p>
          </div>
        ))
      }
    </div>
  )
}

export default Featured
