import React, { useEffect, useState } from "react"
import { Widget } from "@typeform/embed-react"
import * as S from "./typeform-embed.styles"
import CloseRoundedIcon from "@mui/icons-material/CloseRounded"
import { Stack } from "@mui/material"
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll"

const TypeformEmbed = ({ idForm, isHero }) => {
  const [isOpenPopup, setIsOpenPopup] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsOpenPopup(true)
    }, 10000)
    setTimeout(() => {
      setIsOpenPopup(false)
    }, 18000)
  }, [])
  const handleDownloadBtn = () => {
    setIsOpenPopup(false)
  }
  if (!idForm) return null
  return (
    <S.Wrapper id="branded-quiz" className={isHero ? "hero" : ""}>
      <Widget
        id={idForm}
        style={{ width: "100%", height: isHero ? "100%" : "85vh" }}
      />
      {!isHero ? (
        <S.FixedPopup className={isOpenPopup ? "" : "closed"}>
          <S.PopupClose onClick={() => setIsOpenPopup(false)}>
            <CloseRoundedIcon />
          </S.PopupClose>
          <S.PopupTitle>Take our brand health quiz to find out.</S.PopupTitle>
          <Stack spacing={1}>
            <S.PopupBtn
              href="https://rs09ogyrh3x.typeform.com/to/z3YuRJvD"
              target="_blank"
              // to="branded-quiz"
              // spy={true}
              // smooth={true}
              // offset={-100}
            >
              Let's go
            </S.PopupBtn>
          </Stack>
        </S.FixedPopup>
      ) : null}
    </S.Wrapper>
  )
}

export default TypeformEmbed
