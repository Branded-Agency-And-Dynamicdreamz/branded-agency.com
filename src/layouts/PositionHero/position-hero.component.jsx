import React from "react"
import * as S from "./position-hero.styles"
import Container from "@mui/material/Container"

const PositionHero = ({ location, titleJob }) => {
  return (
    <S.HeroWrapper>
      <Container>
        <S.LocationWrapper>
          <S.Location>{location}</S.Location>
        </S.LocationWrapper>
        <S.Title>{titleJob}</S.Title>
        <S.ButtonsWrapper>
          <S.Button
            to="jobForm"
            spy={true}
            smooth={true}
            className="light small"
          >
            Apply Now
          </S.Button>
        </S.ButtonsWrapper>
      </Container>
    </S.HeroWrapper>
  )
}

export default PositionHero
