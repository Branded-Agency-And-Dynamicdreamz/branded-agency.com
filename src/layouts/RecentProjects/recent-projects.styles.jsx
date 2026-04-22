import styled from "@emotion/styled"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import Typography from "@mui/material/Typography"
import CustomImage from "../../components/custom-image/custom-image.component"

export const Wrapper = styled(SectionWrapper)`
  background-color: #f5f5f5;
  padding: 3.75rem 0;

  ${({ theme }) => theme.breakpoints.up("md")} {
    padding: 5rem 0;
  }
`

export const Title = styled(Typography)`
  overflow: hidden;
  color: ${({ theme }) => theme.palette.primary.main};
  font-style: normal;
  font-weight: 300;
  line-height: 110%;
  padding-bottom: 2rem;
  font-size: 1.75rem;

  ${({ theme }) => theme.breakpoints.up("md")} {
    padding-bottom: 2.75rem;
    font-size: 2.75rem;
  }
`

export const CardArticle = styled.div`
  position: relative;

  &:hover {
    .overlay {
      transition: top 0.3s ease;
      top: 0;
    }
  }
`

export const CardImage = styled(CustomImage)``

export const CardTitle = styled(Typography)`
  color: white;
  font-size: 1rem;
  font-style: normal;
  font-weight: 800;
  line-height: 125%;

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 1.625rem;
  }
`

export const CardDescription = styled(Typography)`
  color: white;
  font-size: 1rem;
  font-style: normal;
  font-weight: 300;
  line-height: 125%;

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 1.625rem;
  }
`

export const SwiperWrapper = styled.div`
  padding: 0 1rem;

  ${({ theme }) => theme.breakpoints.up("md")} {
    padding: 0 1.5rem;
  }
`

export const TextContent = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
export const Overlay = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.9;
  background: #1519ba;
  z-index: 8;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  top: 100%;
  transition: top 0.3s ease;
`
