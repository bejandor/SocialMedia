import classes from './Header.module.css';

const Header = () => {
    return (
        <header className={classes.header}>
            
            <img src ="https://image.flaticon.com/icons/png/128/1441/1441081.png " alt="###" />
            <span className={classes.item}>
             Dostor
            </span>
        </header>
    );
}

export default Header;