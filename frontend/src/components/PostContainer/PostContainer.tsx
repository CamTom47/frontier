import React from 'react'
import Post from "../Post/Post"


const PostContainer = (): React.JSX.Element => {
  return (
    <div className="bg-green-400 flex flex-col w-3/4">
      <Post></Post>
    </div>
  )
}

export default PostContainer
