import projects from "../data/projects.json";

export const getAllProjects = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(projects);
    }, 500);
  });
};

export const getProjectById = (id) => {
  const foundProject = projects.find((project) => project.id === id);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (foundProject) {
        return resolve(foundProject);
      }
      reject(new Error("Could not find project with id: " + id));
    }, 500);
  });
};
