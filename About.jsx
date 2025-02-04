import "../index.css";
import "./NavBar";
import { motion } from "framer-motion";
import { fadeOut } from "./Motion";

function About() {
  return (
    <div className="flex flex-col items-center justify-center my-20 text-center max-w-7xl md:opacity-100 md:translate-y-0"
      id="about"
    >
      <motion.h1
        variants={fadeOut("up", 0.2)}
        initial="hidden"
        // animate="show"
        whileInView={"show"}
        viewport={{ once: true, amount: 1 }}
        className="items-center p-4 text-xl font-bold text-center border-4 border-black md:w-1/6"
      >
        ABOUT ME
      </motion.h1>
      
      <motion.p
        variants={fadeOut("left", 0.2)}
        initial="hidden"
        // animate="show"
        whileInView={"show"}
        viewport={{ once: true, amount: 1 }}
         className="px-10 my-8 text-justify md:text-center">
        I am Adebayo Peter Oluwagbemileke, a skilled frontend and mobile
        developer with expertise in building responsive web applications
        utilizing tools like HTML, CSS, Sass, Boostrap, React, Tailwind CSS, and
        modern JavaScript frameworks to craft visually appealing and functional
        designs, as well as creating cross-platform mobile applications with
        React Native. My ability to seamlessly integrate design and
        functionality extends to mobile development, enabling me to deliver
        user-friendly, performant, and visually appealing mobile solutions. With
        years of experience in the tech industry, I have honed my skills in
        debugging, optimizing code, and implementing innovative solutions for
        complex problems. My ability to bridge the gap between design and
        functionality makes me a valuable asset in any tech-driven project.
        Beyond technical expertise, my dedication to continuous learning ensures
        that I stay updated with the latest trends and advancements in the tech
        world.
      </motion.p>

      <h4 className="px-4 my-8 text-lg font-semibold border-2 border-black border-y-0 mb-14">
        EXPLORE
      </h4>
      <img src="/separatorBlack 1.png" alt="#" />

      <div className="items-center justify-center px-10 my-20 text-center">
        <div className="flex flex-col justify-center gap-10 md:gap-20 md:flex-row ">
          <div className="">
            <span className="relative flex items-center">
              <img src="/tool.png" alt="" className="z-0" />
              <h2 className="z-10 px-2 -ml-8 text-xl font-bold">DESIGN</h2>
            </span>

            <p className="text-justify">
              I can design the website based on your needs and suggestions. I
              can also create it from scratch by consulting with you during
              work.
            </p>
          </div>

          <div>
            <span className="relative flex items-center ">
              {" "}
              <img src="/image.png" alt="" className="z-0" />
              <h2 className="z-10 px-2 -ml-8 text-xl font-bold">DEVELOPMENT</h2>
            </span>

            <p className="text-justify">
              Based on a project created by me or another one, sent by you, I
              can program the website to be fully functional and responsive.
            </p>
          </div>
        </div>

        <div className="flex flex-col mt-10 text-justify md:my-4 md:text-center md:items-center">
          <span className="relative flex items-center text-center">
            {" "}
            <img src="/Maintainenace.png" alt="" className="z-0" />{" "}
            <h2 className="z-10 px-2 mt-4 -ml-8 text-xl font-bold ">
              MAINTENANCE
            </h2>
          </span>

          <p className="text-justify">
            In case of any problems or the need for changes, I can introduce new
            functionalities and solutions.
          </p>
        </div>
      </div>
      <img src="/separatorBlack 1.png" alt="#" />
    <div>
  );
}

export default About;
