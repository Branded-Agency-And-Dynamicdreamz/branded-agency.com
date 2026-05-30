import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo/seo.component"
import CaseStudyHero from "../../layouts/CaseStudyHero/case-study-hero.component"
import { getCaseStudyLayout } from "../../utils/get-case-study-layouts"
import SeeMore from "../../layouts/SeeMore/see-more.component"
import GetInTouch from "../../layouts/GetInTouch"
import ArticlesSlider from "../../layouts/ArticlesSlider"
import { TranslationProvider } from "../../context/translations-context"
import { useTranslation } from "../../hooks/useTranslation"

export const query = graphql`
  query CaseStudyQuery($id: String!) {
    wpCaseStudy(id: { eq: $id }) {
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
          sourceUrl
        }
        hideHeaderOnScroll
        heroVideoControls
        heroFile {
          gatsbyImage(width: 100, height: 100)
          mediaItemUrl
          sourceUrl
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
  const caseStudy = data.wpCaseStudy
  const seo = caseStudy.seo
  const canonical = `${seo.canonical}`
  const opengraphUrl = `${seo.opengraphUrl}`

  return (
    <>
      <SEO data={{ ...seo, canonical, opengraphUrl }} />

      <link
        rel="alternate"
        hrefLang={caseStudy?.language?.code?.toLowerCase()}
        href={caseStudy?.uri}
      />

      {caseStudy?.translations?.map(item => (
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
  const { t } = useTranslation()
  const { caseStudyBuilder, title, slug, language, translations, uri } = data?.wpCaseStudy
  const layouts = caseStudyBuilder.layouts || []

  const hasArticlesSlider = layouts?.some(
    layout =>
      layout?.fieldGroupName?.split("_").pop().trim() === "ArticlesSlider",
  )

  return (
    <TranslationProvider
      value={{
        currentLanguage: language?.code,
        currentUri: uri,
        translations,
      }}
    >
      <Layout
        hideHeaderOnScroll={caseStudyBuilder?.hideHeaderOnScroll}
        isCaseStudy
      >
        {/* Language Switcher - Same as page template */}
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

        <CaseStudyHero
          title={title}
          heroFile={caseStudyBuilder.heroFile}
          subtitle={caseStudyBuilder.subtitle}
          description={caseStudyBuilder.description}
          className={`${caseStudyBuilder.className} ${hasArticlesSlider ? "noPaddingBottom" : ""
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
            title={t("Contact us now to see how BRANDED can help you.")}
          />
        )}

        {caseStudyBuilder?.showSeeMore && (
          <SeeMore
            title={t("See more case studies")}
            button={{
              title: t("View all"),
              url: "/case-studies/",
            }}
          />
        )}

        {caseStudyBuilder?.showContactBanner && (
          <GetInTouch
            text={t("Contact us to see how BRANDED can help")}
            button={{
              title: t("Get in touch"),
              url: "/contact/",
            }}
          />
        )}
      </Layout>
    </TranslationProvider>
  )
}

export default Post