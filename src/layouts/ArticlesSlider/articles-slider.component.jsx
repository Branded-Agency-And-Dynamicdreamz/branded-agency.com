import React, { useRef, useCallback, useState, useEffect } from "react"
import * as S from "./articles-slider.styles"
import Container from "@mui/material/Container"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import { graphql, useStaticQuery } from "gatsby"
import { useMediaQuery, useTheme } from "@mui/material"
import { capitalizeWords } from "../../utils/utils"
import ArrowLeft from "../../assets/arrow-left.svg"
import ArrowRight from "../../assets/arrow-right.svg"
import { navigate } from "gatsby-link"
import { getLocalizedPath } from "../../components/LocalizedLink"

const ArticlesSlider = ({
  title,
  actualSlug,
  isIndividual = false,
  articles,
  isPage,
  isWhite,
}) => {
  const excludedCaseStudies = [
    "neft",
    "tempo",
    "high-liner",
    "spitfire",
    "prismologie",
    "castrol-on",
    "waterford",
    "thryve",
    "aberlour",
    "hydra",
    "universal-pictures",
  ]

  const staticQuery = useStaticQuery(graphql`
    query {
      allWpCaseStudy(sort: { date: DESC }) {
        nodes {
          slug
          title
          uri
          language {
            code
          }
          translations {
            uri
            language {
              code
            }
          }
          featuredImage {
            node {
              title
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
          caseStudyBuilder {
            subtitle
            titleHover
            subtitleHover
          }
        }
      }
    }
  `)

  const [currentLanguage, setCurrentLanguage] = useState("EN")
  const [filteredCaseStudies, setFilteredCaseStudies] = useState([])

  const getCurrentLanguage = () => {
    if (typeof window === "undefined") return "EN"
    const pathname = window.location.pathname
    if (pathname === "/es/" || pathname.startsWith("/es/")) return "ES"
    return "EN"
  }

  useEffect(() => {
    const language = getCurrentLanguage()
    setCurrentLanguage(language)
  }, [])

  const handleReduceArticles = articles => {
    return articles?.map(({ article }, index) => {
      return article
    })
  }

  let caseStudiesData = isIndividual
    ? handleReduceArticles(articles)
    : staticQuery.allWpCaseStudy.nodes?.filter(
      caseStudy =>
        caseStudy?.slug !== actualSlug &&
        !excludedCaseStudies.includes(caseStudy?.slug),
    )

  useEffect(() => {
    if (caseStudiesData && caseStudiesData.length > 0) {
      const filtered = caseStudiesData.filter(cs => {
        const caseLanguage = cs?.language?.code || "EN"

        if (currentLanguage === "EN") {
          return caseLanguage === "EN"
        } else {
          return caseLanguage === "ES"
        }
      })
      setFilteredCaseStudies(filtered)
    }
  }, [caseStudiesData, currentLanguage])

  const handleCaseStudyClick = (caseStudy) => {
    const { uri, slug, language, translations } = caseStudy
    const caseLanguage = language?.code || "EN"

    if (currentLanguage === "ES" && caseLanguage === "EN") {
      const spanishTranslation = translations?.find(
        t => t.language?.code === "ES"
      )

      if (spanishTranslation?.uri) {
        const localizedPath = getLocalizedPath(spanishTranslation.uri)
        navigate(localizedPath)
        return
      }
    }

    if (currentLanguage === "EN" && caseLanguage === "ES") {
      const englishTranslation = translations?.find(
        t => t.language?.code === "EN"
      )

      if (englishTranslation?.uri) {
        const localizedPath = getLocalizedPath(englishTranslation.uri)
        navigate(localizedPath)
        return
      }
    }

    const path = uri || `/case-study/${slug}/`
    const localizedPath = getLocalizedPath(path)
    navigate(localizedPath)
  }

  const swiperRef = useRef(null)
  const theme = useTheme()
  const isMd = useMediaQuery(theme.breakpoints.up("md"))

  const handleArrowClick = useCallback(direction => {
    const swiper = swiperRef.current
    if (!swiper) return
    swiper.autoplay.stop()
    swiper.params.speed = 300
    const currentIndex = swiper.activeIndex
    const targetIndex =
      direction === "prev" ? currentIndex - 2 : currentIndex + 1
    swiper.wrapperEl.style.setProperty(
      "transition-timing-function",
      "ease",
      "important",
    )
    swiper.slideTo(targetIndex, 300)
    setTimeout(() => {
      if (swiper) {
        swiper.params.speed = 5000
        swiper.wrapperEl.style.setProperty(
          "transition-timing-function",
          "linear",
          "important",
        )
        swiper.autoplay.start()
      }
    }, 400)
  }, [])

  if (!filteredCaseStudies || filteredCaseStudies.length === 0) {
    return null
  }

  return (
    <S.Wrapper
      className={`${isWhite ? "white" : ""} ${title ? "hasTitle" : ""}`}
    >
      <Container>
        <S.Header>
          {title && (
            <S.Title className={isWhite ? "isWhite" : ""} variant="h2">
              {title}
            </S.Title>
          )}
          <S.Arrows className={`desktop ${isWhite ? "isWhite" : ""}`}>
            <S.ArrowButton
              aria-label="Previous slide"
              onClick={() => handleArrowClick("prev")}
            >
              <ArrowLeft />
            </S.ArrowButton>
            <S.ArrowButton
              aria-label="Next slide"
              onClick={() => handleArrowClick("next")}
            >
              <ArrowRight />
            </S.ArrowButton>
          </S.Arrows>
        </S.Header>
        <S.SwiperWrapper>
          <Swiper
            dir="rtl"
            spaceBetween={20}
            loop={true}
            slidesPerView={3}
            centeredSlides={!isMd}
            initialSlide={1}
            breakpoints={{
              0: {
                slidesPerView: 1.25,
              },
              600: {
                slidesPerView: 2,
              },
              900: {
                slidesPerView: 3,
              },
            }}
            speed={5000}
            autoplay={{ delay: 0, disableOnInteraction: false }}
            onSwiper={swiper => {
              swiperRef.current = swiper
            }}
            modules={[Autoplay]}
          >
            {/* Only ONE mapping - removed the duplicate */}
            {filteredCaseStudies?.filter(item => item)?.map(
              ({ featuredImage, slug, title: caseTitle, caseStudyBuilder, uri, language, translations }, index) => {
                let displayUri = uri
                const caseLanguage = language?.code || "EN"

                if (currentLanguage === "ES" && caseLanguage === "EN" && translations?.length > 0) {
                  const spanishTranslation = translations.find(t => t.language?.code === "ES")
                  if (spanishTranslation?.uri) {
                    displayUri = spanishTranslation.uri
                  }
                }

                if (currentLanguage === "EN" && caseLanguage === "ES" && translations?.length > 0) {
                  const englishTranslation = translations.find(t => t.language?.code === "EN")
                  if (englishTranslation?.uri) {
                    displayUri = englishTranslation.uri
                  }
                }

                return (
                  <SwiperSlide
                    key={`${index}-case-studies-slider${isIndividual ? "individual" : ""
                      }`}
                  >
                    <div onClick={() => handleCaseStudyClick({ uri: displayUri, slug, language, translations })}>
                      <S.CardArticle>
                        <S.CardImage
                          img={featuredImage?.node}
                          alt={caseTitle || title}
                          arPaddingPercentage={130}
                        />
                        <S.Overlay className="overlay">
                          <S.TextContent>
                            {caseTitle && (
                              <S.CardTitle>
                                {capitalizeWords(caseTitle)}
                              </S.CardTitle>
                            )}
                            <S.CardDescription>
                              {caseStudyBuilder?.subtitle}
                            </S.CardDescription>
                          </S.TextContent>
                        </S.Overlay>
                      </S.CardArticle>
                    </div>
                  </SwiperSlide>
                )
              },
            )}
          </Swiper>
        </S.SwiperWrapper>
        <S.Arrows className={`mobile ${isWhite ? "isWhite" : ""}`}>
          <S.ArrowButton
            aria-label="Previous slide"
            onClick={() => handleArrowClick("prev")}
          >
            <ArrowLeft />
          </S.ArrowButton>
          <S.ArrowButton
            aria-label="Next slide"
            onClick={() => handleArrowClick("next")}
          >
            <ArrowRight />
          </S.ArrowButton>
        </S.Arrows>
      </Container>
    </S.Wrapper>
  )
}

export default ArticlesSlider