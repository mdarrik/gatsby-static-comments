import React from "react"
import PropTypes from "prop-types"


const Comment = (props) => {
    const { commentDate, author, commentText } = props.comment
    const formattedPostDate = commentDate.toLocaleString('default',{
        year: 'numeric', month: 'long', day: '2-digit', hour: '2-digit', minute: '2-digit',  
    });
    return (
    <article className="comment">
        <div className="comment-text">
        {commentText}
        </div>
        <footer className="comment-footer">
            by {author}{" "}
            <time dateTime={commentDate}>{formattedPostDate}</time>
        </footer>
    </article>
    )
}

Comment.propTypes = {
    comment: PropTypes.shape({
        commentDate: PropTypes.instanceOf(Date).isRequired,
        commentText: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired
    })
}

export default Comment