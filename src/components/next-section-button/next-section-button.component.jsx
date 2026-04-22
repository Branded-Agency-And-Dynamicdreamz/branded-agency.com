import React from "react"
import * as S from "./next-section-button.styles"
import { scroller } from "react-scroll"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"

const NextSectionButton = ({ nextSectionId, className }) => {
  const handleMore = () => {
    scroller.scrollTo(nextSectionId, {
      smooth: true,
      spy: true,
    })
  }
  return (
    <S.NextSection onClick={handleMore} className={className}>
      <KeyboardArrowDownIcon />
    </S.NextSection>
  )
}

export default NextSectionButton
