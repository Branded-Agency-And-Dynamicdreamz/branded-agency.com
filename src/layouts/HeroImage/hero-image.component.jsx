import React from "react"
import * as S from "./hero-image.styles"

const HeroImage = ({ title, image }) => {
  return (
    <S.Wrapper>
      <S.Image img={image} />
      <S.Title>{title}</S.Title>
    </S.Wrapper>
  )
}

export default HeroImage
