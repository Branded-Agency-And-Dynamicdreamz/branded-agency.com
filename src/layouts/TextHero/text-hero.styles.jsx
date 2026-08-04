import styled from "@emotion/styled"

export const Wrapper = styled.section`
  width: 100%;
  padding: 2rem 1rem;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ theme }) => theme.breakpoints.up("md")} {
    padding: 3rem 1.5rem;
  }
`

export const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  ${({ theme }) => theme.breakpoints.up("md")} {
    flex-direction: row;
    align-items: center;
    gap: 3rem;
  }
`

export const Heading = styled.h2`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 800;
  line-height: 110%;
  color: ${({ theme }) => theme.palette.primary.main};
  margin: 0;
  flex-shrink: 0;

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 2rem;
    line-height: 120%;
    width: 360px;
    max-width: 360px;
  }

  ${({ theme }) => theme.breakpoints.up("lg")} {
    font-size: 2.3rem;
    width: 380px;
    max-width: 380px;
  }
`

export const Description = styled.div`
  color: #2A21C4;
  margin: 0;

  p {
    margin: 0;
    color: ${({ theme }) => theme.palette.primary.main};

    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 300;
    line-height: 125%;
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    flex: 1;

    p {
      font-size: 1.625rem;
    }
  }
`