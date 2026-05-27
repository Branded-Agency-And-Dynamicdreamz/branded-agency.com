import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../../components/layout"
import { getPageLayout } from "../../utils/get-layout-utils"
import SEO from "../../components/seo/seo.component"
import { TranslationProvider } from "../../context/translations-context"

export const query = graphql`
  query PageQuery($id: String!) {
    wpPage(id: { eq: $id }) {
      id
      isFrontPage
      title
      content
      uri
      slug
      parentId
      language {
        code
      }

      translations {
        uri

        language {
          code
        }
      }
      seo {
        canonical
        title
        focuskw
        metaDesc
        metaKeywords
        metaRobotsNofollow
        metaRobotsNoindex
        opengraphAuthor
        opengraphDescription
        opengraphModifiedTime
        opengraphImage {
          altText
          sourceUrl
          title
        }
        opengraphPublishedTime
        opengraphPublisher
        opengraphSiteName
        opengraphTitle
        opengraphType
        opengraphUrl
        twitterDescription
        twitterTitle
        twitterImage {
          altText
          sourceUrl
          title
        }
      }
      pageBuilder {
        layouts {
          ... on WpPage_Pagebuilder_Layouts_MiscContent {
            ...MiscContent
          }
          ... on WpPage_Pagebuilder_Layouts_HomeHero {
            ...HomeHero
          }
          ... on WpPage_Pagebuilder_Layouts_InfoBanner {
            ...InfoBanner
          }
          ... on WpPage_Pagebuilder_Layouts_BrandSteps {
            ...BrandSteps
          }
          ... on WpPage_Pagebuilder_Layouts_HappyClients {
            ...HappyClients
          }
          ... on WpPage_Pagebuilder_Layouts_TestimonialsSlider {
            ...TestimonialsSlider
          }
          ... on WpPage_Pagebuilder_Layouts_GetInTouch {
            ...GetInTouch
          }
          ... on WpPage_Pagebuilder_Layouts_InsightsHero {
            ...InsightsHero
          }
          ... on WpPage_Pagebuilder_Layouts_HeroSlider {
            ...HeroSlider
          }
          ... on WpPage_Pagebuilder_Layouts_CustomHero {
            ...CustomHero
          }
          ... on WpPage_Pagebuilder_Layouts_VideoBanner {
            ...VideoBanner
          }
          ... on WpPage_Pagebuilder_Layouts_BannerText {
            ...BannerText
          }
          ... on WpPage_Pagebuilder_Layouts_ImageText {
            ...ImageText
          }
          ... on WpPage_Pagebuilder_Layouts_BgHero {
            ...BgHero
          }
          ... on WpPage_Pagebuilder_Layouts_MeetTheTeam {
            ...MeetTheTeam
          }
          ... on WpPage_Pagebuilder_Layouts_HeroImage {
            ...HeroImage
          }
          ... on WpPage_Pagebuilder_Layouts_OurValues {
            ...OurValues
          }
          ... on WpPage_Pagebuilder_Layouts_JobForm {
            ...JobForm
          }
          ... on WpPage_Pagebuilder_Layouts_CaseStudiesHero {
            ...CaseStudiesHero
          }
          ... on WpPage_Pagebuilder_Layouts_SummarySubItems {
            ...SummarySubItems
          }
          ... on WpPage_Pagebuilder_Layouts_SubContent {
            ...SubContent
          }
          ... on WpPage_Pagebuilder_Layouts_Gallery {
            ...Gallery
          }
          ... on WpPage_Pagebuilder_Layouts_BackLinks {
            ...BackLinks
          }
          ... on WpPage_Pagebuilder_Layouts_ServicesSummary {
            ...ServicesSummary
          }
          ... on WpPage_Pagebuilder_Layouts_Contact {
            ...Contact
          }
          ... on WpPage_Pagebuilder_Layouts_CustomContent {
            ...CustomContent
          }
          ... on WpPage_Pagebuilder_Layouts_SecondHeroImage {
            ...SecondHeroImage
          }
          ... on WpPage_Pagebuilder_Layouts_BrandedCreation {
            ...BrandedCreation
          }
          ... on WpPage_Pagebuilder_Layouts_SliderValues {
            ...SliderValues
          }
          ... on WpPage_Pagebuilder_Layouts_ClientsSlider {
            ...ClientsSlider
          }
          ... on WpPage_Pagebuilder_Layouts_BrandedAwards {
            ...BrandedAwards
          }
          ... on WpPage_Pagebuilder_Layouts_TitleBanner {
            ...TitleBanner
          }
          ... on WpPage_Pagebuilder_Layouts_InfoSlider {
            ...InfoSlider
          }
          ... on WpPage_Pagebuilder_Layouts_LandingContact {
            ...LandingContact
          }
          ... on WpPage_Pagebuilder_Layouts_ThankYou {
            ...ThankYou
          }
          ... on WpPage_Pagebuilder_Layouts_SecondImagesSlider {
            ...SecondImagesSlider
          }
          ... on WpPage_Pagebuilder_Layouts_VideoContentGrid {
            ...VideoContentGrid
          }
          ... on WpPage_Pagebuilder_Layouts_VideoComponentPage {
            ...VideoComponentPage
          }
          ... on WpPage_Pagebuilder_Layouts_LogoBanner {
            ...LogoBanner
          }
          ... on WpPage_Pagebuilder_Layouts_OurStoryHero {
            ...OurStoryHero
          }
          ... on WpPage_Pagebuilder_Layouts_CustomMediaContent {
            ...CustomMediaContent
          }
          ... on WpPage_Pagebuilder_Layouts_SqueezePageForm {
            ...SqueezePageForm
          }
          ... on WpPage_Pagebuilder_Layouts_HeroMobileLanding {
            ...HeroMobileLanding
          }
          ... on WpPage_Pagebuilder_Layouts_ReasonBrandsFail {
            ...ReasonBrandsFail
          }
          ... on WpPage_Pagebuilder_Layouts_LandingCarousel {
            ...LandingCarousel
          }
          ... on WpPage_Pagebuilder_Layouts_ContentList {
            ...ContentList
          }
          ... on WpPage_Pagebuilder_Layouts_WhatDoesMean {
            ...WhatDoesMean
          }
          ... on WpPage_Pagebuilder_Layouts_TalkAboutBanner {
            ...TalkAboutBanner
          }
          ... on WpPage_Pagebuilder_Layouts_DistinctiveSqueezePageForm {
            ...DistinctiveSqueezePageForm
          }
          ... on WpPage_Pagebuilder_Layouts_AboutHero {
            ...AboutHero
          }
          ... on WpPage_Pagebuilder_Layouts_AboutPromise {
            ...AboutPromise
          }
          ... on WpPage_Pagebuilder_Layouts_OurPeople {
            ...OurPeople
          }
          ... on WpPage_Pagebuilder_Layouts_OurProcess {
            ...OurProcess
          }
          ... on WpPage_Pagebuilder_Layouts_OurLocations {
            ...OurLocations
          }
          ... on WpPage_Pagebuilder_Layouts_BCorpBanner {
            ...BCorpBanner
          }
          ... on WpPage_Pagebuilder_Layouts_JoinUsBanner {
            ...JoinUsBanner
          }
          ... on WpPage_Pagebuilder_Layouts_BgVideoBanner {
            ...BgVideoBanner
          }
          ... on WpPage_Pagebuilder_Layouts_ArticlesSliderBanner {
            ...ArticlesSliderBanner
          }
          ... on WpPage_Pagebuilder_Layouts_ContentImageSlider {
            ...ContentImageSlider
          }
          ... on WpPage_Pagebuilder_Layouts_ServicesSliderBanner {
            ...ServicesSliderBanner
          }
          ... on WpPage_Pagebuilder_Layouts_RecentProjects {
            ...RecentProjects
          }
          ... on WpPage_Pagebuilder_Layouts_TestimonialBanner {
            ...TestimonialBanner
          }
          ... on WpPage_Pagebuilder_Layouts_ServicesHero {
            ...ServicesHero
          }
          ... on WpPage_Pagebuilder_Layouts_AnimatedDescription {
            ...AnimatedDescription
          }
          ... on WpPage_Pagebuilder_Layouts_AnimatedFeaturesVideo {
            ...AnimatedFeaturesVideo
          }
          ... on WpPage_Pagebuilder_Layouts_ArticlesSliderPage {
            ...ArticlesSliderPage
          }
        }
        pageConfiguration {
          hideFooter
          hideHeader
          hideHeaderItems
          hideHeaderOnScroll
          whiteHeader
          whiteFooter

          isTransparentHeader
        }
      }
    }

    # Get ALL case studies (filtering will be done in component)
    allWpCaseStudy(sort: { date: DESC }) {
      nodes {
        slug
        title
        uri
        language {
          code
        }
        translations {
          title
          uri
          language {
            code
          }
        }
        featuredImage {
          node {
            title
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
        caseStudyBuilder {
          subtitle
          titleHover
          subtitleHover
        }
      }
    }
  }
`

export const Head = ({ data }) => {
  const page = data?.wpPage

  return (
    <>
      <SEO data={page?.seo} />

      <link
        rel="alternate"
        hrefLang={page?.language?.code?.toLowerCase()}
        href={page?.uri}
      />

      {page?.translations?.map(item => (
        <link
          key={item.language.code}
          rel="alternate"
          hrefLang={item.language.code.toLowerCase()}
          href={item.uri}
        />
      ))}
    </>
  )
}

const PageTemplate = ({ data }) => {
  const {
    slug,
    pageBuilder,
    title,
    language,
    translations,
    uri,
  } = data.wpPage
  const layouts = pageBuilder.layouts || []

  const hasAnimatedFeaturesVideo = layouts?.some(
    layout =>
      layout?.fieldGroupName?.split("_").pop().trim() ===
      "AnimatedFeaturesVideo",
  )

  const caseStudies = data?.allWpCaseStudy?.nodes || []

  return (
    <TranslationProvider
      value={{
        currentLanguage: language?.code,
        currentUri: uri,
        translations,
      }}
    >
      <Layout
        {...pageBuilder.pageConfiguration}
        whitePinSpacer={hasAnimatedFeaturesVideo}
      >
        <div
          style={{
            position: "fixed",
            right: "20px",
            bottom: "20px",
            zIndex: 9999,
          }}
        >
          <details
            style={{
              position: "relative",
            }}
          >
            <summary
              style={{
                listStyle: "none",
                cursor: "pointer",
                background: "#111827",
                color: "#fff",
                borderRadius: "999px",
                padding: "14px 18px",
                fontWeight: "600",
                fontSize: "14px",
                border: "none",
                boxShadow:
                  "0 10px 25px rgba(0,0,0,0.2)",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              🌐 {language?.code}
            </summary>

            <div
              style={{
                position: "absolute",
                bottom: "60px",
                right: 0,
                background: "#fff",
                borderRadius: "16px",
                minWidth: "140px",
                overflow: "hidden",
                boxShadow:
                  "0 10px 30px rgba(0,0,0,0.15)",
                border: "1px solid #e5e7eb",
              }}
            >
              
              <Link
                to={uri}
                style={{
                  display: "block",
                  padding: "12px 16px",
                  textDecoration: "none",
                  color: "#111827",
                  fontWeight: "700",
                  background: "#f3f4f6",
                  borderBottom: "1px solid #e5e7eb",
                }}
              >
                {language?.code}
              </Link>

              {translations?.map(item => {
                let translatedUri = item.uri

                if (
                  item.uri.includes("/home-page/")
                ) {
                  translatedUri = `/${item.language.code.toLowerCase()}/`
                }

                return (
                  <Link
                    key={item.language.code}
                    to={translatedUri}
                    style={{
                      display: "block",
                      padding: "12px 16px",
                      textDecoration: "none",
                      color: "#111827",
                      borderBottom:
                        "1px solid #f3f4f6",
                      transition: "0.2s ease",
                    }}
                  >
                    {item.language.code}
                  </Link>
                )
              })}
            </div>
          </details>
        </div>

        {layouts.map(layout => getPageLayout(layout, { caseStudies }))}
      </Layout>
    </TranslationProvider>
  )
}

export default PageTemplate