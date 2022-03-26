import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
    return (
        <div>
            <div>
                My posts
            </div>

            <textarea></textarea>
            <button>Add post</button>

            <div className={s.posts}>
                <Post message= 'You are fuckng idiot' />
                <Post message= 'You are too' />
            </div>
            

        </div >
    )
}

export default MyPosts