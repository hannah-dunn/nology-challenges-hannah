import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";

const NavBar = () => {
  const navLinkClasses = ({ isActive }) => {
    return isActive ? `${styles.link} ${styles.active_link}` : styles.link;
  };

  return (
    <nav className={styles.nav}>
      <NavLink className={navLinkClasses} to="/">
        Home
      </NavLink>
      <NavLink className={navLinkClasses} to="/movies">
        Movies
      </NavLink>
      <NavLink className={navLinkClasses} to="/movies/new">
        Add Movie
      </NavLink>
    </nav>
  );
};

export default NavBar;
