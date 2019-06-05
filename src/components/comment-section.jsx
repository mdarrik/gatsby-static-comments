import React, {useContext} from 'react'
import CommentsContext from '../context/comments-context'
import Comment from './comment'
import NewCommentBox from './new-comment-box'


const CommentSection = () => {

    const { comments } = useContext(CommentsContext)

    return (
        <section>
        <h2>Comments</h2>
        {comments.map((comment) => (
          <Comment comment={comment} key={comment.id}/>
        ))}
        <NewCommentBox/>
        </section>
    )
}

export default CommentSection