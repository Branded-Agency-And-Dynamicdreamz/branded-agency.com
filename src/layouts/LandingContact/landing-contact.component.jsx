import React, { useRef, useState } from "react"
import * as S from "./landing-contact.styles"
import parse from "html-react-parser"
import Container from "@mui/material/Container"
import { FormProvider, useForm } from "react-hook-form"
import {
  detectHubspotErrorSubmission,
  emailRegex,
  getLeadTrafficToHubspot,
  submitContactForm,
  submitHubspotForm,
  updateHubspotContact,
} from "../../utils/utils"
import { Alert, Grid } from "@mui/material"
import CustomInput from "../../components/custom-input/custom-input.component"
import CustomButton from "../../components/custom-button/custom-button.component"
import ReCAPTCHA from "react-google-recaptcha"
import { navigate } from "gatsby"
import {
  gtagAdwordsConversion,
  gtagFormSubmission,
} from "../../utils/gtag-utils"
import { linkedinConversionTrack } from "../../utils/linkedin-utils"

const LandingContact = ({ title, content }) => {
  const methods = useForm({ mode: "onBlur", reValidateMode: "onBlur" })
  const [isLoading, setIsLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState("")
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const { handleSubmit, reset } = methods

  const recaptchaRef = useRef()

  const handleCaptchaChange = () => {
    setError(false)
  }

  const onSubmit = async data => {
    setIsLoading(true)
    setSuccessMessage("")
    setErrorMessage("")

    const captchaVerification = recaptchaRef.current.getValue()
    if (captchaVerification === "") {
      setError(true)
      setIsLoading(false)
      return
    }

    const formId = "f35805f3-1af5-4081-87a9-d716c354b22a"
    const portalId = "241898226"

    const auxData = {
      ...data,
      lead_traffic: getLeadTrafficToHubspot(),
      conversion_type: "Website Contact Form (Irresistible branding)",
      hs_lead_status: "NEW",
      lead_type: "Lead",
      lifecyclestage: "lead",
    }
    const res = await submitHubspotForm(auxData, portalId, formId)

    const formData = new FormData()
    formData.append("fullName", `${data.firstname} ${data.lastname}`)
    formData.append("email", data.email)
    formData.append("phone", data.phone)
    formData.append("message", data.message)
    const contactFormRes = await submitContactForm("2019", formData)

    if (res && res?.data) {
      if (detectHubspotErrorSubmission(res, setErrorMessage)) {
        setIsLoading(false)
        return
      }
      setSuccessMessage(res?.data?.inlineMessage)

      gtagFormSubmission("Landing Page Form")
      gtagAdwordsConversion("AW-11137911214/ONr3CI2d57cYEK6T_L4p")
      setTimeout(async () => {
        await updateHubspotContact(data?.email, {
          properties: {
            hubspot_owner_id: 77052911,
          },
        })
      }, 3000)
      reset()
      await navigate("/thank-you/")
      setIsLoading(false)
    } else {
      setErrorMessage(
        "There was an error with your submission. Please try again.",
      )
    }
    setIsLoading(false)
  }

  return (
    <S.Wrapper id="form">
      <Container>
        <S.FormWrapper>
          <S.Title>{title}</S.Title>
          {content && <S.Content>{parse(content)}</S.Content>}
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={1.5}>
                <Grid item xs={12}>
                  <CustomInput
                    style="jobForm"
                    className="landing"
                    name="firstname"
                    placeholder="First Name"
                    validations={{ required: true }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <CustomInput
                    style="jobForm"
                    className="landing"
                    name="lastname"
                    placeholder="Last Name"
                    validations={{ required: true }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <CustomInput
                    style="jobForm"
                    className="landing"
                    name="email"
                    placeholder="Email"
                    validations={{ required: true, pattern: emailRegex }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <CustomInput
                    style="jobForm"
                    className="landing"
                    name="phone"
                    placeholder="Phone"
                    validations={{ required: true }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <CustomInput
                    style="jobForm"
                    className="landing"
                    name="message"
                    placeholder="Message"
                    multiline
                    rows={6}
                    validations={{ required: true }}
                  />
                </Grid>
                {successMessage && (
                  <Grid item xs={12}>
                    <Alert severity="success">{successMessage}</Alert>
                  </Grid>
                )}
                {errorMessage && (
                  <Grid item xs={12}>
                    <Alert severity="error">{errorMessage}</Alert>
                  </Grid>
                )}
                <Grid item xs={12}>
                  <S.TermsDiv>
                    <ReCAPTCHA
                      sitekey={process.env.GATSBY_GOOGLE_CAPTCHA_SITE_KEY}
                      size="normal"
                      render="explicit"
                      onChange={handleCaptchaChange}
                      className="g-recaptcha"
                      ref={recaptchaRef}
                    />
                    {error && (
                      <S.CaptchaError>Please enter captcha</S.CaptchaError>
                    )}
                  </S.TermsDiv>
                </Grid>
                <Grid item xs={12}>
                  <S.ButtonWrapper>
                    <CustomButton fullWidth type="submit" loading={isLoading}>
                      Submit
                    </CustomButton>
                  </S.ButtonWrapper>
                </Grid>
              </Grid>
            </form>
          </FormProvider>
        </S.FormWrapper>
      </Container>
    </S.Wrapper>
  )
}

export default LandingContact
