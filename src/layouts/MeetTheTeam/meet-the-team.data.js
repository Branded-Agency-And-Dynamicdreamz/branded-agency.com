import { graphql } from "gatsby"

export const query = graphql`
  fragment MeetTheTeam on WpPage_Pagebuilder_Layouts_MeetTheTeam {
    title
    team {
      name
      jobPosition
      description
      linkedin {
        url
        title
        target
      }
      image {
        altText
        title
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
    fieldGroupName
  }
`
