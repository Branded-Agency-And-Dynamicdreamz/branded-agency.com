import React, { useRef } from "react"
import * as S from "./landing-carousel.styles"
import Container from "@mui/material/Container"
import { Swiper, SwiperSlide } from "swiper/react"
import parse from "html-react-parser"
import { Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import { useMediaQuery, useTheme } from "@mui/material"
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft"
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight"

const LandingCarousel = ({ items }) => {
  const [slideActive, setSlideActive] = React.useState(0)
  const prevRef = useRef(null)
  const nextRef = useRef(null)
  const theme = useTheme()
  const isMd = useMediaQuery(theme.breakpoints.up("md"))

  if (!items) return null
  return (
    <S.Wrapper id="carousel">
      <Container>
        <S.SwiperWrapper>
          {isMd && (
            <>
              <S.ArrowButton ref={prevRef} className="prev">
                <KeyboardArrowLeftIcon />
              </S.ArrowButton>
              <S.ArrowButton ref={nextRef} className="next">
                <KeyboardArrowRightIcon />
              </S.ArrowButton>
            </>
          )}
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            onActiveIndexChange={swiper => setSlideActive(swiper?.activeIndex)}
            navigation={
              isMd
                ? {
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                  }
                : false
            }
            onBeforeInit={swiper => {
              if (isMd) {
                swiper.params.navigation.prevEl = prevRef.current
                swiper.params.navigation.nextEl = nextRef.current
              }
            }}
            breakpoints={{
              768: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 1,
              },
            }}
          >
            {items?.map(({ title, description, image, imageMobile }, index) => (
              <SwiperSlide key={`${title}-${index}`} style={{ width: "100%" }}>
                <S.CardWrapper>
                  {title && <S.Title>{parse(title)}</S.Title>}
                  <S.Image className="desktop" img={image} />
                  <S.Image className="mobile" img={imageMobile} />
                  {description && (
                    <S.Description>{parse(description)}</S.Description>
                  )}
                </S.CardWrapper>
              </SwiperSlide>
            ))}
          </Swiper>
        </S.SwiperWrapper>
        <S.DotsWrapper>
          {items?.map((_, index) => (
            <S.Dot
              className={index === slideActive ? "active" : ""}
              key={`dot-caurosel-${index}`}
            />
          ))}
        </S.DotsWrapper>
      </Container>
    </S.Wrapper>
  )
}

export default LandingCarousel
