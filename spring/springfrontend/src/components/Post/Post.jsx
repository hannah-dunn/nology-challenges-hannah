import { deletePost } from "../../services/posts";
import styles from "./Post.module.scss";

const Post = ({ post, added, setAdded }) => {
  const { title, content, category, id } = post;

  const handleClick = async () => {
    try {
      await deletePost(id);
      console.log("deleted");
      setAdded(added + 1);
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <div className={styles.post}>
      <h3>{title}</h3>
      <p>{content}</p>
      <small>{category}</small>
      <div>
        <button onClick={handleClick}>Delete</button>
      </div>
    </div>
  );
};

export default Post;

// create a service function addPost(data)
// that will make POST request to you API
// update the post list to see the new added post

// create a Form component that will ask for
// title, content, category
// submitting the post should call your addPost(data)
