import React, { useState, useMemo, useEffect } from "react"
import * as S from "./our-people.styles"
import { Container, Grid } from "@mui/material"
import parse from "html-react-parser"
import { graphql, useStaticQuery } from "gatsby"

const OurPeople = ({ title, description, button, bottomImage }) => {
  const staticQuery = useStaticQuery(graphql`
    query {
      allWpPage(filter: { id: { eq: "cG9zdDoxMTI0" } }) {
        edges {
          node {
            id
            pageBuilder {
              layouts {
                ... on WpPage_Pagebuilder_Layouts_MeetTheTeam {
                  fieldGroupName
                  title
                  team {
                    image {
                      altText
                      title
                      localFile {
                        childImageSharp {
                          gatsbyImageData(width: 200, layout: CONSTRAINED)
                        }
                      }
                    }
                    description
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const allTeamImages = useMemo(() => {
    const layouts =
      staticQuery?.allWpPage?.edges?.[0]?.node?.pageBuilder?.layouts || []
    const meetTheTeamLayout = layouts.find(
      layout =>
        layout?.fieldGroupName?.split("_").pop().trim() === "MeetTheTeam",
    )
    return meetTheTeamLayout?.team || []
  }, [staticQuery])

  const [imageSlots, setImageSlots] = useState([])
  const [currentImageIndex, setCurrentImageIndex] = useState(new Map())
  const [currentRowIndex, setCurrentRowIndex] = useState(0)
  const [changesInCycle, setChangesInCycle] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (allTeamImages.length > 0) {
      const initialVisible = allTeamImages.slice(0, 16)
      const newImageSlots = []

      initialVisible.forEach((member, idx) => {
        const memberImageSrc =
          member.image?.localFile?.childImageSharp?.gatsbyImageData?.images
            ?.fallback?.src || member.image?.sourceUrl

        const imagesForSlot = [member]
        const usedImageSrcs = new Set([memberImageSrc])

        for (let i = 0; i < 7; i++) {
          let bottomIndex = 16 + idx + i * 16
          if (bottomIndex >= allTeamImages.length) {
            bottomIndex = bottomIndex % allTeamImages.length
          }

          let bottomImage = allTeamImages[bottomIndex]
          let bottomImageSrc =
            bottomImage.image?.localFile?.childImageSharp?.gatsbyImageData
              ?.images?.fallback?.src || bottomImage.image?.sourceUrl

          if (usedImageSrcs.has(bottomImageSrc)) {
            for (let j = 0; j < allTeamImages.length; j++) {
              const candidate = allTeamImages[j]
              const candidateSrc =
                candidate.image?.localFile?.childImageSharp?.gatsbyImageData
                  ?.images?.fallback?.src || candidate.image?.sourceUrl
              if (!usedImageSrcs.has(candidateSrc)) {
                bottomImage = candidate
                bottomImageSrc = candidateSrc
                break
              }
            }
          }

          imagesForSlot.push(bottomImage)
          usedImageSrcs.add(bottomImageSrc)
        }

        newImageSlots.push({
          first: imagesForSlot[0],
          second: imagesForSlot[1],
          third: imagesForSlot[2],
          fourth: imagesForSlot[3],
          fifth: imagesForSlot[4],
          sixth: imagesForSlot[5],
          seventh: imagesForSlot[6],
          eighth: imagesForSlot[7],
        })
      })

      setImageSlots(newImageSlots)

      const initialImageIndex = new Map()
      for (let i = 0; i < 16; i++) {
        initialImageIndex.set(i, 0)
      }
      setCurrentImageIndex(initialImageIndex)
    }
  }, [allTeamImages])

  useEffect(() => {
    if (imageSlots.length === 0) return
    if (isPaused) return

    const interval = setInterval(() => {
      setCurrentImageIndex(prev => {
        const updated = new Map(prev)
        const rowStart = currentRowIndex * 4
        const randomIndexInRow = Math.floor(Math.random() * 4)
        const selectedIndex = rowStart + randomIndexInRow

        const currentIdx = updated.get(selectedIndex) || 0
        const slot = imageSlots[selectedIndex]
        const images = [
          slot.first,
          slot.second,
          slot.third,
          slot.fourth,
          slot.fifth,
          slot.sixth,
          slot.seventh,
          slot.eighth,
        ]

        const getImageSrc = img => {
          return (
            img.image?.localFile?.childImageSharp?.gatsbyImageData?.images
              ?.fallback?.src || img.image?.sourceUrl
          )
        }

        const currentlyVisibleSrcs = new Set()
        updated.forEach((idx, slotIdx) => {
          if (slotIdx !== selectedIndex) {
            const slotImages = [
              imageSlots[slotIdx].first,
              imageSlots[slotIdx].second,
              imageSlots[slotIdx].third,
              imageSlots[slotIdx].fourth,
              imageSlots[slotIdx].fifth,
              imageSlots[slotIdx].sixth,
              imageSlots[slotIdx].seventh,
              imageSlots[slotIdx].eighth,
            ]
            const visibleImg = slotImages[idx]
            if (visibleImg) {
              currentlyVisibleSrcs.add(getImageSrc(visibleImg))
            }
          }
        })

        let nextIdx = (currentIdx + 1) % 8
        let attempts = 0
        while (attempts < 8) {
          const nextImage = images[nextIdx]
          const nextImageSrc = getImageSrc(nextImage)
          if (!currentlyVisibleSrcs.has(nextImageSrc)) {
            break
          }
          nextIdx = (nextIdx + 1) % 8
          attempts++
        }

        updated.set(selectedIndex, nextIdx)

        const newRowIndex = (currentRowIndex + 1) % 4
        setCurrentRowIndex(newRowIndex)

        setChangesInCycle(prev => {
          const newCount = prev + 1
          if (newCount >= 4) {
            setIsPaused(true)
            setTimeout(() => {
              setIsPaused(false)
              setChangesInCycle(0)
            }, 1000)
            return 0
          }
          return newCount
        })

        return updated
      })
    }, 50)

    return () => clearInterval(interval)
  }, [imageSlots, currentRowIndex, isPaused])

  return (
    <S.Wrapper>
      <Container>
        <S.ContentWrapper>
          <Grid container spacing={{ md: 3.6, xs: 6 }} alignItems="flex-end">
            <Grid item md={5.5} xs={12}>
              <S.Content>
                {title && <S.Title variant="h2">{title}</S.Title>}
                {description && (
                  <S.Description>{parse(description)}</S.Description>
                )}
                {button?.title && (
                  <S.Button href={button.url} target={button.target}>
                    {button.title}
                  </S.Button>
                )}
                {bottomImage && (
                  <S.BottomImageWrapper>
                    <S.BottomImage
                      img={bottomImage}
                      alt="Our People"
                      arPaddingPercentage={40}
                    />
                  </S.BottomImageWrapper>
                )}
              </S.Content>
            </Grid>
            <Grid item md={6.5} xs={12}>
              {imageSlots && imageSlots.length > 0 && (
                <>
                  <S.MosaicGrid container>
                    {imageSlots.map((slot, index) => {
                      const currentIdx = currentImageIndex.get(index) || 0
                      const images = [
                        slot.first,
                        slot.second,
                        slot.third,
                        slot.fourth,
                        slot.fifth,
                        slot.sixth,
                        slot.seventh,
                        slot.eighth,
                      ]

                      return (
                        <Grid item xs={3} key={`team-image-${index}`}>
                          <S.MosaicImageWrapper>
                            {images.map((img, imgIdx) => {
                              const isVisible = imgIdx === currentIdx
                              return (
                                <S.MosaicImage
                                  key={`image-${index}-${imgIdx}`}
                                  img={img.image}
                                  alt={
                                    img.image?.altText ||
                                    `Team member ${index + 1} image ${
                                      imgIdx + 1
                                    }`
                                  }
                                  arPaddingPercentage={100}
                                  className={isVisible ? "visible" : "hidden"}
                                  zIndex={isVisible ? 2 : 1}
                                />
                              )
                            })}
                          </S.MosaicImageWrapper>
                        </Grid>
                      )
                    })}
                  </S.MosaicGrid>
                </>
              )}
            </Grid>
          </Grid>
        </S.ContentWrapper>
      </Container>
    </S.Wrapper>
  )
}

export default OurPeople
