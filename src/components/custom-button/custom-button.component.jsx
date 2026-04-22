import React from "react"

import * as S from "./custom-button.styles"
import PropTypes from "prop-types"
import RightSVG from "../../assets/right-arrow.svg"

const CustomButton = props => {
  const { fullWidth, className, children, loading, withIcon } = props
  return (
    <>
      {/*{href ?*/}
      {/*  <S.CustomButtonLink*/}
      {/*    className={`custom-button ${className}`}*/}
      {/*    style={style}*/}
      {/*    color={color}*/}
      {/*    to={href}*/}
      {/*    target={target}*/}
      {/*    // bg="#2A334E"*/}
      {/*    // swipe*/}
      {/*    // direction="right"*/}
      {/*  >*/}
      {/*    {children}*/}
      {/*  </S.CustomButtonLink>*/}
      {/*  :*/}
      <S.CustomButton
        loading={loading}
        className={`custom-button ${className}`}
        disableElevation
        fullWidth={fullWidth ? true : null}
        variant="contained"
        {...props}
      >
        <span className="text">{children}</span>
        {withIcon && <RightSVG />}
      </S.CustomButton>
      {/*}*/}
    </>
  )
}

CustomButton.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  onClick: PropTypes.func,
  fullWidth: PropTypes.bool,
}

export default CustomButton
