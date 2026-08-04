import React, { useState, useRef } from "react"
import * as S from "./before-after.styles"
import { getMediaUrl } from "../../utils/media-url"

const BeforeAfter = ({
  beforeImage,
  afterImage,
  isInGrid = false,
}) => {
  const [sliderPosition, setSliderPosition] = useState(50)
  const containerRef = useRef(null)

  const beforeImageUrl = getMediaUrl(beforeImage)
  const afterImageUrl = getMediaUrl(afterImage)

  if (!beforeImageUrl || !afterImageUrl) return null

  const handleMouseMove = (e) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const percentage = (x / rect.width) * 100

    setSliderPosition(Math.min(Math.max(percentage, 0), 100))
  }

  const handleTouchMove = (e) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const touch = e.touches[0]
    const x = touch.clientX - rect.left
    const percentage = (x / rect.width) * 100

    setSliderPosition(Math.min(Math.max(percentage, 0), 100))
  }

  return (
    <S.SliderContainer
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onMouseLeave={() => setSliderPosition(50)}
      onTouchEnd={() => setSliderPosition(50)}
      isInGrid={isInGrid}
    >
      <S.ImageWrapper>
        <S.Image img={afterImage} alt="After" />

        <S.BeforeImageWrapper
          style={{
            clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
          }}
        >
          <S.Image img={beforeImage} alt="Before" />
        </S.BeforeImageWrapper>

        <S.DividerLine style={{ left: `${sliderPosition}%` }}>
          <S.DividerHandle>

          </S.DividerHandle>
        </S.DividerLine>
      </S.ImageWrapper>
    </S.SliderContainer>
  )
}

export default BeforeAfter