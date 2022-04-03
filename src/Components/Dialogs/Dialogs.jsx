import { NavLink } from 'react-router-dom'
import s from './Dialogs.module.css'

const Dialogs = () => {
    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    <div className={s.dialog + ' ' + s.active}>
                        <NavLink to='/dialogs/1'>Danil</NavLink>
                    </div>
                    <div className={s.dialog}>
                        <NavLink to='/dialogs/2'>Diana</NavLink>
                    </div>
                    <div className={s.dialog}>
                        <NavLink to='/dialogs/3'>Evgeny</NavLink>
                    </div>
                    <div className={s.dialog}>
                        <NavLink to='/dialogs/4'>Egor</NavLink>
                    </div>
                    <div className={s.dialog}>
                        <NavLink to='/dialogs/5'>Yura</NavLink>
                    </div>
                    <div className={s.dialog}>
                        <NavLink to='/dialogs/6'>Boris</NavLink>
                    </div>

                </div>
                <div className={s.messages}>
                    <div className={s.message}>Hi</div>
                    <div className={s.message}>How are you?</div>
                    <div className={s.message}>LOL</div>
                </div>
            </div>

        </div>
    )
}

export default Dialogs