import { motion } from "framer-motion";
import { CardSpotlight } from "../ui/card-spotlight";

function Skills() {
  const skillCategories = [
    {
      category: "Languages",
      skills: ["JavaScript", "TypeScript", "Java", "SQL"],
    },
    {
      category: "Frontend",
      skills: ["React", "Next", "HTML5", "CSS3", "SASS", "Tailwind CSS"],
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express"],
    },
    {
      category: "Databases",
      skills: ["MongoDB", "PostgreSQL"],
    },
    {
      category: "DevOps & Cloud",
      skills: ["Docker", "Kubernetes", "AWS", "CI/CD", "Jenkins"],
    },
    {
      category: "Tools & Others",
      skills: ["Git", "Webpack", "Babel", "Jest"],
    },
  ];

  return (
    <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 13 * 0.1 }}
          >
    <div className="max-w-4xl mx-auto">
      <div className="p-5 space-y-4">
        <h2 className="text-2xl font-bold dark:text-white">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((category, index) => (
            <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 14 * 0.1 }}
          >
             <CardSpotlight className="w-full h-full relative z-40">
              <div key={index} className="border h-full w-full border-gray-200 dark:border-gray-700 rounded-md overflow-hidden">
                <div className="p-4 space-y-3">
                  <h3 className="text-lg text-left font-semibold text-gray-700 dark:text-white">
                    {category.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full px-2 py-1"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              </CardSpotlight>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
    </motion.div>
  );
}

export default Skills;
