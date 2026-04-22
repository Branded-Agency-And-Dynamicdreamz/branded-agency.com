import styled from "@emotion/styled"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import CustomImage from "../../components/custom-image/custom-image.component"
import Typography from "@mui/material/Typography"
import CustomLink from "../../components/custom-link/custom-link.component"

export const Wrapper = styled(SectionWrapper)``

export const Title = styled.h2`
  font-size: 1.75rem;
  color: white;
  line-height: 1.1;
  text-align: center;
  margin-bottom: 2rem;

  ${({ theme }) => theme.breakpoints.up("sm")} {
    font-size: 2rem;
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 2.5rem;
  }

  ${({ theme }) => theme.breakpoints.up("lg")} {
    font-size: 2.75rem;
  }
`

export const PersonCard = styled.div`
  color: white;
`

export const Image = styled(CustomImage)`
  margin-bottom: 1rem;
  display: flex;
  img {
    max-height: 384px;
    object-position: top !important;
  }
  justify-content: center;
`

export const Name = styled(Typography)`
  font-size: 1.125rem;
  line-height: 1.2;
  font-weight: 800;

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 1.25rem;
  }
`

export const JobPosition = styled(Typography)`
  font-size: 0.95rem;
  line-height: 1.2;
  font-weight: 800;

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 1.25rem;
  }
`

export const Description = styled.div`
  ${({ theme }) => theme.breakpoints.down("md")} {
    p {
      margin-top: 14px;
      margin-bottom: 14px;
    }
  }
`

export const LinkedIn = styled(CustomLink)`
  svg {
    width: 25px;
    height: 25px;
  }
`
