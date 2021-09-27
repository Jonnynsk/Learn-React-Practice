import styled from 'styled-components'

import PostItem from "./PostItem"

const PostList = ({posts, remove}) => {
    return (
        <div>
            <Header>Список постов:</Header>
            {posts.map((post, index) =>
                <PostItem key={post.id} 
                          number={index + 1} 
                          post={post} 
                          remove={remove} />
            )}
        </div>
    )
}

export default PostList


const Header = styled.h1`
    text-align: center;
    color: #4a6f87;
    margin-top: 30px;
`