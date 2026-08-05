import React from "react"
import { v4 as uuidv4 } from "uuid"
import MiscContent from "../layouts/MiscContent"
import HomeHero from "../layouts/HomeHero/home-hero.component"
import InfoBanner from "../layouts/InfoBanner/info-banner.component"
import BrandSteps from "../layouts/BrandSteps/brand-steps.component"
import HappyClients from "../layouts/HappyClients"
import TestimonialsSlider from "../layouts/TestimonialsSlider"
import GetInTouch from "../layouts/GetInTouch"
import InsightsHero from "../layouts/InsightsHero"
import HeroSlider from "../layouts/HeroSlider"
import CustomHero from "../layouts/CustomHero"
import VideoBanner from "../layouts/VideoBanner/video-banner.component"
import BannerText from "../layouts/BannerText"
import ImageText from "../layouts/ImageText"
import BgHero from "../layouts/BgHero"
import MeetTheTeam from "../layouts/MeetTheTeam"
import HeroImage from "../layouts/HeroImage"
import OurValues from "../layouts/OurValues"
import JobForm from "../layouts/JobForm"
import CaseStudiesHero from "../layouts/CaseStudiesHero"
import SummarySubItems from "../layouts/SummarySubItems"
import SubContent from "../layouts/SubContent"
import Gallery from "../layouts/Gallery"
import BackLinks from "../layouts/BackLinks"
import ServicesSummary from "../layouts/ServicesSummary/services-summary.component"
import Contact from "../layouts/Contact/contact.component"
import CustomContent from "../layouts/CustomContent"
import SecondHeroImage from "../layouts/SecondHeroImage"
import BrandedCreation from "../layouts/BrandedCreation"
import SliderValues from "../layouts/SliderValues/slider-values.component"
import ClientsSlider from "../layouts/ClientsSlider"
import BrandedAwards from "../layouts/BrandedAwards"
import TitleBanner from "../layouts/TitleBanner"
import InfoSlider from "../layouts/InfoSlider/info-slider.component"
import LandingContact from "../layouts/LandingContact"
import ThankYou from "../layouts/ThankYou"
import SecondImagesSlider from "../layouts/SecondImagesSlider"
import VideoContentGrid from "../layouts/VideoContentGrid"
import VideoComponent from "../layouts/VideoComponent"
import LogoBanner from "../layouts/LogoBanner"
import CustomMediaContent from "../layouts/CustomMediaContent/custom-media-content.component"
import OurStoryHero from "../layouts/OurStoryHero"
import SqueezePageForm from "../layouts/SqueezePageForm"
import HeroMobileLanding from "../layouts/HeroMobileLanding"
import ReasonBrandsFail from "../layouts/ReasonBrandsFail"
import LandingCarousel from "../layouts/LandingCarousel"
import ContentList from "../layouts/ContentList/content-list.component"
import WhatDoesMean from "../layouts/WhatDoesMean"
import TalkAboutBanner from "../layouts/TalkAboutBanner/talk-about-banner.component"
import DistinctiveSqueezePageForm from "../layouts/DistinctiveSqueezePageForm"
import AboutHero from "../layouts/AboutHero/about-hero.component"
import AboutPromise from "../layouts/AboutPromise"
import OurPeople from "../layouts/OurPeople"
import OurProcess from "../layouts/OurProcess"
import OurLocations from "../layouts/OurLocations"
import JoinUsBanner from "../layouts/JoinUsBanner"
import BCorpBanner from "../layouts/BCorpBanner"
import BgVideoBanner from "../layouts/BgVideoBanner"
import ArticlesSliderBanner from "../layouts/ArticlesSliderBanner/articles-slider-banner.component"
import ContentImageSlider from "../layouts/ContentImageSlider"
import ServicesSliderBanner from "../layouts/ServicesSliderBanner/services-slider-banner.component"
import RecentProjects from "../layouts/RecentProjects/recent-projects.component"
import TestimonialBanner from "../layouts/TestimonialBanner"
import ServicesHero from "../layouts/ServicesHero"
import AnimatedDescription from "../layouts/AnimatedDescription"
import AnimatedFeaturesVideo from "../layouts/AnimatedFeaturesVideo"
import ArticlesSlider from "../layouts/ArticlesSlider"
import GridContentMedia from "../layouts/GridContentMedia"
// ✅ HeroBgText import
import HeroBgText from "../layouts/HeroBgText"
// ✅ TextHero import
import TextHero from "../layouts/TextHero"
// ✅ SliderHero import
import SliderHero from "../layouts/SliderHero"

export const getPageLayout = (layout, options = {}) => {
  const layoutName = layout?.fieldGroupName?.split("_").pop().trim()
  
  // ✅ Debug
  console.log("🔍 Layout Name:", layoutName)
  
  if (!layoutName) return null
  
  if (layoutName === "CaseStudiesHero") {
    return <CaseStudiesHero key={uuidv4()} {...layout} caseStudies={options.caseStudies || []} />
  }
  
  switch (layoutName) {
    // ✅ HeroBgText case
    case "Herobgtext":
      console.log("✅ HeroBgText rendering...")
      return <HeroBgText key={uuidv4()} {...layout} />
    // ✅ TextHero case
    case "Texthero":
      console.log("✅ TextHero rendering...")
      return <TextHero key={uuidv4()} {...layout} />
    // ✅ SliderHero case
    case "Sliderhero":
      console.log("✅ SliderHero rendering...")
      return <SliderHero key={uuidv4()} {...layout} />
    case "GridContentMedia":
      return <GridContentMedia key={uuidv4()} {...layout} />
    case "MiscContent":
      return <MiscContent key={uuidv4()} {...layout} />
    case "HomeHero":
      return <HomeHero key={uuidv4()} {...layout} />
    case "InfoBanner":
      return <InfoBanner key={uuidv4()} {...layout} />
    case "BrandSteps":
      return <BrandSteps key={uuidv4()} {...layout} />
    case "HappyClients":
      return <HappyClients key={uuidv4()} {...layout} />
    case "TestimonialsSlider":
      return <TestimonialsSlider key={uuidv4()} {...layout} />
    case "GetInTouch":
      return <GetInTouch key={uuidv4()} {...layout} />
    case "InsightsHero":
      return <InsightsHero key={uuidv4()} {...layout} />
    case "HeroSlider":
      return <HeroSlider key={uuidv4()} {...layout} />
    case "CustomHero":
      return <CustomHero key={uuidv4()} {...layout} />
    case "VideoBanner":
      return <VideoBanner key={uuidv4()} {...layout} />
    case "BannerText":
      return <BannerText key={uuidv4()} {...layout} />
    case "ImageText":
      return <ImageText key={uuidv4()} {...layout} />
    case "BgHero":
      return <BgHero key={uuidv4()} {...layout} />
    case "MeetTheTeam":
      return <MeetTheTeam key={uuidv4()} {...layout} />
    case "HeroImage":
      return <HeroImage key={uuidv4()} {...layout} />
    case "OurValues":
      return <OurValues key={uuidv4()} {...layout} />
    case "JobForm":
      return <JobForm key={uuidv4()} {...layout} />
    case "SummarySubItems":
      return <SummarySubItems key={uuidv4()} {...layout} />
    case "SubContent":
      return <SubContent key={uuidv4()} {...layout} />
    case "Gallery":
      return <Gallery key={uuidv4()} {...layout} />
    case "BackLinks":
      return <BackLinks key={uuidv4()} {...layout} />
    case "ServicesSummary":
      return <ServicesSummary key={uuidv4()} {...layout} />
    case "Contact":
      return <Contact key={uuidv4()} {...layout} />
    case "CustomContent":
      return <CustomContent key={uuidv4()} {...layout} />
    case "SecondHeroImage":
      return <SecondHeroImage key={uuidv4()} {...layout} />
    case "BrandedCreation":
      return <BrandedCreation key={uuidv4()} {...layout} />
    case "SliderValues":
      return <SliderValues key={uuidv4()} {...layout} />
    case "ClientsSlider":
      return <ClientsSlider key={uuidv4()} {...layout} />
    case "BrandedAwards":
      return <BrandedAwards key={uuidv4()} {...layout} />
    case "TitleBanner":
      return <TitleBanner key={uuidv4()} {...layout} />
    case "InfoSlider":
      return <InfoSlider key={uuidv4()} {...layout} />
    case "LandingContact":
      return <LandingContact key={uuidv4()} {...layout} />
    case "ThankYou":
      return <ThankYou key={uuidv4()} {...layout} />
    case "SecondImagesSlider":
      return <SecondImagesSlider key={uuidv4()} {...layout} />
    case "VideoContentGrid":
      return <VideoContentGrid key={uuidv4()} {...layout} />
    case "VideoComponentPage":
      return <VideoComponent key={uuidv4()} {...layout} />
    case "LogoBanner":
      return <LogoBanner key={uuidv4()} {...layout} />
    case "OurStoryHero":
      return <OurStoryHero key={uuidv4()} {...layout} />
    case "CustomMediaContent":
      return <CustomMediaContent key={uuidv4()} {...layout} />
    case "SqueezePageForm":
      return <SqueezePageForm key={uuidv4()} {...layout} />
    case "HeroMobileLanding":
      return <HeroMobileLanding key={uuidv4()} {...layout} />
    case "ReasonBrandsFail":
      return <ReasonBrandsFail key={uuidv4()} {...layout} />
    case "LandingCarousel":
      return <LandingCarousel key={uuidv4()} {...layout} />
    case "ContentList":
      return <ContentList key={uuidv4()} {...layout} />
    case "WhatDoesMean":
      return <WhatDoesMean key={uuidv4()} {...layout} />
    case "TalkAboutBanner":
      return <TalkAboutBanner key={uuidv4()} {...layout} />
    case "DistinctiveSqueezePageForm":
      return <DistinctiveSqueezePageForm key={uuidv4()} {...layout} />
    case "AboutHero":
      return <AboutHero key={uuidv4()} {...layout} />
    case "AboutPromise":
      return <AboutPromise key={uuidv4()} {...layout} />
    case "OurPeople":
      return <OurPeople key={uuidv4()} {...layout} />
    case "OurProcess":
      return <OurProcess key={uuidv4()} {...layout} />
    case "OurLocations":
      return <OurLocations key={uuidv4()} {...layout} />
    case "BCorpBanner":
      return <BCorpBanner key={uuidv4()} {...layout} />
    case "JoinUsBanner":
      return <JoinUsBanner key={uuidv4()} {...layout} />
    case "BgVideoBanner":
      return <BgVideoBanner key={uuidv4()} {...layout} />
    case "ArticlesSliderBanner":
      return <ArticlesSliderBanner key={uuidv4()} {...layout} />
    case "ContentImageSlider":
      return <ContentImageSlider key={uuidv4()} {...layout} />
    case "ServicesSliderBanner":
      return <ServicesSliderBanner key={uuidv4()} {...layout} />
    case "RecentProjects":
      return <RecentProjects key={uuidv4()} {...layout} />
    case "TestimonialBanner":
      return <TestimonialBanner key={uuidv4()} {...layout} />
    case "ServicesHero":
      return <ServicesHero key={uuidv4()} {...layout} />
    case "AnimatedDescription":
      return <AnimatedDescription key={uuidv4()} {...layout} />
    case "AnimatedFeaturesVideo":
      return <AnimatedFeaturesVideo key={uuidv4()} {...layout} />
    case "ArticlesSliderPage":
      return <ArticlesSlider key={uuidv4()} {...layout} isPage />
    default:
      console.warn("⚠️ Unknown layout:", layoutName)
      return null
  }
}