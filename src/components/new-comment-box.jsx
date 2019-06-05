import React, { useContext } from 'react'

import CommentsContext from '../context/comments-context'

const NewCommentBox = () => {
  const { addCommentToComments } = useContext(CommentsContext)
  const submitComment = event => {
    event.preventDefault()
    const commentTextArea = event.target.querySelector("textarea")
    const newComment = {
      commentText: commentTextArea.value,
      commentDate: new Date(),
      author: "an author",
    }

    addCommentToComments(newComment)
    commentTextArea.value = ""
  }

  return (
    <form className="comment-form" onSubmit={submitComment}>
      <label>
        Add a new comment
        <textarea className="comment-input" />
      </label>
      <div className="comment-footer">
        <button type="submit">Add Comment</button>
      </div>
    </form>
  )
}

export default NewCommentBox
