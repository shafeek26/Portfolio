import {
  IconBrandSlack,
  IconFileSpreadsheet,
  IconBrandGit,
  IconBrandTypescript,
  IconBrandNpm,
  IconBrandReact,
  IconBrandDocker,
  IconBrandTailwind,
  IconBrandMongodb
} from "@tabler/icons-react";

const technologies = [
  { icon: IconBrandReact, name: "React", color: "text-blue-500" },
  { icon: IconBrandDocker, name: "Docker", color: "text-blue-500" },
  { icon: IconBrandMongodb, name: "Mongodb", color: "text-green-500" },
  { icon: IconBrandTypescript, name: "TypeScript", color: "text-blue-600" },
  { icon: IconBrandSlack, name: "Slack", color: "text-purple-600" },
  { icon: IconBrandTailwind, name: "Tailwind", color: "text-cyan-500" },
  { icon: IconFileSpreadsheet, name: "Excel", color: "text-green-500" },
  { icon: IconBrandNpm, name: "Npm", color: "text-orange-700" },
  { icon: IconBrandGit, name: "Git", color: "text-orange-700" },
];

// Double the array to create seamless infinite scroll
const doubledTechnologies = [...technologies, ...technologies];

export const InfiniteScroller = () => {
  return (
    <div className="w-full my-5 max-w-4xl mx-auto overflow-hidden hidden md:block">
        <h2 className="text-2xl ml-5 mb-3 font-bold dark:text-white">Technologies</h2>
    <div className="relative z-50">      
      <div className="flex animate-scroll">
        {doubledTechnologies.map((tech, index) => (
          <div
            key={index}
            className="mx-4 flex-shrink-0 transform cursor-pointer transition-all duration-300 hover:scale-110"
          >
            <div className="flex flex-col items-center space-y-4 rounded-xl bg-white/50 p-6 shadow-lg backdrop-blur-sm transition-colors duration-300 hover:bg-gray-50/50 dark:bg-gray-800/50 dark:hover:bg-gray-700/50">
              <tech.icon className={`h-12 w-12 ${tech.color}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};
