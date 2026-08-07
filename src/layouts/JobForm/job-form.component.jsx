import React from "react"
import * as S from "./job-form.styles"
import Container from "@mui/material/Container"
import { Grid } from "@mui/material"
import { graphql, useStaticQuery } from "gatsby"
import PositionCard from "../../components/position-card/position-card.component"
import parse from "html-react-parser"
import CustomJobForm from "../../components/custom-job-form/custom-job-form.component"

const JobForm = ({ title, formTitle }) => {
  const staticQuery = useStaticQuery(graphql`
    query {
      allWpPosition(sort: { date: DESC }) {
        nodes {
          slug
          title
          positionBuilder {
            location
            titleJob
            description
            workModality
          }
        }
      }
    }
  `)

  const positions = staticQuery.allWpPosition.nodes ?? []

  return (
    <S.Wrapper id="jobs">
      <Container>
        <S.Title>{title}</S.Title>
        {positions.length > 0 && (
          <>
            <S.CardsWrapper>
              <Grid container spacing={2.5} justifyContent="center">
                <>
                  {positions?.map((position, index) => (
                    <Grid
                      item
                      md={4}
                      sm={6}
                      xs={12}
                      key={`${position?.positionBuilder?.titleJob}-${index}`}
                    >
                      <PositionCard {...position} />
                    </Grid>
                  ))}
                </>
              </Grid>
            </S.CardsWrapper>
            {formTitle && <S.FormTitle>{parse(formTitle)}</S.FormTitle>}
          </>
        )}
        <CustomJobForm formTitle={formTitle} />
      </Container>
    </S.Wrapper>
  )
}

export default JobForm
