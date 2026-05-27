import React from "react"
import * as S from "./contact.styles"
import parse from "html-react-parser"
import { Grid } from "@mui/material"
import ContactForm from "../../components/contact-form/contact-form.component"
import LogoCall from "../../assets/book-logo.svg"
import { gtagCallClickEvent } from "../../utils/gtag-utils"
import { useTranslation } from "../../hooks/useTranslation"

const Contact = ({
  bgImage,
  title,
  content,
  secondTitle,
  secondContent,
  locations,
  subtitle,
  formTitle,
}) => {
  const { t } = useTranslation()

  return (
    <S.Wrapper>
      <S.CustomContainer maxWidth="xl">
        <S.Title>{title}</S.Title>
        {subtitle && <S.Subtitle>{subtitle}</S.Subtitle>}
        {content && (
          <S.Content className="description opacity">
            {parse(content)}
          </S.Content>
        )}
        {formTitle && <S.FormTitle>{formTitle}</S.FormTitle>}
        <ContactForm />
        <S.BgImage img={bgImage} />
        <S.LocationsWrapper>
          <Grid
            container
            justifyContent="center"
            spacing={{ md: 8.5, sm: 5, xs: 4 }}
          >
            {locations?.map(({ title, info }, index) => (
              <Grid
                item
                sm={info?.length === 4 ? 12 : 4}
                xs={info.length === 4 ? 12 : info.length === 1 ? 12 : 6}
                key={`${index}-${title}`}
              >
                <S.NameLocation>{title}</S.NameLocation>
                <Grid
                  container
                  spacing={{ md: 5, xs: 4 }}
                  justifyContent="center"
                >
                  {info?.map(({ location }, index) => (
                    <Grid
                      item
                      md={12 / info.length}
                      sm={16 / info.length}
                      xs={info.length === 1 ? 12 : 6}
                      key={`${index}-Location`}
                    >
                      <S.Content>{parse(location)}</S.Content>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            ))}
          </Grid>
        </S.LocationsWrapper>
        <S.SecondTitle>{secondTitle}</S.SecondTitle>
        {secondContent && (
          <S.Content className="description">{parse(secondContent)}</S.Content>
        )}
        <S.BookButtonWrapper>
          <S.BookButton
            onClick={() => gtagCallClickEvent()}
            target="_blank"
            url={"https://meetings.hubspot.com/george-essex/30-minute-call"}
          >
            <S.Text>{t("Book a Call")}</S.Text>
            <S.BookLogoWrapper>
              <LogoCall />
            </S.BookLogoWrapper>
          </S.BookButton>
        </S.BookButtonWrapper>
      </S.CustomContainer>
    </S.Wrapper>
  )
}

export default Contact
