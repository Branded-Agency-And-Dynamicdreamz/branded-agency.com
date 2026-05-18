import React, { useEffect, useState } from "react"
import * as S from "./header.styles.jsx"
import SearchIcon from "@mui/icons-material/Search"
import MenuIcon from "@mui/icons-material/Menu"
import HeaderItems from "./header-items/header-items.component"
import { AppBar, Toolbar, useMediaQuery, useTheme } from "@mui/material"
import SearchDrawer from "../search-drawer/search-drawer.component.jsx"
import { isBrowser } from "../../utils/utils"
import HeaderMobile from "./header-mobile/header-mobile.component"
import { Close } from "@mui/icons-material"
import { useScrollTrigger } from "@mui/material"
import { graphql, useStaticQuery } from "gatsby"
import Slide from "@mui/material/Slide"
import { CustomLink } from "../custom-link/custom-link.styles"
import Typography from "@mui/material/Typography"

function HideOnScroll(props) {
  const {
    children,
    window,
    hideHeaderOnScroll,
    threshold = 200,
    enterTime = 750,
    exitTime = 500,
  } = props

  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    threshold: threshold,
  })

  if (!hideHeaderOnScroll) {
    return <>{children}</>
  }

  return (
    <Slide
      appear={false}
      direction="down"
      in={!trigger}
      timeout={{
        enter: enterTime,
        exit: exitTime,
      }}
    >
      {children ?? <div />}
    </Slide>
  )
}

const Header = ({
  hideItems,
  isTransparent,
  hideHeaderOnScroll = false,
  isCaseStudy,
  whiteHeader,
  ...props
}) => {
  const theme = useTheme()
  const isMd = useMediaQuery(theme.breakpoints.up("lg"))
  const [isOpenSearch, setIsOpenSearch] = useState(false)
  const [path, setPath] = useState("")
  const [isActiveMenu, setIsActiveMenu] = React.useState(false)
  const scrollTrigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 20,
  })

  useEffect(() => {
    if (isBrowser) {
      const auxPath =
        typeof window !== "undefined" ? window.location.pathname : ""
      setPath(auxPath)
    }
  }, [])
  const handleOpenSearch = () => {
    setIsOpenSearch(true)
  }

  return (
    <>
      {/*<HideOnScroll*/}
      {/*  hideHeaderOnScroll={hideHeaderOnScroll}*/}
      {/*  threshold={200}*/}
      {/*  {...props}*/}
      {/*>*/}
      <S.CustomAppBar
        elevation={scrollTrigger && !isCaseStudy && !hideHeaderOnScroll ? 4 : 0}
        className={`${isTransparent && !scrollTrigger && "transparent"} ${isActiveMenu && "activeMenu"
          } ${hideHeaderOnScroll ? "semiTransparent" : ""} `}
      >
        {hideHeaderOnScroll && (
          <HideOnScroll
            hideHeaderOnScroll={!isActiveMenu && hideHeaderOnScroll}
            threshold={isMd ? 400 : 100}
            exitTime={300}
            enterTime={400}
            {...props}
          >
            <S.BgHeader className={whiteHeader ? "whiteHeader" : ""} />
          </HideOnScroll>
        )}
        <HideOnScroll
          hideHeaderOnScroll={!isActiveMenu && hideHeaderOnScroll}
          threshold={isMd ? 650 : 150}
          exitTime={400}
          enterTime={400}
          {...props}
        >
          <S.CustomContainer
            maxWidth="xl"
            className={`top-header-container ${hideHeaderOnScroll ? "absolute" : ""
              }`}
          >
            <S.MenuWrapper
              className={whiteHeader ? "whiteHeader" : ""}
              onClick={() =>
                isActiveMenu ? setIsActiveMenu(false) : setIsActiveMenu(true)
              }
            >
              {isActiveMenu ? <Close /> : <MenuIcon />}
            </S.MenuWrapper>
            <S.LeftWrapper>
              <S.Link url={!hideItems ? "/" : ""}>
                <S.Logo
                  className={`${hideItems ? "addPadding" : ""} ${whiteHeader ? "whiteHeader" : ""
                    }`}
                />
              </S.Link>
            </S.LeftWrapper>
            {!hideItems && (
              <S.RightWrapper>
                <S.ItemsWrapper>
                  <HeaderItems
                    path={path}
                    isCaseStudy={isCaseStudy || hideHeaderOnScroll}
                    whiteHeader={whiteHeader}
                  />
                </S.ItemsWrapper>
                <S.LoginLink url="https://os.branded-agency.com/login/" target="_blank" className={whiteHeader ? "whiteHeader" : ""}>
                  <S.LoginLogo />
                </S.LoginLink>
              </S.RightWrapper>
            )}
          </S.CustomContainer>
        </HideOnScroll>
      </S.CustomAppBar>
      {/*</HideOnScroll>*/}

      <SearchDrawer
        isOpen={isOpenSearch}
        handleClose={() => setIsOpenSearch(false)}
      />
      <HeaderMobile isActiveMenu={isActiveMenu} path={path} />
    </>
  )
}
export default Header
