import {useState} from 'react'

let commentId = 0;

const useComments = () => {
    const [comments, setComments] = useState([])

    const addCommentToComments = (newComment) => {
        newComment.id = commentId
        commentId++
        setComments([...comments, newComment])
    }

    return {
        comments,
        setComments,
        addCommentToComments
    }
}

export default useComments