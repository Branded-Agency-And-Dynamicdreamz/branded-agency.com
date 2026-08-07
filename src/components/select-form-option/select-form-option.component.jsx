import React from "react"
import * as S from "./select-form-option.styles"

const SelectFormOption = ({
  options,
  title,
  style,
  value,
  setValue,
  labelKey,
  valueKey,
  className,
}) => {
  const handleChangeOption = selected => {
    setValue(selected)
  }

  return (
    <>
      <S.Label className={`title ${style}`}>{title}: </S.Label>
      <S.JobFormWrapper className={className}>
        {Object.values(options)?.map((item, index) => (
          <S.Option
            key={index}
            className={`${value === item[valueKey] ? "selected" : ""} ${style}`}
            onClick={() => handleChangeOption(item[valueKey])}
          >
            <S.Label className="optionText">{item[labelKey]}</S.Label>
          </S.Option>
        ))}
      </S.JobFormWrapper>
    </>
  )
}

export default SelectFormOption
