export const getAllPosts = async () => {
  const response = await fetch("http://localhost:8080/posts");
  return await response.json();
};

export const createPost = async (data) => {
  const response = await fetch("http://localhost:8080/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Could not create post");
  }
};

export const deletePost = async (id) => {
  const response = await fetch(`http://localhost:8080/posts/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Could not delete");
  }
};
