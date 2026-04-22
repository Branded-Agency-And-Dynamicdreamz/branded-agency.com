import React from "react"
import * as S from "./banner-text.styles"
import Container from "@mui/material/Container"
import parse from "html-react-parser"
import { Slide } from "react-awesome-reveal"
import { Link } from "react-scroll"

const BannerText = ({ title, description, button, withAnimation }) => {
  return (
    <S.Wrapper>
      <Container>
        {title && <S.Title>{parse(title)}</S.Title>}

        {description && (
          <>
            {withAnimation ? (
              <S.TextWrapper>
                <Slide
                  triggerOnce
                  delay={150}
                  fraction={1}
                  direction="up"
                  duration={750}
                >
                  <S.Description>{parse(description)}</S.Description>
                </Slide>
              </S.TextWrapper>
            ) : (
              <S.Description>{parse(description)}</S.Description>
            )}
          </>
        )}
        {button && (
          <S.Button to="jobs" spy={true} smooth={true}>
            {button.title}
          </S.Button>
        )}
      </Container>
    </S.Wrapper>
  )
}

export default BannerText
