import React from 'react'
import CommentProviderWrapper from './src/components/comment-provider'

export const wrapRootElement = ({element}) => (
    <CommentProviderWrapper>
        {element}
    </CommentProviderWrapper>
)