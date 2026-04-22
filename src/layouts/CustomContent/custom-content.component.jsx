import React from "react"
import * as S from "./custom-content.styles"
import Container from "@mui/material/Container"
import parse from "html-react-parser"

const CustomContent = ({ title, content }) => {
  if (!content) return null

  return (
    <S.Wrapper>
      <S.TitleWrapper>
        <Container>{title && <S.Title>{title}</S.Title>}</Container>
      </S.TitleWrapper>
      <S.ContentWrapper>
        <Container>
          {content && <S.Content>{parse(content)}</S.Content>}
        </Container>
      </S.ContentWrapper>
    </S.Wrapper>
  )
}

export default CustomContent
