import styled from "@emotion/styled"
import Typography from "@mui/material/Typography"

export const List = styled.div`
  padding: 2rem 1.25rem;
  width: 100%;
  border-radius: 16px;

  margin: 3rem auto 0;

  &.white {
    background-color: white;
    padding: 0;

    ${({ theme }) => theme.breakpoints.up("md")} {
      padding: 2.5rem;
    }
  }

  background: rgba(21, 25, 186, 0.05);

  ${({ theme }) => theme.breakpoints.up("md")} {
    padding: 4.5rem;
    margin: 2rem auto 0;
  }

  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 686px;
`

export const ListItem = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.25rem;
`

export const Text = styled(Typography)`
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  display: flex;
  align-items: center;
  color: #0c0e66;

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 1.25rem;
  }
`

export const Circle = styled.div`
  background: linear-gradient(104deg, #6649c3 -1.46%, #3c28c9 97.95%);
  position: relative;
  min-width: 30px;
  max-width: 30px;
  min-height: 30px;
  max-height: 30px;
  border-radius: 100%;
  span {
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 1rem;
    font-style: normal;
    font-weight: 600;
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    min-width: 40px;
    min-height: 40px;

    span {
      font-size: 1.25rem;
      font-style: normal;
      font-weight: 600;
    }
  }
`
