import React from "react"
import * as S from "./talk-about-banner.styles"
import { graphql, useStaticQuery } from "gatsby"
import Container from "@mui/material/Container"
import parse from "html-react-parser"
import { KeyboardArrowDown } from "@mui/icons-material"

const TalkAboutBanner = ({
  title,
  description,
  secondDescription,
  bottomDescription,
}) => {
  const staticQuery = useStaticQuery(graphql`
    query {
      bg: file(relativePath: { eq: "bottom-bg.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      cardBg: file(relativePath: { eq: "card-bg.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      logo: file(relativePath: { eq: "logo-white.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      georgeIcon: file(relativePath: { eq: "icon-george.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `)

  return (
    <S.Wrapper id="final" img={staticQuery.bg}>
      <Container>
        <S.Logo img={staticQuery.logo} />
        <S.Card>
          <S.CardBg img={staticQuery.cardBg} />
          <S.Title>{title}</S.Title>
          {description && <S.Description>{parse(description)}</S.Description>}
        </S.Card>
        {secondDescription && (
          <S.SecondDescription>{parse(secondDescription)}</S.SecondDescription>
        )}
        <S.VicepresidentWrapper>
          <S.IconWrapper url="mailto:george-essex@branded-agency.com">
            <S.Icon img={staticQuery.georgeIcon} />
          </S.IconWrapper>
          <S.InfoWrapper>
            <p>
              <strong>George Essex</strong>
              <br />
              Senior Vice President
              <br /> at BRANDED
            </p>
          </S.InfoWrapper>
        </S.VicepresidentWrapper>
        <S.ButtonsWrapper>
          <S.Link url="https://wp.branded-agency.com/" target="_blank">
            Website
          </S.Link>
          <S.Link url="mailto:george-essex@branded-agency.com">Email</S.Link>
          <S.Link
            url="https://meetings.hubspot.com/george-essex/30-minute-call?uuid=40eb77c1-ff42-4054-a219-aedc2c4ca387"
            target="_blank"
          >
            Book Call
          </S.Link>
        </S.ButtonsWrapper>
      </Container>
    </S.Wrapper>
  )
}

export default TalkAboutBanner
