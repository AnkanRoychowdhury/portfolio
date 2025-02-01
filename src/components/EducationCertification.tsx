import React from "react";

const educationData = [
  // {
  //   id: 1,
  //   degree: "Master of Computer Science",
  //   school: "Stanford University",
  //   time: "2017-2019",
  //   specialization: "Specialization in Distributed Systems",
  //   subjects: [
  //     "Advanced Database Systems",
  //     "Distributed Computing",
  //     "Cloud Architecture",
  //     "Machine Learning",
  //   ],
  //   gpa: "GPA 3.9",
  //   honors: "Honors",
  // },
  {
    id: 2,
    degree: "B.Tech in Computer Science & Engineering",
    school: "Brainware University",
    time: "2020-2024",
    specialization: "Focus on Software Engineering",
    subjects: [
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Operating Systems",
      "Computer Networks",
    ],
    gpa: "GPA 9.4",
    honors: "Dean's List",
  },
];

const certificationsData = [
  {
    id: 1,
    title: "Backend in SpringBoot",
    organization: "AlgoCamp",
    year: "2024",
    description: "Backend Development with Spring Framework",
    credentialId: "9516448-177222",
  },
  {
    id: 2,
    title: "MongoDB",
    organization: "MongoDB University",
    year: "2024",
    description: "MongoDB architecture and development",
    credentialId: "MDB9sr1ujzk6h",
  },
  {
    id: 3,
    title: "Complete NodeJS Developer (GraphQL, MongoDB, + more)",
    organization: "Udemy",
    year: "2023",
    description: "Backend Development with NodeJS",
    credentialId: "UC-fb73464f-e10e-4192-89ac-dc2391b59a0d",
  }
];

const Education: React.FC = () => {
  return (
    <section id="education" className="px-6 py-12 backgroundImage: `radial-gradient(circle at center, rgba(59, 130, 246, 0.1) 0%, transparent 70%">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">
            Education & Certifications
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Academic background and professional certifications
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Formal Education */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-6">Academic Education</h3>

            {educationData.map((education) => (
              <div
                key={education.id}
                className="border border-neutral-200/30 rounded-xl p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-xl font-semibold text-neutral-900 dark:text-white">{education.degree}</h4>
                    <p className="text-neutral-600 dark:text-neutral-400">{education.school}</p>
                  </div>
                  <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900 text-emerald-600 dark:text-emerald-300 rounded-full text-sm">
                    {education.time}
                  </span>
                </div>
                <div className="space-y-2">
                  <p className="text-neutral-600 dark:text-neutral-400">{education.specialization}</p>
                  <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-400 text-sm space-y-1">
                    {education.subjects.map((subject, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <div className={`w-2 h-2 mt-2 rounded-full ${index % 3 === 0 ? "bg-green-500" : index % 3 === 1 ? "bg-blue-500" : "bg-purple-500"}`}></div>
                        <span>{subject}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-2 mt-4">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm">
                      {education.gpa}
                    </span>
                    {/* <span className="px-3 py-1 bg-violet-100 dark:bg-violet-900 text-violet-600 dark:text-violet-300 rounded-full text-sm">
                      {education.honors}
                    </span> */}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-6">Professional Certifications</h3>

            {certificationsData.map((certification) => (
              <div
                key={certification.id}
                className="border border-neutral-200/30 rounded-xl p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-xl font-semibold text-neutral-900 dark:text-white">{certification.title}</h4>
                    <p className="text-neutral-600 dark:text-neutral-400">{certification.organization}</p>
                  </div>
                  <span className="px-3 py-1 bg-amber-100 dark:bg-amber-900 text-amber-600 dark:text-amber-300 rounded-full text-sm">
                    {certification.year}
                  </span>
                </div>
                <p className="text-neutral-600 dark:text-neutral-400 mb-4">{certification.description}</p>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 rounded-full text-sm">
                    Credential ID: {certification.credentialId}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
