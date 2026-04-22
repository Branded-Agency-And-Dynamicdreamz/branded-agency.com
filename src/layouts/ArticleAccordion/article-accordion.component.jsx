import React, { useState } from "react"
import * as S from "./article-accordion.styles"
import parse from "html-react-parser"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"

const ArticleAccordion = ({ title, items }) => {
  const [expanded, setExpanded] = useState("")
  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      {items?.map(({ title, content }, index) => (
        <S.CustomAccordion
          expanded={expanded === `panel${index}`}
          onChange={handleChange(`panel${index}`)}
        >
          <S.CustomAccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}bh-content`}
            id={`panel${index}bh-content`}
          >
            <S.Question>{title}</S.Question>
          </S.CustomAccordionSummary>
          <S.CustomAccordionDetail>
            {content && <S.Answer>{parse(content)}</S.Answer>}
          </S.CustomAccordionDetail>
        </S.CustomAccordion>
      ))}
    </S.Wrapper>
  )
}

export default ArticleAccordion
