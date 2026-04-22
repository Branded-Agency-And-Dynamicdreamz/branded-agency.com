import React from "react"
import * as S from "./info-banner.styles"
import Container from "@mui/material/Container"

const InfoBanner = ({ title, text, button }) => {
  return (
    <S.Wrapper id="next">
      <Container>
        <S.ContentWrapper>
          {title && <S.Title>{title}</S.Title>}
          {text && <S.Text>{text}</S.Text>}
          {button && (
            <S.BtnWrapper>
              <S.Button href={button.url} className="light">
                {button.title}
              </S.Button>
            </S.BtnWrapper>
          )}
        </S.ContentWrapper>
      </Container>
    </S.Wrapper>
  )
}

export default InfoBanner
