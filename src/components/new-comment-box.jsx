import React from "react"

const CommentBox = () => {
    const submitComment = (event) => {
        event.preventDefault()
        console.log(event.target.querySelector('textarea').value)
    }

    return (
        <form className="comment-form" onSubmit={submitComment}>
            <textarea class="comment-input"></textarea>
            <div class="comment-footer">
                <button type="submit">Add Comment</button>
            </div>
        </form>
    )
}

export default CommentBox