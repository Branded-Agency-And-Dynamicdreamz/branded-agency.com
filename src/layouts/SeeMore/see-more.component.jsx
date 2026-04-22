import React from "react"
import * as S from "./see-more.styles"
import Container from "@mui/material/Container"
import { Stack } from "@mui/material"

const SeeMore = ({ title, button }) => {
  return (
    <S.Wrapper>
      <Container>
        <Stack spacing={2} alignItems="center" justifyContent="center">
          <S.Title>{title}</S.Title>
          <S.Button className="light" href={button.url}>
            {button.title}
          </S.Button>
        </Stack>
      </Container>
    </S.Wrapper>
  )
}

export default SeeMore
