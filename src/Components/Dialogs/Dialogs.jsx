import { NavLink } from 'react-router-dom'
import s from './Dialogs.module.css'




const DialogItem = (props) => {

    let path = "/dialogs/" + props.id

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
            <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = () => {
    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    <DialogItem name='Danil' id='1' />
                    <DialogItem name='Diana' id='2' />
                    <DialogItem name='Evgeny' id='3' />
                    <DialogItem name='Egor' id='4' />
                    <DialogItem name='Yura' id='5' />
                    <DialogItem name='Boris' id='6' />
                </div>
                <div className={s.messages}>
                    <Message message='Hello' />
                    <Message message='How are you?' />
                    <Message message='LOL' />
                </div>

            </div>

        </div>
    )
}

export default Dialogs