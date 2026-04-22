import React, { useEffect, useState, useRef } from "react"
import * as S from "./services-slider-banner.styles"
import Container from "@mui/material/Container"
import { Swiper, SwiperSlide } from "swiper/react"
import parse from "html-react-parser"
import { Reveal } from "react-awesome-reveal"
import { keyframes } from "@emotion/css"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { isBrowser } from "../../utils/utils"
import { useTheme } from "@emotion/react"
import { useMediaQuery } from "@mui/material"
gsap.registerPlugin(ScrollTrigger)

const ServicesSliderBanner = ({ title, button, services }) => {
  const sectionRef = React.useRef(null)
  const cardRef = React.useRef(null)
  const [maxWidth, setMaxWidth] = React.useState(0)
  const [swiper, setSwiper] = useState(null)
  const currentIndexRef = useRef(0)
  const theme = useTheme()
  const isSm = useMediaQuery(theme.breakpoints.up("sm"))

  const FadeInBottom = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 75px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`

  const FadeInBottomSlides = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 300px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`

  useGSAP(
    () => {
      if (!swiper || !services?.length || !isBrowser) return
      if (isSm) return

      const numSlides = services.length

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "+=250%", // 200% scroll
        scrub: true,
        pin: true,
        pinSpacing: true,
        onUpdate: self => {
          const progress = self.progress
          const index = Math.floor(progress * numSlides)

          if (index !== currentIndexRef.current) {
            currentIndexRef.current = index
            swiper.slideTo(index)
          }
        },
      })
    },
    { dependencies: [swiper, services, isSm] },
  )

  useEffect(() => {
    if (cardRef.current) {
      const cardWidth = (cardRef.current.offsetWidth - 48 - 48) / 3
      setMaxWidth(cardWidth)
    }
  }, [])

  return (
    <section ref={isSm ? null : sectionRef}>
      <S.Wrapper id="banner">
        <Container ref={cardRef}>
          <Reveal
            keyframes={FadeInBottom}
            duration={400}
            triggerOnce
            delay={25}
            fraction={1}
          >
            <S.Header>
              {title && <S.Title variant="h2">{title}</S.Title>}
              {button && (
                <S.Button
                  width={maxWidth}
                  className="light desktop"
                  href={button.url}
                >
                  {button.title}
                </S.Button>
              )}
            </S.Header>
          </Reveal>
          <S.ServicesWrapper>
            <Swiper
              spaceBetween={24}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                600: {
                  slidesPerView: 2.25,
                },
                900: {
                  slidesPerView: 3,
                },
              }}
              onSwiper={setSwiper}
            >
              {services &&
                services.map(({ title, text, image }, index) => (
                  <SwiperSlide key={`ServicesSliderBanner-${index}`}>
                    <Reveal
                      triggerOnce
                      delay={10}
                      fraction={0.5}
                      duration={400 + index * 75}
                      keyframes={FadeInBottomSlides}
                    >
                      <S.ServiceCard>
                        {text && <S.Text>{parse(text)}</S.Text>}
                        {image && (
                          <S.ServiceImage
                            arPaddingPercentage={100}
                            img={image}
                          />
                        )}
                      </S.ServiceCard>
                    </Reveal>
                  </SwiperSlide>
                ))}
            </Swiper>
          </S.ServicesWrapper>
          {button && (
            <S.Button className="light mobile" href={button.url}>
              {button.title}
            </S.Button>
          )}
        </Container>
      </S.Wrapper>
    </section>
  )
}

export default ServicesSliderBanner
