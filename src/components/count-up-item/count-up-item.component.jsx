import React, { useEffect, useRef } from "react"
import * as S from "./count-up-item.styles"
import { useCountUp } from "react-countup"

const CountUpItem = ({
  number,
  description,
  disableCount,
  isPercentage,
  className,
}) => {
  const countUpRef = useRef(null)
  const { start, reset } = useCountUp({
    ref: countUpRef,
    start: 0,
    end: +number,
    delay: 1000,
    duration: 4,
    enableScrollSpy: true,
    useEasing: false,
  })

  useEffect(() => {
    start()
    return () => {
      reset()
    }
  }, [])

  return (
    <S.Wrapper>
      <S.Number
        ref={disableCount ? null : countUpRef}
        className={`${className} ${isPercentage ? "percentage" : ""} number`}
      >
        {disableCount ? number : ""}
      </S.Number>
      <S.Description>{description}</S.Description>
    </S.Wrapper>
  )
}

export default CountUpItem
