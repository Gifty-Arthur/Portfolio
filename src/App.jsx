import "./App.css";
import About from "./Components/Pages/About";
import Home from "./Components/Pages/Home";
import Navbar from "./Components/Pages/Navbar";
import Services from "./Components/Pages/Services";
import Project from "./Components/Project";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Project />
    </>
  );
}

export default App;
