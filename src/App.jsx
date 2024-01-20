import { useState } from "react";
import Project from "./components/Project";
import Sidebar from "./components/Sidebar";
import NoProject from "./components/NoProject";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: []
  });
  let content;

  const handleStartAddProject = () => {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: null
    }));
  }

  const handleAddProject = (projectData) => {
    setProjectsState((prevState) => ({
      ...prevState,
      projects: [...prevState.projects, {
        ...projectData,
        id: Math.random()
      }]
    }))
  }

  console.log(projectsState);

  if (projectsState.selectedProjectId === null) {
    content = <Project onAdd={handleAddProject} />
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProject onStartAddProject={handleStartAddProject} />
  }


  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar onStartAddProject={handleStartAddProject} />
      { content }
    </main>
  );
}

export default App;
