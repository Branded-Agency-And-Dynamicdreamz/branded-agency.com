import React, { useEffect, useState } from "react"
import * as S from "./footer.styles"
import Container from "@mui/material/Container"
import { Grid, useMediaQuery, useTheme } from "@mui/material"
import ITEMS from "./footer-items.json"
import LINKS from "./links.json"
import { isBrowser } from "../../utils/utils"
import { graphql, useStaticQuery } from "gatsby"
import parse from "html-react-parser"
import { gtagCallClickEvent } from "../../utils/gtag-utils"
import { trackGetInTouchClick } from "../../utils/meta-pixel-utils"
import { getLocalizedPath } from "../LocalizedLink"
import { useTranslation } from "../../hooks/useTranslation"

const Footer = ({ className, whiteFooter }) => {
  const theme = useTheme()
  const { t, language } = useTranslation()
  const isLg = useMediaQuery(theme.breakpoints.up("lg"))
  const isSm = useMediaQuery(theme.breakpoints.down("md"))

  const [path, setPath] = useState("")

  const staticQuery = useStaticQuery(graphql`
    query {
      bCorpLogo: file(relativePath: { eq: "B_Corp_Logo.webp" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      hubspotLogo: file(relativePath: { eq: "hubspot-logo.webp" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `)

  useEffect(() => {
    if (isBrowser) {
      const auxPath =
        typeof window !== "undefined" ? window.location.pathname : ""
      setPath(auxPath)
    }
  }, [])

  // Function to get localized href
  const getLocalizedHref = (href) => {
    return getLocalizedPath(href)
  }

  const getBCorpDescription = () => {
    const descriptions = {
      EN: `<p>We're incredibly proud to be a Certified B Corporation, and are actively pushing for improvement on all fronts.</p>`,
      ES: `<p>Estamos increíblemente orgullosos de ser una Corporación B Certificada, y estamos impulsando activamente la mejora en todos los frentes.</p>`
    }
    return descriptions[language] || descriptions.EN
  }

  return (
    <S.Wrapper
      className={`${className || ""} ${whiteFooter ? "whiteFooter" : ""}`}
      id="footer"
    >
      <Container maxWidth="xl" className="footer-container">
        {/*<S.BackTop to="top" spy={true} smooth={true}>*/}
        {/*  <KeyboardArrowUpIcon />*/}
        {/*  Back to top*/}
        {/*</S.BackTop>*/}
        <S.LinkHome url={"/"} className="logo">
          <S.Logo className={whiteFooter ? "whiteFooter" : ""} />
        </S.LinkHome>
        <div>
          <Grid
            container
            rowSpacing={{ md: 6, xs: 4 }}
            columnSpacing={{ xl: 17.75, md: 6 }}
          >
            <S.LogoWrapper
              item
              lg={4.329}
              md={12}
              xs={12}
              className="logo-wrapper"
            >
              <S.ButtonsWrapper>
                <Grid container spacing={{ md: 2, xs: 1 }}>
                  <Grid item xs={6}>
                    <S.Button
                      fullWidth
                      className="light"
                      href={getLocalizedHref("/contact/")}
                      onClick={() => trackGetInTouchClick()}
                    >
                     {t("Get in touch")}
                    </S.Button>
                  </Grid>
                  <Grid item xs={6}>
                    <S.LinkButton
                      fullWidth
                      target="_blank"
                      className="light"
                      href="https://www.linkedin.com/company/branded_2/"
                      borderColor={whiteFooter ? "#1519BA" : "#6EC1FF"}
                    >
                      <S.Text>{t("LinkedIn")}</S.Text>
                    </S.LinkButton>
                  </Grid>
                  <Grid item xs={6}>
                    <S.LinkButton
                      fullWidth
                      target="_blank"
                      url={
                        "https://meetings.hubspot.com/george-essex/30-minute-call"
                      }
                      className="withLogo"
                      onClick={() => gtagCallClickEvent()}
                    >
                      <S.Text className="withLogo">{t("Book a Call")}</S.Text>
                      <S.BookLogoWrapper>
                        {/* <S.HubspotLogo img={staticQuery.hubspotLogo} /> */}
                        <S.HubspotLogo
                          className={whiteFooter ? "whiteFooter" : ""}
                        />
                      </S.BookLogoWrapper>
                    </S.LinkButton>
                  </Grid>
                  <Grid item xs={6}>
                    <S.LinkButton
                      fullWidth
                      target="_blank"
                      className="light"
                      href="https://www.instagram.com/branded_agency_hq?igsh=cWRlem54ZHlidnlr"
                      borderColor={whiteFooter ? "#1519BA" : "#FF8787"}
                    >
                      <S.Text>{t("Instagram")}</S.Text>
                    </S.LinkButton>
                  </Grid>
                </Grid>
              </S.ButtonsWrapper>
            </S.LogoWrapper>
            <Grid item lg={7.671} md={12} xs={12}>
              <Grid container spacing={{ md: 7, xs: 5 }}>
                <S.ItemsWrapperGrid item md={12} xs={12}>
                  <Grid container columnSpacing={4} justifyContent="center">
                    {ITEMS?.map(({ name, url, items }, index) => (
                      <Grid
                        item
                        key={`item-${index}-title-${name}`}
                        // xl={index === 0 ? 7 : 5}
                        // lg={index === 0 ? 7 : 5}
                        // xs={index === 0 ? 7 : 5}
                        xs={12}
                      >
                        <S.ItemsWrapper>
                          <S.Item
                            url={getLocalizedHref(url)}
                            className={`pink footer-item ${path === url && "selected"
                              }}`}
                          >
                            {t(name)}
                          </S.Item>
                          {items &&
                            items.map(
                              ({ name, url, className, logo, target }, idx) => (
                                <S.Item
                                  url={getLocalizedHref(url)}
                                  className={`footer-item ${className} ${path === url && "selected"
                                    }`}
                                  key={`subitem-${idx}-fragment`}
                                  target={target}
                                >
                                  {t(name)}
                                </S.Item>
                              ),
                            )}
                        </S.ItemsWrapper>
                      </Grid>
                    ))}
                  </Grid>
                </S.ItemsWrapperGrid>
                <S.BCorpItem item md={12} xs={12}>
                  <S.CertifiedInfoWrapper>
                    <S.CertifiedLogo
                      className={whiteFooter ? "whiteFooter" : ""}
                    />
                    <S.CertifiedDescription>
                      {/* {parse(`<p>
                      We’re incredibly proud to be a Certified B Corporation, and are actively pushing for wider improvement on all fronts.</p>
                      <p>If you would like to take a look at our results for the B Corp Impact Report, follow the link to our page <a href="https://www.bcorporation.net/en-us/find-a-b-corp/company/branded-ltd/" target="_blank">here*</a>.
                      </p>`)} */}

                      {parse(getBCorpDescription())}
                    </S.CertifiedDescription>
                  </S.CertifiedInfoWrapper>
                </S.BCorpItem>
              </Grid>
            </Grid>
          </Grid>
        </div>
        <S.BottomWrapper>
          {/* <S.LinksWrapper>
            <S.LinkHome url="/privacy-policy/" className="links">
              Privacy
            </S.LinkHome>{" "}
            /{" "}
            <S.LinkHome url="/terms-of-use/" className="links">
              Terms & Conditions
            </S.LinkHome>
          </S.LinksWrapper> */}
          <Grid container spacing={{ md: 6, xs: 2.5 }} alignItems="flex-start">
            <Grid item md={3.5} xs={12}>
              <S.LinksWrapper>
                <S.Name className="footer-item">{t("UK")}</S.Name>
                <S.Links>
                  {LINKS[0]?.links?.map(({ title, url }, idx) => (
                    <S.LinkHome
                      className="links footer-item"
                      url={getLocalizedHref(url)}
                      key={`link-${idx}`}
                    >
                      {t(title)}
                    </S.LinkHome>
                  ))}
                </S.Links>
              </S.LinksWrapper>
            </Grid>
            <Grid item md={5} xs={12}>
              <S.LinksWrapper>
                <S.Name className="footer-item spacer">&nbsp;</S.Name>
                <S.Links>
                  {LINKS[1]?.links?.map(({ title, url, target }, idx) => (
                    <S.LinkHome
                      className="links footer-item"
                      url={getLocalizedHref(url)}
                      target={target}
                      key={`link-${idx}`}
                    >
                     {t(title)}
                    </S.LinkHome>
                  ))}
                </S.Links>
              </S.LinksWrapper>
            </Grid>
            <Grid item md={2} xs={12}>
              <S.LinksWrapper>
                <S.Name className="footer-item">{t("US")}</S.Name>
                <S.Links>
                  {LINKS[2]?.links?.map(({ title, url, target }, idx) => (
                    <S.LinkHome
                      className="links footer-item"
                      url={getLocalizedHref(url)}
                      target={target}
                      key={`link-${idx}`}
                    >
                      {t(title)}
                    </S.LinkHome>
                  ))}
                </S.Links>
              </S.LinksWrapper>
            </Grid>
          </Grid>
        </S.BottomWrapper>
      </Container>
    </S.Wrapper>
  )
}

export default Footer