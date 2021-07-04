
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (

    <div>
      <div className={classes.item}>
        <img src="https://sun9-24.userapi.com/impg/o36MGhZJEJ9KT_JMsOUrrJ51dgeTJQYDTe50zw/mc-3vmwh1c8.jpg?size=894x652&quality=96&proxy=1&sign=8928faad6f96db7ab9516c8b4f279dc6" />
      </div>

      <div className={classes.descriptionBlock}>
        avatar and description
      </div>
    </div>
  );
}

export default ProfileInfo;
