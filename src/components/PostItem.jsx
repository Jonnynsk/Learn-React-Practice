import MyButton from "./UI/MyButton"

const PostItem = ({ post, number }) => {
    return (
        <div className='post'>
            <div className='post__content'>
                <strong>{number}. {post.title}</strong>
                <div>{post.body}</div>
            </div>
            <div>
                <MyButton>Удалить</MyButton>
            </div>
        </div>
    )
}

export default PostItem