import "../index.css";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { fadeOut } from "./Motion";

function Contact() {
  return (
    <div className="flex flex-col items-center px-8 my-20" id="contact">
      <motion.h1
        variants={fadeOut("down", 0.5)}
        initial="hidden"
        //  animate="show"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.7 }}
        className="items-center p-4 text-xl font-bold text-center border-4 border-black md:w-1/6 "
      >
        CONTACT
      </motion.h1>
      <img src="/separatorBlack 1.png" alt="#" className="my-20" />

      <div className="flex flex-col items-center justify-center py-10 bg-black md:py-20 md:flex-row md:gap-28 md:px-28 rounded-xl">
        <div className="items-center px-5 text-center md:text-left md:p-4 md:mr-20">
          <motion.div
            variants={fadeOut("down", 0.5)}
            initial="hidden"
            //  animate="show"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            className="text-3xl font-bold text-white md:text-6xl"
          >
            Let’s work together on your next project
          </motion.div>

          <motion.p
            variants={fadeOut("up", 0.5)}
            initial="hidden"
            //  animate="show"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            className="text-[#d7d7d7] md:text-lg"
          >
            So we can build something interesting together
          </motion.p>
        </div>

        <motion.div
          variants={fadeOut("left", 0.5)}
          initial="hidden"
          //  animate="show"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="items-center md:ml-20"
        >
          <a
            href="mailto:adebayopetergvmc68@gmail.com"
            className="p-6 bg-[#a2a0a0] hover:bg-[#615f5f]"
          >
            {" "}
            <button className="my-12 md:mt-8">
              <span className="flex justify-center gap-2">
                {" "}
                CONTACT ME <ArrowUpRight />
              </span>
            </button>
          </a>
        </motion.div>
      </div>

      <img src="/separatorBlack 1.png" alt="#" className="mt-20" />
    </div>
  );
}

export default Contact;
