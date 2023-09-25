import React, { useContext } from "react";
import { ProjectsContext } from "../../context/ProjectsContextProvider";
import ProjectsList from "../../components/ProjectsList/ProjectsList";

const ProjectsPage = () => {
  const { projects, projectsLoading, projectsError } =
    useContext(ProjectsContext);

  return (
    <>
      <h1>Projects</h1>
      {projectsLoading ? (
        <p>Loading...</p>
      ) : (
        <ProjectsList projects={projects} />
      )}
    </>
  );
};

export default ProjectsPage;
