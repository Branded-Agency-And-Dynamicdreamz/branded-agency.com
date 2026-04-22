import React from "react"
import { v4 as uuidv4 } from "uuid"
import MiscContentInsight from "../layouts/MiscContentInsight"
import SideBySide from "../layouts/SideBySide"
import VideoComponent from "../layouts/VideoComponent"
import ImagesSlider from "../layouts/ImagesSlider"
import DownloadGuide from "../layouts/DownloadGuide"
import ItemList from "../layouts/ItemList"
import AuthorComment from "../layouts/AuthorComment/author-comment.component"
import RelatedInsights from "../layouts/RelatedInsights"
import ArticleBulletPointList from "../layouts/ArticleBulletPointList"
import ArticleAccordion from "../layouts/ArticleAccordion"
import ArticleGallery from "../layouts/ArticleGallery"
import ImageTextGrid from "../layouts/ImageTextGrid"
import TypeformEmbed from "../layouts/TypeformEmbed"
import ArticlesSlider from "../layouts/ArticlesSlider"

export const getInsightLayout = layout => {
  const layoutName = layout?.fieldGroupName?.split("_").pop().trim()
  if (!layoutName) return null
  switch (layoutName) {
    case "MiscContentInsight":
      return <MiscContentInsight key={uuidv4()} {...layout} />
    case "SideBySide":
      return <SideBySide key={uuidv4()} {...layout} />
    case "VideoComponent":
      return <VideoComponent key={uuidv4()} {...layout} />
    case "ImagesSlider":
      return <ImagesSlider key={uuidv4()} {...layout} />
    case "DownloadGuide":
      return <DownloadGuide key={uuidv4()} {...layout} />
    case "ItemList":
      return <ItemList key={uuidv4()} {...layout} />
    case "AuthorComment":
      return <AuthorComment key={uuidv4()} {...layout} />
    case "ArticleBulletPointList":
      return <ArticleBulletPointList key={uuidv4()} {...layout} />
    case "ArticleAccordion":
      return <ArticleAccordion key={uuidv4()} {...layout} />
    case "ArticleGallery":
      return <ArticleGallery key={uuidv4()} {...layout} />
    case "ImageTextGrid":
      return <ImageTextGrid key={uuidv4()} {...layout} />
    case "TypeformEmbed":
      return <TypeformEmbed key={uuidv4()} {...layout} />
    case "ArticlesSlider":
      return <ArticlesSlider key={uuidv4()} {...layout} />
  }
}
