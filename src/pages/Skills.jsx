import React, { useState, useEffect, useRef, useContext } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaNodeJs, 
  FaGitAlt, 
  FaDatabase,
  FaMobile,
  FaServer,
  FaCode,
  FaStar,
  FaLightbulb,
  FaRocket,
  FaHeart
} from "react-icons/fa";
import { 
  SiTailwindcss, 
  SiExpress, 
  SiMongodb, 
  SiReact,
  SiJavascript,
  SiTypescript
} from "react-icons/si";
import { ContexApi } from "../components/context";

// Mock context and heading

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

const skillData = [
  {
    icon: <FaHtml5 />,
    heading: "HTML5",
    description: "Creating visually stunning and semantically correct web structures with modern HTML5 features",
    color: "from-orange-500 to-red-500",
    level: 95,
    category: "Frontend"
  },
  {
    icon: <FaCss3Alt />,
    heading: "CSS3",
    description: "Crafting beautiful, responsive designs with advanced CSS3 animations and modern layout techniques",
    color: "from-blue-500 to-cyan-500",
    level: 90,
    category: "Frontend"
  },
  {
    icon: <SiJavascript />,
    heading: "JavaScript",
    description: "Building dynamic, interactive web experiences with modern ES6+ features and best practices",
    color: "from-yellow-400 to-orange-500",
    level: 85,
    category: "Frontend"
  },
  {
    icon: <FaReact />,
    heading: "React.js",
    description: "Developing scalable applications with hooks, context API, and modern React patterns",
    color: "from-blue-400 to-cyan-600",
    level: 88,
    category: "Frontend"
  },
  {
    icon: <FaMobile />,
    heading: "React Native",
    description: "Creating cross-platform mobile applications with native performance and user experience",
    color: "from-purple-500 to-blue-500",
    level: 80,
    category: "Mobile"
  },
  {
    icon: <SiTailwindcss />,
    heading: "Tailwind CSS",
    description: "Rapidly building custom designs with utility-first CSS framework and component libraries",
    color: "from-cyan-400 to-blue-600",
    level: 92,
    category: "Frontend"
  },
  {
    icon: <FaGitAlt />,
    heading: "Git & GitHub",
    description: "Version control mastery with advanced Git workflows, branching strategies, and collaboration",
    color: "from-gray-600 to-gray-800",
    level: 87,
    category: "Tools"
  },
  {
    icon: <FaNodeJs />,
    heading: "Node.js",
    description: "Building scalable server-side applications with asynchronous programming and modern frameworks",
    color: "from-green-500 to-emerald-600",
    level: 82,
    category: "Backend"
  },
  {
    icon: <SiExpress />,
    heading: "Express.js",
    description: "Creating robust REST APIs and web applications with middleware and modern routing patterns",
    color: "from-gray-700 to-black",
    level: 85,
    category: "Backend"
  },
  {
    icon: <SiMongodb />,
    heading: "MongoDB",
    description: "Designing efficient NoSQL databases with advanced queries, indexing, and data modeling",
    color: "from-green-600 to-emerald-700",
    level: 83,
    category: "Database"
  }
];

const categories = ["All", "Frontend", "Backend", "Mobile", "Database", "Tools"];

function Skills() {
  const {Isdark:isDark}=useContext(ContexApi)

  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredSkill, setHoveredSkill] = useState(null);
  
  const filteredSkills = activeCategory === "All" 
    ? skillData 
    : skillData.filter(skill => skill.category === activeCategory);

  return (
    <div className={`min-h-screen py-20 ${isDark ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'} pt-40`} id="skills">
      
 
      <div className="mx-auto max-w-7xl px-6">
        <Heading>My Skills</Heading>
        
        {/* Stats Section */}
        <SkillsStats isDark={isDark} />
        
        {/* Category Filter */}
        <CategoryFilter 
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          isDark={isDark}
        />
        
        {/* Skills Grid */}
        <SkillsGrid 
          skills={filteredSkills}
          isDark={isDark}
          hoveredSkill={hoveredSkill}
          setHoveredSkill={setHoveredSkill}
        />
        
        {/* Skills Mastery Visualization */}
        <SkillsMastery skills={skillData} isDark={isDark} />
      </div>
    </div>
  );
}

function SkillsStats({ isDark }) {
  const stats = [
    { icon: <FaCode />, label: "Technologies", value: "10+", color: "bg-blue-500" },
    { icon: <FaRocket />, label: "Years Experience", value: "2+", color: "bg-purple-500" },
    { icon: <FaLightbulb />, label: "Projects Built", value: "15+", color: "bg-yellow-500" },
    { icon: <FaHeart />, label: "Lines of Code", value: "10K+", color: "bg-red-500" }
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
          
          {/* Animated background */}
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

function SkillsGrid({ skills, isDark, hoveredSkill, setHoveredSkill }) {
  return (
    <motion.div
      layout
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16"
    >
      <AnimatePresence>
        {skills.map((skill, index) => (
          <SkillCard
            key={skill.heading}
            skill={skill}
            index={index}
            isDark={isDark}
            isHovered={hoveredSkill === skill.heading}
            onHover={setHoveredSkill}
          />
        ))}
      </AnimatePresence>
    </motion.div>
  );
}

function SkillCard({ skill, index, isDark, isHovered, onHover }) {
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
      onHoverStart={() => onHover(skill.heading)}
      onHoverEnd={() => onHover(null)}
      className={`relative group cursor-pointer perspective-1000`}
    >
      <div className={`relative p-6 rounded-2xl h-full transition-all duration-500 transform-gpu ${
        isDark ? 'bg-white/5 border border-white/10' : 'bg-white border border-gray-200'
      } backdrop-blur-sm overflow-hidden`}>
        
        {/* Skill Icon */}
        <motion.div
          animate={isHovered ? { scale: 1.2, rotateZ: 360 } : { scale: 1, rotateZ: 0 }}
          transition={{ duration: 0.6 }}
          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${skill.color} flex items-center justify-center text-white text-2xl mb-4 mx-auto shadow-lg`}
        >
          {skill.icon}
        </motion.div>

        {/* Skill Name */}
        <h3 className={`text-xl font-bold text-center mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          {skill.heading}
        </h3>

        {/* Skill Level */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Proficiency
            </span>
            <span className={`text-sm font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {skill.level}%
            </span>
          </div>
          <div className={`w-full h-2 rounded-full ${isDark ? 'bg-gray-800' : 'bg-gray-200'} overflow-hidden`}>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
              transition={{ duration: 1.5, delay: index * 0.1 }}
              className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
            >
              <div className="absolute top-0 right-0 w-full h-full bg-white/30 rounded-full animate-pulse"></div>
            </motion.div>
          </div>
        </div>

        {/* Category Badge */}
        <div className="flex justify-center mb-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
            isDark ? 'bg-white/10 text-white' : 'bg-gray-100 text-gray-700'
          }`}>
            {skill.category}
          </span>
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, height: 0 }}
          animate={isHovered ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className={`text-sm leading-relaxed text-center ${isDark ? 'text-gray-400' : 'text-gray-600'} overflow-hidden`}
        >
          {skill.description}
        </motion.p>

        {/* Animated Background */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={isHovered ? { scale: 1, opacity: 0.1 } : { scale: 0, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className={`absolute inset-0 bg-gradient-to-br ${skill.color} rounded-2xl -z-10`}
        />

        {/* Floating Particles */}
        {isHovered && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ 
                  opacity: 0, 
                  scale: 0,
                  x: Math.random() * 200 - 100,
                  y: Math.random() * 200 - 100
                }}
                animate={{ 
                  opacity: [0, 1, 0], 
                  scale: [0, 1, 0],
                  x: Math.random() * 400 - 200,
                  y: Math.random() * 400 - 200
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3
                }}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  left: '50%',
                  top: '50%'
                }}
              />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

function SkillsMastery({ skills, isDark }) {
  const categories = [...new Set(skills.map(skill => skill.category))];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`p-8 rounded-3xl ${
        isDark ? 'bg-white/5 border border-white/10' : 'bg-white border border-gray-200'
      } backdrop-blur-sm`}
    >
      <h3 className={`text-3xl font-bold text-center mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>
        Skills Mastery Overview
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category, index) => {
          const categorySkills = skills.filter(skill => skill.category === category);
          const averageLevel = Math.round(
            categorySkills.reduce((sum, skill) => sum + skill.level, 0) / categorySkills.length
          );
          
          return (
            <motion.div
              key={category}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className={`relative w-32 h-32 mx-auto mb-4`}>
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
                  <circle
                    cx="60"
                    cy="60"
                    r="50"
                    stroke={isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}
                    strokeWidth="8"
                    fill="none"
                  />
                  <motion.circle
                    cx="60"
                    cy="60"
                    r="50"
                    stroke="url(#gradient)"
                    strokeWidth="8"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 50}`}
                    initial={{ strokeDashoffset: 2 * Math.PI * 50 }}
                    whileInView={{ 
                      strokeDashoffset: 2 * Math.PI * 50 * (1 - averageLevel / 100) 
                    }}
                    transition={{ duration: 2, delay: index * 0.2 }}
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="100%" stopColor="#8B5CF6" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {averageLevel}%
                  </span>
                </div>
              </div>
              
              <h4 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {category}
              </h4>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {categorySkills.length} technologies
              </p>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

export default Skills;