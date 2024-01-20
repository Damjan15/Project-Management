import Project from "./components/Project";
import Sidebar from "./components/Sidebar";
import NoProject from "./components/NoProject";

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar />
      <NoProject />
    </main>
  );
}

export default App;
