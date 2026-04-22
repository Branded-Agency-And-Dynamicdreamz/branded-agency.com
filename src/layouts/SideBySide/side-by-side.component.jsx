import React from "react"
import * as S from "./side-by-side.styles"
import parse from "html-react-parser"
import VideoComponent from "../VideoComponent/video-component.component"
import useDownloadGuideContext from "../../context/download-guide.provider"

const SideBySide = ({
  imageOrVideo,
  iframeVideo,
  content,
  reverse,
  className,
  spacing,
  fileStyles,
  downloadButtonText,
  vimeoLink,
  title,
}) => {
  const { isOpenForm, setIsOpenForm } = useDownloadGuideContext()
  const getStyles = () => {
    if (!fileStyles) return
    const object = {}
    for (const item of fileStyles) {
      object[item.name] = item.value
    }
    return object
  }

  return (
    <>
      {title && <S.Title>{title}</S.Title>}
      <S.Wrapper
        className={`${reverse ? "reverse" : ""} ${title ? "alignTop" : ""}`}
        style={{ gap: spacing ?? "1.5rem" }}
      >
        <S.LeftWrapper style={{ ...getStyles() }}>
          {imageOrVideo?.gatsbyImage ? (
            <S.Image img={imageOrVideo} role="presentation" />
          ) : (
            <VideoComponent
              video={imageOrVideo}
              vimeoLink={vimeoLink}
              iframeVideo={iframeVideo}
              autoplay
            />
          )}
        </S.LeftWrapper>
        <S.RightWrapper>
          <div>{parse(content)}</div>
          {downloadButtonText && (
            <S.Button onClick={() => setIsOpenForm(true)}>
              {downloadButtonText}
            </S.Button>
          )}
        </S.RightWrapper>
      </S.Wrapper>
    </>
  )
}

export default SideBySide
