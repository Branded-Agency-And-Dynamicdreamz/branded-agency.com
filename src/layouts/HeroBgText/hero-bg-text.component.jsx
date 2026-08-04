import React from "react"
import * as S from "./hero-bg-text.styles"
import FadeInOnScroll from "../../components/fade-in-on-scroll/fade-in-on-scroll.component"
import { getMediaUrl } from "../../utils/media-url"

const HeroBgText = ({ 
  backgroundImage,
  description,
  overlayOpacity = 0.4,
}) => {
  const imageUrl = getMediaUrl(backgroundImage)

  // Agar image nahi hai toh render mat karo
  if (!imageUrl) return null

  return (
    <FadeInOnScroll showAnimation>
      <S.Wrapper>
        <S.BackgroundImageWrapper>
          <S.BackgroundImage img={backgroundImage} alt="Background" />
          <S.Overlay overlayOpacity={overlayOpacity} />
        </S.BackgroundImageWrapper>
        
        <S.ContentWrapper>
          <S.Content>
            {description && (
              <S.Description dangerouslySetInnerHTML={{ __html: description }} />
            )}
          </S.Content>
        </S.ContentWrapper>
      </S.Wrapper>
    </FadeInOnScroll>
  )
}

export default HeroBgText