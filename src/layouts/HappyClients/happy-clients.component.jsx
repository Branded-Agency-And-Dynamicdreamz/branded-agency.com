import React from "react"
import * as S from "./happy-clients.styles"
import Container from "@mui/material/Container"
import { Grid } from "@mui/material"
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation } from "swiper/modules"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"
import CustomAnimatedText from "../../components/custom-animated-text/custom-animated-text.component"

const HappyClients = ({ logos, button, text, largeStyle }) => {

  if (!logos) return null

  return (
    <S.Wrapper>
      <Container>
        <S.SwiperWrapper>
          <Swiper
            speed={2000}
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            slidesPerView={2.2}
            breakpoints={{
              0: {
                slidesPerView: 1.9,
                spaceBetween: 96,
              },
              600: {
                slidesPerView: 3.5,
                spaceBetween: 80,
              },
              900: {
                slidesPerView: 5,
                spaceBetween: 80,
              },
            }}
            modules={[Navigation, Autoplay]}
            navigation={{
              prevEl: ".prev1",
              nextEl: ".next1",
            }}
          >
            {logos?.map(({ logo }, index) => (
              <SwiperSlide key={`Logo-happy-clients-slider-${index}`}>
                <S.Logo img={logo} />
              </SwiperSlide>
            ))}
            {logos?.map(({ logo }, index) => (
              <SwiperSlide
                key={`Logo-happy-clients-slider-${index}-secondPart`}
              >
                <S.Logo img={logo} />
              </SwiperSlide>
            ))}
          </Swiper>
        </S.SwiperWrapper>
        <S.CustomGrid container spacing={3.5} alignItems="center">
          <Grid className="first" item md={4} xs={12}>
            {button && (
              <S.Button className="light" href={button?.url} target="_blank">
                {button?.title}
              </S.Button>
            )}
          </Grid>
          <Grid className="second" item md={8} xs={12}>
            {text && (
              <CustomAnimatedText
                className={`paragraph ${largeStyle ? "large" : ""}`}
                content={text}
                duration={1}
                threshold={1}
              />
            )}
          </Grid>
        </S.CustomGrid>
      </Container>
    </S.Wrapper>
  )
}

export default HappyClients
