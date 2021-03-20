import Container from '@material-ui/core/Container'
import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import useIsomorphicLayoutEffect from '@libs/hooks/useIsomorphicLayoutEffect'
import styled from '@emotion/styled'
import Button from '@material-ui/core/Button'
import { css } from '@emotion/react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

import SwiperCore, { Navigation, Pagination, EffectFade } from 'swiper'
import appConfig from '@config/app.config'

SwiperCore.use([Navigation, Pagination, EffectFade])

const ImageContainer = styled.div`
  width: 100%;
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

const SliderContent = ({ children }) => (
  <Box
    sx={{
      position: 'absolute',
      zIndex: 100,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      fontSize: 30,
      marginBottom: 7,
      display: 'inline-block',
      lineHeight: '38px',
      color: (theme) => theme.palette.preference.black,
    }}
  >
    {children}
  </Box>
)

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
    <Container maxWidth={appConfig.maxWidth} fixed>
      <Swiper {...swiperProps} css={CSS}>
        {clients.map(({ title, image, subtitle, alt }) => (
          <SwiperSlide key={title}>
            <ImageContainer>
              <SliderContent>
                <Typography variant="mainSlideTitle">{title}</Typography>
                <Typography variant="mainSlideSubTitle">{subtitle}</Typography>
                <Button variant="contained" color="primary">
                  Belanja Sekarang
                </Button>
              </SliderContent>
              <StyledImg alt={alt} src={image?.url} />
            </ImageContainer>
          </SwiperSlide>
        ))}
        <span slot="container-end">
          <PngSpn className="pgn" />
        </span>
      </Swiper>
    </Container>
  )
}

export default ClientCarousel
