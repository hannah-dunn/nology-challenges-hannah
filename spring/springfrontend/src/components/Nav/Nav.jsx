import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <NavLink to="/">Posts</NavLink>
      <NavLink to="/create-post">Add Post</NavLink>
    </nav>
  );
};

export default Nav;
