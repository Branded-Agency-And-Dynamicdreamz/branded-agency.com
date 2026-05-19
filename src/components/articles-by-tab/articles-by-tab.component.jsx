import React, { useEffect, useState } from "react"
import * as S from "./articles-by-tag.styles"
import { Grid, Tabs } from "@mui/material"
import ArticleCard from "../article-card/article-card.component"
import CustomButton from "../custom-button/custom-button.component"

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  }
}

const LIMIT = 6

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <div>{children}</div>}
    </div>
  )
}

const ArticlesByTab = ({ articles, type }) => {
  const [tabSelected, setTabSelected] = useState(0)
  const [numLoadedArticles, setNumLoadedArticles] = useState(LIMIT)
  const [keySelected, setKeySelected] = useState("Show All")

  const handleChange = (event, newValue) => {
    setTabSelected(newValue)
    setKeySelected(Object.keys(articles)[newValue])
    setNumLoadedArticles(LIMIT)
  }

  const showMoreItems = () => {
    setNumLoadedArticles(prevValue => prevValue + LIMIT)
  }

  if (!articles || Object.keys(articles).length === 0) {
    return null
  }

  return (
    <>
      <S.HeaderWrapper>
        <Tabs
          value={tabSelected}
          onChange={handleChange}
          aria-label="basic tabs example"
          variant="scrollable"
          scrollButtons="auto"
        >
          {Object.keys(articles).map((key, index) => (
            <S.CustomTab
              disableRipple
              key={`${key}-${index}`}
              label={key}
              {...a11yProps(index)}
            />
          ))}
        </Tabs>
      </S.HeaderWrapper>
      <S.PanelsWrapper>
        <>
          {Object.keys(articles).map((key, index) => (
            <CustomTabPanel
              key={`${key}-${index}-panel`}
              value={tabSelected}
              index={index}
            >
              <>
                <Grid container spacing={{ md: 10, xs: 6 }}>
                  <>
                    {articles[key]
                      .slice(0, numLoadedArticles)
                      .map((insight, idx) => (
                        <Grid item md={6} xs={12} key={`${insight.title}-${idx}-${type}`}>
                          <ArticleCard
                            {...insight}
                            type={type}
                          />
                        </Grid>
                      ))}
                  </>
                </Grid>
                {articles[key]?.length > LIMIT &&
                  articles[key]?.length > numLoadedArticles && (
                    <S.ButtonWrapper>
                      <CustomButton
                        onClick={showMoreItems}
                        style={{ height: "52px" }}
                      >
                        Load More
                      </CustomButton>
                    </S.ButtonWrapper>
                  )}
              </>
            </CustomTabPanel>
          ))}
        </>
      </S.PanelsWrapper>
    </>
  )
}

export default ArticlesByTab