import React from "react"
import * as S from "./thank-you.styles"
import Container from "@mui/material/Container"
import { IS_PRODUCTION } from "../../utils/constants"

const ThankYou = ({ title, description, icon, withPixel }) => {
  return (
    <S.Wrapper>
      <Container>
        <S.TextWrapper>
          <S.Title>{title}</S.Title>
          <S.Description>{description}</S.Description>
        </S.TextWrapper>
        <S.Img img={icon} />
        {IS_PRODUCTION && withPixel && (
          <img src="https://ct.capterra.com/capterra_tracker.gif?vid=2300443&vkey=99c201d91bf622dc4237733d13dd0af1" />
        )}
      </Container>
    </S.Wrapper>
  )
}
export default ThankYou
