import React, { useEffect, useRef } from "react"
import * as S from "./branded-awards.styles"
import Container from "@mui/material/Container"
import { Stack } from "@mui/material"
import { useCountUp } from "react-countup"

const BrandedAwards = ({ title, description, number, awardsText }) => {
  const countUpRef = useRef(null)
  const { start, reset } = useCountUp({
    ref: countUpRef,
    start: 0,
    end: +number,
    delay: 1000,
    duration: 4,
    enableScrollSpy: true,
    useEasing: false,
  })

  useEffect(() => {
    start()
    return () => {
      reset()
    }
  }, [])

  return (
    <S.Wrapper>
      <Container>
        <Stack spacing={2.5} alignItems="center">
          <S.Title>{title}</S.Title>
          <S.Description>{description}</S.Description>
        </Stack>
        <S.Separator />
        <Stack spacing={{ md: 4, sm: 2, xs: 1 }} alignItems="center">
          <S.Number ref={countUpRef}>{number}</S.Number>
          <S.AwardsText>{awardsText}</S.AwardsText>
        </Stack>
      </Container>
    </S.Wrapper>
  )
}

export default BrandedAwards
