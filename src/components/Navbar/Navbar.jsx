import classes from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>

                <NavLink to="/profile" activeClassName={classes.activelink}>
                    <img src="https://image.flaticon.com/icons/png/128/1177/1177568.png" alt="no internet" />Profile
                </NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/dialogs" activeClassName={classes.activelink}>
                    <img src="https://image.flaticon.com/icons/png/128/893/893257.png" alt="" /> Messages
                </NavLink>
            </div>

            <div className={classes.item}>
                <NavLink to="/friends" activeClassName={classes.activelink}>
                    <img src="https://image.flaticon.com/icons/png/128/1177/1177577.png" alt="" />  Friends
                </NavLink>
            </div>

            <div className={classes.item}>
                <NavLink to="/news" activeClassName={classes.activelink}>
                    <img src="https://image.flaticon.com/icons/png/128/1042/1042731.png" alt="" />  News
                </NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/music" activeClassName={classes.activelink}>
                    <img src="https://image.flaticon.com/icons/png/128/875/875590.png" alt="" /> Music
                </NavLink>
            </div>

            <div className={classes.item}>
                <NavLink to="/settings" activeClassName={classes.activelink}>
                    <img src="https://image.flaticon.com/icons/png/128/3132/3132084.png" alt="" /> Settings
                </NavLink>
            </div>
        </nav>
    );
}

export default Navbar;