import React from "react"
import * as S from "./recent-projects.styles"
import Container from "@mui/material/Container"
import { Swiper, SwiperSlide } from "swiper/react"
import CustomLink from "../../components/custom-link/custom-link.component"
import { capitalizeWords } from "../../utils/utils"

const RecentProjects = ({ title, caseStudies }) => {
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
              <CustomLink url={`/case-study/${caseStudy.slug}`}>
                <S.CardArticle key={`case-study-${index}`}>
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
              </CustomLink>
            </SwiperSlide>
          ))}
        </Swiper>
      </S.SwiperWrapper>
    </S.Wrapper>
  )
}
export default RecentProjects
