import React, { useState } from 'react'
import ForumService from '../services/ForumService'

const ForumListDetail = ({forumPost}) => {

  const createPost = newPost => {
    ForumService.addPost(newPost)
    .then(savedPost => setPosts([...posts, savedPost]))
  };

  const [posts, setPosts] = useState('')
  const handlePostChange = (event) => setPosts(event.target.value)

  const handleSubmit = event => {
    event.preventDefault();
    createPost({
      posts: posts
    });
    setPosts('')

  }


  return (


    <div>
        <li>
            {forumPost.posts}
        </li>
        <form onSubmit={handleSubmit}>
        <label>Add Post</label>
        <input type='text' value={posts} onChange={handlePostChange}/>
        <button type='submit'>Add Post</button>
        </form>
        </div>
  )
}

export default ForumListDetail