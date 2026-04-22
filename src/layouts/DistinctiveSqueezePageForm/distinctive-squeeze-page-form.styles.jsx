import styled from "@emotion/styled"
import CustomBgImage from "../../components/custom-bg-image/custom-bg-image.component"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import CustomImage from "../../components/custom-image/custom-image.component"
import { Alert, Typography } from "@mui/material"
import CustomButton from "../../components/custom-button/custom-button.component"
import CustomLink from "../../components/custom-link/custom-link.component"
import CustomInput from "../../components/custom-input/custom-input.component"

export const Wrapper = styled(SectionWrapper)`
  padding: 0;
  width: 100%;
  height: calc(var(--viewport-height, 100vh) * 2);
  position: relative;
  overflow: hidden;
  background-color: #f3f3f3;
`

export const SecondWrapper = styled.div`
  height: var(--viewport-height, 100vh) !important;
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  max-height: var(--viewport-height, 100vh) !important;
`

export const StepWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 0 !important;
  left: 0 !important;
  position: fixed;
  opacity: 0;
  transition: 0.4s ease all;

  &.dissapear {
    opacity: 0;
    z-index: -1;
    transition: 0.4s ease all;
  }

  &.appear {
    opacity: 1;
    z-index: 8;
    transition: 0.4s ease all;
  }
`

export const BgImage = styled(CustomImage)`
  width: 100%;
  height: var(--viewport-height, 100vh);
  z-index: 1;
  img {
    object-fit: fill !important;
  }

  &.desktop {
    display: none;

    ${({ theme }) => theme.breakpoints.up("md")} {
      display: block;
    }
  }

  &.mobile {
    display: block;

    ${({ theme }) => theme.breakpoints.up("md")} {
      display: none;
    }
  }
`

export const InnerWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;

  width: calc(100% - 2rem);
  height: calc(var(--viewport-height, 100vh) - 2rem);
  ${({ theme }) => theme.breakpoints.up("md")} {
    width: calc(100% - 4rem);
    height: calc(var(--viewport-height, 100vh) - 4rem);
  }

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  &.flex-column {
    justify-content: space-between;
  }
`

export const InnerBg = styled(CustomImage)`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
  img {
    object-fit: fill !important;
  }

  &.desktop {
    display: none;

    ${({ theme }) => theme.breakpoints.up("md")} {
      display: block;
    }
  }

  &.mobile {
    display: block;

    ${({ theme }) => theme.breakpoints.up("md")} {
      display: none;
    }
  }
`

export const ContentWrapper = styled.div`
  position: relative;
  z-index: 6;
  max-width: 950px;
  margin: auto;
  padding: 0 1rem;

  ${({ theme }) => theme.breakpoints.up("lg")} {
    margin: auto 0 9rem;
  }
`

export const Title = styled(Typography)`
  color: ${({ theme }) => theme.palette.primary.main};
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 0.5rem;
  text-align: center;
  font-size: 1.63888rem;
  ${({ theme }) => theme.breakpoints.up("sm")} {
    font-size: 2.75rem;
    margin-bottom: 1rem;
  }
  ${({ theme }) => theme.breakpoints.up("lg")} {
    font-size: 4.5rem;
  }
`

export const Subtitle = styled(Typography)`
  color: ${({ theme }) => theme.palette.primary.main};
  font-style: normal;
  font-weight: 300;
  max-width: 900px;
  margin: 0 auto 1rem;
  font-size: 1.23rem;
  line-height: 1.3rem;
  text-align: center;
  ${({ theme }) => theme.breakpoints.up("sm")} {
    font-size: 2rem;
    line-height: 2.25rem;
    //max-width: 950px;
    margin: 0 auto 3.5rem;
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 2.25rem;
    line-height: 2.5rem;
    //max-width: 950px;
    margin: 0 auto 3.5rem;
  }

  ${({ theme }) => theme.breakpoints.up("lg")} {
    font-size: 2.75rem;
    line-height: 3rem;
    //max-width: 950px;
    margin: 0 auto 3.5rem;
  }
`

export const BgButton = styled(CustomImage)`
  width: 100%;
  height: 100%;
  max-width: 460px;
  position: absolute;
  img {
    object-fit: fill !important;
  }
`

export const Button = styled(CustomButton)`
  color: #fff;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2.25rem;
  position: relative;
  margin: auto;
  display: block;
  width: 100%;
  padding: 0.15rem;
  border-radius: 8px;
  background-color: #002daa;
  ${({ theme }) => theme.breakpoints.up("sm")} {
    font-size: 1.5rem;
    padding: 1rem;
  }

  ${({ theme }) => theme.breakpoints.up("lg")} {
    font-size: 2rem;
  }

  &:hover {
    transform: none;
    background-color: #002daa;
  }

  &.download {
    ${({ theme }) => theme.breakpoints.up("sm")} {
      padding: 0.75rem;
      font-size: 1.3rem;
    }
    display: inline-flex;
  }
`

export const ButtonWrapper = styled.div`
  position: relative;
  padding: 0.5rem;
  max-width: 168px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s ease-in-out all;
  margin: 0 auto;

  &.download {
    margin-top: 1.5rem;
  }
  &:hover {
    transition: 0.2s ease-in-out all;
    transform: scale(1.05);
  }
  ${({ theme }) => theme.breakpoints.up("sm")} {
    max-width: 350px;
  }

  ${({ theme }) => theme.breakpoints.up("lg")} {
    max-width: 460px;
  }
`

export const HomeLink = styled(CustomLink)`
  position: absolute;
  top: 1.5rem;
  z-index: 10;

  ${({ theme }) => theme.breakpoints.up("sm")} {
    top: 2.5rem;
  }
`

export const Logo = styled(CustomImage)`
  position: relative;
  z-index: 4;
  width: 75px;

  ${({ theme }) => theme.breakpoints.up("sm")} {
    //margin-top: 2.5rem;

    width: 165px;
  }
`

export const RunnerSticker = styled(CustomImage)`
  //width: 177px;
  z-index: 4;
  position: absolute;
  width: 200%;
  top: 4rem;

  ${({ theme }) => theme.breakpoints.up("sm")} {
    width: 150%;
    top: 0;
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    width: 125%;
    left: 0;
    top: 0;
  }

  ${({ theme }) => theme.breakpoints.up("lg")} {
    width: 100%;
  }
`

export const BgRunner = styled(CustomImage)`
  position: absolute;
  z-index: 2;
  top: 50%;
  width: 80%;
  left: 15%;
  transform: translateY(-50%);
`

export const TrophySticker = styled.img`
  position: absolute;
  z-index: 1;
  left: -0.5rem;
  top: 1.5rem;
  width: 85px;

  ${({ theme }) => theme.breakpoints.up("sm")} {
    left: -0.5rem;
    top: 2.5rem;
    width: 150px;
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    width: 200px;
  }

  ${({ theme }) => theme.breakpoints.up("lg")} {
    width: 300px;
  }
`

export const FlagLeftSticker = styled.img`
  position: absolute;
  z-index: 1;
  width: 130px;
  left: -1rem;
  bottom: -2rem;

  ${({ theme }) => theme.breakpoints.up("sm")} {
    width: 230px;
    left: -1rem;
    bottom: -2rem;
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    left: 0;
    bottom: -3rem;
    width: 275px;
  }

  ${({ theme }) => theme.breakpoints.up("lg")} {
    width: 375px;
  }
`

export const DartsGiftSticker = styled.img`
  position: absolute;
  z-index: 1;
  width: 100px;
  right: 0;
  bottom: -1rem;

  ${({ theme }) => theme.breakpoints.up("sm")} {
    width: 200px;
    right: 0;
    bottom: -1rem;
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    width: 225px;
    right: 1.5rem;
    bottom: -2rem;
  }

  ${({ theme }) => theme.breakpoints.up("lg")} {
    width: 350px;
    right: 2rem;
    bottom: -2rem;
  }
`

export const ColorsStickerMb = styled(CustomImage)`
  display: block;
  position: absolute;
  z-index: 4;
  width: 100px;
  right: 2px;
  top: 18%;
  ${({ theme }) => theme.breakpoints.up("md")} {
    display: none;
  }
`

export const FlagRightSticker = styled.img`
  position: absolute;
  z-index: 1;
  width: 130px;
  top: -0.5rem;
  right: -2rem;

  ${({ theme }) => theme.breakpoints.up("sm")} {
    width: 230px;
    top: -0.5rem;
    right: -2rem;
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    width: 275px;
    top: -4rem;
    right: -2rem;
  }

  ${({ theme }) => theme.breakpoints.up("lg")} {
    top: -5rem;
    right: -2rem;
    width: 350px;
  }

  @media (max-height: 700px) and (min-width: 599px) {
  }
`

export const CheckSticker = styled(CustomImage)`
  position: absolute;
  z-index: 4;
  width: 45px;
  top: 1rem;
  right: 1rem;

  ${({ theme }) => theme.breakpoints.up("md")} {
    transform: translateX(-50%);
    width: 5%;
    top: 4rem;
    left: 35%;
  }

  ${({ theme }) => theme.breakpoints.up("lg")} {
    width: 92px;
  }

  @media (max-height: 700px) and (min-width: 599px) {
    top: 0px;
    left: 27%;
  }
`

export const ErrorSticker = styled(CustomImage)`
  position: absolute;
  z-index: 4;
  width: 47px;
  left: 9%;
  bottom: 20%;
  transform: translateY(-50%);

  ${({ theme }) => theme.breakpoints.up("md")} {
    width: 80px;
    bottom: unset;
    left: unset;
    right: 9%;
    top: 45%;
    transform: translateY(-50%);
  }

  ${({ theme }) => theme.breakpoints.up("lg")} {
    width: 102px;
    right: 12%;
  }
`

export const ExclamationSticker = styled(CustomImage)`
  position: absolute;
  z-index: 4;
  width: 27px;
  left: 2rem;
  top: 13%;
  transform: translateY(-50%);

  ${({ theme }) => theme.breakpoints.up("md")} {
    width: 40px;
    left: 10%;
    top: 55%;
  }

  ${({ theme }) => theme.breakpoints.up("lg")} {
    width: 58px;
    left: 17%;
  }
`

export const FormWrapper = styled.div`
  max-width: 917px;
  width: 100%;
  padding: 0 2.5rem 0;
  position: relative;
  z-index: 5;
  display: flex;
  margin: auto;
  background-color: #f5f5f5;

  ${({ theme }) => theme.breakpoints.up("md")} {
    padding: 0 2.75rem 4.4rem;
    height: 100%;

    max-height: 453px;
  }

  .MuiGrid-container {
    ${({ theme }) => theme.breakpoints.up("md")} {
      margin-top: auto;
      padding-top: 3.5rem;
    }
  }
`

export const FormBorder = styled(CustomImage)`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  display: none;
  img {
    object-fit: fill !important;
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    display: block;
  }
`

export const ItemContent = styled.div`
  position: relative;
  z-index: 6;

  &.form {
    ${({ theme }) => theme.breakpoints.up("md")} {
      margin-left: 3.5rem;
    }
  }
  border: 2px solid ${({ theme }) => theme.palette.primary.main};
  padding: 1.8rem 1.2rem;
  border-radius: 15px;

  ${({ theme }) => theme.breakpoints.up("md")} {
    padding: 0;
    border: none;
  }
`

export const ItemTitle = styled(Typography)`
  color: ${({ theme }) => theme.palette.primary.main};
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 1.375rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1rem;
  margin-bottom: 1rem;

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 2.4rem;
    line-height: 2.7rem;

    margin-bottom: 2.25rem;
  }
`

export const Item = styled(Typography)`
  color: ${({ theme }) => theme.palette.primary.main};
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 300;
  line-height: 1rem;
  padding-right: 1.5rem;

  ${({ theme }) => theme.breakpoints.up("sm")} {
    font-size: 0.875rem;
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 1.3rem;
    line-height: 1.4rem;
  }
`

export const ItemsWrapper = styled.div`
  gap: 0.75rem;
  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.breakpoints.up("md")} {
    gap: 2rem;
  }
`

export const FooterWrapper = styled.div`
  color: ${({ theme }) => theme.palette.primary.main};
  display: inline-flex;
  bottom: 1.25rem;
  align-items: center;
  gap: 1rem;
  position: absolute;
  z-index: 10;

  ${({ theme }) => theme.breakpoints.up("md")} {
    bottom: 2.5rem;
  }
`

export const FooterText = styled(Typography)`
  line-height: 0.78rem;

  font-size: 0.5rem;
  font-style: normal;
  font-weight: 300;
  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 0.75rem;
  }
`

export const Link = styled(CustomLink)`
  text-decoration: underline;
  font-size: 0.5rem;
  font-style: normal;
  font-weight: 300;
  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 0.75rem;
  }
`

export const Form = styled.div``

export const InputWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  width: 100%;
`

export const Label = styled(Typography)`
  font-style: normal;
  font-weight: 300;
  text-wrap: nowrap;
  color: ${({ theme }) => theme.palette.primary.main};
  font-size: 0.875rem;
  line-height: 1rem;

  ${({ theme }) => theme.breakpoints.up("sm")} {
    font-size: 0.875rem;
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 1.3rem;
    line-height: 1.4rem;
  }
`

export const Input = styled(CustomInput)`
  .MuiInputBase-input {
    background-color: transparent;
    color: ${({ theme }) => theme.palette.primary.main};
    font-size: 21px;
    ${({ theme }) => theme.breakpoints.down("md")} {
      padding-top: 0;
      font-size: 0.875rem;
      padding-bottom: 0;
    }
  }
  width: 100%;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    bottom: 4px;
    left: 4px;
    width: 98%;
    height: 1px;
    background-color: ${({ theme }) => theme.palette.primary.main};
  }

  .MuiFormHelperText-root.Mui-error {
    color: red;
    position: absolute;
    z-index: 7;
    bottom: -12px;
    font-size: 0.65rem;
    text-wrap: nowrap;

    ${({ theme }) => theme.breakpoints.up("md")} {
      bottom: -16px;
      font-size: 0.75rem;
    }
  }
`

export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  ${({ theme }) => theme.breakpoints.up("md")} {
    gap: 1rem;
  }
`

export const DoSticker = styled(CustomImage)`
  position: absolute;
  z-index: 7;
  width: 87px;
  top: -45px;
  left: 3%;

  ${({ theme }) => theme.breakpoints.up("md")} {
    width: 159px;
    top: -70px;
    left: 15%;
    z-index: 4;
  }

  @media (max-height: 670px) {
    width: 65px;
    top: -20px;
  }
`

export const DontSticker = styled(CustomImage)`
  position: absolute;
  z-index: 7;
  width: 100px;
  bottom: -40px;
  right: 8%;

  ${({ theme }) => theme.breakpoints.up("md")} {
    width: 205px;
    bottom: -70px;
    left: 15%;
    z-index: 4;
  }

  @media (max-height: 670px) {
    width: 80px;
  }
`

export const DrawSticker = styled(CustomImage)`
  position: absolute;
  z-index: 7;
  width: 184px;
  top: 13%;
  right: -24px;

  ${({ theme }) => theme.breakpoints.up("md")} {
    width: 362px;
    top: 75px;
    right: -49px;
    z-index: 7;
  }

  &.desktop {
    display: none;
    ${({ theme }) => theme.breakpoints.up("md")} {
      display: block;
    }
  }

  &.mobile {
    top: -30px;
    display: block;
    ${({ theme }) => theme.breakpoints.up("md")} {
      display: none;
    }
  }
`

export const CustomAlert = styled(Alert)`
  margin-top: 1rem;
`

export const GoBack = styled(Typography)`
  color: ${({ theme }) => theme.palette.primary.main};
  position: absolute;
  top: 20px;
  left: 40px;
  cursor: pointer;
  font-size: 0.75rem;
  display: flex;
  align-items: center;
  gap: 5px;
  z-index: 8;

  svg {
    font-size: 14px;
  }

  ${({ theme }) => theme.breakpoints.up("sm")} {
    top: 40px;
    font-size: 0.875rem;
    svg {
      font-size: 16px;
    }
  }
`
