import React from "react";
import { Link } from "react-router-dom";
import styles from "./ProjectCard.module.scss";

const ProjectCard = ({ project }) => {
  return (
    <div className={styles.card}>
      <h3>{project.title}</h3>
      <img src={project.imageLink} alt={project.title} />
      <p>{project.description}</p>
      <Link to={`${project.id}`}>See More</Link>
    </div>
  );
};

export default ProjectCard;
