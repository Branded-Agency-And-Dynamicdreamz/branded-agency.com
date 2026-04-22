import React from "react"
import * as S from "./case-studies-hero.styles"
import { Container, Grid } from "@mui/material"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation } from "swiper/modules"
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded"
import CustomImage from "../../components/custom-image/custom-image.component"
import { graphql, useStaticQuery } from "gatsby"
import "swiper/css"
import "swiper/css/navigation"
import { keyframes } from "@emotion/css"
import { Reveal } from "react-awesome-reveal"
import { textEllipsis } from "../../utils/utils"

const FadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`
const CaseStudiesHero = ({ testimonials }) => {
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

  const caseStudies = staticQuery.allWpCaseStudy.nodes
  // console.log("caseStudies :>> ", caseStudies)
  return (
    <S.Section>
      {caseStudies.length > 0 && (
        <S.LabelWrapper>
          <Reveal
            cascade={1}
            triggerOnce
            delay={10000}
            fraction={0.8}
            duration={1000}
            keyframes={FadeOut}
          >
            <S.Label>Click images to view case studies</S.Label>
          </Reveal>
        </S.LabelWrapper>
      )}
      {caseStudies && (
        <Grid container>
          {caseStudies?.map(
            ({ slug, featuredImage, title, caseStudyBuilder }, index) => (
              <Grid item key={`${index}-caseStudies`} xs={12} sm={6}>
                <S.CaseStudyLink url={`/case-study/${slug}`}>
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
            ),
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
