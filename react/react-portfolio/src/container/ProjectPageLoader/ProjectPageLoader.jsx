import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { getProjectById } from "../../services/project-services";
import ProjectPage from "../../pages/ProjectPage/ProjectPage";

const ProjectPageLoader = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    getProjectById(parseInt(id))
      .then((project = setProject(project)))
      .catch((err) => {
        console.error(err);
        setError(err);
      })
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <>
      {loading && <p>Loading...</p>}
      {!loading && error && <p>Could not find project with id : {id}</p>}
      {!loading && project && <ProjectPage project={projects} />}
    </>
  );
};

export default ProjectPageLoader;
