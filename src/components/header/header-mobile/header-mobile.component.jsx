import React from "react"
import * as S from "./header-mobile.styles"
import { Fade } from "@mui/material"
import ITEMS from "../header-items.json"
import CustomCollapse from "../../custom-collapse/custom-collapse.component"
import AdaptiveDesignSVG from "../../../assets/header-icons/adaptive-design.svg"
import ArtWorkSVG from "../../../assets/header-icons/artwork-production.svg"
import ComplianceSVG from "../../../assets/header-icons/compliance.svg"
import ImagerySVG from "../../../assets/header-icons/imagery.svg"
import InnovationSVG from "../../../assets/header-icons/innovation.svg"
import StrategySVG from "../../../assets/header-icons/strategy.svg"
import SustainabilitySVG from "../../../assets/header-icons/sustainability.svg"
import TechnologySVG from "../../../assets/header-icons/technology.svg"
import VisualIdentitySVG from "../../../assets/header-icons/visual-identity.svg"


import { graphql, useStaticQuery } from "gatsby"
import { useTranslation } from "../../../hooks/useTranslation"

const HeaderMobile = ({ isActiveMenu, path }) => {
  const { t } = useTranslation()
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
      case "Brand Strategy":
        return <StrategySVG />
      case "Packaging Design":
        return <InnovationSVG />
      case "Visual Identity":
        return <VisualIdentitySVG />
      case "Adaptive Design":
        return <AdaptiveDesignSVG />
      case "Multi Channel Production":
        return <ArtWorkSVG />
      case "Imagery":
        return <ImagerySVG />
      case "Technology":
        return <TechnologySVG />
      case "Sustainability":
        return <SustainabilitySVG />
      case "Brand Compliance":
        return <ComplianceSVG />
      default:
        return null
    }
  }

  return (
    <Fade in={isActiveMenu} mountOnEnter unmountOnExit timeout={500}>
      <S.Wrapper>
        <S.LinksWrapper>
          {ITEMS.map(({ name, url, items, target }, index) => (
            <React.Fragment key={url}>
              <CustomCollapse name={t(name)} items={items} url={url} path={path}>
                {items && (
                  <>
                    {items.map(({ name, url, items }) => (
                      <React.Fragment key={url}>
                        <S.Link
                          className={`${path === url && "selected"} subItem ${
                            items && "noBorderBottom"
                          }`}
                          url={url}
                        >
                          <S.Icon img={getIcon(name)} />
                          <S.Text className="subItemText">{t(name)}</S.Text>
                        </S.Link>
                        {items && (
                          <S.LinkWrapper className="subItem">
                            {items.map(({ name, url }) => (
                              <S.Link
                                className={`${
                                  path === url && "selected"
                                } subSubItem`}
                                url={url}
                                key={url}
                              >
                                {getIcon(name)}
                                <S.Text className="subSubItemText">
                                  {t(name)}
                                </S.Text>
                              </S.Link>
                            ))}
                          </S.LinkWrapper>
                        )}
                      </React.Fragment>
                    ))}
                  </>
                )}
              </CustomCollapse>
            </React.Fragment>
          ))}
        </S.LinksWrapper>
      </S.Wrapper>
    </Fade>
  )
}

export default HeaderMobile