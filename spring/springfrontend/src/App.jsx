import { useEffect, useState } from "react";
import "./App.css";
import PostList from "./containers/PostList/PostList";
import { getAllPosts } from "./services/posts";

function App() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    getAllPosts().then((res) => {
      setPosts(res);
      console.log(res);
    });
  }, []);

  return (
    <>
      <h1>Posts from backend</h1>
      <PostList posts={posts} />
      {error && <p>Something went wrong...</p>}
    </>
  );
}

export default App;
