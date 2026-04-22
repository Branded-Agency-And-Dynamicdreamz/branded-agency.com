import React, { useEffect, useRef, useState } from "react"
import * as S from "./scroller-content-services.styles"
import parse from "html-react-parser"
import gsap from "gsap"
import SplitType from "split-type"
import { useInView } from "react-intersection-observer"
import { Grid } from "@mui/material"
import FadeInOnScroll from "../../components/fade-in-on-scroll/fade-in-on-scroll.component"

const AnimatedText = ({ label, ...props }) => {
  const textRef = useRef(null)
  const splitInstance = useRef(null)

  const { ref: inViewRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
  })

  const setRefs = node => {
    textRef.current = node
    inViewRef(node)
  }

  useEffect(() => {
    if (inView && textRef.current) {
      splitInstance.current = new SplitType(textRef.current, {
        types: "lines",
        lineClass: "line-child",
      })

      gsap.from(splitInstance.current.lines, {
        y: 100,
        autoAlpha: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
      })
    }
  }, [inView])

  return (
    <S.Text ref={setRefs} {...props}>
      {label}
    </S.Text>
  )
}

const ScrollerContentServices = ({ services, content }) => {
  const [value, setValue] = React.useState(0)
  const leftRef = useRef(null)
  const rightRef = useRef(null)
  const [maxHeight, setMaxHeight] = useState(null)
  const [showFade, setShowFade] = useState(true)
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current

    const checkScroll = () => {
      const isAtBottom =
        container.scrollHeight - container.scrollTop <=
        container.clientHeight + 1
      setShowFade(!isAtBottom)
    }

    checkScroll()
    container.addEventListener("scroll", checkScroll)
    return () => container.removeEventListener("scroll", checkScroll)
  }, [])

  useEffect(() => {
    if (rightRef.current) {
      const rightHeight = rightRef.current.offsetHeight
      setMaxHeight(rightHeight)
    }
  }, [])

  return (
    <S.Wrapper>
      <S.ContentWrapper>
        <Grid container>
          <Grid item md={8} xs={12}>
            {content && (
              <FadeInOnScroll showAnimation>
                <S.Content>
                  <S.CustomBox ref={containerRef} maxHeight={maxHeight}>
                    {parse(content)}
                  </S.CustomBox>
                  <S.FadeOverlay className={showFade ? "visible" : "hidden"} />
                </S.Content>
              </FadeInOnScroll>
            )}
          </Grid>
          <Grid item md={4} xs={12}>
            <S.RightWrapper ref={rightRef}>
              <AnimatedText className="title" label={"Services:"} />
              {services?.map(({ service }, index) => (
                <AnimatedText key={`services-${index}`} label={service} />
              ))}
            </S.RightWrapper>
          </Grid>
        </Grid>
      </S.ContentWrapper>
    </S.Wrapper>
  )
}

export default ScrollerContentServices
