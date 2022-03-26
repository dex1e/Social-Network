import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://iblogger-ok.ru/wp-content/uploads/rcl-uploads/avatars/222.jpg?ver=1588922098'></img>
            {props.message}
            </div>
    )
}

export default Post