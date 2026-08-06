import React, { useState, useRef, useCallback, useEffect } from "react"
import * as S from "./before-after.styles"
import { getMediaUrl } from "../../utils/media-url"

const BeforeAfter = ({
  beforeImage,
  afterImage,
  isInGrid = false,
}) => {
  const [sliderPosition, setSliderPosition] = useState(50)
  const containerRef = useRef(null)
  const dividerRef = useRef(null)
  const beforeWrapperRef = useRef(null)
  const animationFrame = useRef(null)
  const isDraggingRef = useRef(false)

  const beforeImageUrl = getMediaUrl(beforeImage)
  const afterImageUrl = getMediaUrl(afterImage)

  const updateSlider = useCallback((percentage) => {
    const value = Math.min(Math.max(percentage, 0), 100)

    if (animationFrame.current) {
      cancelAnimationFrame(animationFrame.current)
    }

    animationFrame.current = requestAnimationFrame(() => {
      if (dividerRef.current) {
        dividerRef.current.style.left = `${value}%`
      }

      if (beforeWrapperRef.current) {
        beforeWrapperRef.current.style.clipPath = `inset(0 ${100 - value}% 0 0)`
      }
    })
  }, [])

  const handleMouseDown = useCallback((e) => {
    e.preventDefault()
    isDraggingRef.current = true
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const percentage = ((e.clientX - rect.left) / rect.width) * 100
    updateSlider(percentage)
  }, [updateSlider])

  const handleMouseMove = useCallback((e) => {
    e.preventDefault()
    if (!isDraggingRef.current || !containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const percentage = ((e.clientX - rect.left) / rect.width) * 100
    updateSlider(percentage)
  }, [updateSlider])

  const handleMouseUp = useCallback(() => {
    isDraggingRef.current = false
  }, [])

  const handleTouchStart = useCallback((e) => {
    e.preventDefault()
    const touch = e.touches[0]
    if (!touch || !containerRef.current) return

    isDraggingRef.current = true
    const rect = containerRef.current.getBoundingClientRect()
    const percentage = ((touch.clientX - rect.left) / rect.width) * 100
    updateSlider(percentage)
  }, [updateSlider])

  const handleTouchMove = useCallback((e) => {
    e.preventDefault()
    if (!isDraggingRef.current || !containerRef.current) return

    const touch = e.touches[0]
    if (!touch) return

    const rect = containerRef.current.getBoundingClientRect()
    const percentage = ((touch.clientX - rect.left) / rect.width) * 100
    updateSlider(percentage)
  }, [updateSlider])

  const handleTouchEnd = useCallback(() => {
    isDraggingRef.current = false
  }, [])

  const resetSlider = useCallback(() => {
    updateSlider(50)
  }, [updateSlider])

  useEffect(() => {
    return () => {
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current)
      }
    }
  }, [])

  if (!beforeImageUrl || !afterImageUrl) return null

  return (
    <S.SliderContainer
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={resetSlider}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchEnd}
      isInGrid={isInGrid}
    >
      <S.ImageWrapper>
        <S.Image img={afterImage} alt="After" />

        <S.BeforeImageWrapper
          ref={beforeWrapperRef}
          style={{
            clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
          }}
        >
          <S.Image img={beforeImage} alt="Before" />
        </S.BeforeImageWrapper>

        <S.DividerLine
          ref={dividerRef}
          style={{ left: `${sliderPosition}%` }}
        >
          <S.DividerHandle />
        </S.DividerLine>
      </S.ImageWrapper>
    </S.SliderContainer>
  )
}

export default BeforeAfter