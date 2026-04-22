import React from "react"
import * as S from "./slider-values.styles"
import Container from "@mui/material/Container"
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import { Grid } from "@mui/material"
import parse from "html-react-parser"

const SliderValues = ({ images, values }) => {
  if (!images) return null

  return (
    <S.Wrapper>
      <Container>
        <S.SwiperWrapper>
          <S.CustomContainer>
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
            {images?.map(({ image }, index) => (
              <SwiperSlide key={`${index}-Testimonials}`}>
                <S.WrapperImg>
                  {image && <S.Image img={image} arPaddingPercentage={70} />}
                </S.WrapperImg>
              </SwiperSlide>
            ))}
          </Swiper>
        </S.SwiperWrapper>
        <S.ValuesWrapper>
          <Grid container spacing={4} justifyContent="center">
            {values?.map(({ icon, value, description }, index) => (
              <Grid item md={4} sm={6} xs={12} key={`${index}-${value}`}>
                <S.Item>
                  <S.Icon img={icon} />
                  <S.ContentWrapper>
                    <S.Title>{value}</S.Title>
                    {description && <S.Text>{parse(description)}</S.Text>}
                  </S.ContentWrapper>
                </S.Item>
              </Grid>
            ))}
          </Grid>
        </S.ValuesWrapper>
      </Container>
    </S.Wrapper>
  )
}

export default SliderValues