import React, { useState } from "react"
import * as S from "./insight-articles-slider.styles"
import ArrowSVG from "../../assets/arrow.svg"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import ArticleCard from "../article-card/article-card.component"
import { Slide } from "react-awesome-reveal"

const InsightArticlesSlider = ({ sliderArticles, title, type }) => {
  const [index, setIndex] = useState(0)

  return (
    <S.SectionHero>
      <S.TextWrapper>
        <Slide
          triggerOnce
          delay={150}
          fraction={0.8}
          direction="up"
          duration={750}
        >
          <S.Title variant="h1">{title}</S.Title>
        </Slide>
      </S.TextWrapper>
      {sliderArticles && (
        <>
          <S.ContentSwiper>
            <S.ArrowsWrapper>
              <S.Arrow className="prev">
                <ArrowSVG />
              </S.Arrow>
              <S.Arrow className="next">
                <ArrowSVG />
              </S.Arrow>
            </S.ArrowsWrapper>
            <Swiper
              modules={[Navigation]}
              navigation={{
                nextEl: ".next",
                prevEl: ".prev",
              }}
              slidesPerView={1}
              spaceBetween={100}
              centeredSlides={true}
              onActiveIndexChange={swiper => {
                setIndex(() => swiper.activeIndex)
              }}
            >
              {sliderArticles?.map(({ article }, index) => (
                <SwiperSlide key={`${index}-${article.title}`}>
                  <ArticleCard {...article} isSlider type={type} />
                </SwiperSlide>
              ))}
            </Swiper>
          </S.ContentSwiper>
          <S.SliderIndicator>
            {sliderArticles?.map(({ article }, i) => (
              <S.Indicator
                key={`${i}-${article.title}`}
                className={index === i && "active"}
              />
            ))}
          </S.SliderIndicator>
        </>
      )}
      <S.BgCircle />
    </S.SectionHero>
  )
}

export default InsightArticlesSlider
