import React from 'react'
import ForumListDetail from './ForumListDetail'

const ForumList = ({forum}) => {

    const allForumPosts = forum.map((forumPost, index) =>{
        return <ForumListDetail key={index} forumPost={forumPost}/>
    })

  return (
    <div>
        <ul>
            {allForumPosts}
        </ul>
        </div>

  )
}

export default ForumList