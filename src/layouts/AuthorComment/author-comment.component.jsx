import React from "react"
import * as S from "./author-comment.styles"
import QuoteSVG from "../../assets/quote.svg"

const AuthorComment = ({ comment, author, jobPosition, isSecondStyle }) => {
  if (isSecondStyle) {
    return (
      <S.AuthorComment className={"isSecondStyle"}>
        <S.QuoteWrapper>
          <QuoteSVG />
        </S.QuoteWrapper>
        <S.AuthorCommentText className="comment">{comment}</S.AuthorCommentText>
        <S.AuthorName>
          {author}, {jobPosition}
        </S.AuthorName>
      </S.AuthorComment>
    )
  }

  return (
    <S.AuthorComment>
      <S.AuthorCommentText className="comment">{comment}</S.AuthorCommentText>
    </S.AuthorComment>
  )
}

export default AuthorComment
