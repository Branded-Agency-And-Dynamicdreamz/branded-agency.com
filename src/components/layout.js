import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import Header from "../components/header/header.component"
import { AppContainer } from "../styles/app.styles"
import Footer from "./footer/footer.component"
import { isBrowser, setSessionStorageItem } from "../utils/utils"
import { useLocation } from "@reach/router"

import { IS_PRODUCTION } from "../utils/constants"
import { Script } from "gatsby"

const Layout = ({
  children,
  hideFooter,
  hideHeader,
  hideHeaderItems,
  isTransparentHeader,
  hideHeaderOnScroll,
  whiteHeader,
  isCaseStudy,
  whitePinSpacer,
  whiteFooter,
}) => {
  const location = useLocation()
  const isHome = location.pathname === "/"

  const [gtmLoaded, setGtmLoaded] = useState(false)

  useEffect(() => {
    if (isBrowser) {
      const urlParams = new URLSearchParams(window.location.search)

      const utm_source = urlParams.get("utm_source")
      const utm_medium = urlParams.get("utm_medium")
      const utm_campaign = urlParams.get("utm_campaign")

      if (utm_source) {
        setSessionStorageItem("utm_source", utm_source)
      }

      if (utm_medium) {
        setSessionStorageItem("utm_medium", utm_medium)
      }

      if (utm_campaign) {
        setSessionStorageItem("utm_campaign", utm_campaign)
      }
    }
  }, [])

  return (
    <>
      {IS_PRODUCTION && (
        <>
          {/* Osano */}
          <Script src="https://cmp.osano.com/AzyrZXU6jDIam3dtK/24c3e19f-6f8e-4661-b8e8-6862487b22f4/osano.js" />

          {/* Navu */}
          <Script src="https://embed.navu.co/boot.js" />

          {/* Google Analytics */}
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=G-${process.env.GATSBY_GA_TRACKING_ID}`}
            onLoad={() => setGtmLoaded(true)}
          />

          {gtmLoaded && (
            <Script id="gtag-config">
              {`
                window.dataLayer = window.dataLayer || [];

                function gtag(){
                  dataLayer.push(arguments);
                }

                gtag('js', new Date());

                gtag('config', 'G-${process.env.GATSBY_GA_TRACKING_ID}');
                gtag('config', 'AW-11137911214');
              `}
            </Script>
          )}

          {/* Creative Perceptive */}
          <Script src="https://www.creativeperceptive.com/js/799500.js" />

          {/* Weglot */}
          <Script
            src="https://cdn.weglot.com/weglot.min.js"
            strategy="afterInteractive"
            onLoad={() => {
              if (window.Weglot) {
                window.Weglot.initialize({
                  api_key: "wg_99db751438638e0ddcb5df66e92cf6b73",
                })
              }
            }}
          />

          {/* LinkedIn */}
          {gtmLoaded && (
            <>
              <Script
                id="linkedin"
                dangerouslySetInnerHTML={{
                  __html: `
                    _linkedin_partner_id = "4742298";

                    window._linkedin_data_partner_ids =
                      window._linkedin_data_partner_ids || [];

                    window._linkedin_data_partner_ids.push(
                      _linkedin_partner_id
                    );
                  `,
                }}
              />

              <Script
                id="linkedin-config"
                dangerouslySetInnerHTML={{
                  __html: `
                    (function(l) {
                      if (!l) {
                        window.lintrk = function(a, b) {
                          window.lintrk.q.push([a, b])
                        };

                        window.lintrk.q = [];
                      }

                      var s = document.getElementsByTagName("script")[0];

                      var b = document.createElement("script");

                      b.type = "text/javascript";
                      b.async = true;
                      b.src =
                        "https://snap.licdn.com/li.lms-analytics/insight.min.js";

                      s.parentNode.insertBefore(b, s);
                    })(window.lintrk);
                  `,
                }}
              />
            </>
          )}
        </>
      )}

      {!hideHeader && (
        <Header
          hideItems={hideHeaderItems}
          isTransparent={isTransparentHeader}
          hideHeaderOnScroll={hideHeaderOnScroll}
          isCaseStudy={isCaseStudy}
          whiteHeader={whiteHeader}
        />
      )}

      <AppContainer
        id="top"
        className={`
          ${isTransparentHeader ? "transparent" : ""}
          ${hideHeader ? "hideHeader" : ""}
          ${hideHeaderOnScroll && !whiteHeader ? "transparentHeader" : ""}
          ${whitePinSpacer ? "whitePinSpacer" : ""}
          ${isHome ? "home" : ""}
        `}
      >
        {children}
      </AppContainer>

      {!hideFooter && <Footer whiteFooter={whiteFooter} />}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout