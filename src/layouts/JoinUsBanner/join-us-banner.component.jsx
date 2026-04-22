import React from "react"
import * as S from "./join-us-banner.styles"
import { Container } from "@mui/material"
import parse from "html-react-parser"

const JoinUsBanner = ({ title, description, buttonLink, bgImage }) => {
  return (
    <S.Wrapper>
      <S.InnerWrapper>
        {bgImage && (
          <S.BgImageWrapper>
            <S.BgImage img={bgImage} alt="Background" />
            {/* <S.GradientOverlay /> */}
          </S.BgImageWrapper>
        )}
        <Container>
          <S.ContentWrapper>
            <S.LeftContent>
              {title && <S.Title>{title}</S.Title>}
              {description && (
                <S.Description>{parse(description)}</S.Description>
              )}
              {buttonLink?.url && (
                <S.Button href={buttonLink.url}>{buttonLink.title}</S.Button>
              )}
            </S.LeftContent>
          </S.ContentWrapper>
        </Container>
      </S.InnerWrapper>
    </S.Wrapper>
  )
}

export default JoinUsBanner
