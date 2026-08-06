import React, { useState, useEffect, useRef } from "react"
import * as S from "./slider-hero.styles"
import { getMediaUrl } from "../../utils/media-url"

const SliderHero = ({ slides, navItems }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isSticky, setIsSticky] = useState(false)

  const navbarRef = useRef(null)
  const wrapperRef = useRef(null)

  // ✅ Sticky Navbar
  useEffect(() => {
const handleScroll = () => {
  if (!wrapperRef.current || !navbarRef.current) return

  // Disable sticky on tablets/mobile
  if (window.innerWidth <= 768) {
    setIsSticky(false)
    return
  }

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

  // ✅ Auto Slider (Restored)
  useEffect(() => {
    if (!slides || slides.length <= 1) return

    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [slides])

  if (!slides || slides.length === 0) return null

  const totalSlides = slides.length

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const currentSlideData = slides[currentSlide]

  const bgImageUrl = getMediaUrl(currentSlideData?.image)
  const overlayImageUrl = getMediaUrl(currentSlideData?.overlayImage)

  if (!bgImageUrl) return null

  // ✅ Scroll to section with sticky navbar offset
  const scrollToSection = (targetId) => {
    if (!targetId) return

    const target = document.getElementById(targetId)

    if (target) {
      const navbarHeight = navbarRef.current?.offsetHeight || 88

      const targetPosition =
        target.getBoundingClientRect().top +
        window.pageYOffset -
        navbarHeight -
        20

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
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
  <S.Wrapper ref={wrapperRef} id="slider-hero">
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

          {/* Desktop Dots */}
          <S.DesktopDots>
            {slides.map((_, index) => (
              <S.Dot
                key={index}
                active={index === currentSlide}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </S.DesktopDots>
        </S.TextContent>

        {overlayImageUrl && (
          <>
            <S.OverlayImageBox>
              <S.OverlayImage
                img={currentSlideData.overlayImage}
                alt={currentSlideData.heading || "Overlay"}
              />
            </S.OverlayImageBox>

            {/* Mobile Dots */}
            <S.MobileDots>
              {slides.map((_, index) => (
                <S.Dot
                  key={index}
                  active={index === currentSlide}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </S.MobileDots>
          </>
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
)
}

export default SliderHero