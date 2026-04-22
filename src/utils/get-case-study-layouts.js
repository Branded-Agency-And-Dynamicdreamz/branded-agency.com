import React from "react"
import { v4 as uuidv4 } from "uuid"
import MiscContentInsight from "../layouts/MiscContentInsight"
import SideBySide from "../layouts/SideBySide"
import VideoComponent from "../layouts/VideoComponent"
import GridContent from "../layouts/GridContent"
import CountUpGrid from "../layouts/CountUpGrid"
import ArticleGallery from "../layouts/ArticleGallery"
import ImagesSlider from "../layouts/ImagesSlider"
import ScrollerContentServices from "../layouts/ScrollerContentServices"
import Testimonial from "../layouts/Testimonial"
import ArticlesSlider from "../layouts/ArticlesSlider"
import GridContentMedia from "../layouts/GridContentMedia"

export const getCaseStudyLayout = layout => {
  const layoutName = layout?.fieldGroupName?.split("_").pop().trim()
  if (!layoutName) return null
  switch (layoutName) {
    case "MiscContent":
      return <MiscContentInsight key={uuidv4()} {...layout} />
    case "SideBySide":
      return <SideBySide key={uuidv4()} {...layout} />
    case "VideoComponent":
      return <VideoComponent key={uuidv4()} {...layout} />
    case "GridContent":
      return <GridContent key={uuidv4()} {...layout} />
    case "CountUpGrid":
      return <CountUpGrid key={uuidv4()} {...layout} />
    case "ArticleGallery":
      return <ArticleGallery key={uuidv4()} {...layout} />
    case "ImagesSlider":
      return <ImagesSlider key={uuidv4()} {...layout} isCaseStudy />
    case "ScrollerContentServices":
      return <ScrollerContentServices key={uuidv4()} {...layout} />
    case "Testimonial":
      return <Testimonial key={uuidv4()} {...layout} />
    case "ArticlesSlider":
      return (
        <ArticlesSlider isIndividual key={uuidv4()} {...layout} isCaseStudy />
      )

    case "GridContentMedia":
      return <GridContentMedia key={uuidv4()} {...layout} />
  }
}
