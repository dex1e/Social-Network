import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
    return (
        <div className={s.postsBlock}>
            <div>
                My posts
            </div>

            <textarea></textarea>
            <button>Add post</button>

            <div className={s.posts}>
                <Post message= 'You are fuckng idiot' likesCount= '100'/>
                <Post message= 'You are too' likesCount= '-5'/>
            </div>
            

        </div >
    )
}

export default MyPosts