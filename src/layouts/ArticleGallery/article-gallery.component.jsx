import React from "react"
import * as S from "./article-gallery.styles"
import { Grid } from "@mui/material"
import { Autoplay, Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const ArticleGallery = ({
  images,
  spacingDesktop,
  spacingMobile,
  paddingTop,
  paddingBottom,
  swiperInMobile = false,
}) => {
  if (!images) return null

  return (
    <>
      <S.Wrapper
        className={swiperInMobile ? "swiperInMobile" : ""}
        paddingTop={paddingTop}
        paddingBottom={paddingBottom}
      >
        <Grid container spacing={{ md: spacingDesktop, xs: spacingMobile }}>
          {images.map(({ image }, index) => (
            <Grid item md={6} xs={12}>
              <S.Image
                key={`gallery-${index}-${image?.altText}}`}
                img={image}
              />
            </Grid>
          ))}
        </Grid>
      </S.Wrapper>
      <S.SliderWrapper>
        <Swiper
          spaceBetween={8}
          loop={true}
          centeredSlides={true}
          slidesPerView={1.25}
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 5000,
          }}
          navigation={{
            prevEl: ".prev-image",
            nextEl: ".next-image",
          }}
        >
          {images?.map(({ image }, index) => (
            <SwiperSlide key={`${index}-Testimonials`}>
              <S.Image img={image} />
            </SwiperSlide>
          ))}
        </Swiper>
      </S.SliderWrapper>
    </>
  )
}

export default ArticleGallery
