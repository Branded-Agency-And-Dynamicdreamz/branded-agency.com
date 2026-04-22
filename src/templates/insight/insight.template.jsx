import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import { getInsightLayout } from "../../utils/get-insight-layouts"
import SEO from "../../components/seo/seo.component"
import InsightHero from "../../layouts/InsightHero/insight-hero.component"
import GetInTouch from "../../layouts/GetInTouch"
import RelatedInsights from "../../layouts/RelatedInsights/related-insights.component"
import { DownloadGuideProvider } from "../../context/download-guide.provider"
import TypeformEmbed from "../../layouts/TypeformEmbed"
import ArticlesSlider from "../../layouts/ArticlesSlider"

export const query = graphql`
  query InsightQuery($id: String!) {
    wpInsight(id: { eq: $id }) {
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
      insightBuilder {
        layouts {
          ... on WpInsight_Insightbuilder_Layouts_MiscContentInsight {
            ...MiscContentInsight
          }
          ... on WpInsight_Insightbuilder_Layouts_SideBySide {
            ...SideBySide
          }
          ... on WpInsight_Insightbuilder_Layouts_VideoComponent {
            ...VideoComponent
          }
          ... on WpInsight_Insightbuilder_Layouts_ImagesSlider {
            ...ImagesSlider
          }
          ... on WpInsight_Insightbuilder_Layouts_DownloadGuide {
            ...DownloadGuide
          }
          ... on WpInsight_Insightbuilder_Layouts_ItemList {
            ...ItemList
          }
          ... on WpInsight_Insightbuilder_Layouts_AuthorComment {
            ...AuthorComment
          }
          ... on WpInsight_Insightbuilder_Layouts_RelatedInsights {
            ...RelatedInsights
          }
          ... on WpInsight_Insightbuilder_Layouts_ArticleBulletPointList {
            ...ArticleBulletPointList
          }
          ... on WpInsight_Insightbuilder_Layouts_ArticleAccordion {
            ...ArticleAccordion
          }
          ... on WpInsight_Insightbuilder_Layouts_ArticleGallery {
            ...ArticleGalleryInsight
          }
          ... on WpInsight_Insightbuilder_Layouts_ImageTextGrid {
            ...ImageTextGrid
          }
          ... on WpInsight_Insightbuilder_Layouts_TypeformEmbed {
            ...TypeformEmbed
          }
          ... on WpInsight_Insightbuilder_Layouts_ArticlesSlider {
            ...ArticlesSliderInsight
          }
        }
        tag
        videoType
        videoLink
        video {
          mediaItemUrl
        }
        videoControls
        idHeroQuiz
        isHeroVideo
        noPaddingBottom
        authorInfo {
          name
          image {
            title
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          linkedinLink
          mail
          extraLink
          jobPosition
        }
        containHeroImage
        showArticlesSlider
        showContactBanner
        hideHeaderOnScroll
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
  const seo = data.wpInsight.seo
  const canonical = `${seo.canonical}`
  const opengraphUrl = `${seo.opengraphUrl}`
  return <SEO data={{ ...seo, canonical, opengraphUrl }} />
}

const Post = ({ data }) => {
  const {
    insightBuilder = {},
    title = "",
    date = "",
    featuredImage,
    slug,
  } = data?.wpInsight
  const layouts = insightBuilder.layouts || []
  const relatedInsightsData = layouts.find(
    layout =>
      layout?.fieldGroupName?.split("_").pop().trim() === "RelatedInsights",
  )

  const hasArticlesSlider = layouts?.some(
    layout =>
      layout?.fieldGroupName?.split("_").pop().trim() === "ArticlesSlider",
  )

  // const TypeformEmbedData = layouts.find(
  //   layout =>
  //     layout?.fieldGroupName.split("_").pop().trim() === "TypeformEmbed",
  // )

  // console.log("insightBuilder :>> ", insightBuilder)
  return (
    <DownloadGuideProvider>
      <Layout
        isCaseStudy
        hideHeaderOnScroll={insightBuilder?.hideHeaderOnScroll}
      >
        <InsightHero
          title={title}
          date={date}
          tag={insightBuilder?.tag}
          authorInfo={insightBuilder?.authorInfo}
          image={featuredImage?.node}
          videoType={insightBuilder.videoType}
          videoLink={insightBuilder.videoLink}
          video={insightBuilder.video}
          isHeroVideo={insightBuilder.isHeroVideo}
          noPaddingBottom={insightBuilder?.noPaddingBottom}
          idHeroQuiz={insightBuilder?.idHeroQuiz}
          containHeroImage={insightBuilder?.containHeroImage}
          videoControls={insightBuilder?.videoControls}
          slug={slug}
        >
          {layouts.map(layout => getInsightLayout(layout))}
        </InsightHero>
        {insightBuilder?.showArticlesSlider && !hasArticlesSlider && (
          <ArticlesSlider
            actualSlug={slug}
            title="Contact us now to see how BRANDED can help you."
          />
        )}
        {/*{TypeformEmbedData && <TypeformEmbed {...TypeformEmbedData} />}*/}
        {relatedInsightsData && <RelatedInsights {...relatedInsightsData} />}
        {insightBuilder?.showContactBanner && (
          <GetInTouch
            text="Contact us to see how BRANDED can help"
            button={{
              title: "Get in touch",
              url: "/contact/",
            }}
          />
        )}
      </Layout>
    </DownloadGuideProvider>
  )
}

export default Post
