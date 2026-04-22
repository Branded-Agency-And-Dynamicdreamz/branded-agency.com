import React from "react"
import * as S from "./second-hero-image.styles"
import Container from "@mui/material/Container"
import { Grid, useTheme, useMediaQuery } from "@mui/material"
import parse from "html-react-parser"
import { Slide } from "react-awesome-reveal"

const SecondHeroImage = ({ img, title, button, desktopVideo, mobileVideo }) => {
  const theme = useTheme()
  const isMd = useMediaQuery(theme.breakpoints.up("md"))

  if (!img) return null
  return (
    <S.Wrapper>
      <S.VideoBg className="desktop" autoPlay muted playsInline loop>
        <source src={desktopVideo} type="video/mp4" />
      </S.VideoBg>
      <S.VideoBg className="mobile" autoPlay muted playsInline loop>
        <source src={mobileVideo} type="video/mp4" />
      </S.VideoBg>

      <Container maxWidth="xl">
        {/*<S.CustomGrid*/}
        {/*  container*/}
        {/*  spacing={{ sm: 5, xs: 2 }}*/}
        {/*  alignItems={"center"}*/}
        {/*>*/}
        {/*<Grid className="img" item sm={6} xs={12}>*/}
        {/*  <S.Image img={img} />*/}
        {/*  <S.TextWrapper>*/}
        {/*    <S.Button*/}
        {/*      className="mobile"*/}
        {/*      to="form"*/}
        {/*      spy={true}*/}
        {/*      smooth={true}*/}
        {/*      offset={-50}*/}
        {/*    >*/}
        {/*      {button.title}*/}
        {/*    </S.Button>*/}
        {/*  </S.TextWrapper>*/}
        {/*</Grid>*/}
        {/*<Grid className="text" item sm={6} xs={12}>*/}
        <S.TextWrapper>
          <S.TextWrapperAnimation>
            <Slide
              triggerOnce
              delay={150}
              fraction={0.8}
              direction="up"
              duration={750}
            >
              {title && <S.Title>{parse(title)}</S.Title>}
            </Slide>
          </S.TextWrapperAnimation>
          <S.Button
            className="desktop"
            to="form"
            spy={true}
            smooth={true}
            offset={-50}
          >
            {button.title}
          </S.Button>
        </S.TextWrapper>
        {/*</Grid>*/}
        {/*</S.CustomGrid>*/}
      </Container>
    </S.Wrapper>
  )
}

export default SecondHeroImage
