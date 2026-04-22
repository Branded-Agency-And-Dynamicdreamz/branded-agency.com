import React from "react"
import * as S from "./our-locations.styles"
import { Container, Grid } from "@mui/material"
import parse from "html-react-parser"

const OurLocations = ({ topImages, locations }) => {
  if (!locations || locations.length === 0) return null

  const hasImages = topImages && topImages.length > 0

  return (
    <S.Wrapper>
      {hasImages && (
        <S.ImagesWrapper>
          <Grid container spacing={3}>
            {topImages.map(({ image }, index) => (
              <Grid item xs={12} md={4} key={`top-image-${index}`}>
                <S.TopImage img={image} alt={image?.altText || "Locations"} arPaddingPercentage={100} />
              </Grid>
            ))}
          </Grid>
        </S.ImagesWrapper>
      )}
      <Container>
        <S.LocationsGrid
          container
          spacing={{ md: 16, xs: 3 }}
          justifyContent="center"
        >
          {locations.map((location, index) => (
            <Grid item xs={12} sm={4} key={`location-${index}`}>
              <S.LocationItem>
                <S.Country>{location.country}</S.Country>
                <S.Address>{parse(location.address)}</S.Address>
                <S.Phone>{location.phone}</S.Phone>
              </S.LocationItem>
            </Grid>
          ))}
        </S.LocationsGrid>
      </Container>
    </S.Wrapper>
  )
}

export default OurLocations
