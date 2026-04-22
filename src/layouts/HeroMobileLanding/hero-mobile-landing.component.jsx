import React from "react"
import * as S from "./hero-mobile-landing.styles"
import Container from "@mui/material/Container"
import NextSectionButton from "../../components/next-section-button/next-section-button.component"
import { graphql, useStaticQuery } from "gatsby"

const HeroMobileLanding = ({ title, description, button, bgImage }) => {
  const staticQuery = useStaticQuery(graphql`
    query {
      bLogo: file(relativePath: { eq: "logo-branded.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `)

  if (!bgImage) return null

  return (
    <S.Wrapper img={bgImage}>
      {/*<S.BrandedLogo img={staticQuery.bLogo} />*/}
      <Container>
        <S.CardWrapper>
          <S.Card>
            <S.Title variant="h1">{title}</S.Title>
            <S.Description>{description}</S.Description>
            {button && <S.Button href="/contact">{button?.title}</S.Button>}
          </S.Card>
        </S.CardWrapper>
      </Container>
      <NextSectionButton nextSectionId={"reasons"} />
    </S.Wrapper>
  )
}

export default HeroMobileLanding
