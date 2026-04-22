import React from "react"
import * as S from "./branded-creation.styles"
import Container from "@mui/material/Container"

const BrandedCreation = ({
  title,
  firstText,
  imgDesktop,
  imgMobile,
  secondText,
  button,
}) => {
  return (
    <S.Wrapper>
      <Container>
        <S.FirstWrapper>
          {title && <S.Title>{title}</S.Title>}
          {firstText && <S.Text>{firstText}</S.Text>}
        </S.FirstWrapper>
        <S.Image className="desktop" img={imgDesktop} />
        <S.Image className="mobile" img={imgMobile} />
        <S.SecondWrapper>
          {secondText && <S.Text>{secondText}</S.Text>}
          {button && (
            <S.Button to="form" spy={true} smooth={true} offset={-50}>
              {button.title}
            </S.Button>
          )}
        </S.SecondWrapper>
      </Container>
    </S.Wrapper>
  )
}

export default BrandedCreation