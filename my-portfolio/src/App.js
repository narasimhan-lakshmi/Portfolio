import React, { useState } from 'react';
import { Github, Twitter, Linkedin, Sun, Moon, ExternalLink, Code, Target } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('About');
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Add your photo URL here - replace with your actual photo URL
  const PROFILE_PHOTO_URL = "https://via.placeholder.com/150x150?text=LA"; // Replace this with your actual photo URL

  const projects = [
    {
      id: 1,
      title: "AI-Summariser",
      description: "Developed a text summarization API using Node.js, Express, and Hugging Face's BART-Large model. Integrated dotenv for secure API token handling and CORS for cross-origin support.",
      tags: ["react", "vite", "mongodb", "express", "node.js"],
      gradient: "bg-gradient-to-br from-gray-800 to-gray-900",
      icon: "🤖",
      githubLink: "https://github.com/narasimhan-lakshmi/AI-Summariser"
    },
    {
      id: 2,
      title: "Expense Tracker",
      description: "Full-stack expense tracker with Node.js and Express backend, MongoDB for data storage, and responsive frontend. Users can sign up, log in, and manage expenses.",
      tags: ["html", "css", "javascript", "node", "express", "mongodb"],
      gradient: "bg-gradient-to-br from-green-500 via-teal-500 to-blue-500",
      githubLink: "https://github.com/narasimhan-lakshmi/Expense-Tracker"
    },
    {
      id: 3,
      title: "ChatCord",
      description: "Real-time chat application using Node.js, Express, and Socket.io with Redis for session management. Integrated Winston for logging and multiple chat rooms support.",
      tags: ["react", "node.js", "express", "socket.io", "redis"],
      gradient: "bg-gradient-to-br from-purple-500 via-pink-500 to-red-500",
      githubLink: "https://github.com/narasimhan-lakshmi/ChatCord"
    },
    {
      id: 4,
      title: "REC Tracker",
      description: "MERN stack app providing IT 3rd Year students with exam schedules via Supabase. Integrated YOLO for real-time cafeteria seat detection and availability display.",
      tags: ["react", "node.js", "express", "supabase", "yolo"],
      gradient: "bg-gradient-to-br from-blue-400 via-cyan-400 to-teal-400",
      githubLink: "https://github.com/narasimhan-lakshmi/REC-Tracker"
    },
    {
      id: 5,
      title: "Digital Clock",
      description: "Interactive digital clock application with modern UI design and real-time updates. Features customizable themes and responsive design.",
      tags: ["html", "css", "javascript"],
      gradient: "bg-gradient-to-br from-orange-500 via-red-500 to-pink-500",
      githubLink: "https://github.com/narasimhan-lakshmi/Digital-Clock"
    }
  ];

  const navigationItems = ['About', 'Projects', 'Resume'];

  const handleProjectClick = (githubLink) => {
    window.open(githubLink, '_blank');
  };

  const downloadResume = () => {
    // Create a downloadable PDF file
    const resumeContent = `
Lakshminarasimhan A
Software Engineer
lakshminarasimhan592@gmail.com | +91 6380912442 | Chennai

SUMMARY
Detail-oriented and motivated Java Developer Intern with a strong foundation in software
development and web technologies. Proficient in Java, C, and Python, with hands-on experience in
building real-time applications and full-stack solutions.

EDUCATION
Rajalakshmi Engineering College Chennai
Information Technology B.Tech 2022 - April 2026
CGPA: 8.76

EXPERIENCE
Main Flow Technologies | Web Developer July 2024 - September 2024
• Developed ChatCord - a real time chat platform using WebSockets
• Developed To-Do list using React js that uses state management

SKILLS
Programming Languages: C, Java, Python
Libraries/Frameworks: Javascript, React
Tools/Platforms: Git, VS Code
Databases: SQL, MongoDB

PROJECTS
AI-Summariser - REACT, VITE JS, MONGODB, EXPRESS
Expense Tracker - HTML, CSS, JS, NODE, EXPRESS, MONGODB
Email Administration Console Application - Java, OOP

CERTIFICATIONS
• Responsive Web Design - FreeCodeCamp
• Introduction to Power BI and Data Visualization - Infosys SpringBoard
• Internet Of Things - NPTEL
• CyberSecurity Essentials - Google Coursera

HONORS & AWARDS
• Secured 2nd prize in Hacktober Fest conducted by REC Chennai
• Secured 3rd rank for highest scores in Semester 3
• Authored technical articles on GeeksforGeeks
`;
    
    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Lakshminarasimhan-Resume.txt';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const AboutSection = () => (
    <div className="space-y-12">
      <div className="space-y-6">
        <h1 className="text-4xl font-bold tracking-tight">
          Software Engineer
        </h1>
        
        <div className="space-y-4 text-lg leading-relaxed text-gray-300">
          <p>
            Detail-oriented and motivated Software Engineer with a strong foundation in software
            development and web technologies. Currently pursuing B.Tech in Information Technology at <span className="text-white font-medium">Rajalakshmi Engineering College</span> with a CGPA of 8.76.
          </p>
          
          <p>
            Proficient in Java, C, and Python, with hands-on experience in
            building real-time applications and full-stack solutions. I enjoy reading about development , system design  and learning more. I occasionally write 
            about my learnings and have authored technical articles on <a href="https://www.geeksforgeeks.org/user/lakshmi_narasimhan/contributions/" className="text-blue-400 hover:text-blue-300 underline">GeeksforGeeks</a>. Recently I'm enjoying React and Node.js a lot, and try to contribute to open source 
            projects that interest me.
          </p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="text-center p-4 bg-gray-800 rounded-lg border border-gray-700">
          <div className="text-2xl font-bold text-blue-400">8.76</div>
          <div className="text-sm text-gray-400">CGPA</div>
        </div>
        <div className="text-center p-4 bg-gray-800 rounded-lg border border-gray-700">
          <div className="text-2xl font-bold text-green-400">5+</div>
          <div className="text-sm text-gray-400">Projects</div>
        </div>
        <div className="text-center p-4 bg-gray-800 rounded-lg border border-gray-700">
          <div className="text-2xl font-bold text-purple-400">5+</div>
          <div className="text-sm text-gray-400">Articles</div>
        </div>
        <div className="text-center p-4 bg-gray-800 rounded-lg border border-gray-700">
          <div className="text-2xl font-bold text-orange-400">6+</div>
          <div className="text-sm text-gray-400">Certifications</div>
        </div>
      </div>

      {/* Currently Learning */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Currently Learning</h2>
        <div className="flex flex-wrap gap-3">
          <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-medium">
            🔥 LLM's
          </span>
          <span className="px-4 py-2 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-full text-sm font-medium">
            ⚡ System Design
          </span>
          <span className="px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full text-sm font-medium">
            🚀 Cloud Computing
          </span>
          <span className="px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full text-sm font-medium">
            🤖 Machine Learning
          </span>
        </div>
      </div>

      {/* Recent Achievements */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Recent Achievements</h2>
        <div className="space-y-3">
          <div className="flex items-center space-x-3 p-3 bg-gray-800 rounded-lg border border-gray-700">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span className="text-gray-300">🏆 2nd prize in Hacktober Fest - REC Chennai</span>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-gray-800 rounded-lg border border-gray-700">
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            <span className="text-gray-300">📚 Finalist in HappyFox Hackathon</span>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-gray-800 rounded-lg border border-gray-700">
            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
            <span className="text-gray-300">✍️ 5 Technical Articles Published on GeeksforGeeks</span>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-gray-800 rounded-lg border border-gray-700">
            <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
            <span className="text-gray-300">🎓 3rd Rank in Semester 3</span>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-xl text-center">
        <h3 className="text-xl font-semibold mb-2">Let's Connect!</h3>
        <p className="text-blue-100 mb-4">Interested in collaborating or have a project in mind?</p>
        <div className="flex justify-center space-x-4">
          <a 
            href="mailto:lakshminarasimhan592@gmail.com"
            className="px-6 py-2 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Send Email
          </a>
          <a 
            href="https://www.linkedin.com/in/lakshminarasimhan-anandanarayanan/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-blue-800 text-white rounded-lg font-medium hover:bg-blue-900 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );

  const ResumeSection = () => (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold tracking-tight">Resume</h1>
        <button 
          onClick={downloadResume}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          <ExternalLink size={16} />
          <span>Download Resume</span>
        </button>
      </div>

      <div className="space-y-8">
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Education</h2>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-xl font-medium">Rajalakshmi Engineering College</h3>
              <p className="text-gray-400 text-sm">Information Technology B.Tech • 2022 - April 2026</p>
              <p className="text-gray-300 mt-2">CGPA: 8.76</p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Experience</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-xl font-medium">Main Flow Technologies</h3>
                <p className="text-gray-400 text-sm">Web Developer • July 2024 - September 2024</p>
                <ul className="text-gray-300 mt-2 space-y-1">
                  <li>• Developed ChatCord - a real time chat platform using WebSockets</li>
                  <li>• Developed To-Do list using React js that focuses on state management</li>
                </ul>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="text-xl font-medium">Leading Airline Company</h3>
                <p className="text-gray-400 text-sm">Backend Developer</p>
                <ul className="text-gray-300 mt-2 space-y-1">
                  <li>• Collaborated with the college developers' club on an admin desk portal application</li>
                  <li>• Designed and developed backend APIs for managing travel requests (flights, hotels, cabs)</li>
                  <li>• Implemented admin notification systems and request tracking via Service Request Numbers</li>
                  <li>• Utilized PostgreSQL to create and test sample datasets, ensuring robust API functionality</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Skills</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Programming Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {['C', 'Java', 'Python', 'JavaScript'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm border border-blue-500/30">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Frameworks & Libraries</h3>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Node.js', 'Express', 'Socket.io'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm border border-green-500/30">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Databases & Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {['SQL', 'MongoDB', 'PostgreSQL', 'Git', 'VS Code', 'Redis'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm border border-purple-500/30">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Certifications</h2>
            <div className="space-y-2 text-gray-300">
              <p>• Responsive Web Design - FreeCodeCamp</p>
              <p>• Introduction to Power BI and Data Visualization - Infosys SpringBoard</p>
              <p>• Internet Of Things - NPTEL</p>
              <p>• CyberSecurity Essentials - Google Coursera</p>
              <p>• Ethical Hacking - NPTEL</p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Honors & Awards</h2>
            <div className="space-y-2 text-gray-300">
              <p>• Secured 2nd prize in Hacktober Fest conducted by REC Chennai</p>
              <p>• Secured 3rd rank for highest scores in Semester 3</p>
              <p>• Authored five technical articles on GeeksforGeeks covering package.json, npm CLI, JSON handling in Python, and SQL exception handling in JDBC</p>
              <p>• Participated in the HappyFox Hackathon and reached the finals; gained hands-on experience working with Cursor for collaborative development</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const ProjectsSection = () => (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold tracking-tight">Projects</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleProjectClick(project.githubLink)}
            className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-all duration-200 border border-gray-700 hover:border-gray-600 group cursor-pointer transform hover:scale-105"
          >
            <div className={`w-full h-32 ${project.gradient} rounded-lg mb-6 flex items-center justify-center relative overflow-hidden group-hover:shadow-lg transition-shadow`}>
              {project.id === 1 && (
                <div className="text-white text-xl font-bold flex items-center">
                  <span className="mr-2">🤖</span>
                  {project.title}
                </div>
              )}
              {project.id === 2 && (
                <div className="text-center text-white">
                  <div className="text-2xl font-bold">Expense Tracker</div>
                  <div className="text-sm opacity-90">Full Stack App</div>
                </div>
              )}
              {project.id === 3 && (
                <div className="text-white text-xl font-bold">💬 ChatCord</div>
              )}
              {project.id === 4 && (
                <div className="text-white text-xl font-bold">🎯 REC Tracker</div>
              )}
              {project.id === 5 && (
                <div className="text-white text-xl font-bold">⏰ Digital Clock</div>
              )}
              
              {/* GitHub icon overlay on hover */}
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 rounded-full p-2">
                <Github size={16} className="text-white" />
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                {project.subtitle && (
                  <p className="text-sm text-gray-400 mt-1">{project.subtitle}</p>
                )}
              </div>
              
              <p className="text-gray-300 text-sm leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs font-medium border border-blue-500/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'About':
        return <AboutSection />;
      case 'Projects':
        return <ProjectsSection />;
      case 'Resume':
        return <ResumeSection />;
      default:
        return <AboutSection />;
    }
  };

  return (
    <div className={`min-h-screen transition-all duration-300 ${
      isDarkMode 
        ? 'bg-gray-900 text-white' 
        : 'bg-white text-gray-900'
    }`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 min-h-screen">
          {/* Left Sidebar */}
          <div className={`lg:col-span-1 p-8 lg:p-12 border-r ${
            isDarkMode ? 'border-gray-800 bg-gray-900' : 'border-gray-200 bg-gray-50'
          }`}>
            <div className="space-y-8 sticky top-8">
              {/* Profile Section */}
              <div className="space-y-6">
                <div className="w-24 h-24 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center flex-shrink-0">
                  <img 
                    src={PROFILE_PHOTO_URL}
                    alt="Lakshminarasimhan A"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="w-full h-full flex items-center justify-center text-white text-2xl font-bold" style={{display: 'none'}}>
                    LA
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h2 className="text-xl font-semibold">Lakshminarasimhan A</h2>
                  <p className="text-gray-400 text-sm">Software Engineer</p>
                </div>

                {/* Social Links */}
                <div className="flex space-x-3">
                  <a 
                    href="https://github.com/narasimhan-lakshmi" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`p-2 rounded-lg transition-colors ${
                      isDarkMode 
                        ? 'bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white' 
                        : 'bg-gray-200 hover:bg-gray-300 text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <Github size={18} />
                  </a>
                  <a 
                    href="https://twitter.com/narasimhan_45" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`p-2 rounded-lg transition-colors ${
                      isDarkMode 
                        ? 'bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white' 
                        : 'bg-gray-200 hover:bg-gray-300 text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <Twitter size={18} />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/lakshminarasimhan-anandanarayanan/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`p-2 rounded-lg transition-colors ${
                      isDarkMode 
                        ? 'bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white' 
                        : 'bg-gray-200 hover:bg-gray-300 text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <Linkedin size={18} />
                  </a>
                  <a 
                    href="https://leetcode.com/narasimhan-2020" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`p-2 rounded-lg transition-colors ${
                      isDarkMode 
                        ? 'bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white' 
                        : 'bg-gray-200 hover:bg-gray-300 text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <Target size={18} />
                  </a>
                </div>
              </div>

              {/* Navigation */}
              <nav className="space-y-1">
                {navigationItems.map((item) => (
                  <button
                    key={item}
                    onClick={() => setActiveSection(item)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      activeSection === item
                        ? isDarkMode
                          ? 'bg-gray-800 text-white'
                          : 'bg-gray-200 text-gray-900'
                        : isDarkMode
                          ? 'text-gray-400 hover:text-white hover:bg-gray-800'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </nav>

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-colors ${
                  isDarkMode 
                    ? 'bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white' 
                    : 'bg-gray-200 hover:bg-gray-300 text-gray-600 hover:text-gray-900'
                }`}
              >
                {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 p-8 lg:p-12">
            <div className="max-w-4xl">
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;