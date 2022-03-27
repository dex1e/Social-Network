import { NavLink } from 'react-router-dom'
import s from './Navbar.module.css'

const setActive = (navData) => navData.isActive ? s.active : s.item
// ----Есть видосы на ютубе про это, теперь не используется activeClassName------- 

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to='/profile' className={setActive}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs' className={setActive}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news' className={setActive}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music' className={setActive}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/options' className={setActive}>Settings</NavLink>
            </div>
        </nav>
    )
}


export default Navbar