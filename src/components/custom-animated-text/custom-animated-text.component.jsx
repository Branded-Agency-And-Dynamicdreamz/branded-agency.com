import React, { useEffect, useRef } from "react"
import { useInView } from "react-intersection-observer"
import SplitType from "split-type"
import gsap from "gsap"
import * as S from "./custom-animated-text.styles"

const CustomAnimatedText = ({
  content,
  children,
  duration,
  stagger,
  threshold = 0,
  tag,
  ...props
}) => {
  const textRef = useRef(null)
  const splitInstance = useRef(null)

  const { ref: inViewRef, inView } = useInView({
    triggerOnce: true,
    threshold: threshold,
  })

  const setRefs = node => {
    textRef.current = node
    inViewRef(node)
  }

  useEffect(() => {
    splitInstance.current = new SplitType(textRef.current, {
      types: "lines",
      lineClass: "line-child",
    })
  }, [])

  useEffect(() => {
    if (inView && splitInstance.current) {
      gsap.from(splitInstance.current.lines, {
        y: 100,
        autoAlpha: 0,
        duration: duration ?? 0.5,
        stagger: stagger ?? 0.025,
        ease: "power3.out",
      })
    }
  }, [inView])

  return (
    <S.Text
      component={tag || "p"}
      style={{ visibility: inView ? "visible" : "hidden" }}
      ref={setRefs}
      {...props}
      className={`${inView ? "in-view" : ""} ${props.className}`}
    >
      {content ?? children}
    </S.Text>
  )
}

export default CustomAnimatedText
