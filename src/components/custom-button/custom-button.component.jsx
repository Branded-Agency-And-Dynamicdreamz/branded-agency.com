import React from "react"

import * as S from "./custom-button.styles"
import PropTypes from "prop-types"
import RightSVG from "../../assets/right-arrow.svg"

const CustomButton = props => {
  const {
    fullWidth,
    className,
    children,
    loading,
    withIcon,
    href,
    ...rest
  } = props

  if (href) {
    return (
      <S.CustomButton
        component={S.CustomButtonLink}
        to={href}
        className={`custom-button ${className || ""}`}
        disableElevation
        fullWidth={!!fullWidth}
        variant="contained"
        {...rest}
      >
        <span className="text">
          {children}
        </span>

        {withIcon && <RightSVG />}
      </S.CustomButton>
    )
  }

  return (
    <S.CustomButton
      loading={loading}
      className={`custom-button ${className || ""}`}
      disableElevation
      fullWidth={!!fullWidth}
      variant="contained"
      {...rest}
    >
      <span className="text">
        {children}
      </span>

      {withIcon && <RightSVG />}
    </S.CustomButton>
  )
}

CustomButton.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  onClick: PropTypes.func,
  fullWidth: PropTypes.bool,
  loading: PropTypes.bool,
  withIcon: PropTypes.bool,
  className: PropTypes.string,
}

export default CustomButton