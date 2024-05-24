import "./App.css";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";
import Footer from "./Components/Pages/Footer";
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
      <Contact />
      <Footer />
    </>
  );
}

export default App;
