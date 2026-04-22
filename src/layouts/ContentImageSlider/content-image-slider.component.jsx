import React from "react"
import * as S from "./content-image-slider.styles"
import Container from "@mui/material/Container"
import NextSectionSVG from "../../assets/next_section.svg"
import { Grid } from "@mui/material"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import { scroller } from "react-scroll"
import CustomAnimatedText from "../../components/custom-animated-text/custom-animated-text.component"

const ContentImageSlider = ({ topText, images }) => {
  const [swiper, setSwiper] = React.useState(null)
  const [activeIndex, setActiveIndex] = React.useState(0)

  const handleMore = () => {
    scroller.scrollTo("banner", {
      smooth: true,
      spy: true,
    })
  }

  return (
    <S.Wrapper>
      <Container>
        <Grid container spacing={0}>
          <Grid item lg={8} md={7} xs={12}>
            <S.Content>
              {topText && (
                <CustomAnimatedText
                  className="topText"
                  duration={1}
                  threshold={1}
                >
                  {topText}
                </CustomAnimatedText>
              )}
              <S.BottomText>
                <CustomAnimatedText
                  className="bottomText"
                  duration={1}
                  thereshold={1}
                >
                  From{" "}
                  <span
                    onClick={() => swiper.slideTo(0)}
                    className={activeIndex === 0 ? "active" : ""}
                  >
                    concept
                  </span>{" "}
                  to{" "}
                  <span
                    onClick={() => swiper.slideTo(1)}
                    className={activeIndex === 1 ? "active" : ""}
                  >
                    shelf
                  </span>
                  , we ensure clarity, consistency, and speed to every stage.
                </CustomAnimatedText>
                <CustomAnimatedText
                  className="bottomText"
                  duration={1}
                  thereshold={1}
                >
                  For brands that want to be seen, remembered, and bought again.
                </CustomAnimatedText>
              </S.BottomText>
              <S.NextSection onClick={handleMore}>
                <NextSectionSVG />
              </S.NextSection>
            </S.Content>
          </Grid>
          <S.CustomGrid item lg={4} md={5} xs={12}>
            <Swiper
              speed={750}
              modules={[Autoplay]}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              onSwiper={setSwiper}
              onActiveIndexChange={swiper => {
                setActiveIndex(() => swiper.activeIndex)
              }}
              slidesPerView={1}
            >
              {images?.map(({ image }, index) => (
                <SwiperSlide key={`image-${index}`}>
                  <S.Image
                    className={activeIndex === index ? "active" : ""}
                    img={image}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </S.CustomGrid>
        </Grid>
      </Container>
    </S.Wrapper>
  )
}

export default ContentImageSlider
