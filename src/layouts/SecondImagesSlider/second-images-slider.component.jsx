import React from "react"
import * as S from "./second-images-slider.styles"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation } from "swiper/modules"
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded"

const SecondImagesSlider = ({ images }) => {
  return (
    <S.Wrapper>
      <S.SliderWrapper>
        <Swiper
          loop={true}
          slidesPerView={1}
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
            <SwiperSlide key={`${index}-Testimonials}`}>
              <S.Image img={image} />
            </SwiperSlide>
          ))}
        </Swiper>
      </S.SliderWrapper>
      <S.ButtonsWrapper maxWidth="xl">
        <S.ArrowBtn className="prev-image">
          <ArrowBackIosNewRoundedIcon />
        </S.ArrowBtn>
        <S.ArrowBtn className="next-image">
          <ArrowBackIosNewRoundedIcon />
        </S.ArrowBtn>
      </S.ButtonsWrapper>
    </S.Wrapper>
  )
}

export default SecondImagesSlider
