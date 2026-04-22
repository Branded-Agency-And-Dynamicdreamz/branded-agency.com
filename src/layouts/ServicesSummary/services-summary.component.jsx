import React from "react"
import * as S from "./services-summary.styles.jsx"
import Container from "@mui/material/Container"
import { Grid } from "@mui/material"
import { Reveal } from "react-awesome-reveal"
import { keyframes } from "@emotion/css"

const FadeInTopLeft = keyframes`
  from {
    opacity: 0;
    transform: translate3d(-500px, -300px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`

const FadeRotate = keyframes`
  from {
    opacity: 0;
    scale: 0.5;
    transform: rotate(-180deg); 
    transform-origin: left bottom; 
  }

  to {
    scale: 1;
    opacity: 1;
    transform: rotate(0);
  }
`

const FadeInBottom = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 300px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`

const getAnimation = animation => {
  switch (animation) {
    case "topLeft":
      return FadeInTopLeft
    case "rotate":
      return FadeRotate
    case "bottom":
      return FadeInBottom
  }
}

const ServicesSummary = ({ services }) => {
  if (!services) return null

  return (
    <S.Wrapper id="values">
      <Container maxWidth="xl">
        {services?.map(
          ({ image, title, text, button, imgAnimation }, index) => (
            <S.ServicesWrapper key={`${index}-${title}`}>
              <Grid
                container
                spacing={{ md: 4, xs: 0 }}
                alignItems="center"
                flexDirection={index % 2 !== 0 ? "row-reverse" : ""}
              >
                <Grid item md={6.5} xs={12}>
                  <Reveal
                    triggerOnce
                    delay={50}
                    fraction={1}
                    duration={750}
                    keyframes={getAnimation(imgAnimation)}
                  >
                    <S.Image img={image} />
                  </Reveal>
                </Grid>
                <Grid item md={5.5} xs={12}>
                  <S.ContentWrapper>
                    <S.Title>{title}</S.Title>
                    <S.Text>{text}</S.Text>
                    <S.Button className=" light" href={button.url}>
                      {button.title}
                    </S.Button>
                  </S.ContentWrapper>
                </Grid>
              </Grid>
            </S.ServicesWrapper>
          ),
        )}
      </Container>
    </S.Wrapper>
  )
}

export default ServicesSummary
