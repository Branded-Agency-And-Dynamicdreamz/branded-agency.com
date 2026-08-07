import React, { useEffect, useRef } from "react"
import * as S from "./text-letter-animation.styles"

const TextLetterAnimation = ({
  active,
  setActive,
  duration,
  stagger,
  content,
  afterAnimation,
  ...props
}) => {
  const textRef = useRef(null)
  const splitInstance = useRef(null)

  const setRefs = node => {
    textRef.current = node
  }

  useEffect(() => {
    // if (active && textRef.current) {
    //   splitInstance.current = new SplitType(textRef.current, {
    //     types: "chars",
    //     lineClass: "line-child",
    //   })
    //
    //   gsap.fromTo(
    //     splitInstance.current.chars,
    //     {
    //       x: 0,
    //       duration: duration ?? 0.5,
    //       stagger: stagger ?? 0.025,
    //       ease: "power3.out",
    //     },
    //     {
    //       x: -300,
    //       duration: duration ?? 0.5,
    //       stagger: stagger ?? 0.025,
    //       ease: "power3.out",
    //       onComplete: () => {
    //         afterAnimation && afterAnimation()
    //       },
    //     },
    //   )
    // }
  }, [active])

  return (
    <S.Text
      ref={setRefs}
      {...props}
      className={`${active ? "in-view" : ""} ${props.className}`}
    >
      {content}
    </S.Text>
  )
}

export default TextLetterAnimation
