import React from "react"
import * as S from "./posiiton-card.styles"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"

const PositionCard = ({ positionBuilder, slug }) => {
  const { titleJob, workModality } = positionBuilder
  return (
    <S.Wrapper url={`/join-us/${slug}`}>
      <S.TitleJob>{titleJob}</S.TitleJob>
      <S.Modality>
        {workModality} <ArrowForwardIcon />
      </S.Modality>
    </S.Wrapper>
  )
}

export default PositionCard
