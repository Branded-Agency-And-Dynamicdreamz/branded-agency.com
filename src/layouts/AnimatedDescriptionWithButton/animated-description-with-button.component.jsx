import React from "react"
import * as S from "./animated-description-with-button.styles"
import parse, { domToReact } from "html-react-parser"
import Container from "@mui/material/Container"
import { getMediaUrl } from "../../utils/media-url"

const AnimatedDescriptionWithButton = ({
  content,
  title,
  targetId,
  buttonImage,
}) => {
  const transform = node => {
    if (node.name === "p") {
      return <p>{domToReact(node.children)}</p>
    }

    if (node.name === "h4") {
      return <h4>{domToReact(node.children)}</h4>
    }
  }

  const imageUrl = getMediaUrl(buttonImage)

  //  Smooth scroll to target section (SliderHero)
  const scrollToSection = () => {
    if (!targetId) return

    //  Try to find element by ID
    let target = document.getElementById(targetId)

    //  If not found, try to find SliderHero section
    if (!target) {
      target =
        document.querySelector('[class*="SliderHero"]') ||
        document.querySelector('section[class*="slider"]')
    }

    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  // Agar image nahi hai toh button mat dikhao
  if (!imageUrl || !targetId) {
    return (
      <S.Wrapper>
        <Container>
          <S.TextWrapper>
            {title && <h4>{title}</h4>}
            {content && parse(content, { replace: transform })}
          </S.TextWrapper>
        </Container>
      </S.Wrapper>
    )
  }

  return (
    <S.Wrapper>
      <Container>
        <S.TextWrapper>
          {title && <h4>{title}</h4>}
          {content && parse(content, { replace: transform })}
        </S.TextWrapper>

        {/* Clickable Image Button */}
        <S.ButtonWrapper>
          <S.NavButton onClick={scrollToSection}>
            <S.ButtonImage
              src={imageUrl}
              alt="Scroll to SliderHero"
            />
          </S.NavButton>
        </S.ButtonWrapper>
      </Container>
    </S.Wrapper>
  )
}

export default AnimatedDescriptionWithButton