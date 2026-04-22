import React from "react"
import * as S from "./custom-input.styles"
import { Controller, useFormContext } from "react-hook-form"
import { getRHFErrorMessage } from "../../utils/utils"

const CustomInput = ({
  style,
  title,
  name,
  validations,
  label,
  className,
  type = "text",
  variant = "outlined",
  multiline,
  uncontrolled,
  defaultValue = "",
  ...otherProps
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext()

  if (!control || uncontrolled)
    return (
      <S.InputContainer className={className}>
        {title && <S.Title>{title}</S.Title>}
        <S.CustomInput
          className={className}
          required={!!validations?.required}
          variant={variant}
          label={label}
          type={type}
          multiline={multiline}
          {...otherProps}
        />
      </S.InputContainer>
    )

  const error = getRHFErrorMessage(errors, name)

  if (style === "jobForm" || style === "contact") {
    return (
      <S.JobInputContainer className={`${className} ${style}`}>
        <Controller
          rules={validations}
          name={name}
          control={control}
          defaultValue={defaultValue}
          render={({ field }) => (
            <S.CustomJobInput
              className={`${className} ${style}`}
              error={!!error}
              required={!!validations?.required}
              variant={variant}
              label={label}
              helperText={error}
              type={type}
              multiline={multiline}
              {...otherProps}
              {...field}
            />
          )}
        />
      </S.JobInputContainer>
    )
  }

  return (
    <S.InputContainer className={className}>
      {title && <S.Title>{title}</S.Title>}
      <Controller
        rules={validations}
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field }) => (
          <S.CustomInput
            className={className}
            error={!!error}
            required={!!validations?.required}
            variant={variant}
            label={label}
            helperText={error}
            type={type}
            multiline={multiline}
            {...otherProps}
            {...field}
          />
        )}
      />
    </S.InputContainer>
  )
}

export default CustomInput
