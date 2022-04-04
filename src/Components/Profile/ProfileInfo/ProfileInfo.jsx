import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://images7.alphacoders.com/423/thumb-1920-423250.jpg'></img>
            </div>

            <div className={s.descriptionBlock}>ava + description</div>
        </div>
    )
}

export default ProfileInfo