import { useState } from 'react'
import styled from 'styled-components'

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

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <PostForm create={createPost} />
      {posts.length
        ? <PostList remove={removePost} posts={posts} />
        : <Header>Посты не найдены...</Header>
      }
      
    </div>
  )
}

export default App


const Header = styled.h1`
    text-align: center;
    color: #4a6f87;
    margin-top: 30px;
`
