import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {

    let postsData = [
        { id: 1, post: 'You are stupid', likesCount: 100 },
        { id: 2, post: 'You are too', likesCount: -20 }
    ]

    let postsElements = postsData.map(p => <Post message={p.post} likesCount={p.likesCount} />)

    return (
        <div className={s.postsBlock}>
            <div>
                My posts
            </div>

            <textarea></textarea>
            <button>Add post</button>

            <div className={s.posts}>
                {postsElements}
            </div>


        </div >
    )
}

export default MyPosts