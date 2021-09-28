import { useState } from 'react'
import styled from 'styled-components'

import './App.css'

import PostForm from './components/PostForm'
import PostList from './components/PostList'
import MySelect from './components/UI/MySelect'

const App = () => {

  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'язык программирования' },
    { id: 2, title: 'Node', body: 'также язык программирования' },
    { id: 3, title: 'Redux', body: 'и это язык программирования' }
  ])

  const [selectedSort, setSelectedSort] = useState('')

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort)
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
  }

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: '15px 0' }} />
      <div>
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue='Сортировка'
          options={[
            { value: 'title', name: 'по названию' },
            { value: 'body', name: 'по описанию' },
          ]}
        />
      </div>
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
