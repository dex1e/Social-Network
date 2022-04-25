import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {

    let newPostElement = React.createRef()

    let addPost = () => {
        props.addPost()
    };

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
    }


    let postsElements = props.postsData.map(p => <Post message={p.post} likesCount={p.likesCount} />)

    return (
        <div className={s.postsBlock}>
            <div>
                My posts
            </div>

            <div>
                <textarea
                    ref={newPostElement}
                    onChange={onPostChange}
                    value={props.newPostText}>
                </textarea>
            </div>

            <div>
                <button onClick={addPost}>Add post</button>
            </div>


            <div className={s.posts}>
                {postsElements}
            </div>


        </div >
    )
}

export default MyPosts