import React from "react"
import * as S from "./what-does-mean.styles"
import Container from "@mui/material/Container"
import parse from "html-react-parser"
import NextSectionButton from "../../components/next-section-button/next-section-button.component"

const WhatDoesMean = ({ title, description, image }) => {
  return (
    <S.Wrapper img={image}>
      <Container>
        <S.Card>
          <S.Title>{title}</S.Title>
          <S.Description>{parse(description)}</S.Description>
        </S.Card>
        <S.NextWrapper>
          <NextSectionButton nextSectionId="final" className="secondary" />
        </S.NextWrapper>
      </Container>
    </S.Wrapper>
  )
}

export default WhatDoesMean
