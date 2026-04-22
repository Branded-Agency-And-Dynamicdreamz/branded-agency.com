import React, { useRef, useState } from "react"
import * as S from "./custom-job-form.styles"
import { FormProvider, useForm } from "react-hook-form"
import {
  emailRegex,
  getWordpressToken,
  submitContactForm,
  uploadFile,
} from "../../utils/utils"
import CustomInput from "../../components/custom-input/custom-input.component"
import { Alert, Grid } from "@mui/material"
import CustomSelect from "../../components/custom-select/custom-select.component"
import ReCAPTCHA from "react-google-recaptcha"
import CustomInputFile from "../../components/custom-input-file/custom-input-file.component"
import { gtagFormSubmission } from "../../utils/gtag-utils"
import { linkedinConversionTrack } from "../../utils/linkedin-utils"
import { navigate } from "gatsby"
import parse from "html-react-parser"

const CustomJobForm = ({ formTitle, isIndividualJob, titleJob, location }) => {
  const methods = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
    defaultValues: {
      areas: isIndividualJob ? titleJob : [],
      location: location ?? "",
    },
  })
  const [isLoading, setIsLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState("")
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [cvErrorMessage, setCVErrorMessage] = useState("")
  const [nameFile, setNameFile] = useState("")
  const [areasSelected, setAreasSelected] = useState(["Client Services"])
  const [files, setFiles] = useState([])

  const recaptchaRef = useRef()

  const handleCaptchaChange = () => {
    setError(false)
  }

  const inputCvFile = useRef(null)
  const { handleSubmit, reset } = methods

  const onSubmit = async data => {
    if (files.length > 0) {
      setIsLoading(true)
      setCVErrorMessage("")
      const token = await getWordpressToken()
      let fileLinks = []
      for (const file of files) {
        const auxFileLink = await uploadFile(file, token)
        fileLinks.push(auxFileLink?.source_url)
      }

      setSuccessMessage("")
      setErrorMessage("")

      const captchaVerification = recaptchaRef.current.getValue()
      if (captchaVerification === "") {
        setError(true)
        setIsLoading(false)
        return
      }

      const formData = new FormData()
      formData.append("full_name", data.full_name)
      formData.append("email", data.email)
      formData.append("phone", data.phone)
      formData.append(
        "areas",
        isIndividualJob ? titleJob : areasSelected.join(","),
      )
      formData.append("location", data.location)
      formData.append("message", data.message)
      formData.append("cv", fileLinks.join(" - "))

      const contactFormRes = await submitContactForm("1854", formData)

      if (
        !contactFormRes ||
        contactFormRes?.invalidFields?.length > 0 ||
        contactFormRes.status === "validation_failed"
      ) {
        //   console.log("contactFormRes :>> ", contactFormRes);
        setErrorMessage(contactFormRes.message)
        setIsLoading(false)
        return
      }

      reset()
      setFiles([])
      inputCvFile.current.value = null
      setNameFile("")
      setSuccessMessage(contactFormRes.message)
      gtagFormSubmission("Join Us Form")
      setCVErrorMessage("")
      linkedinConversionTrack(12868106)
      setIsLoading(false)
      // disappearAlert()
      await navigate("/thank-you-for-applying/")
    } else {
      setCVErrorMessage("Please add a CV file")
    }
  }

  // const disappearAlert = () => {
  //   setTimeout(() => {
  //     setSuccessMessage("")
  //   }, 5000)
  // }

  return (
    <>
      <S.FormWrapper>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={1}>
              {!isIndividualJob && (
                <Grid item xs={12}>
                  <CustomSelect
                    style="jobForm"
                    required
                    title="Select areas of interest"
                    options={[
                      "Client Services",
                      "Marketing",
                      "Strategy",
                      "Implementation",
                      "Technology",
                      "Brand Compliance",
                      "Sustainability",
                      "Finance",
                      "HR",
                      "Operations",
                    ]}
                    value={areasSelected}
                    setValue={setAreasSelected}
                  />
                </Grid>
              )}

              {isIndividualJob && (
                <>
                  <Grid item xs={12}>
                    <CustomInput
                      style="jobForm"
                      variant="outlined"
                      name="areas"
                      placeholder="Full Name*"
                      disabled
                      validations={{ required: true }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <CustomInput
                      style="jobForm"
                      variant="outlined"
                      name="location"
                      placeholder="Location"
                      disabled
                      validations={{ required: true }}
                    />
                  </Grid>
                </>
              )}
              <Grid item xs={12}>
                <CustomInput
                  style="jobForm"
                  variant="outlined"
                  name="full_name"
                  placeholder="Full Name*"
                  validations={{ required: true }}
                />
              </Grid>
              <Grid item xs={12}>
                <CustomInput
                  style="jobForm"
                  variant="outlined"
                  name="email"
                  placeholder="Email*"
                  type="email"
                  validations={{ required: true, pattern: emailRegex }}
                />
              </Grid>
              <Grid item xs={12}>
                <CustomInput
                  style="jobForm"
                  variant="outlined"
                  name="phone"
                  placeholder="Phone*"
                  validations={{ required: true }}
                  type="tel"
                />
              </Grid>

              <Grid item xs={12}>
                <CustomInput
                  style="jobForm"
                  variant="outlined"
                  name="message"
                  placeholder="Introduction"
                  multiline
                  rows={6}
                />
              </Grid>
              <Grid item xs={12}>
                <CustomInputFile
                  style="jobForm"
                  inputRef={inputCvFile}
                  title="Upload a CV"
                  setCVErrorMessage={setCVErrorMessage}
                  files={files}
                  setFiles={setFiles}
                  // setNameFile={setNameFile}
                  // nameFile={nameFile}
                />
                {cvErrorMessage && <S.Error>{cvErrorMessage}</S.Error>}
              </Grid>
              {/*{successMessage && (*/}
              {/*  <Grid item xs={12}>*/}
              {/*    <Alert severity="success">{successMessage}</Alert>*/}
              {/*  </Grid>*/}
              {/*)}*/}
              {errorMessage && (
                <Grid item xs={12}>
                  <Alert severity="error">{errorMessage}</Alert>
                </Grid>
              )}
            </Grid>
            <S.TermsDiv>
              <ReCAPTCHA
                sitekey={process.env.GATSBY_GOOGLE_CAPTCHA_SITE_KEY}
                size="normal"
                render="explicit"
                onChange={handleCaptchaChange}
                className="g-recaptcha"
                ref={recaptchaRef}
              />
              {error && <S.CaptchaError>Please enter captcha</S.CaptchaError>}
            </S.TermsDiv>
            <S.ButtonWrapper>
              <S.Button
                fullWidth
                type="submit"
                className="small"
                loading={isLoading}
              >
                Submit
              </S.Button>
            </S.ButtonWrapper>
          </form>
        </FormProvider>
      </S.FormWrapper>
    </>
  )
}

export default CustomJobForm
