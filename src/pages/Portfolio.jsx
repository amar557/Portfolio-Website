import React, { useState, useEffect, useRef, useContext } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { 
  FaExternalLinkAlt, 
  FaGithub, 
  FaEye, 
  FaCode,
  FaRocket,
  FaStar,
  FaHeart,
  FaPlayCircle
} from "react-icons/fa";
import { 
  SiReact, 
  SiJavascript, 
  SiTailwindcss, 
  SiNodedotjs,
  SiMongodb,
  SiExpress
} from "react-icons/si";

// Import your images
import pigGamePic from "../pictures/pigGame.png";
import EcommercePic from "../pictures/commerce.png";
import guessMyNumber from "../pictures/guessMyNumber.png";
import payremit from "../pictures/bank.png";
import traveler from "../pictures/traveler.png";
import realState from "../pictures/real-estate.png";
import { ContexApi } from "../components/context";

// Mock Heading component
const Heading = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-center mb-16"
  >
    <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
      {children.toUpperCase()}
    </h2>
    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
  </motion.div>
);

const projectsData = [
  {
    id: 1,
    title: "Real Estate Platform",
    description: "A comprehensive real estate platform with property listings, advanced search, and virtual tours",
    img: realState,
    to: "https://real-state-olive.vercel.app/",
    github: "#",
    category: "Full Stack",
    tech: [<SiReact />, <SiTailwindcss />,<SiNodedotjs/>],
    featured: true,
    year: "2024"
  },
  {
    id: 2,
    title: "E-Commerce Store",
    description: "Modern e-commerce platform with cart functionality, payment integration, and admin dashboard",
    img: EcommercePic,
    to: "https://hope-not-out.vercel.app/",
    github: "#",
    category: "Frontend",
    tech: [<SiReact />, <SiJavascript />, <SiTailwindcss />],
    featured: true,
    year: "2024"
  },
  {
    id: 3,
    title: "Banking Application",
    description: "Secure banking app with transaction history, account management, and real-time notifications",
    img: payremit,
    to: "https://banking-app-omega-three.vercel.app/",
    github: "#",
    category: "React Js",
    tech: [<SiReact />],
    featured: false,
    year: "2023"
  },
  {
    id: 4,
    title: "Pig Game",
    description: "Interactive dice game with smooth animations, score tracking, and multiplayer functionality",
    img: pigGamePic,
    to: "https://pig-game-zeta-nine.vercel.app/",
    github: "#",
    category: "Game",
    tech: [<SiJavascript />, <SiTailwindcss />],
    featured: false,
    year: "2023"
  },
  {
    id: 5,
    title: "Guess My Number",
    description: "Fun number guessing game with difficulty levels, hints, and achievement system",
    img: guessMyNumber,
    to: "https://guess-my-number-game-seven-plum.vercel.app/",
    github: "#",
    category: "Game",
    tech: [<SiJavascript />],
    featured: false,
    year: "2023"
  },
  {
    id: 6,
    title: "Travel Planner",
    description: "Comprehensive travel planning app with itinerary management and destination recommendations",
    img: traveler,
    to: "https://traveler-app-nine.vercel.app/",
    github: "#",
    category: "Frontend",
    tech: [<SiReact />, <SiTailwindcss />],
    featured: false,
    year: "2024"
  }
];

const categories = ["All", "Full Stack", "Frontend", "Game"];

function Portfolio() {
const {Isdark:isDark}=useContext(ContexApi)
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState(null);
  
  const filteredProjects = activeCategory === "All" 
    ? projectsData 
    : projectsData.filter(project => project.category === activeCategory);

  const featuredProjects = projectsData.filter(project => project.featured);

  return (
    <div className={`min-h-screen pt-40 py-20 ${isDark ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'}`} id="portfolio">
      
  
      <div className="mx-auto max-w-7xl px-6">
        <Heading>My Portfolio</Heading>
        
        {/* Portfolio Stats */}
        <PortfolioStats isDark={isDark} />
        
        {/* Featured Projects Showcase */}
        <FeaturedProjects projects={featuredProjects} isDark={isDark} />
        
        {/* Category Filter */}
        <CategoryFilter 
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          isDark={isDark}
        />
        
        {/* Projects Grid */}
        <ProjectsGrid 
          projects={filteredProjects}
          isDark={isDark}
          hoveredProject={hoveredProject}
          setHoveredProject={setHoveredProject}
        />
      </div>
    </div>
  );
}

function PortfolioStats({ isDark }) {
  const stats = [
    { icon: <FaCode />, label: "Projects Built", value: "6+", color: "bg-blue-500" },
    { icon: <FaRocket />, label: "Live Deployments", value: "6", color: "bg-purple-500" },
    { icon: <FaStar />, label: "Technologies Used", value: "8+", color: "bg-yellow-500" },
    { icon: <FaHeart />, label: "Code Commits", value: "200+", color: "bg-red-500" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          whileHover={{ scale: 1.05, y: -5 }}
          className={`relative p-6 rounded-2xl text-center ${
            isDark ? 'bg-white/5 border border-white/10' : 'bg-white border border-gray-200'
          } backdrop-blur-sm group overflow-hidden`}
        >
          <div className={`w-12 h-12 ${stat.color} rounded-full flex items-center justify-center text-white text-xl mx-auto mb-4 group-hover:scale-110 transition-transform`}>
            {stat.icon}
          </div>
          <div className={`text-3xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {stat.value}
          </div>
          <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            {stat.label}
          </div>
          
          <motion.div
            initial={{ x: '-100%' }}
            whileHover={{ x: '0%' }}
            className={`absolute top-0 left-0 w-full h-full ${stat.color} opacity-10 -z-10`}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}

function FeaturedProjects({ projects, isDark }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="mb-16"
    >
      <h3 className={`text-3xl font-bold text-center mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>
        Featured Projects
      </h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className={`relative group cursor-pointer rounded-3xl overflow-hidden ${
              isDark ? 'bg-white/5 border border-white/10' : 'bg-white border border-gray-200'
            } backdrop-blur-sm`}
          >
            <div className="aspect-video relative overflow-hidden">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Featured Badge */}
              <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold rounded-full">
                FEATURED
              </div>
              
              {/* Play Button Overlay */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileHover={{ opacity: 1, scale: 1 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white text-2xl"
                >
                  <FaPlayCircle />
                </motion.div>
              </motion.div>
            </div>
            
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className={`text-sm px-3 py-1 rounded-full ${
                  isDark ? 'bg-white/10 text-white' : 'bg-gray-100 text-gray-700'
                }`}>
                  {project.category}
                </span>
                <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {project.year}
                </span>
              </div>
              
              <h4 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {project.title}
              </h4>
              
              <p className={`text-sm mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {project.description}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex space-x-2">
                  {project.tech.map((tech, i) => (
                    <div key={i} className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm ${
                      isDark ? 'bg-white/10 text-white' : 'bg-gray-100 text-gray-700'
                    }`}>
                      {tech}
                    </div>
                  ))}
                </div>
                
                <div className="flex space-x-2">
                  <motion.a
                    href={project.to}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white hover:shadow-lg transition-shadow"
                  >
                    <FaExternalLinkAlt className="text-sm" />
                  </motion.a>
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                      isDark ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <FaGithub className="text-sm" />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function CategoryFilter({ categories, activeCategory, setActiveCategory, isDark }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-wrap justify-center gap-4 mb-12"
    >
      {categories.map((category) => (
        <motion.button
          key={category}
          onClick={() => setActiveCategory(category)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
            activeCategory === category
              ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
              : isDark
              ? 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
              : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
          }`}
        >
          {category}
        </motion.button>
      ))}
    </motion.div>
  );
}

function ProjectsGrid({ projects, isDark, hoveredProject, setHoveredProject }) {
  return (
    <motion.div
      layout
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      <AnimatePresence>
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            isDark={isDark}
            isHovered={hoveredProject === project.id}
            onHover={setHoveredProject}
          />
        ))}
      </AnimatePresence>
    </motion.div>
  );
}

function ProjectCard({ project, index, isDark, isHovered, onHover }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, y: 50, rotateY: -15 }}
      animate={{ opacity: 1, y: 0, rotateY: 0 }}
      exit={{ opacity: 0, y: -50, rotateY: 15 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      whileHover={{ 
        scale: 1.05, 
        rotateY: 5, 
        z: 50,
        transition: { duration: 0.3 }
      }}
      onHoverStart={() => onHover(project.id)}
      onHoverEnd={() => onHover(null)}
      className={`relative group cursor-pointer rounded-2xl overflow-hidden ${
        isDark ? 'bg-white/5 border border-white/10' : 'bg-white border border-gray-200'
      } backdrop-blur-sm`}
    >
      {/* Project Image */}
      <div className="aspect-video relative overflow-hidden">
        <img
          src={project.img}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Action Buttons Overlay */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 flex items-center justify-center space-x-4"
        >
          <motion.a
            href={project.to}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-semibold hover:bg-white/30 transition-colors flex items-center space-x-2"
          >
            <FaEye />
            <span>View</span>
          </motion.a>
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-semibold hover:bg-white/30 transition-colors flex items-center space-x-2"
          >
            <FaGithub />
            <span>Code</span>
          </motion.a>
        </motion.div>
      </div>
      
      {/* Project Info */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className={`text-xs px-2 py-1 rounded-full ${
            isDark ? 'bg-white/10 text-white' : 'bg-gray-100 text-gray-700'
          }`}>
            {project.category}
          </span>
          <span className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            {project.year}
          </span>
        </div>
        
        <h3 className={`text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          {project.title}
        </h3>
        
        <p className={`text-sm mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          {project.description}
        </p>
        
        {/* Tech Stack */}
        <div className="flex space-x-2 mb-4">
          {project.tech.map((tech, i) => (
            <div key={i} className={`w-6 h-6 rounded flex items-center justify-center text-xs ${
              isDark ? 'bg-white/10 text-white' : 'bg-gray-100 text-gray-700'
            }`}>
              {tech}
            </div>
          ))}
        </div>
        
        {/* Action Buttons */}
        <div className="flex space-x-2">
          <motion.a
            href={project.to}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 py-2 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold text-center hover:shadow-lg transition-shadow"
          >
            Live Demo
          </motion.a>
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`py-2 px-4 rounded-lg font-semibold transition-colors ${
              isDark ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <FaGithub />
          </motion.a>
        </div>
      </div>
      
      {/* Floating Particles Effect */}
      {isHovered && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                opacity: 0, 
                scale: 0,
                x: Math.random() * 300 - 150,
                y: Math.random() * 300 - 150
              }}
              animate={{ 
                opacity: [0, 1, 0], 
                scale: [0, 1, 0],
                x: Math.random() * 500 - 250,
                y: Math.random() * 500 - 250
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                delay: i * 0.4
              }}
              className="absolute w-1 h-1 bg-blue-500 rounded-full"
              style={{
                left: '50%',
                top: '50%'
              }}
            />
          ))}
        </div>
      )}
    </motion.div>
  );
}

export default Portfolio;