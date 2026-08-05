import React, { useState } from "react"
import * as S from "./slider-hero.styles"
import FadeInOnScroll from "../../components/fade-in-on-scroll/fade-in-on-scroll.component"
import { getMediaUrl } from "../../utils/media-url"

const SliderHero = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  if (!slides || slides.length === 0) return null

  const totalSlides = slides.length

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const currentSlideData = slides[currentSlide]

  const bgImageUrl = getMediaUrl(currentSlideData?.image)
  const overlayImageUrl = getMediaUrl(currentSlideData?.overlayImage)

  if (!bgImageUrl) return null

  return (
    <FadeInOnScroll showAnimation>
      <S.Wrapper>
        {/* Background Image */}
        <S.BackgroundImageWrapper>
          <S.BackgroundImage
            img={currentSlideData.image}
            alt={currentSlideData.heading || "Slide"}
          />
        </S.BackgroundImageWrapper>

        {/* Content */}
        <S.ContentWrapper>
          <S.Content>
            {/* Left Content */}
            <S.TextContent>
              {currentSlideData.heading && (
                <S.Heading>{currentSlideData.heading}</S.Heading>
              )}

              {currentSlideData.description && (
                <S.Description
                  dangerouslySetInnerHTML={{
                    __html: currentSlideData.description,
                  }}
                />
              )}

              <S.DotsWrapper>
                {slides.map((_, index) => (
                  <S.Dot
                    key={index}
                    active={index === currentSlide}
                    onClick={() => goToSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </S.DotsWrapper>
            </S.TextContent>

            {/* Right Image */}
            {overlayImageUrl && (
              <S.OverlayImageBox>
                <S.OverlayImage
                  img={currentSlideData.overlayImage}
                  alt={currentSlideData.heading || "Overlay"}
                />
              </S.OverlayImageBox>
            )}
          </S.Content>
        </S.ContentWrapper>
      </S.Wrapper>
    </FadeInOnScroll>
  )
}

export default SliderHero