import "../index.css";
import { motion } from "framer-motion";
import { fadeIn } from "./Motion";

function Skills() {
  return (
    <div
      className="flex flex-col items-center justify-center text-center mt-18 max-w-7xl"
      id="skills"
    >
      <motion.h1
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        //  animate="show"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.7 }}
        className="items-center p-4 text-xl font-bold text-center border-4 border-black md:w-1/6 "
      >
        SKILLS
      </motion.h1>

      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        //  animate="show"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.7 }}
        className="grid items-center content-center justify-center grid-cols-3 gap-24 my-8 gap-y-10 p-14 md:grid-cols-4"
      >
        <div className="flex flex-col items-center ">
          <img src="/html.png" alt="#" />
          <p>HTML</p>
        </div>
        <div className="flex flex-col items-center ">
          <img src="/Css.png" alt="#" />
          <p>CSS</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/Sass.png" alt="#" />
          <p>SASS</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/Js.png" alt="#" />
          <p>JAVASCRIPT</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="React.png" alt="#" />
          <p>REACT</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/pngwing.com.png" alt="#" width={100} />
          <p>TAILWIND CSS</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/pngwing.com (1).png" alt="#" width={100} />
          <p>REACT NATIVE</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/Git.png" alt="#" />
          <p>GIT</p>
        </div>

        <div className="flex flex-col items-center">
          <img src="/Boostrap.png" alt="#" />
          <p>Boostrap</p>
        </div>

        <div className="flex flex-col items-center">
          <img src="/Redux.png" alt="#" />
          <p>Redux</p>
        </div>

        <div className="flex flex-col items-center">
          <img src="/Expo.png" alt="#" />
          <p>Expo</p>
        </div>

        <div className="flex flex-col items-center">
          <img src="/Jest.png" alt="#" />
          <p>Jest</p>
        </div>
      </motion.div>
    </div>
  );
}

export default Skills;
