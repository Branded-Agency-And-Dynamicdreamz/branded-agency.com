import queryString from "query-string"
import Cookies from "js-cookie"
import {
  contactFormApi,
  gravityFormsApi,
  HUBSPOT_API,
  IPIFY_API,
  mediaApi,
} from "../apis/apis"
import CryptoJS from "crypto-js"

export const isBrowser = typeof window !== "undefined"

export const catchAsync = (fn, fnName = "anonymous function") => {
  return async (...props) => {
    return await fn(...props)
      .then(res => {
        if (res?.status === "error") {
          throw new Error(res?.message)
        }
        return res
      })
      .catch(err => {
        console.error(fnName, err.message ?? "Something was wrong")
        return err
      })
  }
}

export const getLocalStorageItem = key => {
  if (isBrowser) {
    return window.localStorage.getItem(key)
  }
  return null
}

export const setLocalStorageItem = (key, value) => {
  if (isBrowser) {
    window.localStorage.setItem(key, value)
  }
}

export const getSessionStorageItem = key => {
  if (isBrowser) {
    return window.sessionStorage.getItem(key)
  }
  return null
}

export const setSessionStorageItem = (key, value) => {
  if (isBrowser) {
    window.sessionStorage.setItem(key, value)
  }
}

export const getLeadTrafficToHubspot = () => {
  const source = getSessionStorageItem("utm_source")
  if (source === "google") {
    return "Google Ad"
  }
  if (source === "linkedin") {
    return "LinkedIn Ad"
  }
  return "Website Direct"
}

export const getColor = (color, theme) => {
  switch (color) {
    case "primary":
      return theme.palette.primary.main
    case "secondary":
      return theme.palette.secondary.main
    case "tertiary":
      return theme.palette.tertiary.main
    case "content":
      return theme.palette.text.content
    default:
      return theme.palette.text.primary
  }
}

export const textEllipsis = (
  str,
  maxLength,
  { side = "end", ellipsis = "..." } = {},
) => {
  if (str.length > maxLength) {
    switch (side) {
      case "start":
        return ellipsis + str.slice(-(maxLength - ellipsis.length))
      case "end":
      default:
        return str.slice(0, maxLength - ellipsis.length) + ellipsis
    }
  }
  return str
}
export const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export const setFormUtmParams = setValue => {
  if (typeof window !== "undefined" && window) {
    const parameters = window.location.search
      ? queryString.parse(window.location.search)
      : ""
    const params = [
      "utm_medium",
      "utm_source",
      "utm_campaign",
      "utm_content",
      "utm_term",
      "utm_name",
    ]
    if (parameters !== "") {
      params.map(param => {
        if (param in parameters) {
          setValue(param, parameters[param])
        }
      })
    }
  }
}

export const submitHubspotForm = async (data, portalId, formId) => {
  let fields = []
  Object.entries(data).map(item => {
    fields.push({ name: item[0], value: item[1] })
  })

  const hutk = isBrowser ? Cookies.get("hubspotutk") : null
  const pageUri = isBrowser ? window.location.href : null
  const pageName = isBrowser ? document.title : null
  const ipAddress = await IPIFY_API.get()

  const context =
    ipAddress && ipAddress.data.ip
      ? {
          ipAddress: ipAddress.data.ip,
          hutk,
          pageUri,
          pageName,
        }
      : {
          hutk,
          pageUri,
          pageName,
        }

  try {
    const res = await HUBSPOT_API.post(
      `/${portalId}/${formId}`,
      JSON.stringify({
        submittedAt: Date.now(),
        fields,
        context,
      }),
      {
        headers: {
          "Content-Type": "application/json",
          Accept:
            "application/json, application/xml, text/plain, text/html, *.*",
        },
      },
    )

    return res
  } catch (e) {
    return e.response
  }
}

export const updateHubspotContact = async (email, data) => {
  try {
    const response = await window.fetch("/api/hubspot-api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        ...data,
      }),
    })
  } catch (e) {
    return e.response
  }
}

const calculateSignature = (stringToSign, privateKey) => {
  const hash = CryptoJS.HmacSHA1(stringToSign, privateKey)
  const base64 = hash.toString(CryptoJS.enc.Base64)
  return encodeURIComponent(base64)
}

export const submitGravityForm = (data, formId) => {
  const d = new Date(),
    expiration = 3600,
    unixtime = parseInt(d.getTime() / 1000),
    future_unixtime = unixtime + expiration,
    publicKey = process.env.GF_PUB_KEY,
    privateKey = process.env.GF_PRIV_KEY,
    method = "POST",
    route = `forms/${formId}/submissions`,
    stringToSign =
      publicKey + ":" + method + ":" + route + ":" + future_unixtime,
    sig = calculateSignature(stringToSign, privateKey)

  const uri =
    route +
    "?api_key=" +
    publicKey +
    "&signature=" +
    sig +
    "&expires=" +
    future_unixtime

  const values = {
    input_values: {
      data,
    },
  }

  return gravityFormsApi
    .post(uri, values, {
      headers: { "Content-Type": "application/json" },
    })
    .then(response => {
      return response
    })
}

export const detectHubspotErrorSubmission = (res, setErrorMessage) => {
  if (res.data.status === "error") {
    if (res.data.errors[0].message.split("'")[1].split(".")[1] === "email") {
      if (res.data.errors[0].errorType === "INVALID_EMAIL") {
        setErrorMessage("Invalid email , please check and try again.")
        return true
      } else if (res.data.errors[0].errorType === "BLOCKED_EMAIL") {
        setErrorMessage("Blocked email , please use another email.")
        return true
      }
    } else {
      setErrorMessage(
        "There was an error with your submission. Please try again.",
      )
      return true
    }
  }
  return false
}

export const getRHFErrorMessage = (errors, name, rules) => {
  const splitName = `${name}`.split(".")
  const getError = () => {
    if (splitName.length === 2) {
      return errors[splitName[0]]?.[splitName[1]]
    }
    if (splitName.length === 3) {
      return errors[splitName[0]]?.[splitName[1]]?.[splitName[2]]
    }
    return errors[name]
  }
  const error = getError()

  if (error) {
    switch (error.type) {
      case "valueAsNumber":
        return `${name} is not a valid number`
      case "required":
        return error?.message ? error.message : "This is a required field"
      case "min":
        return `Min ${rules.min}`
      case "max":
        return `Max ${rules.max}`
      case "maxLength":
        return `Text too long. Max ${rules.maxLength}`
      case "minLength":
        return `Text too short. Min ${rules.minLength}`
      case "pattern":
        return `${name} is not valid`
      case "validate":
        return error.message
      default:
        return ""
    }
  }
}

export const submitContactForm = async (formId, formData) => {
  try {
    const res = await contactFormApi.post(`/${formId}/feedback`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    return res.data
  } catch (err) {
    console.log("err :>> ", err)
    return err
  }
}

export const searchWordpress = catchAsync(async searchTerm => {
  const res = await mediaApi.get(`/wp/v2/search`, {
    params: {
      search: searchTerm,
      subtype: ["any"],
    },
  })
  return res.data
}, "searchWordpress")

export const getWordpressToken = async () => {
  try {
    const response = await mediaApi.post(
      "/jwt-auth/v1/token",
      queryString.stringify({
        username: process.env.GATSBY_USER,
        password: process.env.GATSBY_PASSWORD,
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
    )
    const {
      data: { token },
    } = response

    return token
  } catch (error) {
    return null
  }
}

export const uploadFile = async (file, token) => {
  try {
    if (
      file.type !== "application/pdf" &&
      file.type !== "application/msword" &&
      file.type !==
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ) {
      return { error: "Only pdf, doc and docx files are allowed" }
    }

    const response = await mediaApi.post(
      `/wp/v2/media`,
      { file },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
          "Content-Disposition": `form-data; filename="${file.name}"`,
        },
      },
    )

    if (response.data.source_url) {
      return { success: response.data, source_url: response.data.source_url }
    }

    return { error: "Something went wrong, please try again" }
  } catch (error) {
    return { error: "Something went wrong, please try again" }
  }
}

export const downloadFile = fileUrl => {
  const link = document.createElement("a")
  link.href = fileUrl
  link.download = fileUrl?.substr(fileUrl.lastIndexOf("/") + 1)
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

export const capitalizeWords = str => {
  return str.replace(
    /\b\w+/g,
    word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
  )
}
