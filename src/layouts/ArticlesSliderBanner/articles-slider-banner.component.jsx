import React, { useEffect, useRef, useState } from "react"
import * as S from "./articles-slider-banner.styles"
import Container from "@mui/material/Container"
import { Swiper, SwiperSlide } from "swiper/react"
import { Reveal } from "react-awesome-reveal"
import { keyframes } from "@emotion/css"
import TextLetterAnimation from "../../components/text-letter-animation/text-letter-animation.component"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { isBrowser } from "../../utils/utils"
gsap.registerPlugin(ScrollTrigger)

const ArticlesSliderBanner = ({ items }) => {
  const [swiper, setSwiper] = useState(null)
  const [textSwiper, setTextSwiper] = useState(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [windowHeight, setWindowHeight] = useState(
    isBrowser ? window.innerHeight : 800,
  )
  const sectionRef = useRef(null)
  const currentIndexRef = useRef(0)

  useEffect(() => {
    if (!isBrowser) return

    const handleResize = () => {
      setWindowHeight(window.innerHeight)
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const revealFraction = windowHeight < 725 ? 0.5 : 1

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

  const handleNextSlide = index => {
    setActiveIndex(index)
    swiper.slideTo(index)
    textSwiper.slideTo(index)
  }

  useGSAP(
    () => {
      if (!swiper || !textSwiper || !items?.length || !isBrowser) return

      const numSlides = items.length

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 72px",
        end: "+=450%", // 200% scroll
        scrub: true,
        pin: true,
        pinSpacing: true,
        onUpdate: self => {
          const progress = self.progress
          const index = Math.floor(progress * numSlides)

          if (index !== currentIndexRef.current) {
            currentIndexRef.current = index
            swiper.slideTo(index)
            textSwiper.slideTo(index)
          }
        },
      })
    },
    { dependencies: [swiper, textSwiper, items] },
  )

  return (
    <S.Wrapper ref={sectionRef}>
      <Container>
        <Reveal
          triggerOnce
          delay={50}
          fraction={1}
          duration={800}
          keyframes={FadeInBottom}
        >
          <S.TextSwiperWrapper>
            <Swiper
              onSwiper={setTextSwiper}
              slidesPerView={1}
              speed={1000}
              onActiveIndexChange={swiper => {
                setActiveIndex(() => swiper.activeIndex)
                swiper.slideTo(swiper.activeIndex)
              }}
            >
              {items?.map(({ topText, bottomText }, index) => (
                <SwiperSlide key={`ArticlesSliderBanner-Text-${index}`}>
                  <S.TextWrapper
                  // className={activeIndex === index ? "active" : ""}
                  >
                    {topText && (
                      <TextLetterAnimation
                        duration={0.25}
                        stagger={0.01}
                        threshold={0}
                        content={topText}
                        // active={index + 1 === activeIndex}
                        // afterAnimation={() => {
                        //   textSwiper?.slideTo(activeIndex)
                        // }}
                        className="topText"
                      />
                    )}
                    {bottomText && (
                      <TextLetterAnimation
                        duration={0.25}
                        stagger={0.01}
                        threshold={0}
                        content={bottomText}
                        // active={index + 1 === activeIndex}
                        className="bottomText"
                      />
                    )}
                  </S.TextWrapper>
                </SwiperSlide>
              ))}
            </Swiper>
          </S.TextSwiperWrapper>
        </Reveal>
        <Swiper
          onSwiper={setSwiper}
          slidesPerView={3}
          spaceBetween={30}
          breakpoints={{
            0: {
              slidesPerView: 1,
              speed: 500,
            },
            600: {
              slidesPerView: 1.5,
            },
            750: {
              slidesPerView: 2.25,
            },
            900: {
              slidesPerView: 3,
            },
          }}
          onActiveIndexChange={swiper => {
            setActiveIndex(() => swiper.activeIndex)
            textSwiper.slideTo(swiper.activeIndex)
          }}
        >
          {items?.map(({ image, topText, bottomText }, index) => (
            <SwiperSlide key={`ArticlesSliderBanner-${index}`}>
              <Reveal
                triggerOnce
                delay={25}
                fraction={revealFraction}
                duration={400 + index * 75}
                keyframes={FadeInBottomSlides}
              >
                <S.ArticleCard
                  className={index === activeIndex ? "active" : ""}
                  onClick={() => {
                    handleNextSlide(index)
                  }}
                >
                  <S.Image img={image} arPaddingPercentage={100} />
                </S.ArticleCard>
              </Reveal>
            </SwiperSlide>
          ))}
        </Swiper>
        <Reveal
          triggerOnce
          delay={50}
          fraction={1}
          duration={400}
          keyframes={FadeInBottom}
        >
          <S.ProgressBar>
            {items?.map(({ _ }, index) => (
              <S.Dot
                key={`ArticlesSliderBanner-Dot-${index}`}
                className={index === activeIndex ? "active" : ""}
                onClick={() => {
                  handleNextSlide(index)
                }}
              />
            ))}
          </S.ProgressBar>
        </Reveal>
      </Container>
    </S.Wrapper>
  )
}

export default ArticlesSliderBanner
