import React, { useRef, useState } from "react"
import * as S from "./squeeze-page-form.styles"
import { graphql, useStaticQuery } from "gatsby"
import { ColorsStickerMb } from "./squeeze-page-form.styles"
import { Alert, Grid } from "@mui/material"
import { FormProvider, useForm } from "react-hook-form"
import CustomInput from "../../components/custom-input/custom-input.component"
import {
  detectHubspotErrorSubmission,
  downloadFile,
  emailRegex,
  getLeadTrafficToHubspot,
  isBrowser,
  submitContactForm,
  submitHubspotForm,
  updateHubspotContact,
} from "../../utils/utils"
import {
  gtagAdwordsConversion,
  gtagFormSubmission,
} from "../../utils/gtag-utils"
import { linkedinConversionTrack } from "../../utils/linkedin-utils"
import { trackPDFDownload, trackLeadFormSubmission } from "../../utils/meta-pixel-utils"
import CustomLink from "../../components/custom-link/custom-link.component"
import WestIcon from "@mui/icons-material/West"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger)

const SqueezePageForm = ({
  title,
  subtitle,
  itemsTitle,
  items,
  guideFile,
  wpFormId,
  pdfName,
}) => {
  const staticQuery = useStaticQuery(graphql`
    query {
      desktopBg: file(relativePath: { eq: "squeeze-page/desktop-bg.webp" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      mobileBg: file(relativePath: { eq: "squeeze-page/mobile-bg.webp" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      innerBg: file(relativePath: { eq: "squeeze-page/inner-border.webp" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      mobileInnerBg: file(
        relativePath: { eq: "squeeze-page/mobile-inner-border.webp" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      buttonImg: file(relativePath: { eq: "squeeze-page/button-bg.webp" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      logo: file(relativePath: { eq: "squeeze-page/branded-logo.webp" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      penSticker: file(relativePath: { eq: "squeeze-page/pen-sticker.webp" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      notesSticker: file(relativePath: { eq: "squeeze-page/notes.webp" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      toySticker: file(relativePath: { eq: "squeeze-page/toy-sticker.webp" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      cardsSticker: file(
        relativePath: { eq: "squeeze-page/cards-sticker.webp" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      colorsSticker: file(
        relativePath: { eq: "squeeze-page/colors-sticker.webp" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      bulbSticker: file(relativePath: { eq: "squeeze-page/bulb-sticker.webp" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      checkSticker: file(
        relativePath: { eq: "squeeze-page/check-sticker.webp" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      errorSticker: file(
        relativePath: { eq: "squeeze-page/error-sticker.webp" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      exclamationSticker: file(
        relativePath: { eq: "squeeze-page/exclamation-sticker.webp" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      colorsStickerMb: file(
        relativePath: { eq: "squeeze-page/colors-mb.webp" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      formBorder: file(relativePath: { eq: "squeeze-page/form-border.webp" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      doSticker: file(relativePath: { eq: "squeeze-page/do-sticker.webp" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      dontSticker: file(relativePath: { eq: "squeeze-page/dont-sticker.webp" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      drawSticker: file(relativePath: { eq: "squeeze-page/draw-sticker.webp" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `)

  const [showForm, setShowForm] = React.useState(false)
  const methods = useForm()
  const { handleSubmit, reset } = methods
  const [isLoading, setIsLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const guideLocalFile = guideFile?.localFile?.publicURL
  const [scrolledHalf, setScrolledHalf] = useState(false)

  const bgRef = useRef(null)

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: bgRef.current,
      start: "25% top",
      end: "bottom bottom",
      onEnter: () => setScrolledHalf(true),
      onLeaveBack: () => setScrolledHalf(false),
    })
  }, [])
  const goToNextSection = () => {
    if (isBrowser) {
      setScrolledHalf(true)
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      })
    }
  }

  const goToStartSection = () => {
    if (isBrowser) {
      setScrolledHalf(false)

      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const onSubmit = async data => {
    setErrorMessage("")
    setSuccessMessage("")
    setIsLoading(true)

    const formId = "d28c2609-5bef-46f6-8a57-4d9a44d33c1b"
    const portalId = "241898226"

    const auxData = {
      ...data,
      lead_traffic: getLeadTrafficToHubspot(),
      conversion_type: "Download (Positioning)",
      hs_lead_status: "NEW",
      lead_type: "Download Lead",
      lifecyclestage: "subscriber",
    }

    const formData = new FormData()
    formData.append("your-name", data.full_name)
    formData.append("your-email", data.email)
    formData.append("your-company", data.company)
    formData.append("pdf-name", pdfName)

    const formRes = await submitContactForm(wpFormId, formData)

    const res = await submitHubspotForm(auxData, portalId, formId)

    if (res && res?.data) {
      if (detectHubspotErrorSubmission(res, setErrorMessage)) {
        setIsLoading(false)
        disappearAlert()
        return
      }
      setSuccessMessage(res?.data?.inlineMessage)
      setTimeout(() => {
        downloadFile(guideLocalFile)
      })
      gtagFormSubmission("Individual Insight PDF Download Form ")
      linkedinConversionTrack(12868186)
      gtagAdwordsConversion("AW-11137911214/ch7kCIvS564YEK6T_L4p")
      // Track Meta Pixel PDF Download
      trackPDFDownload(pdfName || "Brand Positioning PDF Download")
      // Track Meta Pixel Lead Form Submission
      trackLeadFormSubmission("Brand Positioning PDF Download Form")

      setTimeout(async () => {
        await updateHubspotContact(data?.email, {
          properties: {
            hubspot_owner_id: 77052911,
          },
        })
      }, 3000)
      reset({
        full_name: "",
        email: "",
        company: "",
      })
    } else {
      setErrorMessage(
        "There was an error with your submission. Please try again.",
      )
    }
    setIsLoading(false)
    disappearAlert()
  }

  const disappearAlert = () => {
    setTimeout(() => {
      setSuccessMessage("")
    }, 5000)
  }

  return (
    <S.Wrapper ref={bgRef}>
      <S.SecondWrapper>
        <S.BgImage className="desktop" img={staticQuery.desktopBg} />
        <S.BgImage className="mobile" img={staticQuery.mobileBg} />
        <S.InnerWrapper className={showForm ? "flex-column" : ""}>
          <S.InnerBg className="desktop" img={staticQuery.innerBg} />
          <S.InnerBg className="mobile" img={staticQuery.mobileInnerBg} />
          <S.HomeLink url={"/"}>
            <S.Logo img={staticQuery.logo} />
          </S.HomeLink>
          {/*{!showForm ? (*/}
          <S.StepWrapper className={scrolledHalf ? "desappear" : "appear"}>
            <S.PenSticker img={staticQuery.penSticker} />
            <S.NotesSticker img={staticQuery.notesSticker} />
            <S.ToySticker img={staticQuery.toySticker} />
            <S.CardsSticker img={staticQuery.cardsSticker} />
            <S.BulbSticker img={staticQuery.bulbSticker} />
            <S.ColorsSticker img={staticQuery.colorsSticker} />
            <S.ColorsStickerMb img={staticQuery.colorsStickerMb} />
            <S.CheckSticker img={staticQuery.checkSticker} />
            <S.ErrorSticker img={staticQuery.errorSticker} />
            <S.ExclamationSticker img={staticQuery.exclamationSticker} />
            <S.ContentWrapper>
              <S.Title variant="h1">{title}</S.Title>
              <S.Subtitle>{subtitle}</S.Subtitle>
              <S.ButtonWrapper>
                <S.BgButton img={staticQuery.buttonImg} />
                <S.Button onClick={goToNextSection}>Get the download</S.Button>
              </S.ButtonWrapper>
            </S.ContentWrapper>
          </S.StepWrapper>
          {/*) : (*/}
          <S.StepWrapper className={scrolledHalf ? "appear" : "desappear"}>
            <S.DrawSticker className="desktop" img={staticQuery.drawSticker} />
            <S.GoBack onClick={goToStartSection}>
              <WestIcon />
              Go Back
            </S.GoBack>
            <S.FormWrapper>
              <S.DrawSticker className="mobile" img={staticQuery.drawSticker} />
              <S.DoSticker img={staticQuery.doSticker} />
              <S.DontSticker img={staticQuery.dontSticker} />
              <S.FormBorder img={staticQuery.formBorder} />
              <Grid container spacing={{ md: 0, xs: 2.5 }}>
                <Grid item md={6} xs={12}>
                  <S.ItemContent>
                    <S.ItemTitle>{itemsTitle}</S.ItemTitle>
                    <S.ItemsWrapper>
                      {items.map(({ item }, index) => (
                        <S.Item key={index}>{item}</S.Item>
                      ))}
                    </S.ItemsWrapper>
                  </S.ItemContent>
                </Grid>
                <Grid item md={6} xs={12}>
                  <S.ItemContent className="form">
                    <S.ItemTitle>Enter Details:</S.ItemTitle>
                    <S.Form>
                      <FormProvider {...methods}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                          <S.InputsWrapper>
                            <S.InputWrapper>
                              <S.Label>Full Name: </S.Label>
                              <S.Input
                                name="full_name"
                                validations={{ required: true }}
                              />
                            </S.InputWrapper>
                            <S.InputWrapper>
                              <S.Label>Company Name: </S.Label>
                              <S.Input
                                name="company"
                                validations={{ required: true }}
                              />
                            </S.InputWrapper>
                            <S.InputWrapper>
                              <S.Label>Email Address: </S.Label>
                              <S.Input
                                name="email"
                                type="email"
                                validations={{
                                  required: true,
                                  pattern: emailRegex,
                                }}
                              />
                            </S.InputWrapper>
                          </S.InputsWrapper>
                          <S.ButtonWrapper className="download">
                            <S.BgButton img={staticQuery.buttonImg} />
                            <S.Button
                              loading={isLoading}
                              type="submit"
                              className="download"
                            >
                              Download here
                            </S.Button>
                          </S.ButtonWrapper>
                          {errorMessage && (
                            <S.CustomAlert severity="error">
                              {errorMessage}
                            </S.CustomAlert>
                          )}
                          {successMessage && (
                            <S.CustomAlert severity="success">
                              {successMessage}
                            </S.CustomAlert>
                          )}
                        </form>
                      </FormProvider>
                    </S.Form>
                  </S.ItemContent>
                </Grid>
              </Grid>
            </S.FormWrapper>
            <S.FooterWrapper>
              <S.FooterText>© BRANDED {new Date().getFullYear()}</S.FooterText>
              <S.Link url="/branded-privacy-policy" target="_blank">
                Privacy Policy
              </S.Link>
            </S.FooterWrapper>
          </S.StepWrapper>
          {/*)}*/}
        </S.InnerWrapper>
      </S.SecondWrapper>
    </S.Wrapper>
  )
}

export default SqueezePageForm
