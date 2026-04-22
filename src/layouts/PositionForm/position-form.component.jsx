import React from "react"
import * as S from "./position-form.styles"
import Container from "@mui/material/Container"
import CustomJobForm from "../../components/custom-job-form/custom-job-form.component"

const PositionForm = ({ title, titleJob, location }) => {
  return (
    <S.Wrapper id="jobForm">
      <Container>
        <S.Title>{title}</S.Title>
        <CustomJobForm
          isIndividualJob
          titleJob={titleJob}
          location={location}
        />
      </Container>
    </S.Wrapper>
  )
}

export default PositionForm
