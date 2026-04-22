import React from "react"
import * as S from "./content-list.styles"
import Container from "@mui/material/Container"
import VideoComponent from "../VideoComponent"
import { graphql, useStaticQuery } from "gatsby"
import { Grid, useMediaQuery, useTheme } from "@mui/material"
import parse from "html-react-parser"

const ContentList = ({ grids, bottomVideo }) => {
  const staticQuery = useStaticQuery(graphql`
    query {
      bg: file(relativePath: { eq: "bg-banner.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `)

  const image =
    staticQuery?.bg?.childImageSharp?.gatsbyImageData?.images?.fallback?.src

  const theme = useTheme()
  const isMd = useMediaQuery(theme.breakpoints.up("md"))

  return (
    <S.Wrapper>
      <Container disableGutters={!isMd}>
        <Grid container spacing={{ md: 10, xs: 0 }} alignItems="start">
          {grids?.map(({ items, title }, index) => (
            <Grid item xs={12} md={6} key={`item-${index}`}>
              <S.BenefitWrapper
                className={index === 0 && "border"}
                style={{
                  ...(!isMd &&
                    index === 0 && {
                      backgroundImage: `url(${image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }),
                }}
              >
                <S.Title className={!isMd && index === 0 && "white"}>
                  {title}
                </S.Title>
                <S.ItemsWrapper>
                  {items?.map(({ item }, innerIndex) => (
                    <S.Item key={`item-${innerIndex}`}>
                      <S.Dot className={!isMd && index === 0 && "white"} />
                      <S.Text className={!isMd && index === 0 && "white"}>
                        {parse(item)}
                      </S.Text>
                    </S.Item>
                  ))}
                </S.ItemsWrapper>
              </S.BenefitWrapper>
            </Grid>
          ))}
        </Grid>
        {bottomVideo && (
          <S.VideoWrapper>
            <VideoComponent vimeoLink={bottomVideo} autoplay controls />
          </S.VideoWrapper>
        )}
      </Container>
    </S.Wrapper>
  )
}
export default ContentList
