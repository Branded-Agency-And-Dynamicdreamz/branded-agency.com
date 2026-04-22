import React from "react"
import * as S from "./title-banner.styles"
import Container from "@mui/material/Container"
import { Stack } from "@mui/material"

const TitleBanner = ({ title, text }) => {
  return (
    <S.Wrapper>
      <Container>
        <Stack spacing={2} alignItems="center">
          <S.Title>{title}</S.Title>
          <S.Text>{text}</S.Text>
        </Stack>
      </Container>
    </S.Wrapper>
  )
}

export default TitleBanner