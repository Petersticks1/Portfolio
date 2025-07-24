import "../index.css";
import {
  ChevronsUp,
  Instagram,
  Twitter,
  Linkedin,
  MessageCircle,
  Copyright,
} from "lucide-react";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Adds a smooth scrolling effect
    });
  };
  return (
    <div className="flex flex-col items-center w-full py-8 text-white bg-black">
      <ChevronsUp onClick={scrollToTop} className="hover:cursor-pointer" />
      <h4 className="py-4"> BACK TO TOP</h4>
      <div className="flex items-center justify-center gap-4 py-2">
        <div className="relative group">
          <a href="https://www.instagram.com/psticks__/">
            <Instagram className="transition duration-300 hover:text-pink-500" />
          </a>
          <span className="absolute px-2 py-1 text-sm text-white transition duration-300 transform -translate-x-1/2 bg-gray-800 rounded opacity-0 left-1/2 top-10 group-hover:opacity-100">
            Instagram
          </span>
        </div>
        <div className="relative group">
          <a href="https://x.com/Petersticks1">
            <Twitter className="transition duration-300 hover:text-blue-500" />
          </a>
          <span className="absolute px-2 py-1 text-sm text-white transition duration-300 transform -translate-x-1/2 bg-gray-800 rounded opacity-0 left-1/2 top-10 group-hover:opacity-100">
            Twitter
          </span>
        </div>
        <div className="relative group">
          <a href="http://www.linkedin.com/in/adebayo-peter-390074319">
            <Linkedin className="transition duration-300 hover:text-blue-700" />
          </a>
          <span className="absolute px-2 py-1 text-sm text-white transition duration-300 transform -translate-x-1/2 bg-gray-800 rounded opacity-0 left-1/2 top-10 group-hover:opacity-100">
            LinkedIn
          </span>
        </div>
        <div className="relative group">
          <a href="tel:+2348139084131">
            <MessageCircle className="transition duration-300 hover:text-green-500" />
          </a>
          <span className="absolute px-2 py-1 text-sm text-white transition duration-300 transform -translate-x-1/2 bg-gray-800 rounded opacity-0 left-1/2 top-10 group-hover:opacity-100">
            Message
          </span>
        </div>
      </div>

      <div className="flex items-center pt-6">
        <Copyright />
        <span>Adebayo Peter 2025</span>
      </div>
    </div>
  );
}

export default Footer;
