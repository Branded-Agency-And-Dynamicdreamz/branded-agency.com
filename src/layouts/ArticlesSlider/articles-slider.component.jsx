import React, { useRef, useCallback } from "react"
import * as S from "./articles-slider.styles"
import Container from "@mui/material/Container"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import { graphql, useStaticQuery } from "gatsby"
import { useMediaQuery, useTheme } from "@mui/material"
import { capitalizeWords } from "../../utils/utils"
import ArrowLeft from "../../assets/arrow-left.svg"
import ArrowRight from "../../assets/arrow-right.svg"

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

  const handleReduceArticles = articles => {
    return articles?.map(({ article }, index) => {
      return article
    })
  }

  const caseStudies = isIndividual
    ? handleReduceArticles(articles)
    : staticQuery.allWpCaseStudy.nodes?.filter(
      caseStudy =>
        caseStudy?.slug !== actualSlug &&
        !excludedCaseStudies.includes(caseStudy?.slug),
    )

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
            {caseStudies?.filter(item => item)?.map(
              (
                { featuredImage, slug, title: caseTitle, caseStudyBuilder },
                index,
              ) => (
                <SwiperSlide
                  key={`${index}-case-studies-slider${isIndividual ? "individual" : ""
                    }`}
                >
                  <S.Link url={`/case-study/${slug}`}>
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
                  </S.Link>
                </SwiperSlide>
              ),
            )}
            {caseStudies?.filter(item => item)?.map(
              (
                { featuredImage, slug, title: caseTitle, caseStudyBuilder },
                index,
              ) => (
                <SwiperSlide
                  key={`${index}-case-studies-slider-part-2-${isIndividual ? "individual" : ""
                    }`}
                >
                  <S.Link url={`/case-study/${slug}`}>
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
                  </S.Link>
                </SwiperSlide>
              ),
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
