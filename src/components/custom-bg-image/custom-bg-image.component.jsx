import React from "react"
import PropTypes from "prop-types"
import * as S from "./custom-bg-image.styles"
import { GatsbyImage } from "gatsby-plugin-image"

const CustomBgImage = props => {
  const {
    img,
    tag,
    fallback,
    children,
    loading = "lazy",
    ...otherProps
  } = props

  if (!img) {
    return <section {...props}>{children}</section>
  }

  let image = ""
  let fallbackUrl = ""

  if (img.localFile && img.localFile.childImageSharp) {
    image = img.localFile.childImageSharp.gatsbyImageData
  }

  if (img.childImageSharp) {
    image = img.childImageSharp.gatsbyImageData
  }

  if (!image && fallback) {
    if (fallback.localFile) {
      image = fallback.localFile.childImageSharp?.gatsbyImageData
    }
    if (fallback.childImageSharp) {
      image = fallback.childImageSharp.gatsbyImageData
    }
  }

  if (!image) {
    fallbackUrl =
      (img && (img.mediaItemUrl || img.sourceUrl || img.url)) ||
      (fallback && (fallback.mediaItemUrl || fallback.sourceUrl || fallback.url)) ||
      (typeof img === "string" || img instanceof String ? img : "")
  }

  return (
    <S.Wrapper component={tag ? tag : "section"} {...otherProps}>
      {image && (
        <GatsbyImage
          image={image}
          loading={loading}
          role="presentation"
          alt=""
        />
      )}
      {!image && fallbackUrl && (
        <img src={fallbackUrl} loading={loading} role="presentation" alt="" />
      )}
      {children}
    </S.Wrapper>
  )
}

CustomBgImage.propTypes = {
  img: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  tag: PropTypes.string,
}

export default CustomBgImage
