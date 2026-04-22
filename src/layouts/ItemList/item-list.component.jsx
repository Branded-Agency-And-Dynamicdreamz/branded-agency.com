import React from "react"
import * as S from "./item-list.styles"

const ItemList = ({ items, isWhite }) => {
  if (!items) return null

  return (
    <S.List className={isWhite ? "white" : ""}>
      {items.map(({ item }, index) => (
        <S.ListItem key={index}>
          <S.Circle>
            <span>{index + 1}</span>
          </S.Circle>
          <S.Text>{item}</S.Text>
        </S.ListItem>
      ))}
    </S.List>
  )
}

export default ItemList
