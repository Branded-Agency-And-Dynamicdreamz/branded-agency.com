import React from "react"
import * as S from "./bg-hero.styles"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { scroller } from "react-scroll"

const BgHero = ({ image }) => {
  const handleMore = () => {
    scroller.scrollTo("next", {
      smooth: true,
      spy: true,
      offset: -50,
    })
  }

  return (
    <S.BgImage>
      <S.Image img={image} />
      <S.NextSection onClick={handleMore}>
        <ExpandMoreIcon />
      </S.NextSection>
    </S.BgImage>
  )
}

export default BgHero
