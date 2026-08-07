import * as S from "../../layouts/InsightHero/insight-hero.styles"
import LinkedInSVG from "../../assets/linkedin.svg"
import EmailIcon from "@mui/icons-material/Email"
import React from "react"

const AuthorCard = ({
  authorInfo,
  extraLink,
  linkedInLink,
  mail,
  type,
  slug,
}) => {
  return (
    <S.AuthorCard>
      <S.LeftWrapper>
        <S.AuthorImg img={authorInfo.image} />
        <S.AuthorInfo>
          <S.Name>{authorInfo.name}</S.Name>
          <S.Job>{authorInfo.jobPosition}</S.Job>
        </S.AuthorInfo>
      </S.LeftWrapper>
      <S.RightWrapper>
        <S.ShareLabel>Share: </S.ShareLabel>
        <S.SocialLinks className="card">
          {/*{extraLink && (*/}
          {/*  <S.SocialButton className="link" href={extraLink} target="_blank">*/}
          {/*    <FavoriteIcon />*/}
          {/*  </S.SocialButton>*/}
          {/*)}*/}
          {linkedInLink && (
            <S.SocialButton
              className="link"
              href={`http://www.linkedin.com/shareArticle?mini=true&url=${
                process.env.GATSBY_WEBSITE_URL + `/${type}/` + slug
              }`}
              target={"_blank"}
            >
              <LinkedInSVG className="linkedin" />
            </S.SocialButton>
          )}
          {mail && (
            <S.SocialButton className="link" href={`mailto:${mail}`}>
              <EmailIcon />
            </S.SocialButton>
          )}
        </S.SocialLinks>
      </S.RightWrapper>
    </S.AuthorCard>
  )
}
export default AuthorCard
