import React from "react"
import * as S from "./gallery.styles"

const Gallery = ({ images, sectionId }) => {
  if (!images) return null

  return (
    <S.Wrapper id={sectionId}>
      {images?.map(({ image }, index) => (
        <S.Image key={`${index}-gallery-bran-strategy`} img={image} />
      ))}
    </S.Wrapper>
  )
}

export default Gallery
