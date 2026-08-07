import React, { useEffect } from "react"
import * as S from "./header-items.styles"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight"
import ITEMS from "../header-items.json"
import { graphql, useStaticQuery } from "gatsby"
import { useTranslation } from "../../../hooks/useTranslation"


const HeaderItems = ({ path, isCaseStudy, whiteHeader }) => {
  const { t } = useTranslation()
  const [subItemSelected, setSubItemSelected] = React.useState(
    path === "/" || path === "" ? "/brand-creation/" : path,
  )

  const getParent = path => {
    if (
      path === "/brand-strategy/" ||
      path === "/packaging-design/" ||
      path === "/visual-identity/" ||
      path === "/brand-creation/"
    ) {
      return "/brand-creation/"
    }

    if (
      path === "/adaptive-design/" ||
      path === "/multi-channel-production/" ||
      path === "/imagery/" ||
      path === "/brand-implementation/"
    ) {
      return "/brand-implementation/"
    }

    if (
      path === "/technology/" ||
      path === "/brand-compliance/" ||
      path === "/sustainability/" ||
      path === "/brand-management/"
    ) {
      return "/brand-management/"
    }

    return "/brand-creation/"
  }

  useEffect(() => {
    if (path) {
      setSubItemSelected(
        path === "/" || path === "" ? "/brand-creation/" : getParent(path),
      )
    }
  }, [path])

  const [mainItemSelected, setMainItemSelected] = React.useState("")
  const staticQuery = useStaticQuery(graphql`
    query {
      creationIcon: file(relativePath: { eq: "brand-creation-icon.webp" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      implementationIcon: file(
        relativePath: { eq: "brand-implementation-icon.webp" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      managementIcon: file(relativePath: { eq: "brand-management-icon.webp" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `)

  const getIcon = name => {
    switch (name) {
      case "Brand Creation":
        return staticQuery.creationIcon
      case "Brand Implementation":
        return staticQuery.implementationIcon
      case "Brand Management":
        return staticQuery.managementIcon
      default:
        return null
    }
  }

  return (
    <>
      {ITEMS.filter(({ name }) => name !== "Login").map(({ name, url, items, target }) => {
        return (
          <S.ItemWrapper key={`header-item-${name}`} className="group">
            <S.Item
              key={`header-item-${name}`}
              url={url}
              target={target}
              className={`${
                (path === url || mainItemSelected === name) && "selectedMain"
              } ${whiteHeader ? "white" : ""}`}
              onMouseEnter={() => setMainItemSelected(name)}
              onMouseLeave={() => setMainItemSelected("")}
            >
              <S.Text className="header-item">{t(name)}</S.Text>
              {name === "Login" && <S.LoginLogo />}
              {items && <KeyboardArrowDownIcon />}
            </S.Item>
            {items && (
              <S.ItemsWrapper
                className={
                  "items " + (items.find(item => item.items) && " hasSubItems")
                }
                onMouseEnter={() => setMainItemSelected(name)}
                onMouseLeave={() => setMainItemSelected("")}
              >
                {items.map(({ name, url, items: subItems }, index) => (
                  <S.ItemWrapper key={`header-subItem-${name}`}>
                    <S.Item
                      url={url}
                      className={`subItem ${
                        path === url ? "underline selected" : ""
                      } ${
                        subItemSelected === url && mainItemSelected
                          ? "selected"
                          : ""
                      } ${index === 0 && "first"} ${
                        index === items?.length - 1 && "last"
                      } ${subItems && "hasSubItems"} `}
                      onMouseEnter={() => setSubItemSelected(getParent(url))}
                      onMouseLeave={() =>
                        setSubItemSelected(
                          path === "/" ? "/brand-creation/" : getParent(path),
                        )
                      }
                    >
                      <S.NameWrapper>
                        <S.Icon img={getIcon(name)} />
                        <S.Text className="subItem">{t(name)}</S.Text>
                      </S.NameWrapper>
                      {subItems && <KeyboardArrowRightIcon />}
                    </S.Item>
                    {subItems && (
                      <S.SubItemsWrapper
                        className="subItems"
                        onMouseEnter={() => setSubItemSelected(getParent(url))}
                        onMouseLeave={() =>
                          setSubItemSelected(
                            path === "/" ? "/brand-creation/" : getParent(path),
                          )
                        }
                      >
                        {subItems.map(({ name, url }) => (
                          <S.Item
                            key={`header-subItem-${name}`}
                            url={url}
                            className={`subSubItem ${
                              path === url && "selected"
                            }`}
                          >
                            <S.Text className="subItem">{t(name)}</S.Text>
                          </S.Item>
                        ))}
                      </S.SubItemsWrapper>
                    )}
                  </S.ItemWrapper>
                ))}
              </S.ItemsWrapper>
            )}
          </S.ItemWrapper>
        )
      })}
    </>
  )
}

export default HeaderItems