import classes from './Post.module.css';

const Post = (props) => {
  return (
    <div className={classes.item}>
      <img src="https://i.pinimg.com/736x/c2/13/e2/c213e248bf0b489d56d93f5d53c055aa.jpg" />
      <div>
      {props.message} 
      <span> likes {props.likes}</span>
      </div>


    </div>
  );
}

export default Post;
