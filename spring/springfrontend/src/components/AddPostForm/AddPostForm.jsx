import { useState } from "react";
import styles from "./AddPostForm.module.scss";
import { createPost } from "../../services/posts";
import { useNavigate } from "react-router-dom";

const AddPostForm = ({ setAdded, added }) => {
  const initialData = {
    title: "",
    content: "",
    category: "",
  };

  const [newPost, setNewPost] = useState(initialData);
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    console.log(id, value);
    setNewPost({ ...newPost, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (error) {
        setError(false);
      }
      await createPost(newPost);
      setAdded(added + 1);
      navigate("/");
    } catch (e) {
      setError(true);
    }
  };

  console.log(newPost);

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title: </label>
          <input type="text" id="title" onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="category">Category: </label>
          <select id="category" onChange={handleChange} required>
            {/* If category was a table in the db, we could fetch all the exisiting categories and map here */}
            <option value="" hidden>
              Select one..
            </option>
            <option>Frontend</option>
            <option>Backend</option>
            <option>Lifestyle</option>
          </select>
        </div>
        <div>
          <label htmlFor="title">Content: </label>
          <textarea
            type="content"
            id="content"
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <input type="submit" value="Create Post" />
      </form>
      {error && <p>Could not create a post</p>}
    </>
  );
};

export default AddPostForm;
