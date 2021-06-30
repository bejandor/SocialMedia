import classes from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {
  return (
    <div className={classes.posts}>
      My posts
      <div>
        New posts

      </div>

      <Post />
      <Post />
    </div>


  );
}

export default MyPosts;
