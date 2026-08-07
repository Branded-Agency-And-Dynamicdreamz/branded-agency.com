import React from "react"
import * as S from "./custom-hero.styles"
import { Stack } from "@mui/material"
import parse from "html-react-parser"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { Slide } from "react-awesome-reveal"
import { scroller } from "react-scroll"

const CustomHero = ({ title, text, maxWidth, image }) => {
  const handleMore = () => {
    scroller.scrollTo("values", {
      smooth: true,
      spy: true,
      offset: -50,
    })
  }
  return (
    <S.Wrapper id="next" className={image && "fullHeight"}>
      <S.CustomContainer maxWidth={maxWidth ? maxWidth[0] : "lg"}>
        <Stack spacing={{ md: 2 }} alignItems="center">
          {title && (
            <S.TextWrapper>
              <Slide
                triggerOnce
                delay={150}
                fraction={0.8}
                direction="up"
                duration={750}
              >
                <S.Title>{title}</S.Title>
              </Slide>
            </S.TextWrapper>
          )}
          {text && <S.Text>{parse(text)}</S.Text>}
        </Stack>
      </S.CustomContainer>
      <S.Image img={image} role="presentation" />
      {image && (
        <S.NextSection onClick={handleMore}>
          <ExpandMoreIcon />
        </S.NextSection>
      )}
    </S.Wrapper>
  )
}

export default CustomHero
