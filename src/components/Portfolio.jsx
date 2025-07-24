import "../index.css";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { fadeOut } from "./Motion";

function Portfolio() {
  return (
    <div
      className="flex flex-col items-center justify-center w-full py-10 text-center bg-center bg-no-repeat bg-cover border-t-4 border-black bg-Portfolio "
      id="portfolio"
    >
      <motion.h1
        variants={fadeOut("up", 0.2)}
        initial="hidden"
        //  animate="show"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.7 }}
        className="items-center p-4 text-xl font-bold text-center border-4 border-black md:w-1/6 "
      >
        PORTFOLIO
      </motion.h1>

      <div className="px-8 mt-10 ">
        <motion.h1
          variants={fadeOut("left", 0.2)}
          initial="hidden"
          //  animate="show"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="flex my-8 text-3xl font-bold text-left"
        >
          RECENT WORKS
        </motion.h1>

        <div className="grid justify-center gap-10 text-left md:grid-cols-2">
          <motion.div
            variants={fadeOut("right", 0.5)}
            initial="hidden"
            //  animate="show"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            className="bg-black text-white justify-center  p-8 md:text-justify hover:bg-[#2b2626] rounded-xl"
          >
            <h1 className="text-2xl font-semibold ">Shelf21 Mobile App</h1>
            <p className="font-thin">
              Shelf21 mobile application is a school management system that
              allows for easy empowers schools, engage students and enhances
              communications between all stakeholders in a school. This app
              gives access to guardians and wards, your school sends you invot
            </p>
            <a
              href="https://play.google.com/store/apps/details?id=com.shelf21mobile&pcampaignid=web_share"
              className="p-4 bg-[#a2a0a0] hover:bg-[#615f5f]"
            >
              {" "}
              <button className="my-8">
                <span className="flex justify-center gap-2">
                  {" "}
                  VISIT GOOGLE PLAYSTORE <ArrowUpRight />
                </span>
              </button>
            </a>

            <video
              controls
              autoPlay
              loop
              muted
              playsInline
              width={600}
              className="border-4 border-[#a2a0a0] my-5  pointer-events-none"
            >
              <source src="/Shelf21.mp4" type="video/mp4" />
            </video>
          </motion.div>

          <motion.div
            variants={fadeOut("left", 0.5)}
            initial="hidden"
            //  animate="show"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            className="bg-black text-white justify-center  p-8 md:text-justify hover:bg-[#2b2626] rounded-xl"
          >
            <h1 className="text-2xl font-semibold ">Tender Pay Mobile App</h1>
            <p className="font-thin">
              Tender Pay mobile application is an app to buy airtime and data
              plan, pay bills, and trade crytpo and giftcard
            </p>
            <a
              href="https://play.google.com/store/apps/details?id=co.tenderpay.mobile&pcampaignid=web_share"
              className="p-4 bg-[#a2a0a0] hover:bg-[#615f5f]"
            >
              {" "}
              <button className="my-8">
                <span className="flex justify-center gap-2">
                  {" "}
                  VISIT GOOGLE PLAYSTORE <ArrowUpRight />
                </span>
              </button>
            </a>
            <img
              src="/Tender.png"
              alt="portfolio"
              width={600}
              className="border-4 border-[#a2a0a0] my-5"
            />
          </motion.div>

          <motion.div
            variants={fadeOut("up", 0.5)}
            initial="hidden"
            //  animate="show"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            className="bg-black text-white justify-center  p-8 md:text-justify hover:bg-[#2b2626] rounded-xl"
          >
            <h1 className="text-2xl font-semibold ">RECIPE APP</h1>
            <p className="font-thin">
              Recipe App is a user-friendly platform designed to help users
              discover, organize, and share their favorite recipes. Whether you
              are a home cook or a professional chef, the app provides a
              seamless experience for creating delicious meals and exploring new
              culinary ideas.
            </p>
            <a
              href="https://recipe-web-app-taupe.vercel.app/"
              className="p-4 bg-[#a2a0a0] hover:bg-[#615f5f]"
            >
              {" "}
              <button className="my-8">
                <span className="flex justify-center gap-2">
                  {" "}
                  VISIT SITE <ArrowUpRight />
                </span>
              </button>
            </a>

            <img
              src="/RecipeApp.png"
              alt="portfolio"
              width={600}
              className="border-4 border-[#a2a0a0] my-5"
            />
          </motion.div>

          <motion.div
            variants={fadeOut("right", 0.5)}
            initial="hidden"
            //  animate="show"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            className="bg-black text-white justify-center  p-8 md:text-justify hover:bg-[#2b2626] rounded-xl"
          >
            <h1 className="text-2xl font-semibold ">ADMIN DASHBOARD</h1>
            <p className="font-thin">
              Admin Dashboard is a powerful and intuitive web-based interface
              designed to help administrators manage, monitor, and optimize
              various aspects of their applications, systems, or businesses. It
              centralizes essential tools and data, providing a comprehensive
              view of operations.
            </p>
            <a
              href="https://admin-dashboard-psticks.vercel.app/"
              className="p-4 bg-[#a2a0a0] hover:bg-[#615f5f]"
            >
              {" "}
              <button className="my-8">
                <span className="flex justify-center gap-2">
                  {" "}
                  VISIT SITE <ArrowUpRight />
                </span>
              </button>
            </a>

            <img
              src="/Admin-dashboard.png"
              alt="portfolio"
              width={600}
              className="border-4 border-[#a2a0a0] my-5 "
            />
          </motion.div>

          <motion.div
            variants={fadeOut("right", 0.5)}
            initial="hidden"
            //  animate="show"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            className="bg-black text-white justify-center  p-8 md:text-justify hover:bg-[#2b2626] rounded-xl"
          >
            <h1 className="text-2xl font-semibold ">CALCULATOR APP</h1>
            <p className="font-thin">
              Calculator App is a versatile and easy-to-use tool designed to
              handle various types of mathematical operations, from basic
              arithmetic to advanced scientific calculations. It simplifies
              problem-solving for everyday tasks and complex computations.
            </p>
            <a
              href="https://calculator-delta-liart-78.vercel.app/"
              className="p-4 bg-[#a2a0a0] hover:bg-[#615f5f] "
            >
              {" "}
              <button className="my-8">
                <span className="flex justify-center gap-2">
                  {" "}
                  VISIT SITE <ArrowUpRight />
                </span>
              </button>
            </a>

            <img
              src="/Calculator.png"
              alt="portfolio"
              width={600}
              className="border-4 border-[#a2a0a0] my-5"
            />
          </motion.div>

          <motion.div
            variants={fadeOut("left", 0.5)}
            initial="hidden"
            //  animate="show"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            className="bg-black text-white justify-center  p-8 md:text-justify hover:bg-[#2b2626] rounded-xl"
          >
            <h1 className="text-2xl font-semibold ">TO-DO LIST APP</h1>
            <p className="font-thin">
              To-Do List App is a simple yet powerful productivity tool designed
              to help users organize, prioritize, and complete tasks
              efficiently. Whether for personal use, work, or study, it ensures
              nothing gets overlooked.
            </p>
            <a
              href="https://to-do-list-eight-delta-57.vercel.app/"
              className="p-4 bg-[#a2a0a0] hover:bg-[#615f5f]"
            >
              {" "}
              <button className="my-8">
                <span className="flex justify-center gap-2">
                  {" "}
                  VISIT SITE <ArrowUpRight />
                </span>
              </button>
            </a>

            <img
              src="/Todolist.png"
              alt="portfolio"
              width={600}
              className="border-4 border-[#a2a0a0] my-5"
            />
          </motion.div>

          <motion.div
            variants={fadeOut("up", 0.5)}
            initial="hidden"
            //  animate="show"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            className="bg-black text-white justify-center  p-8 md:text-justify hover:bg-[#2b2626] rounded-xl"
          >
            <h1 className="text-2xl font-semibold "> WEATHER APP</h1>
            <p className="font-thin">
              Weather App is an essential tool designed for staying informed
              about current and upcoming weather conditions, helping users plan
              their day or week effectively. With accurate forecasts and an
              intuitive interface, it ensures you are never caught off guard by
              changing weather.
            </p>
            <a
              href="https://weather-web-app-alpha-seven.vercel.app/"
              className="p-4 bg-[#a2a0a0] hover:bg-[#615f5f]"
            >
              {" "}
              <button className="my-8">
                <span className="flex justify-center gap-2">
                  {" "}
                  VISIT SITE <ArrowUpRight />
                </span>
              </button>
            </a>

            <img
              src="/WeatherApp.png"
              alt="portfolio"
              width={600}
              className="border-4 border-[#a2a0a0] my-5"
            />
          </motion.div>

          <motion.div
            variants={fadeOut("down", 0.5)}
            initial="hidden"
            //  animate="show"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            className="bg-black text-white justify-center  p-8 md:text-justify hover:bg-[#2b2626] rounded-xl"
          >
            <h1 className="text-2xl font-semibold ">BLOG PREVIEW</h1>
            <p className="font-thin">
              Blog Preview is a dynamic platform for showcasing and managing
              blog content. It allows users to view engaging previews of blog
              posts with essential details, enhancing their reading experience
              and encouraging exploration.
            </p>
            <a
              href="https://blog-preview-card-three.vercel.app/"
              className="p-4 bg-[#a2a0a0] hover:bg-[#615f5f]"
            >
              {" "}
              <button className="my-8">
                <span className="flex justify-center gap-2">
                  {" "}
                  VISIT SITE <ArrowUpRight />
                </span>
              </button>
            </a>

            <img
              src="/Blog.png"
              alt="portfolio"
              width={600}
              className="border-4 border-[#a2a0a0] my-5"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
