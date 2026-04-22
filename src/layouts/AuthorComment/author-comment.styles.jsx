import styled from "@emotion/styled"
import Typography from "@mui/material/Typography"

export const AuthorComment = styled.div`
  &.isSecondStyle {
    padding: 3rem 0;
    .comment {
      color: #000;
      text-align: center;
      font-size: 1.5rem;
      font-style: normal;
      font-weight: 600;
      line-height: 1.75rem;
      &:before {
        display: none;
      }

      ${({ theme }) => theme.breakpoints.up("md")} {
        font-size: 2.5rem;
        line-height: 3.25rem;
      }
    }
  }
`

export const AuthorName = styled(Typography)`
  color: #000029;
  font-size: 0.8125rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.0625rem;
  text-transform: uppercase;
  text-align: center;
`

export const AuthorCommentText = styled(Typography)`
  color: #0c0e66;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2rem;
  padding-left: 1.75rem;
  position: relative;
  margin: 1.5rem 0;

  &:before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 6px;
    height: 100%;
    background-color: #6116be;
  }
`

export const QuoteWrapper = styled.div`
  width: 74px;
  height: 74px;
  padding: 5px 3px;
  border-radius: 100%;
  background: #cecfff;
  position: relative;
  margin: auto;

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`
