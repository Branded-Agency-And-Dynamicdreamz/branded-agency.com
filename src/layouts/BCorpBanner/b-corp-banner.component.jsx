import React from "react"
import * as S from "./b-corp-banner.styles"
import { Container, Grid } from "@mui/material"
import parse from "html-react-parser"

const BCorpBanner = ({ bgImage, logo, title, description }) => {
  return (
    <S.Wrapper>
      {bgImage && <S.BgImage img={bgImage} alt="Background" />}
      <Container>
        <S.ContentWrapper>
          <Grid container spacing={{ md: 6, xs: 2 }} alignItems="center">
            <Grid item xs={12} md={4.5}>
              <S.LogoWrapper>
                {logo && <S.Logo img={logo} alt="Logo" />}
              </S.LogoWrapper>
            </Grid>
            <Grid item xs={12} md={7.5}>
              <S.Content>
                <S.TitleWrapper>
                  {title && <S.Title variant="h2">{title}</S.Title>}
                  {logo && <S.MobileLogo img={logo} alt="Logo" />}
                </S.TitleWrapper>
                {description && (
                  <S.Description>{parse(description)}</S.Description>
                )}
              </S.Content>
            </Grid>
          </Grid>
        </S.ContentWrapper>
      </Container>
    </S.Wrapper>
  )
}

export default BCorpBanner
