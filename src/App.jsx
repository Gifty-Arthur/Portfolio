import "./App.css";
import About from "./Components/Pages/About";
import Home from "./Components/Pages/Home";
import Navbar from "./Components/Pages/Navbar";
import Services from "./Components/Pages/Services";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Services />
    </>
  );
}

export default App;
