import React, { useState, useEffect, useRef } from "react"
import * as S from "./slider-hero.styles"
import FadeInOnScroll from "../../components/fade-in-on-scroll/fade-in-on-scroll.component"
import { getMediaUrl } from "../../utils/media-url"

const SliderHero = ({ slides, navItems }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isSticky, setIsSticky] = useState(false)

  const navbarRef = useRef(null)
  const wrapperRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!wrapperRef.current || !navbarRef.current) return

      const triggerPoint =
        wrapperRef.current.offsetTop +
        wrapperRef.current.offsetHeight -
        navbarRef.current.offsetHeight

      setIsSticky(window.scrollY >= triggerPoint)
    }

    handleScroll()

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  if (!slides || slides.length === 0) return null

  const totalSlides = slides.length

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const currentSlideData = slides[currentSlide]

  const bgImageUrl = getMediaUrl(currentSlideData?.image)
  const overlayImageUrl = getMediaUrl(currentSlideData?.overlayImage)

  if (!bgImageUrl) return null

  const scrollToSection = (targetId) => {
    const target = document.getElementById(targetId)

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  const defaultNavItems = [
    {
      label: "Packaging & Product Imagery",
      targetId: "packaging",
    },
    {
      label: "Campaign & Editorial Work",
      targetId: "campaign",
    },
    {
      label: "Post-Production, Retouching & AI",
      targetId: "post-production",
    },
    {
      label: "Full Production Management",
      targetId: "production",
    },
  ]

  const navList = navItems?.length ? navItems : defaultNavItems

  return (
    <FadeInOnScroll showAnimation>
      <S.Wrapper ref={wrapperRef}>
        {/* Background */}
        <S.BackgroundImageWrapper>
          <S.BackgroundImage
            img={currentSlideData.image}
            alt={currentSlideData.heading || "Slide"}
          />
        </S.BackgroundImageWrapper>

        {/* Hero Content */}
        <S.ContentWrapper>
          <S.Content>
            <S.TextContent>
              {currentSlideData.heading && (
                <S.Heading>
                  {currentSlideData.heading}
                </S.Heading>
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

        {/* Bottom Navigation */}
        <S.Navbar
          ref={navbarRef}
          isSticky={isSticky}
        >
          <S.NavbarInner>
            {navList.map((item, index) => (
              <S.NavItem
                key={index}
                onClick={() => scrollToSection(item.targetId)}
              >
                {item.label}
              </S.NavItem>
            ))}
          </S.NavbarInner>
        </S.Navbar>
      </S.Wrapper>
    </FadeInOnScroll>
  )
}

export default SliderHero