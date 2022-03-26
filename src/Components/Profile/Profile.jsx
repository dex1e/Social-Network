import MyPosts from './MyPosts/MyPosts'
import s from './Profile.module.css'

const Profile = () => {
    return (
        <div className={s.content}>Main content
            <div>
                <img src='https://images7.alphacoders.com/423/thumb-1920-423250.jpg'></img>
            </div>

            <div>ava + description</div>
            <MyPosts />
        </div>
    )
}

export default Profile