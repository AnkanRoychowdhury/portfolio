import React from "react";

const experienceData = [
  {
    id: 1,
    position: "Software Engineer",
    company: "CodeClouds",
    logo: "./src/images/codeclouds_logo.jpg", 
    duration: "Mar 2023 - Present",
    current: true,
    description: "Led backend development for high-scale distributed systems serving millions of users.",
    responsibilities: [
      "Designed and implemented scalable microservices, including order reprocessing with dynamic checkpoints.",
      "Migrated and optimized Laravel APIs to Spring Boot, reducing costs by 47% and improving maintainability.",
      "Integrated Spring Cloud Gateway, Eureka, and Resilience4j for service discovery, routing, and stability.",
      "Enhanced system observability with Zipkin and optimized performance with caching & unit tests.",
      "Automated tax calculations across 15,000+ funnels, improving accuracy and efficiency."
    ],
    skills: ["Java", "Spring Boot", "Spring Cloud", "AWS", "Docker", "Eureka", "Zipkin"],
    color: "bg-green-100 text-green-600", 
    companySite: "https://www.codeclouds.com",  
  },
  {
    id: 2,
    position: "Software Engineer Intern",
    company: "CodeClouds",
    logo: "./src/images/codeclouds_logo.jpg", 
    duration: "Sep 2022 - Mar 2023",
    current: false,
    description: "Developed and maintained scalable backend services for e-commerce platforms.",
    responsibilities: [
      "Developed a web application for generating customer invoices with dynamic input handling.",
      "Implemented CRM routing logic for fetching order data from Salesforce, Konnektive, etc.",
      "Optimized database queries resulting in 50% faster response times."
    ],
    skills: ["NodeJS", "Express", "RabbitMQ", "Turborepo", "Puppeteer"],
    color: "bg-blue-100 text-blue-600",
    companySite: "https://www.codeclouds.com",  
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="px-6 py-12 bg-gradient-to-b from-blue-50 to-transparent dark:from-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">Professional Experience</h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Building and scaling backend systems across various industries.
          </p>
        </div>

        <div className="space-y-8">
          {experienceData.map((job) => (
            <div
              key={job.id}
              className="border border-neutral-200/30 rounded-xl p-6 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 transform transition-all duration-300 hover:scale-105 hover:border-blue-500/50"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <img onClick={() => window.open(job.companySite, '_blank')} src={job.logo} alt={`${job.company} Logo`} className="w-10 h-10 rounded-md" />
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">{job.position}</h3>
                    <p className="text-neutral-600 dark:text-neutral-400 font-semibold text-lg">{job.company}</p>
                  </div>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="text-neutral-500 dark:text-neutral-400">{job.duration}</span>
                  {job.current && (
                    <span className="ml-2 px-3 py-1 bg-green-100 dark:bg-green-700 text-green-800 dark:text-green-300 rounded-full text-sm">
                      Current
                    </span>
                  )}
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-neutral-600 dark:text-neutral-400">{job.description}</p>
                <ul className="space-y-2">
                  {job.responsibilities.map((responsibility, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-neutral-800 dark:text-neutral-300 mr-2">•</span>
                      <span className="text-neutral-600 dark:text-neutral-400">{responsibility}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 pt-4">
                  {job.skills.map((skill, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 rounded-full text-sm ${
                        index % 4 === 0
                          ? "bg-emerald-100 dark:bg-emerald-900 text-emerald-600 dark:text-emerald-300 text-sm rounded-full"
                          : index % 4 === 1
                          ? "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-sm rounded-full"
                          : index % 4 === 2
                          ? "bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 text-sm rounded-full"
                          : "bg-orange-100 dark:bg-orange-700 text-orange-600 dark:text-orange-300 text-sm rounded-full"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
