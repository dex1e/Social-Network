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

    let dialogsData = [
        { id: 1, name: 'Danil' },
        { id: 2, name: 'Diana' },
        { id: 3, name: 'Evgeny' },
        { id: 4, name: 'Egor' },
        { id: 5, name: 'Yura' },
        { id: 6, name: 'Boris' }
    ]

    let messagesData = [
        { id: 1, message: 'Hello' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'LOL' },
    ]

    let dialogsElements = dialogsData.map(d => <DialogItem name={d.name} id={d.id} />)
    let messagesElements = messagesData.map(m => <Message message={m.message} />)


    return (
        <div>
            <div className={s.dialogs}>
                
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>

                <div className={s.messages}>
                    {messagesElements}
                </div>

            </div>

        </div>
    )
}

export default Dialogs