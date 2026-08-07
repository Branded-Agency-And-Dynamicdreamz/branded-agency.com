import React from "react"
import * as S from "./logo-banner.styles"
import { Container, Stack } from "@mui/material"
import { gtagAdwordsConversion } from "../../utils/gtag-utils"
import { navigate } from "gatsby"

const LogoBanner = ({ logo, text, button }) => {
  const handleOnTouchClick = () => {
    gtagAdwordsConversion("AW-11137911214/FBk6COC9vK4YEK6T_L4p")
    navigate(button?.url)
  }
  return (
    <S.Wrapper>
      <Container maxWidth="md">
        <Stack spacing={5} alignItems="center">
          <S.Text>{text}</S.Text>
          {button && (
            <S.ButtonWrapper>
              <S.Button
                className="transparentIcon"
                onClick={handleOnTouchClick}
                withIcon
              >
                {button.title}
              </S.Button>
            </S.ButtonWrapper>
          )}
          <S.LogoWrapper
            href="https://www.designrush.com/agency/profile/branded"
            target="_blank"
          >
            <S.Logo img={logo} />
          </S.LogoWrapper>
        </Stack>
      </Container>
    </S.Wrapper>
  )
}

export default LogoBanner
