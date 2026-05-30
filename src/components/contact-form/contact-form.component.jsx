import React, { useRef, useState } from "react"
import * as S from "./contact-form.styles"
import { FormProvider, useForm } from "react-hook-form"
import { Alert, Grid } from "@mui/material"
import CustomInput from "../custom-input/custom-input.component"
import {
  detectHubspotErrorSubmission,
  emailRegex,
  getLeadTrafficToHubspot,
  submitContactForm,
  submitHubspotForm,
  updateHubspotContact,
} from "../../utils/utils"
import CustomButton from "../custom-button/custom-button.component"
import ReCAPTCHA from "react-google-recaptcha"
import {
  gtagAdwordsConversion,
  gtagFormSubmission,
} from "../../utils/gtag-utils"
import { linkedinConversionTrack } from "../../utils/linkedin-utils"
import { trackLeadFormSubmission } from "../../utils/meta-pixel-utils"
import SelectFormOption from "../select-form-option/select-form-option.component"
import { CONTACT_FORM_OPTIONS } from "../../utils/constants"
import { useTranslation } from "../../hooks/useTranslation"


const ContactForm = () => {
  const { t } = useTranslation()
  const methods = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)
  const [successMessage, setSuccessMessage] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [optionSelected, setOptionSelected] = useState("")
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

    const formId = "4bfef193-e704-4a63-864b-effe87591194"
    const portalId = "241898226"

    const auxData = {
      ...data,
      service: optionSelected,
      lead_traffic: getLeadTrafficToHubspot(),
      conversion_type: "Website Contact Form",
      hs_lead_status: "NEW",
      lead_type: "Lead",
      lifecyclestage: "lead",
    }

    const res = await submitHubspotForm(auxData, portalId, formId)

    if (res && res?.data) {
      if (detectHubspotErrorSubmission(res, setErrorMessage)) {
        setIsLoading(false)
        disappearAlert()
        return
      }
      setSuccessMessage(res?.data?.inlineMessage)

      const formData = new FormData()
      formData.append("service", optionSelected)
      formData.append("full_name", `${data.firstname} ${data.lastname}`)
      formData.append("email", data.email)
      formData.append("phone", data.phone)
      formData.append("message", data.message)
      formData.append("budget", data.budget)

      const contactFormRes = await submitContactForm("10", formData)

      gtagFormSubmission("Contact Form")
      gtagAdwordsConversion("AW-11137911214/Cv-GCKXkt64YEK6T_L4p")
      linkedinConversionTrack(12868098)
      // Track Meta Pixel Lead Form Submission
      trackLeadFormSubmission("Contact Form")
      setTimeout(async () => {
        await updateHubspotContact(data?.email, {
          properties: {
            hubspot_owner_id: 77052911,
          },
        })
      }, 3000)
      reset()
    } else {
      setErrorMessage(
        t("There was an error with your submission. Please try again."),
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

  // Helper function to get translated options
  const getTranslatedOptions = () => {
    return {
      CLIENT: {
        value: CONTACT_FORM_OPTIONS.CLIENT.value,
        label: t(CONTACT_FORM_OPTIONS.CLIENT.label),
      },
      SERVICES: {
        value: CONTACT_FORM_OPTIONS.SERVICES.value,
        label: t(CONTACT_FORM_OPTIONS.SERVICES.label),
      },
      CAREER: {
        value: CONTACT_FORM_OPTIONS.CAREER.value,
        label: t(CONTACT_FORM_OPTIONS.CAREER.label),
      },
      INFO: {
        value: CONTACT_FORM_OPTIONS.INFO.value,
        label: t(CONTACT_FORM_OPTIONS.INFO.label),
      },
    }
  }

  const translatedOptions = getTranslatedOptions()

  return (
    <S.FormWrapper>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={1.26}>
            <Grid item xs={12}>
              <SelectFormOption
                required
                title={t("How can we help you?")}
                options={translatedOptions}
                labelKey="label"
                valueKey="value"
                value={optionSelected}
                setValue={setOptionSelected}
                className={optionSelected !== "" ? "selected" : ""}
              />
            </Grid>
            {optionSelected !== "" && (
              <>
                <Grid item xs={12}>
                  <CustomInput
                    style="contact"
                    name="firstname"
                    placeholder={t("First Name")}
                    validations={{ required: true }}
                    autocomplete="given-name"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <CustomInput
                    style="contact"
                    name="lastname"
                    placeholder={t("Last Name")}
                    validations={{ required: true }}
                    variant="outlined"
                    autocomplete="family-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <CustomInput
                    style="contact"
                    name="email"
                    placeholder={t("Email")}
                    type="email"
                    validations={{ required: true, pattern: emailRegex }}
                    variant="outlined"
                    autocomplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <CustomInput
                    style="contact"
                    name="phone"
                    placeholder={t("Phone")}
                    validations={{ required: true }}
                    type="tel"
                  />
                </Grid>
                <Grid item xs={12}>
                  <CustomInput
                    style="contact"
                    name="message"
                    placeholder={
                      optionSelected === CONTACT_FORM_OPTIONS.SERVICES.value
                        ? t("Tell us about your company/brand and what services you’re interested in from BRANDED.")
                        : t("How can we help?")
                    }
                    multiline
                    rows={6}
                    validations={{ required: true }}
                  />
                </Grid>
                {optionSelected === CONTACT_FORM_OPTIONS.SERVICES.value && (
                  <Grid item xs={12}>
                    <CustomInput
                      style="contact"
                      name="budget"
                      placeholder={t("Budget*")}
                      validations={{ required: true }}
                    />
                    <S.HelperText>
                      {t("All of our projects at BRANDED are bespoke. Understanding a ballpark budget enables us to deliver the most effective solution for your project.")}
                    </S.HelperText>
                  </Grid>
                )}
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
                      <S.CaptchaError>{t("Please enter captcha")}</S.CaptchaError>
                    )}
                  </S.TermsDiv>
                </Grid>
                <Grid item xs={12}>
                  <S.ButtonWrapper>
                    <CustomButton
                      className="light"
                      type="submit"
                      loading={isLoading}
                      fullWidth
                    >
                      {t("Submit")}
                    </CustomButton>
                  </S.ButtonWrapper>
                </Grid>
              </>
            )}
          </Grid>
        </form>
      </FormProvider>
    </S.FormWrapper>
  )
}

export default ContactForm