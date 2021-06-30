import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css';

const Profile = () =>{
    return(

      <div className={classes.content}>
        <img src="https://sun9-24.userapi.com/impg/o36MGhZJEJ9KT_JMsOUrrJ51dgeTJQYDTe50zw/mc-3vmwh1c8.jpg?size=894x652&quality=96&proxy=1&sign=8928faad6f96db7ab9516c8b4f279dc6" />
        <div>
          avatar and description
        </div>
        <MyPosts />
      </div>
    );
}

export default Profile;
