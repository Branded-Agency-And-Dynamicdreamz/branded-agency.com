import React from "react"
import * as S from "./text-hero.styles"
import FadeInOnScroll from "../../components/fade-in-on-scroll/fade-in-on-scroll.component"

const TextHero = ({ 
  heading,
  description,
}) => {
  return (
    <FadeInOnScroll showAnimation>
      <S.Wrapper>
        <S.Content>
          {heading && <S.Heading>{heading}</S.Heading>}
          {description && (
            <S.Description 
              dangerouslySetInnerHTML={{ __html: description }}
            />
          )}
        </S.Content>
      </S.Wrapper>
    </FadeInOnScroll>
  )
}

export default TextHero