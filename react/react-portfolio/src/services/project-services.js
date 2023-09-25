import projects from "../data/projects.json";

// commented out uses the src/data/projects.json, other code uses API requests and fetch
// export const getAllProjects = () => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(projects);
//       }, 500);
//     });
//   };

export const getAllProjects = async () => {
  const response = await fetch("http://localhost:3000/projects");
  if (!response.ok) throw new Error("Failed to fetch Projects");
  const data = await response.json();
  return data;
};

export const getProjectById = async (id) => {
  const response = await fetch("http://localhost:3000/projects/" + id);
  if (!response.ok) {
    throw new Error("Failed to find project with id" + id);
  }
  const data = await response.json();
  return data;
};

// export const getProjectById = (id) => {
//   const foundProject = projects.find((project) => project.id === id);
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (foundProject) {
//         return resolve(foundProject);
//       }
//       reject(new Error("Could not find project with id: " + id));
//     }, 500);
//   });
// };
