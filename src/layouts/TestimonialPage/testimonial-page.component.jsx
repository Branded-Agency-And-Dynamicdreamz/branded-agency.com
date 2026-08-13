import React from "react"
import * as S from "./testimonial-page.styles"
import FadeInOnScroll from "../../components/fade-in-on-scroll/fade-in-on-scroll.component"
import CustomAnimatedText from "../../components/custom-animated-text/custom-animated-text.component"
import parse, { domToReact } from "html-react-parser"

const TestimonialPage = ({ testimonial, author, jobTitle, showAnimation }) => {
  const transform = (node, index) => {
    if (node.name === "p" || node.name === "h4") {
      return (
        <CustomAnimatedText
          threshold={1}
          content={domToReact(node.children)}
          key={index}
          tag={node.name}
        />
      )
    }
  }

  return (
    <S.Wrapper>
      <S.TestimonialWrapper>
        <S.TextWrapper>
          {testimonial && parse(testimonial, { replace: transform })}
        </S.TextWrapper>

        <FadeInOnScroll showAnimation={showAnimation}>
          <S.Author>{author}</S.Author>
        </FadeInOnScroll>

        <FadeInOnScroll showAnimation={showAnimation}>
          <S.JobTitle>{jobTitle}</S.JobTitle>
        </FadeInOnScroll>
      </S.TestimonialWrapper>
    </S.Wrapper>
  )
}

export default TestimonialPage