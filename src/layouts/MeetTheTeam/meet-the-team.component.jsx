import React from "react"
import * as S from "./meet-the-team.styles"
import Container from "@mui/material/Container"
import { Grid } from "@mui/material"
import LinkedInSVG from "../../assets/linkedin-boxed.svg"
import parse from "html-react-parser"

const MeetTheTeam = ({ title, team }) => {
  if (!team) return null

  return (
    <S.Wrapper>
      <Container>
        <S.Title>{title}</S.Title>
        <Grid container spacing={4} justifyContent="center">
          {team?.map(
            ({ image, name, jobPosition, description, linkedin }, index) => (
              <Grid item xs={12} sm={6} md={3} key={`${name}-${index}`}>
                <S.PersonCard>
                  <S.Image img={image} alt={name} />
                  <S.Name>{name}</S.Name>
                  <S.JobPosition>{jobPosition}</S.JobPosition>
                  {description && (
                    <S.Description>{parse(description)}</S.Description>
                  )}
                  {linkedin && (
                    <S.LinkedIn url={linkedin.url} target="_blank">
                      <LinkedInSVG />
                    </S.LinkedIn>
                  )}
                </S.PersonCard>
              </Grid>
            ),
          )}
        </Grid>
      </Container>
    </S.Wrapper>
  )
}

export default MeetTheTeam
