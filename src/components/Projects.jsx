import { CardSpotlight } from "../ui/card-spotlight";
import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      title: "Real-time Chat Application",
      description:
        "A full-stack chat application with real-time messaging using Socket.io, user authentication, and message history.",
      link: "https://github.com/username/real-time-chat",
      tags: [
        "MERN",
        "Socket.io",
        "Redux",
        "JWT",
        "MongoDB Atlas",
        "Responsive Design",
      ],
    },
    {
      title: "E-commerce Platform",
      description:
        "A feature-rich online store with product catalog, shopping cart, user accounts, and payment integration using Stripe.",
      link: "https://github.com/username/mern-ecommerce",
      tags: [
        "MERN",
        "Redux",
        "Stripe API",
        "AWS S3",
        "Material-UI",
        "Mongoose",
      ],
    },
    {
      title: "Task Management System",
      description:
        "A collaborative project management tool with task assignments, deadlines, and progress tracking.",
      link: "https://github.com/username/task-manager",
      tags: [
        "MERN",
        "Redux Toolkit",
        "React DnD",
        "MongoDB Aggregation",
        "JWT",
        "Express Middleware",
      ],
    },
    {
      title: "Social Media Dashboard",
      description:
        "An analytics dashboard for social media managers, integrating multiple platform APIs and data visualization.",
      link: "https://github.com/username/social-dashboard",
      tags: ["MERN", "D3.js", "OAuth", "RESTful API", "Cron Jobs", "Recharts"],
    },
    {
      title: "Blog Platform with CMS",
      description:
        "A full-featured blogging platform with a custom Content Management System for easy content creation and management.",
      link: "https://github.com/username/mern-blog-cms",
      tags: [
        "MERN",
        "Rich Text Editor",
        "Image Upload",
        "SEO Optimization",
        "User Roles",
        "Pagination",
      ],
    },
    {
      title: "Job Board and Application Tracker",
      description:
        "A platform for job seekers and employers with job postings, applications, and application status tracking.",
      link: "https://github.com/username/job-board-tracker",
      tags: [
        "MERN",
        "Redux Saga",
        "Formik",
        "Email Integration",
        "PDF Generation",
        "Search Functionality",
      ],
    },
    {
      title: "Fitness Tracking App",
      description:
        "A comprehensive fitness application with workout logging, progress charts, and nutrition tracking.",
      link: "https://github.com/username/fitness-tracker",
      tags: [
        "MERN",
        "Chart.js",
        "React Hooks",
        "JWT Refresh Tokens",
        "Mongoose Virtuals",
        "Progressive Web App",
      ],
    },
    {
      title: "Recipe Sharing Community",
      description:
        "A platform for food enthusiasts to share, discover, and rate recipes with advanced search and filtering options.",
      link: "https://github.com/username/recipe-community",
      tags: [
        "MERN",
        "Elasticsearch",
        "Redux Thunk",
        "Cloudinary",
        "Social Auth",
        "Infinite Scrolling",
      ],
    },
    {
      title: "Online Learning Management System",
      description:
        "An e-learning platform with course creation, video lessons, quizzes, and student progress tracking.",
      link: "https://github.com/username/mern-lms",
      tags: [
        "MERN",
        "WebRTC",
        "Redux Observable",
        "MongoDB Transactions",
        "Stripe Subscriptions",
        "React Suspense",
      ],
    },
    {
      title: "Real Estate Listing Portal",
      description:
        "A property listing website with advanced search, virtual tours, and agent-client messaging system.",
      link: "https://github.com/username/realestate-portal",
      tags: [
        "MERN",
        "Google Maps API",
        "WebSockets",
        "Redux Persist",
        "Image Carousel",
        "Geospatial Queries",
      ],
    },
    // Add more projects here if needed
  ];

  return (
    <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 5 * 0.1 }}
            >
    <div className="max-w-4xl mx-auto">
      <div className="p-5 space-y-4">
        <h2 className="text-2xl font-bold dark:text-white">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 6 * 0.1 }}
            >
              <CardSpotlight className="w-full h-full relative z-40">
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden h-full flex flex-col relative">
                  <div className="p-4 space-y-3 flex-grow">
                    <h3 className="text-lg font-semibold pr-8 text-gray-700 dark:text-white">
                      {project.title}
                    </h3>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full px-2 py-1"
                        >
                          {tag}
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

export default Projects;
