import React from "react"
import * as S from "./clients-slider.styles"
import Container from "@mui/material/Container"
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"

const ClientsSlider = ({ title, clients, button }) => {
  if (!clients) return null

  return (
    <S.Wrapper>
      <Container>
        <S.Title>{title}</S.Title>
        <S.SwiperWrapper>
          <S.CustomContainer maxWidth={"xl"}>
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
            slidesPerView={3}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              600: {
                slidesPerView: 2,
              },
              900: {
                slidesPerView: 3,
              },
            }}
            modules={[Navigation]}
            navigation={{
              prevEl: ".prev1",
              nextEl: ".next1",
            }}
          >
            {clients?.map(({ icon }, index) => (
              <SwiperSlide key={`${index}-clients-happy-slider`}>
                {icon && <S.Image img={icon} />}
              </SwiperSlide>
            ))}
          </Swiper>
        </S.SwiperWrapper>
        {button && (
          <S.ButtonWrapper>
            <S.Button to="form" spy={true} smooth={true} offset={-50}>
              {button.title}
            </S.Button>
          </S.ButtonWrapper>
        )}
      </Container>
    </S.Wrapper>
  )
}

export default ClientsSlider
