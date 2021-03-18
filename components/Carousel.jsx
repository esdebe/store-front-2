/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import useIsomorphicLayoutEffect from '@libs/hooks/useIsomorphicLayoutEffect'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

import SwiperCore, {
  Navigation, Pagination, EffectFade,
} from 'swiper'

SwiperCore.use([Navigation, Pagination, EffectFade])

const ImageContainer = styled.div`
  width: 100%;
  min-height: 480px;
  overflow: hidden;
  position: relative;
`

const StyledImg = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
  @media (min-width: 480px) {
  }
`

const PngSpn = styled.span`
  display: none;
  .swiper-pagination-bullet {
    background-color: red !important;
    margin-left: 5px;
  }
  @media (min-width: 480px) {
    display: inline;
  }
`

const CSS = css`
  .slider-text {
    position: absolute;
    z-index: 100;
    top: 40%;
    left: 15%;
    font-size: 30px;
    color: #fff;
    margin-bottom: 7px;
    display: inline-block;
    line-height: 38px;
    color: #252525 !important;

    p {
      font-size: 16px;
    }
  }
`

function ClientCarousel(props) {
  const { clients } = props
  const [swiperProps, setSwiperProps] = useState({
    slidesPerView: 1,
    loop: false,
    pagination: { clickable: true, el: '.pgn' },
    // effect: 'fade',
  })

  useIsomorphicLayoutEffect(() => {
    setSwiperProps((prev) => ({
      ...prev,
      loop: true,
    }))
  }, [])

  return (
    <Swiper
      {...swiperProps}
      css={CSS}
    >
      {
        clients.map(({
          title, image, subtitle, alt,
        }) => (
          <SwiperSlide key={title}>
            <ImageContainer>
              <div className="slider-text">
                {title}
                <p>{subtitle}</p>
              </div>
              <StyledImg alt={alt} src={image?.url} />
            </ImageContainer>
          </SwiperSlide>
        ))
      }
      <span slot="container-end">
        <PngSpn className="pgn" />
      </span>
    </Swiper>
  )
}

export default ClientCarousel
