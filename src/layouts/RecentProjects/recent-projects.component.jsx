import React, { useEffect, useState } from "react"
import * as S from "./recent-projects.styles"
import Container from "@mui/material/Container"
import { Swiper, SwiperSlide } from "swiper/react"
import { Link } from "gatsby"
import { capitalizeWords } from "../../utils/utils"

const RecentProjects = ({ title, caseStudies }) => {
  const [currentLanguage, setCurrentLanguage] = useState("EN")

  useEffect(() => {
    if (typeof window !== "undefined") {
      const pathname = window.location.pathname
      if (pathname === "/es/" || pathname.startsWith("/es/")) {
        setCurrentLanguage("ES")
      } else {
        setCurrentLanguage("EN")
      }
    }
  }, [])

  const getCaseStudyUrl = (caseStudy) => {
    const slug = caseStudy.slug
    
    if (currentLanguage === "ES") {
      return `/es/casestudies/${slug}/`
    }
    
    return `/case-study/${slug}/`
  }

  return (
    <S.Wrapper>
      <Container>
        <S.Title variant="h2">{title}</S.Title>
      </Container>
      <S.SwiperWrapper>
        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 1.1,
              spaceBetween: 20,
            },
            600: {
              slidesPerView: 2.25,
              spaceBetween: 24,
            },
            900: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
          }}
        >
          {caseStudies?.map(({ caseStudy, description }, index) => (
            <SwiperSlide key={`case-study-${index}`}>
              <Link to={getCaseStudyUrl(caseStudy)}>
                <S.CardArticle>
                  <S.CardImage
                    img={caseStudy?.featuredImage?.node}
                    arPaddingPercentage={130}
                  />
                  <S.Overlay className="overlay">
                    <S.TextContent>
                      {caseStudy?.title && (
                        <S.CardTitle>
                          {capitalizeWords(caseStudy.title)}
                        </S.CardTitle>
                      )}
                      <S.CardDescription>
                        {caseStudy?.caseStudyBuilder?.subtitle}
                      </S.CardDescription>
                    </S.TextContent>
                  </S.Overlay>
                </S.CardArticle>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </S.SwiperWrapper>
    </S.Wrapper>
  )
}

export default RecentProjects