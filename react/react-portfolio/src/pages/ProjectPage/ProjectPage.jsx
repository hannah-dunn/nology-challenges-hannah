import React from "react";

const ProjectPage = ({ project }) => {
  return (
    <>
      <h1>{project.title}</h1>
      <img src={project.imageLink} alt={project.title} />
      <p>{project.description}</p>
      <Link
        style={{ marginRight: "o.5em" }}
        target="_blank"
        to={project.githubLink}
      >
        Github
      </Link>
      {project.deployedLink && (
        <Link target="_blank" to={project.deployedLink}>
          Deployed Site
        </Link>
      )}

      {/* <a href={project.githubLink} target="_blank">Github</a>
      {project.deployedLink && (<a href={project.deployedLink} target='_blank'> Deployed Site)} target="_blank">Github</a> */}
    </>
  );
};

export default ProjectPage;
