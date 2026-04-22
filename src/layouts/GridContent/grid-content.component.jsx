import React from "react"
import * as S from "./grid-content.styles"
import parse from "html-react-parser"

const GridContent = ({ className, items, subtitle }) => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      {subtitle && <S.Subtitle>{parse(subtitle)}</S.Subtitle>}
      <S.Wrapper className={className}>
        {items?.map(({ onlyContent, file, vimeoLink, ...item }, index) => (
          <S.ItemWrapper key={`grid-item-${index}`} className={item.className}>
            {onlyContent ? (
              <div>{parse(item.content)}</div>
            ) : (
              <>
                {file?.gatsbyImage ? (
                  <S.Image
                    img={file?.mediaItemUrl}
                    role="presentation"
                    arPaddingPercentage={item.paddingPercentage}
                  />
                ) : (
                  <S.StyledVideo
                    vimeoLink={vimeoLink}
                    video={file}
                    iframeVideo={item.iframeVideo}
                    autoplay
                    arPaddingPercentage={item.paddingPercentage}
                  />
                )}
              </>
            )}
          </S.ItemWrapper>
        ))}
      </S.Wrapper>
    </div>
  )
}

export default GridContent
