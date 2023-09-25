import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.scss";

const NavBar = () => {
  const linkStyles = ({ isActive }) => {
    return isActive ? `${styles.link} ${styles.active_link}` : styles.link;
  };
  return (
    <nav className={styles.nav}>
      <NavLink className={linkStyles} to="/">
        Home
      </NavLink>
      <NavLink className={linkStyles} to="/about">
        About
      </NavLink>
      <NavLink className={linkStyles} to="/projects">
        Projects
      </NavLink>
    </nav>
  );
};

export default NavBar;
