import React, { useState } from "react"
import * as S from "./insight-articles-slider.styles"
import ArrowSVG from "../../assets/arrow.svg"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import ArticleCard from "../article-card/article-card.component"
import { Slide } from "react-awesome-reveal"
import { navigate } from "gatsby-link"
import { getLocalizedPath } from "../LocalizedLink"

const InsightArticlesSlider = ({ sliderArticles, title, type }) => {
  const [index, setIndex] = useState(0)

  const getCurrentLanguage = () => {
    if (typeof window === "undefined") return "EN"
    const pathname = window.location.pathname
    if (pathname === "/es/" || pathname.startsWith("/es/")) return "ES"
    return "EN"
  }

  const currentLanguage = getCurrentLanguage()

  const handleHeroClick = (article) => {
    const { uri, slug, language, translations } = article
    const articleLanguage = language?.code || "EN"
    
    let finalUri = null
    
    console.log("🔍 Hero Click Debug:", {
      currentLanguage,
      articleLanguage,
      slug,
      originalUri: uri,
      translations: translations?.map(t => ({ code: t.language?.code, uri: t.uri }))
    })
    
    // If current language matches article language, use the article's URI
    if (currentLanguage === articleLanguage) {
      finalUri = uri || `/${type}/${slug}/`
    }
    // If current language is ES but article is EN, try to find Spanish translation
    else if (currentLanguage === "ES" && articleLanguage === "EN") {
      const spanishTranslation = translations?.find(t => t.language?.code === "ES")
      if (spanishTranslation?.uri) {
        finalUri = spanishTranslation.uri
        console.log("✅ Found Spanish translation:", finalUri)
      } else {
        // No Spanish translation, fallback to English
        finalUri = `/insight/${slug}/`
        console.log("⚠️ No Spanish translation, falling back to English:", finalUri)
      }
    }
    // If current language is EN but article is ES, try to find English translation
    else if (currentLanguage === "EN" && articleLanguage === "ES") {
      const englishTranslation = translations?.find(t => t.language?.code === "EN")
      if (englishTranslation?.uri) {
        finalUri = englishTranslation.uri
        console.log("✅ Found English translation:", finalUri)
      } else {
        // No English translation, fallback to Spanish
        finalUri = `/es/insight/${slug}/`
        console.log("⚠️ No English translation, falling back to Spanish:", finalUri)
      }
    }
    // Fallback for any other case
    else {
      finalUri = uri || `/${type}/${slug}/`
    }
    
    const localizedPath = getLocalizedPath(finalUri)
    console.log("🚀 Final navigation path:", localizedPath)
    navigate(localizedPath)
  }

  // Show ALL slider articles - no filtering
  return (
    <S.SectionHero>
      <S.TextWrapper>
        <Slide
          triggerOnce
          delay={150}
          fraction={0.8}
          direction="up"
          duration={750}
        >
          <S.Title variant="h1">{title}</S.Title>
        </Slide>
      </S.TextWrapper>
      {sliderArticles && sliderArticles.length > 0 && (
        <>
          <S.ContentSwiper>
            <S.ArrowsWrapper>
              <S.Arrow className="prev">
                <ArrowSVG />
              </S.Arrow>
              <S.Arrow className="next">
                <ArrowSVG />
              </S.Arrow>
            </S.ArrowsWrapper>
            <Swiper
              modules={[Navigation]}
              navigation={{
                nextEl: ".next",
                prevEl: ".prev",
              }}
              slidesPerView={1}
              spaceBetween={100}
              centeredSlides={true}
              onActiveIndexChange={swiper => {
                setIndex(() => swiper.activeIndex)
              }}
            >
              {sliderArticles
                ?.filter(item => item?.article)
                ?.map(({ article }, index) => (
                  <SwiperSlide
                    key={`${index}-${article?.title}`}
                  >
                    {/* Wrap the entire hero slide content with click handler */}
                    <div onClick={() => handleHeroClick(article)} style={{ cursor: "pointer" }}>
                      <ArticleCard
                        {...article}
                        isSlider
                        type={type}
                      />
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          </S.ContentSwiper>
          <S.SliderIndicator>
            {sliderArticles
              ?.filter(item => item?.article)
              ?.map(({ article }, i) => (
                <S.Indicator
                  key={`${i}-${article.title}`}
                  className={index === i && "active"}
                />
              ))}
          </S.SliderIndicator>
        </>
      )}
      <S.BgCircle />
    </S.SectionHero>
  )
}

export default InsightArticlesSlider