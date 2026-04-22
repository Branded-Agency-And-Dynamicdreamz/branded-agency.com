import React from "react"
import * as S from "./sub-content.styles"
import Container from "@mui/material/Container"
import parse from "html-react-parser"

const SubContent = ({ content, isTransparent }) => {
  if (!content) return null

  return (
    <S.Wrapper id="values" className={isTransparent && "transparent"}>
      <Container>
        {content && <S.Content>{parse(content)}</S.Content>}
      </Container>
    </S.Wrapper>
  )
}

export default SubContent
