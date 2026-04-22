import styled from "@emotion/styled"
import Typography from "@mui/material/Typography"
import CustomLink from "../../components/custom-link/custom-link.component"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"

export const Wrapper = styled(SectionWrapper)`
  background: linear-gradient(104deg, #6649c3 -1.46%, #3c28c9 97.95%);

  ${({ theme }) => theme.breakpoints.down("md")} {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
`

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 2rem;
  align-items: center;
`

export const Title = styled(Typography)`
  color: #fff;
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 4rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  ${({ theme }) => theme.breakpoints.down("md")} {
    font-size: 2.5rem;
  }
`

export const ViewMore = styled(CustomLink)`
  padding: 1rem 1.5rem;
  color: #1519ba;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  background-color: white;
  display: flex;
  align-items: center;
  border-radius: 3.1875rem;
  height: 56px;

  ${({ theme }) => theme.breakpoints.down("md")} {
    font-size: 16px;
    height: 45px;
  }
`

export const InsightsWrapper = styled.div`
  margin-top: 2.75rem;

  ${({ theme }) => theme.breakpoints.up("md")} {
    margin-top: 4.75rem;
  }
`
