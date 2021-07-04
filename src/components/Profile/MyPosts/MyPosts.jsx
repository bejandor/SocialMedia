import classes from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {
  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div><textarea></textarea></div>
        <button>Add post</button>
      </div>

      <div className={classes.posts}>
        <Post message="hello everyone!" likes="20" />
        <Post message="This is my post" likes="30" />
      </div>
    </div>


  );
}

export default MyPosts;
