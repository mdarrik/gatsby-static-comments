import React from "react"
import CommentsContext from "../context/comments-context"
import useComments from "../hooks/use-comments"

const CommentProviderWrapper = ({ children }) => {
  const { comments, addCommentToComments } = useComments()

  return (
    <CommentsContext.Provider value={{ comments, addCommentToComments }}>
      {children}
    </CommentsContext.Provider>
  )
}

export default CommentProviderWrapper