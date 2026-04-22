import React, { useState } from "react"
import * as S from "./info-slider.styles"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import parse from "html-react-parser"
import Container from "@mui/material/Container"

const InfoSlider = ({ features }) => {
  const [slider, setSlider] = useState(null)
  const [index, setIndex] = useState(0)

  if (!features) return null

  return (
    <S.Wrapper>
      <Container maxWidth="md">
        <S.SwiperWrapper>
          <Swiper
            onSwiper={setSlider}
            spaceBetween={30}
            loop={true}
            slidesPerView={1}
            modules={[Navigation]}
            pagination={true}
            onActiveIndexChange={swiper => setIndex(swiper.activeIndex)}
            navigation={{
              prevEl: ".prev1",
              nextEl: ".next1",
            }}
          >
            {features?.map(({ title, content }, index) => (
              <SwiperSlide key={`${title}-${index}-feature-project`}>
                <S.TextWrapper>
                  <S.Title>{title}</S.Title>
                  {content && <S.Content>{parse(content)}</S.Content>}
                </S.TextWrapper>
              </SwiperSlide>
            ))}
          </Swiper>
        </S.SwiperWrapper>
        <S.BulletsWrapper className="mobile">
          {features?.map((feature, _index) => (
            <S.Bullet
              onClick={() => slider.slideTo(_index)}
              className={_index === index && "active"}
              key={`${feature?.title}-${_index}`}
            />
          ))}
        </S.BulletsWrapper>
      </Container>
    </S.Wrapper>
  )
}

export default InfoSlider