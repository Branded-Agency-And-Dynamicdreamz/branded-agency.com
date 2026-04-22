import React from "react"
import * as S from "./back-links.styles"
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew"
import Container from "@mui/material/Container"

const BackLinks = ({ links, isTransparent, withPaddingTop }) => {
  if (!links) return null

  return (
    <S.Wrapper
      className={`${isTransparent && "transparent"} ${
        withPaddingTop && "paddingTop"
      }`}
    >
      <Container>
        <S.LinksWrapper>
          {links?.map(({ link }, index) => (
            <S.Link key={`${index}-${link.title}`} url={link?.url}>
              <ArrowBackIosNewIcon />
              {link?.title}
            </S.Link>
          ))}
        </S.LinksWrapper>
      </Container>
    </S.Wrapper>
  )
}

export default BackLinks
