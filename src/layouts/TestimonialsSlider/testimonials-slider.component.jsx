import React, { useState } from "react"
import * as S from "./testimonials-slider.styles"
import Container from "@mui/material/Container"
import { Swiper, SwiperSlide } from "swiper/react"
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"
import "swiper/css"
import "swiper/css/effect-fade"
import { Navigation } from "swiper/modules"

const TestimonialsSlider = ({ testimonials }) => {
  const [index, setIndex] = useState(0)
  if (!testimonials) return null
  return (
    <S.Wrapper id="testimonials">
      <Container>
        <S.SwiperWrapper>
          <S.Arrow className="prev1">
            <ChevronLeftIcon />
          </S.Arrow>
          <Swiper
            loop={true}
            centeredSlides={true}
            slidesPerView={1}
            modules={[Navigation]}
            navigation={{
              prevEl: ".prev1",
              nextEl: ".next1",
            }}
            onActiveIndexChange={swiper => {
              setIndex(() => swiper.realIndex)
            }}
          >
            {testimonials?.map(({ name, job, testimonial }, index) => (
              <SwiperSlide key={`${index}-Testimonials}`}>
                <S.TestimonialCard>
                  <S.Name>{name}</S.Name>
                  <S.Job>{job}</S.Job>
                  <S.Text>{testimonial}</S.Text>
                </S.TestimonialCard>
              </SwiperSlide>
            ))}
          </Swiper>
          <S.Arrow className="next1">
            <ChevronRightIcon />
          </S.Arrow>
        </S.SwiperWrapper>
        <S.BulletsWrapper>
          {testimonials.map((item, _index) => (
            <S.Bullet
              key={`${item.name}-${_index}`}
              className={_index === index ? "active" : ""}
            />
          ))}
        </S.BulletsWrapper>
      </Container>
    </S.Wrapper>
  )
}

export default TestimonialsSlider
