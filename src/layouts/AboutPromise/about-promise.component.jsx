import React, { useState } from "react"
import * as S from "./about-promise.styles"
import { Container } from "@mui/material"
import parse from "html-react-parser"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation } from "swiper/modules"
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"
import "swiper/css"

const AboutPromise = ({ bgImage, title, description, btnText, images }) => {
  const hasImages = images && images.length > 0
  const [activeIndex, setActiveIndex] = useState(0)
  const totalSlides = images?.length || 0

  return (
    <S.Wrapper>
      {bgImage && <S.BgImage img={bgImage} alt="Background" />}
      <Container>
        <S.ContentWrapper>
          <S.Content>
            {title && <S.Title variant="h2">{title}</S.Title>}
            {description && (
              <S.Description>{parse(description)}</S.Description>
            )}
            {btnText && <S.Button className="light">{btnText}</S.Button>}
          </S.Content>
        </S.ContentWrapper>
      </Container>
      {hasImages && (
        <S.ImageWrapper>
          <Swiper
            loop={true}
            slidesPerView={1}
            modules={[Autoplay, Navigation]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            navigation={{
              prevEl: ".about-promise-prev",
              nextEl: ".about-promise-next",
            }}
            onActiveIndexChange={(swiper) => setActiveIndex(swiper.realIndex)}
          >
            {images.map(({ image, imageMb }, index) => (
              <SwiperSlide key={index}>
                {imageMb && (
                  <S.Image
                    className="mobile"
                    img={imageMb}
                    alt={imageMb?.altText || "About Promise"}
                    arPaddingPercentage={100}
                  />
                )}
                <S.Image
                  className={imageMb ? "desktop" : ""}
                  img={image}
                  alt={image?.altText || "About Promise"}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <S.NavigationWrapper>
            <S.Arrow className="about-promise-prev">
              <ChevronLeftIcon />
            </S.Arrow>
            <S.SlideCounter>
              {activeIndex + 1}/{totalSlides}
            </S.SlideCounter>
            <S.Arrow className="about-promise-next">
              <ChevronRightIcon />
            </S.Arrow>
          </S.NavigationWrapper>
        </S.ImageWrapper>
      )}
    </S.Wrapper>
  )
}

export default AboutPromise
