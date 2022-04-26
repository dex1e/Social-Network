import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/state';
import s from './MyPosts.module.css'
import Post from './Post/Post'


const MyPosts = (props) => {

    let newPostElement = React.createRef()

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    };

    let onPostChange = () => {
        let text = newPostElement.current.value
        let action = updateNewPostTextActionCreator(text)
        props.dispatch(action)
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