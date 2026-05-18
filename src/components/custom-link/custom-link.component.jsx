import React from "react"
import PropTypes from "prop-types"
import * as S from "./custom-link.styles"

const CustomLink = ({
  url,
  children,
  ...otherProps
}) => {
  const internal =
    /^\/(?!\/)/.test(url)

  const file =
    /\.[0-9a-z]+$/i.test(url)

  if (internal) {
    if (file) {
      return (
        <S.CustomRegularLink
          href={url}
          {...otherProps}
        >
          {children}
        </S.CustomRegularLink>
      )
    }

    return (
      <S.CustomLink
        partiallyActive={true}
        activeClassName="active"
        to={url}
        {...otherProps}
      >
        {children}
      </S.CustomLink>
    )
  }

  return (
    <S.CustomRegularLink
      href={url}
      {...otherProps}
    >
      {children}
    </S.CustomRegularLink>
  )
}

CustomLink.propTypes = {
  url: PropTypes.string.isRequired,
  target: PropTypes.string,
}

export default CustomLink