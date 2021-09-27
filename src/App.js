import { useState } from 'react'

import './App.css'

import PostForm from './components/PostForm'
import PostList from './components/PostList'

const App = () => {

  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'язык программирования' },
    { id: 2, title: 'Node', body: 'также язык программирования' },
    { id: 3, title: 'Redux', body: 'и это язык программирования' }
  ])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  return (
    <div className="App">
      <PostForm create={createPost} />
      <PostList posts={posts} />
    </div>
  )
}

export default App
