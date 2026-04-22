import React from "react"
import * as S from "./position-description.styles"
import parse from "html-react-parser"
import Container from "@mui/material/Container"

const PositionDescription = ({ description }) => {
  return (
    <S.Wrapper>
      <Container maxWidth="md">
        {description && (
          <S.DescriptionWrapper>{parse(description)}</S.DescriptionWrapper>
        )}
        <S.ButtonsWrapper>
          <S.Button to="jobForm" spy={true} smooth={true}>
            Apply Now
          </S.Button>
        </S.ButtonsWrapper>
      </Container>
    </S.Wrapper>
  )
}

export default PositionDescription
