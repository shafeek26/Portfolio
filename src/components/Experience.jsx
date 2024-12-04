import { motion } from "framer-motion";
const companies = [
  {
    id: 1,
    name: "DPDzero",
    jobType: "Full-time",
    role: "Chat Executive",
    duration: "Apr 2024 - Present",
    description: ` • Responsible for enhancing customer engagement and satisfaction through strategic digital 
initiatives.
• Served as an escalation point for complex customer issues, ensuring high-level resolution and 
maintaining customer trust.
• Analyzed campaign performance metrics and leveraged data-driven insights to optimize 
strategies, enhancing overall campaign effectiveness and query resolution rates.
• Implemented process improvements within digital operations, increasing campaign management 
efficiency by 15%.`,
  },
  {
    id: 2,
    name: "iNeuron.ai",
    jobType: "Full-time",
    // role: "Customer Success Associate",
    role: "Operations Associate",
    duration: "Apr 2023 - Apr 2024",
    description: `• Monitored key metrics, such as engagement and course completion rates, delivering actionable insights through detailed performance reports.
• Played a key role in addressing complex customer issues, providing personalized support and 
fostering positive experiences.
• Identified and implemented operational enhancements, reducing costs and boosting efficiency. Maintained detailed documentation for streamlined processes.
• Maintained and optimized CRM systems to track student inquiries and data, improving lead 
conversion by 15%.
• Collaborated with internal teams to address escalated student concerns, enhancing retention 
rates by.`,
    //     description: `• Managed end-to-end onboarding of students, ensuring smooth transitions and reducing
    // onboarding issues.
    // • Played a key role in addressing complex customer issues, providing personalized support and
    // fostering positive experiences.
    // • I managed the scheduling, execution, and follow-up of all webinars for the organization's courses,
    // ensuring a seamless experience for both instructors and participants
    // • Maintained and optimized CRM systems to track student inquiries and data, improving lead
    // conversion by 15%.
    // • Collaborated with internal teams to address escalated student concerns, enhancing retention
    // rates by.`,
  },
  {
    id: 3,
    name: "Home Credit India",
    jobType: "Full-time",
    role: "Customer Service Associate",
    duration: "Jan 2022 - Feb 2023",
    description: ` • Improved customer satisfaction scores by 10% by delivering personalized financial guidance to 
at-risk customers.
• Handled customer inquiries and escalations, achieving 95% first-contact resolution, which 
boosted customer satisfaction by 10%.
• Engaged with cross-functional teams to address and escalate customer issues efficiently, 
improving response times.
• Addressed and resolved customer complaints efficiently, minimizing escalation rates.`,
  },
  //   {
  //     id: 4,
  //     name: "TTK Prestige Ltd",
  //     jobType: "Full-time",
  //     role: "Customer Service Representative",
  //     duration: "Jan 2019 - Dec 2021",
  //     description: `• Provided exceptional customer support, resolving complex technical issues with a 95% firstcontact resolution rate and maintaining a 4.8/5 customer satisfaction score.
  // • Documented and reported quality inspection results, contributing to a 10% increase in customer
  // satisfaction through product reliability improvements.
  // • Collaborated on product improvements that led to a 20% increase in user engagement and a
  // 15% reduction in support tickets.`,
  //   },
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
          <h2 className="text-2xl font-bold dark:text-white">
            Work Experience
          </h2>
          <div className="space-y-4">
            {companies.map((company) => {
              return (
                <div
                  className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md"
                  key={company.id}
                >
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                    <div className="space-y-1">
                      <h2 className="text-lg font-bold dark:text-white">
                        {company.name}{" "}
                        <span className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full ml-2">
                          {company.jobType}
                        </span>
                      </h2>
                      <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                        {company.role}
                      </h3>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 sm:mt-0">
                      {company.duration}
                    </p>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
                    {company.description}
                  </p>
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
