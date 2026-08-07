import React, { useRef, useState } from "react"
import * as S from "./distinctive-squeeze-page-form.styles"
import { graphql, useStaticQuery } from "gatsby"
import { Grid } from "@mui/material"
import { FormProvider, useForm } from "react-hook-form"
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
import WestIcon from "@mui/icons-material/West"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger)

const DistinctiveSqueezePageForm = ({
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
      runner: file(
        relativePath: { eq: "distinctive-squeeze-page/runner.webp" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      bgRunner: file(
        relativePath: { eq: "distinctive-squeeze-page/bg-runner.webp" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      buttonA: file(
        relativePath: { eq: "distinctive-squeeze-page/button-a.webp" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      buttonB: file(
        relativePath: { eq: "distinctive-squeeze-page/button-b.webp" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      logo: file(relativePath: { eq: "squeeze-page/branded-logo.webp" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      formBorder: file(relativePath: { eq: "squeeze-page/form-border.webp" }) {
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
      conversion_type: "Download (Distinctiveness)",
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
      trackPDFDownload(pdfName || "Brand Distinctiveness PDF Download")
      // Track Meta Pixel Lead Form Submission
      trackLeadFormSubmission("Brand Distinctiveness PDF Download Form")

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
        {/*<S.BgImage className="desktop" img={staticQuery.desktopBg} />*/}
        {/*<S.BgImage className="mobile" img={staticQuery.mobileBg} />*/}
        <S.InnerWrapper className={showForm ? "flex-column" : ""}>
          <S.InnerBg className="desktop" img={staticQuery.innerBg} />
          <S.InnerBg className="mobile" img={staticQuery.mobileInnerBg} />
          <S.HomeLink url={"/"}>
            <S.Logo img={staticQuery.logo} />
          </S.HomeLink>
          <S.BgRunner img={staticQuery.bgRunner} />
          <S.TrophySticker src="/trophy.gif" />
          <S.FlagLeftSticker src="/flag-left.gif" />
          <S.FlagRightSticker src="/flag-right.gif" />
          <S.DartsGiftSticker src="/darts.gif" />

          {/*{!showForm ? (*/}
          <S.StepWrapper className={scrolledHalf ? "desappear" : "appear"}>
            <S.RunnerSticker img={staticQuery.runner} />
            <S.ContentWrapper>
              <S.Title variant="h1">{title}</S.Title>
              <S.Subtitle>{subtitle}</S.Subtitle>
              <S.ButtonWrapper>
                <S.BgButton img={staticQuery.buttonA} />
                <S.Button onClick={goToNextSection}>
                  Download the eBook
                </S.Button>
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
                            <S.BgButton img={staticQuery.buttonB} />
                            <S.Button
                              loading={isLoading}
                              type="submit"
                              className="download"
                            >
                              Download now
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
          </S.StepWrapper>
          <S.FooterWrapper>
            <S.FooterText>© BRANDED {new Date().getFullYear()}</S.FooterText>
            <S.Link url="/branded-privacy-policy" target="_blank">
              Privacy Policy
            </S.Link>
          </S.FooterWrapper>
          {/*)}*/}
        </S.InnerWrapper>
      </S.SecondWrapper>
    </S.Wrapper>
  )
}

export default DistinctiveSqueezePageForm
