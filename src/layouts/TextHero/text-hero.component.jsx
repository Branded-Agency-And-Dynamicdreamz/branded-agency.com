import React from "react"
import * as S from "./text-hero.styles"


const TextHero = ({ 
  heading,
  description,
  targetId,
}) => {
  const sectionId = targetId || "text-hero"

  return (
      <S.Wrapper id={sectionId}>
        <S.Content>
          {heading && <S.Heading>{heading}</S.Heading>}
          {description && (
            <S.Description 
              dangerouslySetInnerHTML={{ __html: description }}
            />
          )}
        </S.Content>
      </S.Wrapper>
  )
}

export default TextHero