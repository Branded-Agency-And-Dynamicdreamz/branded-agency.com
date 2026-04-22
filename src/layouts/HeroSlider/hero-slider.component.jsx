import React from "react"
import * as S from "./hero-slider.styles"
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"
import CustomButton from "../../components/custom-button/custom-button.component"

const HeroSlider = ({ slides }) => {
  if (!slides) return null
  return (
    <S.Wrapper>
      <S.SwiperWrapper>
        <S.CustomContainer maxWidth="xl">
          <S.Arrow className="prev1">
            <ChevronLeftIcon />
          </S.Arrow>
          <S.Arrow className="next1">
            <ChevronRightIcon />
          </S.Arrow>
        </S.CustomContainer>
        <Swiper
          spaceBetween={30}
          loop={true}
          centeredSlides={true}
          slidesPerView={1}
          modules={[Navigation]}
          navigation={{
            prevEl: ".prev1",
            nextEl: ".next1",
          }}
        >
          {slides?.map(
            ({ title, subtitle, text, button, image, nextId }, index) => (
              <SwiperSlide key={`${index}-Testimonials}`}>
                <S.ContentWrapper
                  spacing={4}
                  alignItems="center"
                  justifyContent="center"
                >
                  {title && <S.Title>{title}</S.Title>}
                  {subtitle && <S.TextBold>{subtitle}</S.TextBold>}
                  {text && <S.Description>{text}</S.Description>}
                  {nextId?.title && (
                    <S.ButtonLink
                      to={nextId.id}
                      spy={true}
                      smooth={true}
                      offset={-200}
                    >
                      {nextId.title}
                    </S.ButtonLink>
                  )}
                  {button && (
                    <CustomButton className="light" href={button.url}>
                      {button.title}
                    </CustomButton>
                  )}
                </S.ContentWrapper>
                {image && <S.Image img={image} />}
              </SwiperSlide>
            ),
          )}
        </Swiper>
      </S.SwiperWrapper>
    </S.Wrapper>
  )
}

export default HeroSlider
