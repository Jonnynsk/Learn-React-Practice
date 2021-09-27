import MyButton from "./UI/MyButton"

const PostItem = ({ post, number, remove }) => {
    return (
        <div className='post'>
            <div className='post__content'>
                <strong>{number}. {post.title}</strong>
                <div>{post.body}</div>
            </div>
            <div>
                <MyButton onClick={() => remove(post)}>Удалить</MyButton>
            </div>
        </div>
    )
}

export default PostItem