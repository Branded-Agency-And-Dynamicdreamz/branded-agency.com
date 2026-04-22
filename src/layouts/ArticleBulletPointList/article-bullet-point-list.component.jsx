import React from "react"
import * as S from "./article-bullet-point-list.styles.jsx"
import { v4 as uuidv4 } from "uuid"
import parse from "html-react-parser"

const ArticleBulletPointList = ({ items }) => {
  if (!items) return null
  return (
    <S.Wrapper>
      {items?.map(({ item }, index) => (
        <S.ItemWrapper key={`Article -${index} - ${uuidv4()}`}>
          <S.CheckIcon />
          {item && (
            <S.Item key={`Article -${index} - ${uuidv4()}`}>
              {parse(item)}
            </S.Item>
          )}
        </S.ItemWrapper>
      ))}
    </S.Wrapper>
  )
}

export default ArticleBulletPointList
