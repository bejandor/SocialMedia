import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css';



const DialogItem = (props) => {

    let path = "/dialog/" + props.id;

    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={path} >  {props.name} </NavLink>
        </div>

    );

}


const Message = (props) =>{
    return(

            <div className={classes.dialog}>
                {props.message}
            </div>
       
    );
}



const Dialogs = (props) => {
    return (

        // The First column Dialogs
        <div className={classes.Dialogs}>

            <div className={classes.dialogsItems}>

                <DialogItem name="Mommy" id="1" />   {/*Компонента  c атрибутами*/}
                <DialogItem name="Alexander" id="2" />  {/*Компонента  c атрибутами*/}
                <DialogItem name="Darygul" id="3" />  {/*Компонента  c атрибутами*/}
                <DialogItem name="Asylbek" id="4" />  {/*Компонента  c атрибутами*/}

            </div>

            {/* The second column messages */}
            <div className={classes.messages}>
                < Message  message = "Hi there!!"/>
                < Message  message = "Wussap dude!!"/>
                < Message  message = "I am pretty well!"/>
            </div>
        </div>
    );
}



export default Dialogs;