import React, { useContext } from "react"

import CommentsContext from "../context/comments-context"

const NewCommentBox = () => {
  const { addCommentToComments } = useContext(CommentsContext)
  const submitComment = (event) => {
    event.preventDefault()
    const {
      author: authorField,
      "form-name": formNameField,
      "comment-text": commentTextField,
    } = event.target.elements

    const formData = {
      author: authorField.value,
      "form-name": formNameField.value,
      "comment-text": commentTextField.value,
    }

    fetch("/", {
      method: "POST",
      headers: {"Content-Type": "application/x-www-form-urlencoded"},
      body: Object.keys(formData)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(formData[key]))
      .join("&")
    }).then((resp) => console.log(resp)).catch((error) => console.log(error))

    addCommentToComments({commentText: commentTextField.value, author: authorField.value, commentDate: new Date()})
  }

  return (
    <form
      name="comment"
      className="comment-form"
      onSubmit={submitComment}
      data-netlify="true"
    >
      <input type="hidden" value="comment" name="form-name" />
      <label>
        Add a new comment
        <textarea className="comment-input" name="comment-text" />
      </label>
      <label>
        Author:
        <input type="text" readOnly value="An author" name="author" />
      </label>
      <div className="comment-footer">
        <button type="submit">Add Comment</button>
      </div>
    </form>
  )
}

export default NewCommentBox
