import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

function Hero() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToProject = () => {
    const element = document.getElementById("experience");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id='hero' className="min-h-screen bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/95 to-gray-900"></div>
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at center, rgba(59, 130, 246, 0.1) 0%, transparent 70%)`,
          }}></div>
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: `linear-gradient(45deg, transparent 45%, rgba(59, 130, 246, 0.03) 45%, rgba(59, 130, 246, 0.03) 55%, transparent 55%)`,
            backgroundSize: '20px 20px'
          }}></div>

          {/* Animated code lines background */}
          <div className="absolute inset-0 overflow-hidden opacity-20">
            <div className="absolute top-0 left-0 w-full h-full flex flex-col gap-4 animate-slide-down">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent transform -skew-x-45 opacity-30"
                  style={{
                    width: `${Math.random() * 40 + 60}%`,
                    marginLeft: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 5}s`
                  }}
                ></div>
              ))}
            </div>
          </div>

          {/* Terminal-like floating elements with pulse effect */}
          <div className="absolute top-1/4 -left-4 w-64 h-32 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 transform -rotate-12 translate-y-8 opacity-20 animate-pulse"></div>
          <div className="absolute top-1/3 right-8 w-48 h-48 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 transform rotate-12 translate-y-12 opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/4 left-12 w-56 h-40 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 transform rotate-6 opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Main content */}
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto">
            {/* Status indicator with typing effect */}
            <div className="flex justify-center mb-12">
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-sm text-gray-300 border-r border-gray-700 pr-2">system status</span>
                <span className="text-sm text-green-400 font-mono">ready for deployment_</span>
              </div>
            </div>

            {/* Main heading with animated underline */}
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 animate-gradient-x">
                Ankan Roychowdhury
              </h1>
              <div className="inline-flex items-center space-x-3 text-xl text-gray-400">
                <span className="font-mono opacity-75">&lt;</span>
                <span className="relative">
                  Senior Backend Engineer
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500/50 transform origin-left scale-x-0 animate-expand"></div>
                </span>
                <span className="font-mono opacity-75">/&gt;</span>
              </div>
            </div>

            {/* Stats with hover effect */}
            {/* <div className="grid grid-cols-3 gap-6 mb-12">
              <div className="text-center p-4 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 transform transition-all duration-300 hover:scale-105 hover:border-blue-500/50">
                <div className="text-3xl font-bold text-blue-400 mb-1">2+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 transform transition-all duration-300 hover:scale-105 hover:border-blue-500/50">
                <div className="text-3xl font-bold text-blue-400 mb-1">10M+</div>
                <div className="text-sm text-gray-400">API Requests/Day</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 transform transition-all duration-300 hover:scale-105 hover:border-blue-500/50">
                <div className="text-3xl font-bold text-blue-400 mb-1">99.9%</div>
                <div className="text-sm text-gray-400">System Uptime</div>
              </div>
            </div> */}

            {/* Description with animated typing cursor */}
            <div className="text-center mb-12">
              <p className="text-lg text-gray-400 leading-relaxed relative inline-block">
                Architecting high-performance distributed systems and scalable APIs that power
                modern applications. Specialized in building robust backend infrastructure
                that handles millions of requests with sub-millisecond latency
                <span className="inline-block w-2 h-5 bg-blue-400 ml-1 animate-blink"></span>
              </p>
            </div>

            {/* CTA Buttons with enhanced hover effects */}
            <div className="flex items-center justify-center gap-8">
              <a
                href="#projects"
                className="group relative px-8 py-3 bg-blue-600 text-white rounded-lg overflow-hidden transition-transform hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity animate-gradient-x"></div>
                <span className="relative flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  View Projects
                </span>
              </a>
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/AnkanRoychowdhury" target='_blank' rel='noreferrer'
                  className="p-3 text-gray-400 hover:text-blue-400 transition-all hover:scale-110 hover:rotate-6"
                  aria-label="GitHub"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/ankanroychowdhury" target='_blank' rel='noreferrer'
                  className="p-3 text-gray-400 hover:text-blue-400 transition-all hover:scale-110 hover:rotate-6"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced scroll indicator */}
        {/* <div className="absolute bottom-[-1.9rem] hidden lg:flex lg:bottom-20 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <div
            className="text-sm text-gray-500 mb-2 animate-pulse transition-opacity duration-500 cursor-pointer"
            onClick={handleScrollToProject}
          >
            Scroll to explore
          </div>
          <div className="w-6 h-10 border-2 border-gray-700 rounded-full p-1">
            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-scroll-down"></div>
          </div>
        </div> */}

        <div
          className={`absolute bottom-[-1.9rem] hidden lg:flex lg:bottom-20 left-1/2 transform -translate-x-1/2 flex flex-col items-center transition-opacity duration-500 ${scrolled ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
        >
          <div
            className="text-sm text-gray-500 mb-2 animate-pulse cursor-pointer"
            onClick={handleScrollToProject}
          >
            Scroll to explore
          </div>
          <div className="w-6 h-10 border-2 border-gray-700 rounded-full p-1">
            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-scroll-down"></div>
          </div>
        </div>

      </header>
    </div>
  );
}

export default Hero;
