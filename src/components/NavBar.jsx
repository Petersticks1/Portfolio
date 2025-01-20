import { useState, useEffect } from "react";
import "../index.css";
import { NavLink } from "react-router-dom";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id, offset = 100) => {
    const element = document.getElementById(id);
    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY; // Get the element's position relative to the document
      const offsetPosition = elementPosition - offset; // Adjust for the offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full">
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-black/50 backdrop-blur-md" : "bg-black"
        }`}
      >
        <nav className="flex items-center content-center justify-between w-full gap-32 p-6 px-10 text-center text-white">
          <div className="flex items-center justify-center object-cover bg-white size-9 rounded-[50%]">
            <img src="/V.png" alt="My-logo" />
          </div>
          <div className="justify-between hidden gap-24 md:flex">
            <NavLink
              to="#about"
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("about");
              }}
            >
              About me
            </NavLink>
            <NavLink
              to="#skills"
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("skills");
              }}
            >
              Skills
            </NavLink>
            <NavLink
              to="#portfolio"
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("portfolio");
              }}
            >
              Portfolio
            </NavLink>
            <NavLink
              to="#contact"
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
            >
              Contact me
            </NavLink>
          </div>
          <div className="flex items-center md:hidden ">
            <button
              className="text-white focus:outline-none"
              onClick={toggleMenu}
            >
              ☰
            </button>
          </div>
        </nav>
        {isMenuOpen && (
          <div className="absolute right-0 top-16 bg-black text-white w-[200px] rounded-md shadow-lg p-4 md:hidden">
            <NavLink
              to="#about"
              className="block py-2"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("about");
                setIsMenuOpen(false);
              }}
            >
              About me
            </NavLink>
            <NavLink
              to="#skills"
              className="block py-2"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("skills");
                setIsMenuOpen(false);
              }}
            >
              Skills
            </NavLink>
            <NavLink
              to="#portfolio"
              className="block py-2"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("portfolio");
                setIsMenuOpen(false);
              }}
            >
              Portfolio
            </NavLink>
            <NavLink
              to="#contact"
              className="block py-2"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
                setIsMenuOpen(false);
              }}
            >
              Contact me
            </NavLink>
          </div>
        )}
      </header>
    </div>
  );
}

export default NavBar;
