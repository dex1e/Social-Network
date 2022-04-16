import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {
    
    

    let postsElements = props.postsData.map(p => <Post message={p.post} likesCount={p.likesCount} />)

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