import React, { useEffect, useState } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Server, 
  Database, 
  Code2, 
  Terminal, 
  Cpu,
  Container,
  Cloud,
  Activity,
  Key,
  Coffee,
  Layers,
  Network
} from 'lucide-react';

function App1() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    {
      category: "Backend Development",
      icon: <Coffee className="w-12 h-12 text-red-400" />,
      technologies: [
        {
          name: "Java",
          logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"
        },
        {
          name: "Spring Boot",
          logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/spring/spring-original.svg"
        },
        {
          name: "Node.js",
          logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg"
        }
      ]
    },
    {
      category: "Cloud & DevOps",
      icon: <Cloud className="w-12 h-12 text-blue-400" />,
      technologies: [
        {
          name: "AWS",
          logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original.svg"
        },
        {
          name: "Docker",
          logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg"
        },
        {
          name: "Kubernetes",
          logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/kubernetes/kubernetes-plain.svg"
        }
      ]
    },
    {
      category: "Databases",
      icon: <Database className="w-12 h-12 text-green-400" />,
      technologies: [
        {
          name: "MongoDB",
          logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg"
        },
        {
          name: "Redis",
          logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original.svg"
        },
        {
          name: "PostgreSQL",
          logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg"
        }
      ]
    },
    {
      category: "Monitoring & Security",
      icon: <Activity className="w-12 h-12 text-purple-400" />,
      technologies: [
        {
          name: "Zipkin",
          logo: "https://zipkin.io/public/img/zipkin-logo-200x200.jpg"
        },
        {
          name: "Keycloak",
          logo: "https://www.keycloak.org/resources/images/icon.svg"
        },
        {
          name: "Prometheus",
          logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/prometheus/prometheus-original.svg"
        }
      ]
    },
    {
      category: "Message Brokers",
      icon: <Network className="w-12 h-12 text-yellow-400" />,
      technologies: [
        {
          name: "Kafka",
          logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/apachekafka/apachekafka-original.svg"
        },
        {
          name: "RabbitMQ",
          logo: "https://www.vectorlogo.zone/logos/rabbitmq/rabbitmq-icon.svg"
        },
        {
          name: "ActiveMQ",
          logo: "https://www.svgrepo.com/show/353396/activemq.svg"
        }
      ]
    }
  ];

  const additionalSkills = [
    {
      name: "GraphQL",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/graphql/graphql-plain.svg"
    },
    {
      name: "REST APIs",
      logo: "https://www.svgrepo.com/show/375531/api.svg"
    },
    {
      name: "Microservices",
      logo: "https://www.svgrepo.com/show/375531/api.svg"
    },
    {
      name: "CI/CD",
      logo: "https://www.svgrepo.com/show/376328/jenkins.svg"
    },
    {
      name: "ELK Stack",
      logo: "https://www.vectorlogo.zone/logos/elastic/elastic-icon.svg"
    },
    {
      name: "OAuth2",
      logo: "https://www.svgrepo.com/show/361567/oauth.svg"
    },
    {
      name: "gRPC",
      logo: "https://grpc.io/img/logos/grpc-icon-color.png"
    },
    {
      name: "WebSockets",
      logo: "https://www.svgrepo.com/show/354553/websocket.svg"
    },
    {
      name: "Jenkins",
      logo: "https://www.vectorlogo.zone/logos/jenkins/jenkins-icon.svg"
    },
    {
      name: "Terraform",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/terraform/terraform-original.svg"
    }
  ];

  return (

    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* <header className={fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}}> */}
      <header className='fixed w-full top-0 z-50 transition-all duration-300 bg-transparent'>

      {/* </div> */}
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold">Portfolio</div>
            <div className="flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:contact@example.com" className="hover:text-blue-400 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </header>

      <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Technical Expertise</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <div 
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl border border-gray-700/50 hover:border-blue-500/50"
              >
                <div className="flex items-center gap-4 mb-6">
                  {skillGroup.icon}
                  <h3 className="text-xl font-semibold">{skillGroup.category}</h3>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  {skillGroup.technologies.map((tech, techIndex) => (
                    <div 
                      key={techIndex}
                      className="flex items-center gap-3 px-4 py-3 bg-gray-900/50 rounded-lg text-gray-300 hover:text-blue-400 hover:bg-gray-900/70 transition-all duration-300 group"
                    >
                      <img 
                        src={tech.logo} 
                        alt={tech.name} 
                        className="w-6 h-6 object-contain filter group-hover:brightness-125 transition-all"
                      />
                      <span className="font-medium">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {additionalSkills.map((skill, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 bg-gray-800/30 backdrop-blur-sm rounded-lg px-4 py-3 text-gray-300 border border-gray-700/30 hover:border-blue-500/30 transition-all duration-300 group hover:bg-gray-800/50"
              >
                <img 
                  src={skill.logo} 
                  alt={skill.name} 
                  className="w-5 h-5 object-contain filter group-hover:brightness-125 transition-all"
                />
                <span className="text-sm group-hover:text-blue-400">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Projects & Experience</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project cards would go here */}
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 py-8">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p>© 2024 Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App1;