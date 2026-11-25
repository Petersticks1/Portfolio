import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <div className="min-h-screen flex flex-col w-full bg-[var(--bg-page)] text-[var(--text-primary)] font-sans antialiased">
          <NavBar />
          <main className="flex-1 w-full">
            <Hero />
            <About />
            <Skills />
            <Portfolio />
            <Contact />
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </MotionConfig>
  );
}

export default App;
