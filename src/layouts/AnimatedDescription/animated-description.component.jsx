import React from "react"
import * as S from "./animated-description.styles"
import parse, { domToReact } from "html-react-parser"
import Container from "@mui/material/Container"
import CustomAnimatedText from "../../components/custom-animated-text/custom-animated-text.component"

const AnimatedDescription = ({ content, title }) => {
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
      <Container>
        <S.TextWrapper>
          {title && (
            <CustomAnimatedText threshold={1} content={title} tag="h4" />
          )}
          {content && parse(content, { replace: transform })}
        </S.TextWrapper>
      </Container>
    </S.Wrapper>
  )
}

export default AnimatedDescription
