import Project from "./components/Project";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar />
      <Project />
    </main>
  );
}

export default App;
