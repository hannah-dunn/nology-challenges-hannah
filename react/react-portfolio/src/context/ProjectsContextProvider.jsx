import { createContext, useEffect, useState } from "react";
import { getAllProjects } from "../services/project-services";

export const ProjectsContext = createContext(null);

const ProjectsContextProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    setLoading(true);
    getAllProjects()
      .then((projects) => setProjects(projects))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);
  return (
    <ProjectsContext.Provider
      value={{ projects, projectsLoading: loading, projectsError: error }}
    >
      {children}
    </ProjectsContext.Provider>
  );
};

export default ProjectsContextProvider;
