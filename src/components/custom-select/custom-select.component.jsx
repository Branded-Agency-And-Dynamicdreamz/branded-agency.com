import React from "react"
import * as S from "./custom-select.styles"
import { Controller, useFormContext } from "react-hook-form"

const CustomSelect = ({
  options,
  title,
  name,
  rules = { required: true },
  style,
  value,
  setValue,
}) => {
  const { control } = useFormContext()

  const handleChange = (evt, controlledChange) => {
    const options = evt.target
    const value = []
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value)
      }
    }
    if (controlledChange) controlledChange(value)
  }

  const handleChangeOption = selected => {
    const temp = value
    if (temp.indexOf(selected) === -1) {
      temp.push(selected)
    } else {
      if (temp.length === 1) return
      temp.splice(temp.indexOf(selected), 1)
    }
    setValue([...temp])
  }

  if (style === "jobForm" || style === "contact") {
    return (
      <>
        <S.Label className={`title ${style}`}>{title}: </S.Label>
        <S.JobFormWrapper>
          {options?.map((option, index) => (
            <S.Option
              key={index}
              className={`${value.includes(option) ? "selected" : ""} ${style}`}
              onClick={() => handleChangeOption(option)}
            >
              <S.Label className="optionText">{option}</S.Label>
            </S.Option>
          ))}
        </S.JobFormWrapper>
      </>
    )
  }

  return (
    <S.FormWrapper>
      {title && <S.Title>{title}</S.Title>}
      <Controller
        rules={rules}
        name={name}
        control={control}
        render={({ field: { onChange, value, ...others } }) => (
          <S.CustomSelect
            {...others}
            required={rules.required}
            multiple
            value={value}
            name={name}
            onChange={evt => handleChange(evt, onChange)}
            native
            height={options?.length * 25}
          >
            {options.map(option => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </S.CustomSelect>
        )}
      />
    </S.FormWrapper>
  )
}

export default CustomSelect
