import "../index.css";
import Slider from "react-slick"; // Import Slider
import { AtSign, Github, Linkedin, Download, MoveRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { fadeIn } from "./Motion";

function Hero() {
  // Settings for react-slick slider
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Loop the images
    speed: 500, // Transition speed
    slidesToShow: 1, // Number of slides visible at a time
    slidesToScroll: 1, // Number of slides to scroll at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Autoplay interval in milliseconds
    
  };

  return (
    <div className="w-[100%] ">
      <main className="pt-20 ">
        <div className="flex flex-col items-center justify-between md:flex-row ">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            animate="show"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.5 }}
            className="items-center content-center justify-center text-center md:text-left p-14"
          >
            <h3 className="justify-center my-8 text-2xl font-bold text-black md:text-5xl">
              Hi, I am
            </h3>
            <h1 className="my-4 text-5xl font-bold text-black md:text-7xl">
              Adebayo Peter
            </h1>
            <p className="text-[#909090] font-bold md:text-2xl text-lg">
              Front-end Web Developer | Mobile Developer
            </p>
            <a
              href="/Peter_updated-Resume.pdf"
              className="p-4 bg-[#a2a0a0] hover:bg-[#615f5f]"
            >
              <button className="my-6">
                <span className="flex justify-center gap-2">
                  Download Resume <Download />
                </span>
              </button>
            </a>

            <div className="flex flex-col items-center gap-2 md:gap-6 md:my-8 justify-left md:flex-row">
              <p className="flex flex-row items-center content-center justify-center gap-1 font-bold">
                Connect with me <MoveRight className="hidden md:block" />
              </p>

              <div className="flex items-center gap-6 md:flex-row">
                <a href="mailto:adebayopetergvmc68@gmail.com">
                  <AtSign className="p-2 transition duration-300 rounded-lg shadow-xl bg-[#a2a0a0] hover:shadow-2xl size-10 hover:bg-[#615f5f]" />
                </a>
                <a href="https://github.com/Petersticks1">
                  <Github className="p-2 transition duration-300 rounded-lg shadow-xl hover:shadow-2xl size-10 bg-[#a2a0a0] hover:bg-[#615f5f]" />
                </a>
                <a href="http://www.linkedin.com/in/adebayo-peter-390074319">
                  <Linkedin className="p-2 transition duration-300 rounded-lg shadow-xl hover:shadow-2xl size-10 bg-[#a2a0a0] hover:bg-[#615f5f]" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Image Carousel */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            animate="show"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.5 }}
            className="w-full p-10 bg-black md:w-2/4"
          >
            <Slider {...settings}>
              <div className="">
                <img
                  src="/My-picture.png"
                  alt="Picture 1"
                  className="w-full h-[700px] object-cover rounded-lg"
                />
              </div>
              <div>
                <img
                  src="/My-pics2.jpg"
                  alt="Picture 2"
                  className="w-full h-[700px] object-cover rounded-lg"
                />
              </div>
              <div>
                <img
                  src="/My-image.jpg"
                  alt="Picture 3"
                  className="w-full h-[700px] object-cover rounded-lg"
                />
              </div>
            </Slider>
          </motion.div>
        </div>

        <div className="w-full bg-center p-14 bg-custom-pattern md-20"></div>
      </main>
    </div>
  );
}

export default Hero;
