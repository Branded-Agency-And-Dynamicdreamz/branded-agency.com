import React from "react"
import * as S from "./hero-bg-text.styles"
import { getMediaUrl } from "../../utils/media-url"

const HeroBgText = ({
  backgroundImage,
  description,
  overlayOpacity = 0.4,
}) => {
  const imageUrl = getMediaUrl(backgroundImage)

  if (!imageUrl) return null

  return (
    <S.Wrapper>
      <S.ContentWrapper>
        <S.Content>
          {description && (
            <S.Description
              dangerouslySetInnerHTML={{ __html: description }}
            />
          )}
        </S.Content>
      </S.ContentWrapper>

      <S.BackgroundImageWrapper>
        <S.BackgroundImage
          img={backgroundImage}
          alt="Background"
        />

        <S.Overlay overlayOpacity={overlayOpacity} />
      </S.BackgroundImageWrapper>
    </S.Wrapper>
  )
}

export default HeroBgText