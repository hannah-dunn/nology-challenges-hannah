import styles from "./PostList.module.scss";
import Post from "../../components/Post/Post";

const PostList = ({ posts }) => {
  return (
    <div className={styles.postList}>
      {posts.length > 0 &&
        posts.map((post) => {
          return <Post post={post} key={post.id} />;
        })}
    </div>
  );
};

export default PostList;
