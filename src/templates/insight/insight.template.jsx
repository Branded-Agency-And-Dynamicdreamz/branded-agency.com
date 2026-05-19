import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../../components/layout"
import { getInsightLayout } from "../../utils/get-insight-layouts"
import SEO from "../../components/seo/seo.component"
import InsightHero from "../../layouts/InsightHero/insight-hero.component"
import GetInTouch from "../../layouts/GetInTouch"
import RelatedInsights from "../../layouts/RelatedInsights/related-insights.component"
import { DownloadGuideProvider } from "../../context/download-guide.provider"
import ArticlesSlider from "../../layouts/ArticlesSlider"
import { TranslationProvider } from "../../context/translations-context"

export const query = graphql`
  query InsightQuery($id: String!) {
    wpInsight(id: { eq: $id }) {
      title
      date
      content
      id
      uri
      slug
      language {
        code
      }
      translations {
        uri
        language {
          code
        }
      }
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
  const insight = data.wpInsight
  const seo = insight.seo
  const canonical = `${seo.canonical}`
  const opengraphUrl = `${seo.opengraphUrl}`

  return (
    <>
      <SEO data={{ ...seo, canonical, opengraphUrl }} />

      <link
        rel="alternate"
        hrefLang={insight?.language?.code?.toLowerCase()}
        href={insight?.uri}
      />

      {insight?.translations?.map(item => (
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

const Post = ({ data }) => {
  const {
    insightBuilder = {},
    title = "",
    date = "",
    featuredImage,
    slug,
    language,
    translations,
    uri,
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

  return (
    <DownloadGuideProvider>
      <TranslationProvider
        value={{
          currentLanguage: language?.code,
          currentUri: uri,
          translations,
        }}
      >
        <Layout
          isCaseStudy
          hideHeaderOnScroll={insightBuilder?.hideHeaderOnScroll}
        >
          {/* Language Switcher */}
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
                🌐 {language?.code || "EN"}
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
                {/* Current language */}
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
                  {language?.code || "EN"}
                </Link>

                {/* Translation languages */}
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
      </TranslationProvider>
    </DownloadGuideProvider>
  )
}

export default Post