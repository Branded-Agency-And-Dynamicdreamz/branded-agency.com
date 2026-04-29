import React from "react"
import * as S from "./images-slider.styles"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation } from "swiper/modules"
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded"
import "swiper/css"
import "swiper/css/navigation"
import parse from "html-react-parser"
import { useTheme } from "@mui/material"

const ImagesSlider = ({
  images,
  withoutArrows = false,
  isCaseStudy = false,
  enableMaxHeight = false,
  fullWidth = false,
  autoplay = false,
  delay = 5500,
  isContinuousMove = false,
  caption,
  fullHeight,
  slidesDesktop = 1,
  slidesTablet = 1,
  slidesMobile = 1,
  spaceBetween = 30,
}) => {
  const theme = useTheme()

  return (
    <S.Wrapper
      className={`${isCaseStudy ? "caseStudy" : ""} ${
        fullWidth ? "fullWidth" : ""
      } ${fullWidth && fullHeight ? "addPadding" : ""}`}
    >
      <S.SliderWrapper
        className={` ${isContinuousMove ? "isContinuousMove" : ""}`}
      >
        <Swiper
          key={`swiper-${images?.length}`}
          spaceBetween={fullWidth ? 0 : (spaceBetween || 30)} 
          loop={true}
          speed={isContinuousMove ? 8000 : 300}
          centeredSlides={true}
          breakpoints={{
            900: {
              slidesPerView: fullWidth && !fullHeight ? 3.5 : (slidesDesktop || 1),
            },
            600: {
              slidesPerView: fullWidth && !fullHeight ? 1.5 : (slidesTablet || 1),
            },
            0: {
              slidesPerView: fullWidth && !fullHeight ? 1.5 : (slidesMobile || 1),
            },
          }}
          modules={[Navigation, Autoplay]}
          autoplay={
            autoplay
              ? {
                  delay: isContinuousMove ? 0 : delay,
                  disableOnInteraction: isContinuousMove ?? false,
                  pauseOnMouseEnter: true,
                }
              : false
          }
          navigation={{
            prevEl: ".prev-image",
            nextEl: ".next-image",
          }}
        >
          {images?.map(({ image }, index) => (
            <SwiperSlide key={`${index}-Testimonials`}>
              <S.Image
                className={enableMaxHeight ? "maxHeight" : ""}
                img={image}
              />
            </SwiperSlide>
          ))}

        </Swiper>
      </S.SliderWrapper>
      {caption && <S.Caption>{parse(caption)}</S.Caption>}
      {!withoutArrows && !fullWidth ? (
        <S.ButtonsWrapper>
          <S.ArrowBtn className="prev-image">
            <ArrowBackIosNewRoundedIcon />
          </S.ArrowBtn>
          <S.ArrowBtn className="next-image">
            <ArrowBackIosNewRoundedIcon />
          </S.ArrowBtn>
        </S.ButtonsWrapper>
      ) : null}
    </S.Wrapper>
  )
}

export default ImagesSlider