import React from "react"
import * as S from "./case-study-hero.styles"
import VideoComponent from "../VideoComponent/video-component.component"
import parse from "html-react-parser"
import FadeInOnScroll from "../../components/fade-in-on-scroll/fade-in-on-scroll.component"

const CaseStudyHero = ({
  heroFile,
  title,
  subtitle,
  description,
  children,
  className,
  heroVimeoLink,
  showAnimation,
  heroVideoControls,
  heroVideoThumbnail,
}) => {
  return (
    <>
      {heroFile?.gatsbyImage ? (
        <S.HeroImage img={heroFile} role="presentation" />
      ) : (
        (heroFile || heroVimeoLink) && (
          <VideoComponent
            vimeoLink={heroVimeoLink}
            video={heroFile}
            autoplay
            controls={heroVideoControls}
            thumbnail={heroVideoThumbnail}
          />
        )
      )}
      <S.Section className={className}>
        <S.Wrapper>
          <S.HeaderWrapper className={className}>
            <FadeInOnScroll showAnimation={showAnimation}>
              <S.Title className="title" variant="h1">
                {title}
              </S.Title>
            </FadeInOnScroll>
            <FadeInOnScroll showAnimation={showAnimation}>
              <S.Subtitle className="subtitle" variant="h2">
                {subtitle}
              </S.Subtitle>
            </FadeInOnScroll>
            <FadeInOnScroll showAnimation={showAnimation}>
              {description && (
                <S.Description className="description">
                  {parse(description)}
                </S.Description>
              )}
            </FadeInOnScroll>
          </S.HeaderWrapper>
          <S.ContentWrapper className={className}>{children}</S.ContentWrapper>
        </S.Wrapper>
      </S.Section>
    </>
  )
}

export default CaseStudyHero
