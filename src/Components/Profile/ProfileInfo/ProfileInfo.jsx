import Preloader from '../../common/Preloader/Preloader'
import s from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            <div className={s.imageElement}>
                <img src='https://images7.alphacoders.com/423/thumb-1920-423250.jpg'></img>
            </div>

            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo