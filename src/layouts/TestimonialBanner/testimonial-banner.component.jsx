import React, { useState, useRef } from "react"
import * as S from "./testimonial-banner.styles"
import { Container, Grid } from "@mui/material"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectFade } from "swiper/modules"
import PrevArrow from "../../assets/slider-arrows/prev.svg"
import NextArrow from "../../assets/slider-arrows/next.svg"
import parse from "html-react-parser"
import "swiper/css/effect-fade"

const TestimonialBanner = ({ title, content, testimonials }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const swiperRef = useRef(null)

  if (!testimonials || testimonials.length === 0) return null

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev()
    }
  }

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext()
    }
  }

  return (
    <S.Wrapper>
      <Container>
        <Grid container spacing={3.6} alignItems="center">
          <Grid item md={8} xs={12}>
            <S.ContentWrapper>
              {title && <S.Title variant="h2">{title}</S.Title>}
              {content && <S.Content>{parse(content)}</S.Content>}
            </S.ContentWrapper>
          </Grid>
          <Grid item md={4} xs={12}>
            <S.SwiperWrapper>
              <Swiper
                onSwiper={swiper => {
                  swiperRef.current = swiper
                }}
                slidesPerView={1}
                spaceBetween={30}
                modules={[Autoplay, EffectFade]}
                effect="fade"
                loop={true}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                onActiveIndexChange={swiper => {
                  setActiveIndex(swiper.activeIndex)
                }}
              >
                {testimonials.map(
                  ({ image, testimonial, author, occupation }, index) => (
                    <SwiperSlide key={`testimonial-slide-${index}`}>
                      <S.SlideWrapper>
                        <S.ImageWrapper>
                          <S.Image
                            img={image}
                            alt={image?.altText || `Testimonial ${index + 1}`}
                          />
                        </S.ImageWrapper>
                        <S.TestimonialContent>
                          {testimonial && (
                            <S.Testimonial>{parse(testimonial)}</S.Testimonial>
                          )}
                          <S.AuthorWrapper>
                            {author && <S.Author>{author}</S.Author>}
                            {occupation && (
                              <S.Occupation>{occupation}</S.Occupation>
                            )}
                          </S.AuthorWrapper>
                        </S.TestimonialContent>
                      </S.SlideWrapper>
                    </SwiperSlide>
                  ),
                )}
              </Swiper>
              <S.ArrowsWrapper>
                <S.ArrowButton onClick={handlePrev}>
                  <PrevArrow />
                </S.ArrowButton>
                <S.ArrowButton onClick={handleNext}>
                  <NextArrow />
                </S.ArrowButton>
              </S.ArrowsWrapper>
            </S.SwiperWrapper>
          </Grid>
        </Grid>
      </Container>
    </S.Wrapper>
  )
}

export default TestimonialBanner
