import React from 'react';
import { NavLink } from 'react-router-dom'
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/state';
import DialogItem from './DialogItem/DialogItem'
import s from './Dialogs.module.css'
import Message from './Message/Message'

const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage
    let dialogsElements = state.dialogsData.map(d => <DialogItem name={d.name} id={d.id} />)
    let messagesElements = state.messagesData.map(m => <Message message={m.message} />)
    let newMessageBody = state.newMessageBody

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }
    let onSendMessageChange = (e) => {
        let body = e.target.value
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return (
        <div>
            <div className={s.dialogs}>

                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>

                <div className={s.messages}>
                    <div>{messagesElements}</div>
                    <div className={s.formsElements}>
                        <div>
                            <textarea
                                value={newMessageBody}
                                onChange={onSendMessageChange}
                                placeholder='enter your message'>
                            </textarea>
                        </div>
                        <div><button onClick={onSendMessageClick}>Send</button></div>
                    </div>

                </div>

            </div>



        </div>
    )
}

export default Dialogs