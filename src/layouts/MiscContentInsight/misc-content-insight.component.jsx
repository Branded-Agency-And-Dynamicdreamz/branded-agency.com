import React from "react"
import * as S from "./misc-content-insight.styles"
import parse from "html-react-parser"
import FadeInOnScroll from "../../components/fade-in-on-scroll/fade-in-on-scroll.component"

const MiscContentInsight = ({
  content,
  buttonQuizText,
  buttonType,
  buttons,
  fullWidth,
  showAnimation,
}) => {
  return (
    <FadeInOnScroll showAnimation={showAnimation}>
      {content && (
        <S.Wrapper className={fullWidth ? "fullWidth" : ""}>
          {parse(content)}
        </S.Wrapper>
      )}
      {buttonType === "onlyForQuiz" && (
        <>
          {buttonQuizText && (
            <S.Button to="branded-quiz" spy={true} smooth={true} offset={-100}>
              {parse(buttonQuizText)}
            </S.Button>
          )}
        </>
      )}
      {buttonType === "externalLink" && buttons && (
        <S.LinksWrapper>
          {buttons?.map(({ button }, index) => (
            <S.ExternalLink
              key={`button-external-link-${index}`}
              url={button?.url}
              target={button?.target}
            >
              {button?.title}
            </S.ExternalLink>
          ))}
        </S.LinksWrapper>
      )}
    </FadeInOnScroll>
  )
}

export default MiscContentInsight
