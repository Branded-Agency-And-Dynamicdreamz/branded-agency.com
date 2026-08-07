import React from "react"
import * as S from "./services-hero.styles"
import { Swiper, SwiperSlide } from "swiper/react"
import FadeInOnScroll from "../../components/fade-in-on-scroll/fade-in-on-scroll.component"
import parse from "html-react-parser"
import { Autoplay } from "swiper/modules"

const ServicesHero = ({ slides }) => {
  const [activeIndex, setActiveIndex] = React.useState(0)
  const [swiper, setSwiper] = React.useState(null)

  if (!slides) return null

  return (
    <>
      <S.Wrapper className="container">
        <S.SwiperWrapper>
          <Swiper
            autoplay={{
              delay: 4000,
            }}
            loop={true}
            modules={[Autoplay]}
            onSwiper={swiper => setSwiper(swiper)}
            onActiveIndexChange={swiperCore => {
              setActiveIndex(swiperCore.realIndex)
            }}
          >
            {slides?.map(
              ({ title, image, color, imageMobile, offsetY }, index) => (
                <SwiperSlide>
                  <S.Slide
                    className="panel"
                    color={color}
                    key={`${title}-${index}`}
                  >
                    <S.ContentWrapper maxWidth="xl">
                      {title && (
                        <FadeInOnScroll showAnimation isHorizontal>
                          <S.Title>{parse(title)}</S.Title>
                          <S.BulletsWrapper>
                            {slides?.map(({ title }, index) => (
                              <S.Bullet
                                onClick={() => {
                                  swiper.slideTo(index)
                                }}
                                className={
                                  index === activeIndex ? "active" : ""
                                }
                                key={`${title}-${index}`}
                              />
                            ))}
                          </S.BulletsWrapper>
                        </FadeInOnScroll>
                      )}
                    </S.ContentWrapper>
                    {image && (
                      <S.Image
                        offsetY={offsetY}
                        className="desktop"
                        img={image}
                      />
                    )}
                    {imageMobile && (
                      <S.Image className="mobile" img={imageMobile} />
                    )}
                  </S.Slide>
                </SwiperSlide>
              ),
            )}
          </Swiper>
        </S.SwiperWrapper>
      </S.Wrapper>
    </>
  )
}

export default ServicesHero
