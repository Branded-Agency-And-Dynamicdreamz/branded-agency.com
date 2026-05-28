import React from "react"
import * as S from "./get-in-touch.styles"
import Container from "@mui/material/Container"
import { Stack } from "@mui/material"
import { Slide } from "react-awesome-reveal"
import { navigate } from "gatsby"
import { gtagAdwordsConversion } from "../../utils/gtag-utils"
import { trackGetInTouchClick } from "../../utils/meta-pixel-utils"
import { getLocalizedPath } from "../../components/LocalizedLink"

const GetInTouch = ({ text, button }) => {
  const handleOnTouchClick = () => {

    gtagAdwordsConversion("AW-11137911214/FBk6COC9vK4YEK6T_L4p")
    trackGetInTouchClick()

    const localizedUrl = getLocalizedPath(button?.url)
    navigate(localizedUrl)
  }

  return (
    <S.Wrapper>
      <Container>
        <Stack spacing={{ md: 7, xs: 4.5 }} alignItems="center">
          {text && (
            <S.TextWrapper>
              <Slide
                triggerOnce
                delay={150}
                fraction={0.5}
                direction="up"
                duration={750}
              >
                <S.Text>{text}</S.Text>
              </Slide>
            </S.TextWrapper>
          )}
          {button && (
            <S.Button
              className="transparentIcon"
              onClick={handleOnTouchClick}
              withIcon
            >
              {button.title}
            </S.Button>
          )}
        </Stack>
      </Container>
    </S.Wrapper>
  )
}

export default GetInTouch