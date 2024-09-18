import { motion } from "framer-motion";
const companies = [
  {
    id: 1,
    name: "DPDzero",
    jobType: "Full-time",
    role: "Associate",
    duration: "Apr 2024 - Present",
    description: ` Resolves customer inquiries and issues related to fintech products and services through various channels, 
              ensuring customer satisfaction and retention. Collects, analyzes, and maintains customer data and campaign performance 
              metrics to optimize marketing strategies and improve campaign effectiveness.`,
  },
  {
    id: 2,
    name: "iNeuron.ai(Physics Wallah)",
    jobType: "Full-time",
    role: "Associate",
    duration: "Apr 2024 - Apr 2024",
    description: ` Addresses student inquiries regarding courses, platform access, technical issues, and other program-related 
              information through various communication channels. Schedules and coordinates online webinars and training sessions, 
              including managing registrations, sending reminders, and providing technical support during the sessions.Onboards new students 
              onto the learning platform, granting course access, and providing initial guidance and support to ensure a smooth learning experience.`,
  },
  {
    id: 3,
    name: "Home Credit India",
    jobType: "Full-time",
    role: "Junior Associate",
    duration: "Jan 2022 - Feb 2023",
    description: ` Responds to customer inquiries via phone, email, and chat regarding loan applications,
              account balances, and other general inquiries, ensuring timely and accurate resolution.Escalates 
              complex customer issues or complaints to senior team members or relevant departments for prompt 
              handling and resolution.Maintains detailed records of customer interactions, including inquiries, 
              complaints, and resolutions, to track customer service performance and identify areas for improvement.`,
  },
  {
    id: 4,
    name: "TTK Prestige Ltd",
    jobType: "Full-time",
    role: "Quality Specialist",
    duration: "Jan 2019 - Dec 2021",
    description: ` Develops and implements quality control plans and procedures to ensure
          products meet established standards and customer specifications.
          Conducts audits and inspections of manufacturing processes, materials,
          and finished products to identify and address quality issues. Analyzes
          quality data, identifies trends, and recommends corrective actions to
          improve product quality and reduce defects.`,
  },
];

function Experience() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 8 * 0.1 }}
    >
    <div className="max-w-4xl mx-auto">
      <div className="p-5 space-y-4">
        <h2 className="text-2xl font-bold dark:text-white">Work Experience</h2>
        <div className="space-y-4">
          {companies.map((company) => {
            return (
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md" key={company.id}>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                  <div className="space-y-1">
                    <h2 className="text-lg font-bold dark:text-white">
                      {company.name}{" "}
                      <span className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full ml-2">
                        {company.jobType}
                      </span>
                    </h2>
                    <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400">{company.role}</h3>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 sm:mt-0">{company.duration}</p>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">{company.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
    </motion.div>
  );
}

export default Experience;
