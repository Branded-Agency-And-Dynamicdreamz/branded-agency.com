import React from "react"
import * as S from "./count-up-grid.styles"
import { Grid } from "@mui/material"
import CountUpItem from "../../components/count-up-item/count-up-item.component"

const CountUpGrid = ({ items }) => {
  
  if (!items) return null

  return (
    <S.Wrapper id="count-up-wrapper">
      <Grid
        container
        spacing={{ xs: 5, sm: 2 }}
        display="flex"
        justifyContent="center"
      >
        {items?.map((item, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={items?.length <= 2 ? 6 : 4}
            lg={items?.length <= 2 ? 6 : 3}
            key={`count-up-${index}`}
          >
            <CountUpItem {...item} />
          </Grid>
        ))}
      </Grid>
    </S.Wrapper>
  )
}

export default CountUpGrid
