import styles from "./Post.module.scss";

const Post = ({ post }) => {
  const { title, content, category } = post;
  return (
    <div className={styles.post}>
      <h3>{title}</h3>
      <p>{content}</p>
      <small>{category}</small>
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
