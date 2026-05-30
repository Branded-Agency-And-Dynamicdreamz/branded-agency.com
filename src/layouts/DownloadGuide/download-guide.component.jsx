import React, { useEffect, useRef, useState } from "react"
import * as S from "./download-guide.styles"
import CloseRoundedIcon from "@mui/icons-material/CloseRounded"
import { FormProvider, useForm } from "react-hook-form"
import {
  detectHubspotErrorSubmission,
  downloadFile,
  emailRegex,
  getLeadTrafficToHubspot,
  submitContactForm,
  submitHubspotForm,
  updateHubspotContact,
} from "../../utils/utils"
import { Alert, Collapse, Stack } from "@mui/material"
import ReCAPTCHA from "react-google-recaptcha"
import {
  gtagAdwordsConversion,
  gtagFormSubmission,
} from "../../utils/gtag-utils"
import { linkedinConversionTrack } from "../../utils/linkedin-utils"
import { trackPDFDownload, trackLeadFormSubmission } from "../../utils/meta-pixel-utils"
import useDownloadGuideContext from "../../context/download-guide.provider"
import parse from "html-react-parser"
import { useTranslation } from "../../hooks/useTranslation"

const DownloadGuide = ({
  buttonText = "Download Guide",
  guideFile,
  formId: wpFormId,
  conversionType,
  popupText,
  text,
  alternativeDesign,
  customContent,
  customPopupContent,
  pdfName,
  popupImg,
  leftImg,
  rightImg,
}) => {
  const { t } = useTranslation()
  const methods = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
  })

  const { isOpenForm, setIsOpenForm } = useDownloadGuideContext()
  const [isOpenForm2, setIsOpenForm2] = useState(false)
  const [isOpenPopup, setIsOpenPopup] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [error, setError] = useState(false)
  const recaptchaRef = useRef()
  const [successMessage, setSuccessMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const guideLocalFile = guideFile?.localFile?.publicURL

  const { handleSubmit, reset } = methods

  const handleCaptchaChange = () => {
    setError(false)
  }

  useEffect(() => {
    setTimeout(() => {
      setIsOpenPopup(true)
    }, 3000)
    setTimeout(() => {
      setIsOpenPopup(false)
    }, 12000)
  }, [])

  const onSubmit = async data => {
    setErrorMessage("")
    setSuccessMessage("")
    setIsLoading(true)

    const captchaVerification = recaptchaRef.current.getValue()
    if (captchaVerification === "") {
      setError(true)
      setIsLoading(false)
      return
    }

    const formId = "d28c2609-5bef-46f6-8a57-4d9a44d33c1b"
    const portalId = "241898226"

    const auxData = {
      ...data,
      lead_traffic: getLeadTrafficToHubspot(),
      conversion_type: conversionType ?? "Website Contact Form",
      hs_lead_status: "NEW",
      lead_type: "Download Lead",
      lifecyclestage: "subscriber",
    }

    const res = await submitHubspotForm(auxData, portalId, formId)

    const formData = new FormData()
    formData.append("your-name", `${data.firstname} ${data.lastname}`)
    formData.append("your-email", data.email)
    formData.append("your-company", data.company)
    formData.append("pdf-name", pdfName)

    const formRes = await submitContactForm(wpFormId, formData)

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
      linkedinConversionTrack(data.secondForm ? 12868178 : 12868186)
      gtagAdwordsConversion(
        data.secondForm
          ? "AW-11137911214/eZ_kCIvq564YEK6T_L4p"
          : "AW-11137911214/ch7kCIvS564YEK6T_L4p",
      )
      // Track Meta Pixel PDF Download
      trackPDFDownload(pdfName || "Individual Insight PDF Download")
      // Track Meta Pixel Lead Form Submission
      trackLeadFormSubmission("PDF Download Form")
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
        t("There was an error with your submission. Please try again."),
      )
    }
    setIsLoading(false)
    disappearAlert()
  }

  const handleDownloadBtn = () => {
    setIsOpenPopup(false)
    setIsOpenForm(true)
  }

  const disappearAlert = () => {
    setTimeout(() => {
      setSuccessMessage("")
    }, 5000)
  }

  const getForm = (hideCancel = false, secondForm = false) => (
    <FormProvider {...methods}>
      <S.StyledForm onSubmit={handleSubmit(onSubmit)}>
        {!secondForm && <S.Label>{t("Just fill out short form below:")}</S.Label>}
        <S.StyledInput
          name="firstname"
          placeholder={t("First name")}
          style="contact"
          className="download"
          validations={{ required: true }}
        />
        <S.StyledInput
          name="lastname"
          placeholder={t("Last name")}
          style="contact"
          className="download"
          validations={{ required: true }}
        />
        <S.StyledInput
          placeholder={t("Email")}
          name="email"
          type="email"
          style="contact"
          className="download"
          validations={{ required: true, pattern: emailRegex }}
        />
        <S.StyledInput
          placeholder={t("Company")}
          name="company"
          style="contact"
          className="download"
          validations={{ required: true }}
        />
        {secondForm && (
          <S.StyledInput
            name="secondForm"
            className="hidden"
            defaultValue={secondForm}
          />
        )}

        <S.TermsDiv>
          <ReCAPTCHA
            sitekey={process.env.GATSBY_GOOGLE_CAPTCHA_SITE_KEY}
            size="normal"
            render="explicit"
            onChange={handleCaptchaChange}
            className="g-recaptcha"
            ref={recaptchaRef}
          />
          {error && <S.CaptchaError>{t("Please enter captcha")}</S.CaptchaError>}
        </S.TermsDiv>
        {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
        {successMessage && <Alert severity="success">{successMessage}</Alert>}
        <S.ButtonsWrapper>
          <S.DownloadBtn
            fullWidth
            type="submit"
            className="light"
            loading={isLoading}
          >
            {secondForm ? t("Submit") : t("Download the Guide")}
          </S.DownloadBtn>
        </S.ButtonsWrapper>
      </S.StyledForm>
    </FormProvider>
  )

  return (
    <>
      {alternativeDesign ? (
        <>
          <S.GradientWrapper>
            <S.Gradient>
              <S.Content>
                <S.LeftImg className="desktop" img={leftImg} />
                <S.RightImg className="desktop" img={rightImg} />
                {customContent && parse(customContent)}
                <S.ImagesWrapper className="mobile">
                  <S.LeftImg img={leftImg} />
                  <S.RightImg img={rightImg} />
                </S.ImagesWrapper>
                <S.StyledBtn
                  onClick={() => setIsOpenForm2(!isOpenForm2)}
                  className="light second"
                >
                  <S.DownloadIcon />
                  {t(buttonText)}
                </S.StyledBtn>
              </S.Content>
            </S.Gradient>
            <Collapse in={isOpenForm2} mountOnEnter unmountOnExit>
              {getForm(true, true)}
            </Collapse>
          </S.GradientWrapper>
          <S.FixedPopup className={`second ${isOpenPopup ? "" : "closed"}`}>
            <S.PopupClose onClick={() => setIsOpenPopup(false)}>
              <CloseRoundedIcon />
            </S.PopupClose>
            {customContent && (
              <S.PopupContent>{parse(customPopupContent)}</S.PopupContent>
            )}
            <S.PopupImg img={popupImg} />
            <Stack spacing={1}>
              <S.PopupBtn onClick={handleDownloadBtn} className="light second">
                <S.DownloadIcon />
                {t("Download the Complete Guide")}
              </S.PopupBtn>
            </Stack>
          </S.FixedPopup>
        </>
      ) : (
        <>
          <S.Wrapper>
            {text && <S.Text>{text}</S.Text>}
            <S.StyledBtn
              onClick={() => setIsOpenForm2(!isOpenForm2)}
              className="blue"
            >
              {t(buttonText)}
            </S.StyledBtn>
            <Collapse in={isOpenForm2} mountOnEnter unmountOnExit>
              {getForm(true, true)}
            </Collapse>
          </S.Wrapper>
          <S.FixedPopup className={isOpenPopup ? "" : "closed"}>
            <S.PopupClose onClick={() => setIsOpenPopup(false)}>
              <CloseRoundedIcon />
            </S.PopupClose>
            <S.PopupTitle>{popupText}</S.PopupTitle>
            <Stack spacing={1}>
              <S.PopupBtn onClick={handleDownloadBtn} className="light">
                <S.DownloadIcon />
                {t("Download Guide")}
              </S.PopupBtn>
            </Stack>
          </S.FixedPopup>
        </>
      )}
      <S.StyledDialog open={isOpenForm} onClose={() => setIsOpenForm(false)}>
        <S.CloseBtn onClick={() => setIsOpenForm(false)}>
          <CloseRoundedIcon />
        </S.CloseBtn>
        {getForm()}
      </S.StyledDialog>
    </>
  )
}

export default DownloadGuide