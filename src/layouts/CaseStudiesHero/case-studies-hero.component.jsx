import React from "react"
import * as S from "./case-studies-hero.styles"
import { Container, Grid } from "@mui/material"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation } from "swiper/modules"
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded"
import CustomImage from "../../components/custom-image/custom-image.component"
import "swiper/css"
import "swiper/css/navigation"
import { keyframes } from "@emotion/css"
import { Reveal } from "react-awesome-reveal"
import { textEllipsis } from "../../utils/utils"
import { navigate } from "gatsby-link"
import { getLocalizedPath } from "../../components/LocalizedLink"
import { useTranslation } from "../../hooks/useTranslation"

const FadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`

const CaseStudiesHero = ({ testimonials, caseStudies = [] }) => {
  const { t } = useTranslation()
  
  const getCurrentLanguage = () => {
    if (typeof window === "undefined") return "EN"
    const pathname = window.location.pathname
    if (pathname === "/es/" || pathname.startsWith("/es/")) return "ES"
    return "EN"
  }

  const currentLanguage = getCurrentLanguage()

  const filteredCaseStudies = caseStudies.filter(cs => {
    const caseLanguage = cs?.language?.code || "EN"

    if (currentLanguage === "EN") {
      return caseLanguage === "EN"
    } else {
      return caseLanguage === "ES"
    }
  })

  const handleCaseStudyClick = (uri, slug, caseLanguage) => {

    const actualLanguage = caseLanguage || "EN"

    if (currentLanguage === "ES" && actualLanguage === "EN") {
      const caseStudy = caseStudies.find(cs => {
        const csLanguage = cs?.language?.code || "EN"
        return csLanguage === "EN" && cs.title === slug
      })

      const spanishTranslation = caseStudy?.translations?.find(
        t => t.language?.code === "ES"
      )

      if (spanishTranslation?.uri) {
        const localizedPath = getLocalizedPath(spanishTranslation.uri)
        navigate(localizedPath)
        return
      }
    }

    const path = uri || `/case-study/${slug}`
    const localizedPath = getLocalizedPath(path)
    navigate(localizedPath)
  }

  return (
    <S.Section>
      {filteredCaseStudies.length > 0 && (
        <S.LabelWrapper>
          <Reveal
            cascade={1}
            triggerOnce
            delay={10000}
            fraction={0.8}
            duration={1000}
            keyframes={FadeOut}
          >
            <S.Label>{t("Click images to view case studies")}</S.Label>
          </Reveal>
        </S.LabelWrapper>
      )}
      {filteredCaseStudies && filteredCaseStudies.length > 0 && (
        <Grid container>
          {filteredCaseStudies?.map(
            ({ slug, uri, featuredImage, title, caseStudyBuilder, language, translations }, index) => {

              let displayUri = uri
              const caseLanguage = language?.code || "EN"

              if (currentLanguage === "ES" && caseLanguage === "EN" && translations?.length > 0) {
                const spanishTranslation = translations.find(t => t.language?.code === "ES")
                if (spanishTranslation?.uri) {
                  displayUri = spanishTranslation.uri
                }
              }

              return (
                <Grid item key={`${index}-caseStudies`} xs={12} sm={6}>
                  <S.CaseStudyLink
                    url={
                      (
                        displayUri ||
                        uri ||
                        `/case-study/${slug}/`
                      ).replace(
                        /^\/casestudies\//,
                        "/case-study/",
                      )
                    }
                  >
                    <CustomImage
                      img={featuredImage?.node}
                      alt={title}
                      arPaddingPercentage={100}
                    />
                    <S.Overlay className="overlay">
                      <S.CaseStudyTitle>
                        {caseStudyBuilder?.titleHover || title}
                      </S.CaseStudyTitle>
                      {caseStudyBuilder?.subtitleHover ? (
                        <S.CaseStudySubtitle>
                          {caseStudyBuilder?.subtitleHover}
                        </S.CaseStudySubtitle>
                      ) : (
                        <>
                          {caseStudyBuilder?.subtitle && (
                            <S.CaseStudySubtitle>
                              {textEllipsis(caseStudyBuilder?.subtitle, 90, {
                                side: "end",
                              })}
                            </S.CaseStudySubtitle>
                          )}
                        </>
                      )}
                    </S.Overlay>
                  </S.CaseStudyLink>
                </Grid>
              )
            },
          )}
        </Grid>
      )}
      <Container>
        <S.SliderWrapper>
          <Swiper
            spaceBetween={30}
            loop={true}
            centeredSlides={true}
            slidesPerView={1}
            modules={[Navigation, Autoplay]}
            autoplay={{
              delay: 5000,
            }}
            navigation={{
              prevEl: ".prev-case-study",
              nextEl: ".next-case-study",
            }}
          >
            {testimonials?.map(({ title, author, comment }, index) => (
              <SwiperSlide key={`${index}-Testimonials}`}>
                <S.Slide spacing={4} alignItems="center">
                  {author && <S.Author>{author}</S.Author>}
                  {title && <S.Title>{title}</S.Title>}
                  {comment && <S.Comment>{comment}</S.Comment>}
                </S.Slide>
              </SwiperSlide>
            ))}
          </Swiper>
          <S.ButtonsWrapper>
            <S.ArrowBtn className="prev-case-study">
              <ArrowBackIosNewRoundedIcon />
            </S.ArrowBtn>
            <S.ArrowBtn className="next-case-study">
              <ArrowBackIosNewRoundedIcon />
            </S.ArrowBtn>
          </S.ButtonsWrapper>
        </S.SliderWrapper>
      </Container>
    </S.Section>
  )
}

export default CaseStudiesHero