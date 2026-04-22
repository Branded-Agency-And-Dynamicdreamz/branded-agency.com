import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo/seo.component"
import CaseStudyHero from "../../layouts/CaseStudyHero/case-study-hero.component"
import { getCaseStudyLayout } from "../../utils/get-case-study-layouts"
import SeeMore from "../../layouts/SeeMore/see-more.component"
import GetInTouch from "../../layouts/GetInTouch"
import ArticlesSlider from "../../layouts/ArticlesSlider"

export const query = graphql`
  query CaseStudyQuery($id: String!) {
    wpCaseStudy(id: { eq: $id }) {
      title
      date
      content
      id
      uri
      slug
      featuredImage {
        node {
          sourceUrl
          localFile {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
      }
      caseStudyBuilder {
        showArticlesSlider
        showSeeMore
        showContactBanner
        description
        subtitle
        showTextAnimation
        className
        heroVimeoLink
        heroVideoThumbnail {
          publicUrl
        }
        hideHeaderOnScroll
        heroVideoControls
        heroFile {
          gatsbyImage(width: 100, height: 100)
          mediaItemUrl
        }
        layouts {
          ... on WpCaseStudy_Casestudybuilder_Layouts_MiscContent {
            ...MiscContentCS
          }
          ... on WpCaseStudy_Casestudybuilder_Layouts_VideoComponent {
            ...VideoComponentCS
          }
          ... on WpCaseStudy_Casestudybuilder_Layouts_GridContent {
            ...GridContent
          }
          ... on WpCaseStudy_Casestudybuilder_Layouts_CountUpGrid {
            ...CountUpGrid
          }
          ... on WpCaseStudy_Casestudybuilder_Layouts_ArticleGallery {
            ...ArticleGallery
          }
          ... on WpCaseStudy_Casestudybuilder_Layouts_ImagesSlider {
            ...ImagesSliderCS
          }
          ... on WpCaseStudy_Casestudybuilder_Layouts_ScrollerContentServices {
            ...ScrollerContentServices
          }
          ... on WpCaseStudy_Casestudybuilder_Layouts_Testimonial {
            ...Testimonial
          }
          ... on WpCaseStudy_Casestudybuilder_Layouts_ArticlesSlider {
            ...ArticlesSlider
          }
          ... on WpCaseStudy_Casestudybuilder_Layouts_GridContentMedia {
            ...GridContentMedia
          }
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
        opengraphImage {
          altText
          sourceUrl
          title
        }
        opengraphModifiedTime
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
    }
  }
`

export const Head = ({ data }) => {
  const seo = data.wpCaseStudy.seo
  const canonical = `${seo.canonical}`
  const opengraphUrl = `${seo.opengraphUrl}`
  return <SEO data={{ ...seo, canonical, opengraphUrl }} />
}

const Post = ({ data }) => {
  const { caseStudyBuilder, title, slug } = data?.wpCaseStudy
  const layouts = caseStudyBuilder.layouts || []

  const hasArticlesSlider = layouts?.some(
    layout =>
      layout?.fieldGroupName?.split("_").pop().trim() === "ArticlesSlider",
  )

  // console.log("layouts :>> ", layouts)
  // console.log("caseStudyBuilder :>> ", caseStudyBuilder)
  return (
    <Layout
      hideHeaderOnScroll={caseStudyBuilder?.hideHeaderOnScroll}
      isCaseStudy
    >
      <CaseStudyHero
        title={title}
        heroFile={caseStudyBuilder.heroFile}
        subtitle={caseStudyBuilder.subtitle}
        description={caseStudyBuilder.description}
        className={`${caseStudyBuilder.className} ${
          hasArticlesSlider ? "noPaddingBottom" : ""
        }`}
        heroVimeoLink={caseStudyBuilder.heroVimeoLink}
        showAnimation={caseStudyBuilder?.showTextAnimation}
        heroVideoControls={caseStudyBuilder?.heroVideoControls}
        heroVideoThumbnail={caseStudyBuilder?.heroVideoThumbnail}
      >
        {layouts.map(layout => getCaseStudyLayout(layout))}
      </CaseStudyHero>
      {caseStudyBuilder?.showArticlesSlider && !hasArticlesSlider && (
        <ArticlesSlider
          actualSlug={slug}
          title="Contact us now to see how BRANDED can help you."
        />
      )}
      {caseStudyBuilder?.showSeeMore && (
        <SeeMore
          title="See more case studies"
          button={{
            title: "View all",
            url: "/case-studies/",
          }}
        />
      )}
      {caseStudyBuilder?.showContactBanner && (
        <GetInTouch
          text="Contact us to see how BRANDED can help"
          button={{
            title: "Get in touch",
            url: "/contact/",
          }}
        />
      )}
    </Layout>
  )
}

export default Post
