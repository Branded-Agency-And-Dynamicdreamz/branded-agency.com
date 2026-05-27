import React, { useState } from "react"
import * as S from "./custom-input-file.styles"
import { getWordpressToken } from "../../utils/utils"
import { mediaApi } from "../../apis/apis"
import ClipIcon from "../../assets/clip.svg"
import CloseIcon from "@mui/icons-material/Close"
import { useTranslation } from "../../hooks/useTranslation"

const CustomInputFile = ({
  inputRef,
  setNameFile,
  nameFile,
  setCVErrorMessage,
  title,
  files,
  setFiles,
}) => {
  const { t } = useTranslation()
  const [loading, setLoading] = useState(false)
  const handleSelectFile = () => {
    if (inputRef) inputRef.current.click()
  }

  const handleUploadFile = async e => {
    if (e?.target?.files) {
      setCVErrorMessage("")
      handleUploadFiles([...e?.target?.files])
    }
  }

  const handleDeleteFile = index => {
    const auxFiles = [...files]
    auxFiles.splice(index, 1)
    setFiles([...auxFiles])
  }

  const handleUploadFiles = newFiles => {
    const auxFiles = [...files]
    newFiles.forEach(file => {
      if (!auxFiles.find(({ name }) => name === file.name)) {
        auxFiles.push(file)
      }
    })
    setFiles([...auxFiles])
  }

  return (
    <S.Wrapper>
      {files?.length > 0 && (
        <S.FilesWrapper>
          <>
            {files?.map(({ name }, index) => (
              <S.FileItem key={`${name} - ${index}`}>
                <S.FileName>{name}</S.FileName>
                <S.Close onClick={() => handleDeleteFile(index)}>
                  <CloseIcon />
                </S.Close>
              </S.FileItem>
            ))}
          </>
        </S.FilesWrapper>
      )}
      <S.Input
        uncontrolled
        inputRef={inputRef}
        className="form"
        onChange={handleUploadFile}
        inputProps={{
          multiple: "multiple",
          type: "file",
          accept:
            "application/pdf, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        }}
      />
      <S.FileButton onClick={handleSelectFile}>
        <ClipIcon />
        <S.InputWrapper>
          {!loading ? t("Upload a CV") : t("Uploading...")}
        </S.InputWrapper>
      </S.FileButton>
    </S.Wrapper>
  )
}

export default CustomInputFile