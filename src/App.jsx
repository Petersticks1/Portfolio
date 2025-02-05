import NavBar from "./components/NavBar";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-[#d7d7d7] items-center flex flex-col w-[100%] overflow-hidden font-sans ">
        <NavBar />
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
