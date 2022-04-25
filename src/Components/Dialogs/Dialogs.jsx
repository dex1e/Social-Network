import React from 'react';
import { NavLink } from 'react-router-dom'
import DialogItem from './DialogItem/DialogItem'
import s from './Dialogs.module.css'
import Message from './Message/Message'

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogsData.map(d => <DialogItem name={d.name} id={d.id} />)
    let messagesElements = props.state.messagesData.map(m => <Message message={m.message} />)

    let newMessageElement = React.createRef()
    let sendMessage = () => {
        let message = newMessageElement.current.value
        alert(message)
    }



    return (
        <div>
            <div className={s.dialogs}>

                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>

                <div className={s.messages}>
                    {messagesElements}

                    <div className={s.formsElements}>
                        <textarea ref={newMessageElement}></textarea>
                        <button onClick={sendMessage}>Send</button>
                    </div>

                </div>

            </div>



        </div>
    )
}

export default Dialogs