import React, { useState } from "react"
import * as S from "./our-values.styles"
import Container from "@mui/material/Container"
import parse from "html-react-parser"
import { Grid } from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"

const OurValues = ({ title, text, values, bottomTitle, bottomDescription }) => {
  const [expanded, setExpanded] = useState("")
  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }
  if (!values) return null

  return (
    <S.Wrapper>
      <Container maxWidth="xl">
        <Grid container spacing={{ md: 2, xs: 7 }} justifyContent="center">
          <Grid item md={7} xs={12}>
            <S.LeftWrapper>
              {title && <S.Title>{title}</S.Title>}
              {text && <S.Text>{parse(text)}</S.Text>}
            </S.LeftWrapper>
          </Grid>
          <Grid item md={5}>
            {values?.map(({ value, description }, index) => (
              <S.CustomAccordion
                expanded={expanded === `panel${index}`}
                onChange={handleChange(`panel${index}`)}
                key={`accordion-${value}-${index}`}
              >
                <S.CustomAccordionSummary
                  className="summary"
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel${index}bh-content`}
                  id={`panel${index}bh-content`}
                >
                  <S.Question>{value}</S.Question>
                </S.CustomAccordionSummary>
                <S.CustomAccordionDetail>
                  <S.Answer>{description}</S.Answer>
                </S.CustomAccordionDetail>
              </S.CustomAccordion>
              // <div key={`${index}-${value}`}>
              //   <S.ValueWrapper key={`${value}-${index}`}>
              //     <S.Value>{value}</S.Value>
              //     <S.Description>{description}</S.Description>
              //   </S.ValueWrapper>
              // </div>
            ))}
          </Grid>
        </Grid>
        <S.BottomWrapper>
          {bottomTitle && <S.BottomTitle>{bottomTitle}</S.BottomTitle>}
          {bottomDescription && (
            <S.Text className="bottom">{parse(bottomDescription)}</S.Text>
          )}
          <S.Button className="lightBorder" href={"/contact/"}>
            Get in touch
          </S.Button>
        </S.BottomWrapper>
      </Container>
    </S.Wrapper>
  )
}

export default OurValues
