import { useEffect, useState } from "react";
import "./App.css";
import PostList from "./containers/PostList/PostList";
import { getAllPosts } from "./services/posts";
import AddPostForm from "./components/AddPostForm/AddPostForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";

function App() {
  const [posts, setPosts] = useState([]);
  const [added, setAdded] = useState(0);

  useEffect(() => {
    getAllPosts().then((res) => {
      setPosts(res);
      console.log(res);
    });
  }, [added]);

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route
          path="/"
          element={<PostList posts={posts} setAdded={setAdded} added={added} />}
        />
        <Route
          path="/create-post"
          element={<AddPostForm setAdded={setAdded} added={added} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
