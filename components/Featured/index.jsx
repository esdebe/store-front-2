import { css } from '@emotion/react'

const featureds = [
  {
    id: 1,
    img: '/featureds/1.png',
    title: 'Hat Collection',
    text: '23 items',
  },
  {
    id: 2,
    img: '/featureds/2.png',
    title: 'Denim',
    text: '23 items',
  },
  {
    id: 3,
    img: '/featureds/3.png',
    title: 'Sunglasses',
    text: '23 items',
  },
]

const CSS = css`
  display: flex;
  & > div {
    display: flex;
  }
`

function Featured() {
  return (
    <div css={CSS}>
      {
        featureds.map((featured) => (
          <div key={featured.id}>
            <h2>{featured.title}</h2>
            <img src={featured.img} alt="" />
            <p>{featured.text}</p>
          </div>
        ))
      }
    </div>
  )
}

export default Featured
