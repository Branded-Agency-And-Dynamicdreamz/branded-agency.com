import React, { useEffect, useRef, useState } from "react"
import * as S from "./search-drawer.styles"
import { Collapse, IconButton } from "@mui/material"
import useDebounce from "../../hooks/useDebounce"
import CloseIcon from "@mui/icons-material/Close"
import { WP_SEARCH_CATEGORIES } from "../../utils/constants"
import parse from "html-react-parser"
import { searchWordpress } from "../../utils/utils"

const SearchDrawer = ({ isOpen, handleClose }) => {
  const inputRef = useRef(null)
  const [inputValue, setInputValue] = useState("")
  const [results, setResults] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const debouncedValue = useDebounce(inputValue, 500)

  const handleSearch = async () => {
    setIsLoading(true)
    const res = await searchWordpress(debouncedValue)

    setResults(res)
    setIsLoading(false)
  }

  useEffect(() => {
    inputRef.current.focus()
  }, [isOpen])

  useEffect(() => {
    if (debouncedValue) {
      handleSearch()
    }
  }, [debouncedValue])

  return (
    <S.StyledDrawer open={isOpen}>
      <Collapse in={isOpen} timeout={isOpen ? 750 : 300}>
        <S.Wrapper maxWidth="xl">
          <S.TopWrapper>
            <S.Title>Search</S.Title>
            <IconButton onClick={handleClose}>
              <CloseIcon htmlColor="#222222" />
            </IconButton>
          </S.TopWrapper>
          <S.StyledInput
            placeholder="Start typing..."
            inputRef={inputRef}
            onChange={evt => setInputValue(evt.target.value)}
            value={inputValue}
          />
          <S.ResultsWrapper>
            {results.length === 0 && debouncedValue !== "" && !isLoading && (
              <S.NoResults>
                No results for <br />
                <span>&quot;{debouncedValue}&quot;</span>
                <br />
                <br />
                Make sure that all words are spelled correctly or try different
                keywords.
              </S.NoResults>
            )}
            {results?.length > 0 &&
              Object.values(WP_SEARCH_CATEGORIES)?.map(
                ({ title, wpSlug, pageSlug }, index) => {
                  const filteredResults = results.filter(
                    el => wpSlug === el.subtype,
                  )
                  if (filteredResults.length === 0) return null
                  return (
                    <S.ResultsCategory key={`results-category-${index}`}>
                      <S.ResultsCategoryTitle>{title}</S.ResultsCategoryTitle>
                      {filteredResults.map((el, idx) => {
                        const segments = el.url.split("/")
                        const slug = segments[segments.length - 2]
                        return (
                          <S.ResultTitle
                            url={`${
                              wpSlug === WP_SEARCH_CATEGORIES.PAGES.wpSlug
                                ? ""
                                : `/${pageSlug}`
                            }/${slug}`}
                            key={`${title}-result-${idx}`}
                          >
                            {el.title && parse(el.title)}
                          </S.ResultTitle>
                        )
                      })}
                    </S.ResultsCategory>
                  )
                },
              )}
          </S.ResultsWrapper>
        </S.Wrapper>
      </Collapse>
    </S.StyledDrawer>
  )
}

export default SearchDrawer
