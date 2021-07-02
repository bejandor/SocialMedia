import classes from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {
  return (
    <div className={classes.posts}>
      My posts
      <div>
        New posts
      </div>

      <Post message="hello everyone!" likes="20" />
      <Post message="This is my post" likes="30" />
      
    </div>


  );
}

export default MyPosts;
