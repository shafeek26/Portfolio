/* eslint-disable react/no-unescaped-entities */
import { useContext } from "react";
import { IconWorld } from "@tabler/icons-react";
import { ThemeContext } from "../context/ThemeContext";
import { IconSun, IconMoon } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { FloatingDockDemo } from "./FloatingDockDemo";
import { BackgroundGradient } from "../ui/background-gradient";

function AboutMe() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 4 * 0.1 }}
    >
      <div className="max-w-4xl mx-auto relative z-50">
        <div className="flex flex-col md:flex-row justify-between p-5 items-center">
          <div className="space-y-4 md:space-y-2 text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-2xl font-bold dark:text-white">
              Shafeek Maknadar{" "}
              <span className="text-sm bg-gray-800 dark:bg-gray-200 text-white hover:dark:bg-slate-800 dark:text-gray-800 hover:dark:text-gray-100 rounded-md p-1 inline-block mt-2 md:mt-0 md:ml-2">
                <a href="#">Hire Me!</a>
              </span>
            </h2>
            <p className="text-sm dark:text-gray-300">
            AI-Driven Digital Strategist & Tech Enthusiast | Customer-Centric Innovator |{" "}
              <br className="hidden md:inline" />
              Elevating Customer Experiences in the AI Era.
            </p>
            <p>
              <a
                href="#"
                className="flex items-center justify-center md:justify-start space-x-2 text-xs text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
              >
                <IconWorld /> <span>Bangalore, Karnataka</span>
              </a>
            </p>
            <FloatingDockDemo />
          </div>
          <div>
            <BackgroundGradient className="max-w-sm p-[.5px]  bg-sky-blue-800 dark:bg-sky-blue-800">
              <img
                src="./images/profile2.jpeg"
                alt="profile"
                className="h-36 w-36 object-cover rounded-[12PX]"
              />
            </BackgroundGradient>
          </div>
        </div>
        <div className="p-5 space-y-2">
          <h2 className="text-2xl font-bold dark:text-white">About Me </h2>
          <p className="text-sm dark:text-gray-300">
            With over 4 years of experience across customer service, digital
            advisory, and operations, I’m a versatile professional dedicated to
            enhancing customer experiences and driving operational efficiency.
            In an era powered by AI, I bridge the gap between technology and
            customer engagement, optimizing processes with data-driven insights
            and strategic problem-solving. My expertise spans managing CRM
            systems, resolving escalated issues, and improving customer
            satisfaction metrics, making me adept at fostering positive digital
            experiences. Passionate about leveraging AI tools, I continuously
            seek innovative ways to streamline operations and drive
            customer-centric outcomes.
          </p>
        </div>
        <button
          onClick={toggleTheme}
          className="fixed z-50 bottom-4 right-4 bg-stone-800 dark:bg-gray-700 text-gray-200 dark:text-gray-200 px-4 py-2 rounded-full"
        >
          {isDarkMode ? <IconSun /> : <IconMoon />}
        </button>
      </div>
    </motion.div>
  );
}

export default AboutMe;
