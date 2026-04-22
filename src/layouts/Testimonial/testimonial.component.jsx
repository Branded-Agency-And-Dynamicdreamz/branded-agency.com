import React, { useEffect, useRef } from "react"
import * as S from "./testimonial.styles"
import Container from "@mui/material/Container"
import FadeInOnScroll from "../../components/fade-in-on-scroll/fade-in-on-scroll.component"
import { useInView } from "react-intersection-observer"
import SplitType from "split-type"
import gsap from "gsap"
import CustomAnimatedText from "../../components/custom-animated-text/custom-animated-text.component"
import Typography from "@mui/material/Typography"
import parse, { domToReact } from "html-react-parser"

const Testimonial = ({ testimonial, author, jobTitle, showAnimation }) => {
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
        {/*<FadeInOnScroll showAnimation={showAnimation}>*/}
        {/* <CustomAnimatedText
          duration={0.75}
          stagger={0.05}
          className="text testimonial"
          content={testimonial}
        /> */}
        <S.TextWrapper>
          {testimonial && parse(testimonial, { replace: transform })}
        </S.TextWrapper>
        {/*<AnimatedText content={testimonial} className="testimonial" />*/}
        {/*<S.Text className="testimonial">{testimonial}</S.Text>*/}
        {/*</FadeInOnScroll>*/}
        <FadeInOnScroll showAnimation={showAnimation}>
          <S.Author>{author}</S.Author>
        </FadeInOnScroll>
        <FadeInOnScroll showAnimation={showAnimation}>
          <Typography className="text">{jobTitle}</Typography>
        </FadeInOnScroll>
      </S.TestimonialWrapper>
    </S.Wrapper>
  )
}

export default Testimonial
