import s from './Profile.module.css'

const Profile = () => {
    return (
        <div className={s.content}>Main content
            <div>
                <img src='https://images7.alphacoders.com/423/thumb-1920-423250.jpg'></img>
            </div>

            <div>ava + description</div>
            <div>
                my posts
                <div>
                    New post
                </div>
                <div className={s.item}>post 1</div>
                <div className={s.item}>post 2</div>
            </div>
        </div>
    )
}

export default Profile