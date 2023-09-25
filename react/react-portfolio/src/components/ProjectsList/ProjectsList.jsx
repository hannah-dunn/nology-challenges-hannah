import ProjectCard from "../ProjectCard/ProjectCard";
import styles from "./ProjectsList.module.scss";

const ProjectsList = ({ projects }) => {
  return (
    <div className={styles.container}>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectsList;
