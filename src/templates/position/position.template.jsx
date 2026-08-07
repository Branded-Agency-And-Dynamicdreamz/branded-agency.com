import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo/seo.component"
import PositionHero from "../../layouts/PositionHero/position-hero.component"
import PositionDescription from "../../layouts/PositionDescription/position-description.component"
import PositionForm from "../../layouts/PositionForm/position-form.component"

export const query = graphql`
  query PositionQuery($id: String!) {
    wpPosition(id: { eq: $id }) {
      title
      date
      content
      id
      uri
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
      positionBuilder {
        location
        titleJob
        description
        workModality
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
  const seo = data.wpPosition.seo
  const canonical = `${seo.canonical}`
  const opengraphUrl = `${seo.opengraphUrl}`
  return <SEO data={{ ...seo, canonical, opengraphUrl }} />
}

const Post = ({ data }) => {
  const { title, positionBuilder } = data?.wpPosition
  const { titleJob, workModality, location, description } = positionBuilder
  return (
    <Layout>
      <PositionHero titleJob={titleJob} location={location} />
      <PositionDescription description={description} />
      <PositionForm
        title="Join the BRANDED team!"
        titleJob={titleJob}
        location={location}
      />
    </Layout>
  )
}

export default Post
