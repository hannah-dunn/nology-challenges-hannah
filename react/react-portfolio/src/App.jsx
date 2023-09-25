import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import NavBar from "./components/NavBar/NavBar";
import ProjectsContextProvider from "./context/ProjectsContextProvider";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import ProjectPageLoader from "./container/ProjectPageLoader/ProjectPageLoader";
import ContactPage from "./pages/ContactPage/ContactPage";

function App() {
  return (
    <>
      <ProjectsContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:id" element={<ProjectPageLoader />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </BrowserRouter>
      </ProjectsContextProvider>
    </>
  );
}

export default App;
