
import { css } from "@emotion/react"
import styled from "@emotion/styled"
import Link from "../LocalizedLink"

const styledLink = css`
  text-decoration: none;
  cursor: pointer;
  color: inherit;
`

export const CustomRegularLink = styled.a`
  ${styledLink};
`

export const CustomLink = styled(Link)`
  ${styledLink};
`

export const CustomAniLink = styled(Link)`
  ${styledLink};
`
