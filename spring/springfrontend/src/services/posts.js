export const getAllPosts = async () => {
  const response = await fetch("http://localhost:8080/posts");
  return await response.json();
};
