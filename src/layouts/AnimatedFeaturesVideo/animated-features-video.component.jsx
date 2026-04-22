import React, { useRef } from "react"
import * as S from "./animated-features-video.styles"
import VideoComponent from "../VideoComponent"
import { Grid } from "@mui/material"
import Container from "@mui/material/Container"
import parse, { domToReact } from "html-react-parser"
import FadeInOnScroll from "../../components/fade-in-on-scroll/fade-in-on-scroll.component"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import ScrollToPlugin from "gsap/ScrollToPlugin"
import SplitType from "split-type"
import CustomAnimatedText from "../../components/custom-animated-text/custom-animated-text.component"
import { isBrowser } from "../../utils/utils"
import { navigate } from "gatsby-link"

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

const AnimatedFeaturesVideo = ({ vimeoLink, title, services, description }) => {
  const containerRef = useRef(null)
  const contentRef = useRef(null)
  const titleRef = useRef(null)
  const descriptionRef = useRef(null)
  const itemsRef = useRef([])
  const paragraphRefs = useRef([])
  itemsRef.current = []

  const [activeBlur, setActiveBlur] = React.useState(false)

  const setParagraphRef = (el, index) => {
    paragraphRefs.current[index] = el
  }

  useGSAP(() => {
    if (isBrowser && window.innerWidth < 900) {
      return
    }
    const paragraphSplits = paragraphRefs.current.map(
      p => new SplitType(p, { types: "lines", lineClass: "line-child" }),
    )
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top+=24",
      end: "+=190%",
      scrub: 1.85,
      pin: true,
      pinSpacing: true,
      toggleActions: "play none reverse none",
    })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top+=24",
        end: "+=5%",
        scrub: false,
        toggleActions: "play none reverse none",
      },
    })

    tl.fromTo(
      contentRef.current,
      {
        yPercent: 100,
      },
      {
        yPercent: 0,
        duration: 0.4,
        ease: "power2.out",
        onComplete: () => {
          setActiveBlur(true)
        },

        onReverseComplete: () => {
          setActiveBlur(false)
        },
      },
    )

    tl.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
    })

    itemsRef.current.forEach(item => {
      tl.from(
        item,
        {
          y: 50,
          opacity: 0,
          stagger: 0.5,
          duration: 0.5,
          ease: "power2.out",
        },
        "<",
      )
    })

    paragraphSplits.forEach(split => {
      tl.from(
        split.lines,
        {
          y: 50,
          opacity: 0,
          stagger: 0.05,
          duration: 0.5,
          ease: "power2.out",
        },
        "<",
      )
    })

    const endTl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top+=70% top+=60%",
        end: "top+=80% bottom",
        scrub: false,
        toggleActions: "play none reverse none",
      },
    })

    paragraphSplits.forEach(split => {
      endTl.to(
        split.lines,
        {
          y: -50,
          opacity: 0,
          stagger: 0.05,
          duration: 0.5,
          ease: "power2.in",
        },
        "<",
      )
    })

    itemsRef.current
      .slice()
      .reverse()
      .forEach((el, i) => {
        endTl.to(
          el,
          {
            y: -30,
            opacity: 0,
            duration: 0.5,
            ease: "power2.in",
          },
          "<",
        )
      })

    endTl.to(
      titleRef.current,
      {
        y: -50,
        opacity: 0,
        duration: 0.5,
        ease: "power2.in",
      },
      `<`,
    )

    endTl.to(contentRef.current, {
      yPercent: -100,
      duration: 0.4,
      ease: "power2.in",
      onStart: () => {
        setActiveBlur(false)
      },
      onReverseComplete: () => {
        setActiveBlur(true)
      },
    })
  }, [])

  const transform = (node, index) => {
    if (node.name === "p") {
      return (
        <p
          key={index}
          ref={el => setParagraphRef(el, index)}
          className="animated-paragraph"
        >
          {domToReact(node.children)}
        </p>
      )
    }
  }

  const handleServiceClick = link => {
    navigate(link)
  }

  return (
    <S.Wrapper ref={containerRef}>
      <FadeInOnScroll showAnimation>
        <Container maxWidth={false}>
          <S.VideoWrapper className={activeBlur ? "blur" : ""}>
            <VideoComponent vimeoLink={vimeoLink} autoplay loop />
            <S.ContentWrapper ref={contentRef}>
              <S.Content>
                <S.Title ref={titleRef}>{title}</S.Title>
                <Grid container spacing={{ md: 2, xs: 4 }}>
                  <Grid item md={5.5} xs={12}>
                    <S.ServicesWrapper>
                      {services?.map(({ service, link }, index) => (
                        <S.Service
                          ref={el => (itemsRef.current[index] = el)}
                          key={index}
                          className={link ? "link" : ""}
                          onClick={
                            link
                              ? () => handleServiceClick(link?.url)
                              : undefined
                          }
                        >
                          {service}
                        </S.Service>
                      ))}
                    </S.ServicesWrapper>
                  </Grid>
                  <Grid item md={6.5} xs={12}>
                    {description && (
                      <S.Description ref={descriptionRef}>
                        {parse(description, { replace: transform })}
                      </S.Description>
                    )}
                  </Grid>
                </Grid>
              </S.Content>
            </S.ContentWrapper>
          </S.VideoWrapper>
        </Container>
      </FadeInOnScroll>
    </S.Wrapper>
  )
}

export default AnimatedFeaturesVideo
