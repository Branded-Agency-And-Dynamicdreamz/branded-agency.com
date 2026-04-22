import styled from "@emotion/styled"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"

export const Wrapper = styled(SectionWrapper)`
  background: linear-gradient(to right, #9597e0, white, white, white, #9597e0);

  ${({ theme }) => theme.breakpoints.down("md")} {
    padding: 3rem 0;
  }
`

export const BulletsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: flex-end;
  justify-content: center;
padding-top: 2rem;
`;

export const Bullet = styled.div`
  height: 11px;
  width: 11px;
  transition: 0.3s all ease;

  &.active {
  background-color: rgba(80, 56, 158, 0.9);
    transition: 0.3s all ease;
  }
  
  border-radius: 100%;
  background-color: rgba(165, 167, 229, 0.5);


`;


export const SwiperWrapper = styled.div`

`

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 750px;
  margin: auto;
`

export const Title = styled.h3`
  text-align: center;
  color: ${({theme}) => theme.palette.primary.main};

  font-weight: 800;
  font-size: 1.125rem;

  line-height: 1.15;

  ${({theme}) => theme.breakpoints.up("sm")} {
    font-size: 1.75rem
  }

  ${({theme}) => theme.breakpoints.up("md")} {
    font-size: 1.95rem;
  }

`

export const Content = styled.div`
  p {
    text-align: center;
    color: ${({theme}) => theme.palette.primary.main};;

    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.25;

    ${({theme}) => theme.breakpoints.up("sm")} {
      font-size: 1rem;
    }

    ${({theme}) => theme.breakpoints.up("md")} {
      font-size: 1.2rem;
    }

    ${({theme}) => theme.breakpoints.up("lg")} {
      font-size: 1.25rem;
    }
  }
`