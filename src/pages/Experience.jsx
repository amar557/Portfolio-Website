import React, { useState, useRef, useContext } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaMobile,
  FaCode,
  FaGraduationCap,
  FaTrophy,
  FaCertificate,
  FaCalendarAlt,
  FaArrowRight,
  FaStar,
} from "react-icons/fa";
import {
  SiRedux,
  SiReactrouter,
  SiMysql,
  SiLaravel,
  SiSocketdotio,
  SiFlutter,
  SiJavascript,
  SiTailwindcss,
  SiExpress,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
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

const experienceData = [
  {
    id: 1,
    heading: "React Native Development",
    details:
      "Building cross-platform mobile applications with native performance, implementing complex UI components and integrating with device APIs for seamless user experiences.",
    icon: <FaMobile />,
    color: "from-blue-500 to-cyan-500",
    category: "Mobile Development",
    level: "Intermediate",
    year: "2024",
    skills: ["React Native", "Mobile UI", "Cross-platform", "API Integration"],
  },
  {
    id: 2,
    heading: "Flutter Development",
    details:
      "Creating beautiful, fast mobile applications using Flutter framework with Dart programming language, focusing on material design and smooth animations.",
    icon: <SiFlutter />,
    color: "from-blue-400 to-blue-600",
    category: "Mobile Development",
    level: "Basic",
    year: "2024",
    skills: ["Flutter", "Dart", "Material Design", "Animations"],
  },
  {
    id: 3,
    heading: "Laravel Backend Development",
    details:
      "Developing robust server-side applications using Laravel framework, implementing RESTful APIs, authentication systems, and database management with elegant code architecture.",
    icon: <SiLaravel />,
    color: "from-red-500 to-orange-500",
    category: "Backend Development",
    level: "Intermediate",
    year: "2024",
    skills: ["Laravel", "PHP", "REST APIs", "Authentication"],
  },
  {
    id: 4,
    heading: "MySQL Database Management",
    details:
      "Designing and optimizing relational databases, writing complex queries, implementing indexing strategies, and ensuring data integrity for scalable applications.",
    icon: <SiMysql />,
    color: "from-blue-600 to-blue-800",
    category: "Database",
    level: "Intermediate",
    year: "2023",
    skills: ["MySQL", "Database Design", "Query Optimization", "Data Modeling"],
  },
  {
    id: 5,
    heading: "Socket.IO Real-time Communication",
    details:
      "Implementing real-time bidirectional communication between clients and servers, building chat applications, notifications, and live data updates with WebSocket technology.",
    icon: <SiSocketdotio />,
    color: "from-green-500 to-emerald-600",
    category: "Real-time Technology",
    level: "Intermediate",
    year: "2023",
    skills: ["Socket.IO", "WebSockets", "Real-time Apps", "Event Handling"],
  },
  {
    id: 6,
    heading: "Redux State Management",
    details:
      "Implementing predictable state management in React applications, designing efficient store architecture, and managing complex application states with Redux toolkit.",
    icon: <SiRedux />,
    color: "from-purple-500 to-indigo-600",
    category: "Frontend Development",
    level: "Advanced",
    year: "2023",
    skills: ["Redux", "State Management", "Redux Toolkit", "Middleware"],
  },
  {
    id: 7,
    heading: "React Router Navigation",
    details:
      "Creating seamless single-page applications with dynamic routing, implementing protected routes, lazy loading, and advanced navigation patterns for optimal user experience.",
    icon: <SiReactrouter />,
    color: "from-cyan-500 to-blue-500",
    category: "Frontend Development",
    level: "Advanced",
    year: "2023",
    skills: ["React Router", "SPA", "Navigation", "Code Splitting"],
  },
  {
    id: 8,
    heading: "API Integration & Development",
    details:
      "Designing and consuming RESTful APIs, implementing authentication, error handling, and data transformation while ensuring security and performance best practices.",
    icon: <TbApi />,
    color: "from-yellow-500 to-orange-500",
    category: "API Development",
    level: "Advanced",
    year: "2023",
    skills: ["REST APIs", "Authentication", "Error Handling", "Data Security"],
  },
];

const categories = [
  "All",
  "Frontend Development",
  "Backend Development",
  "Mobile Development",
  "Database",
  "Real-time Technology",
  "API Development",
];
const levels = ["All", "Basic", "Intermediate", "Advanced"];

function Experience() {
  const { Isdark: isDark } = useContext(ContexApi);
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeLevel, setActiveLevel] = useState("All");
  const [selectedExperience, setSelectedExperience] = useState(null);

  const filteredExperiences = experienceData.filter((exp) => {
    const categoryMatch =
      activeCategory === "All" || exp.category === activeCategory;
    const levelMatch = activeLevel === "All" || exp.level === activeLevel;
    return categoryMatch && levelMatch;
  });

  return (
    <div
      className={`min-h-screen pt-40 py-20 ${isDark ? "bg-gray-900" : "bg-gradient-to-br from-blue-50 via-white to-purple-50"}`}
      id="experience"
    >


      <div className="mx-auto max-w-7xl px-6">
        <Heading>My Experience</Heading>

        {/* Experience Stats */}
        <ExperienceStats isDark={isDark} />

        {/* Skill Level Overview */}
        <SkillLevelOverview experiences={experienceData} isDark={isDark} />

        {/* Filter Controls */}
        <FilterControls
          categories={categories}
          levels={levels}
          activeCategory={activeCategory}
          activeLevel={activeLevel}
          setActiveCategory={setActiveCategory}
          setActiveLevel={setActiveLevel}
          isDark={isDark}
        />

        {/* Experience Timeline */}
        <ExperienceTimeline
          experiences={filteredExperiences}
          isDark={isDark}
          selectedExperience={selectedExperience}
          setSelectedExperience={setSelectedExperience}
        />

        {/* Technologies Mastery Chart */}
        <TechnologiesMastery experiences={experienceData} isDark={isDark} />
      </div>
    </div>
  );
}

function ExperienceStats({ isDark }) {
  const stats = [
    {
      icon: <FaCode />,
      label: "Technologies",
      value: "8+",
      color: "bg-blue-500",
    },
    {
      icon: <FaTrophy />,
      label: "Skill Categories",
      value: "6",
      color: "bg-purple-500",
    },
    {
      icon: <FaGraduationCap />,
      label: "Years Learning",
      value: "2+",
      color: "bg-green-500",
    },
    {
      icon: <FaCertificate />,
      label: "Projects Built",
      value: "15+",
      color: "bg-orange-500",
    },
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
            isDark
              ? "bg-white/5 border border-white/10"
              : "bg-white border border-gray-200"
          } backdrop-blur-sm group overflow-hidden`}
        >
          <div
            className={`w-12 h-12 ${stat.color} rounded-full flex items-center justify-center text-white text-xl mx-auto mb-4 group-hover:scale-110 transition-transform`}
          >
            {stat.icon}
          </div>
          <div
            className={`text-3xl font-bold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}
          >
            {stat.value}
          </div>
          <div
            className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}
          >
            {stat.label}
          </div>

          <motion.div
            initial={{ x: "-100%" }}
            whileHover={{ x: "0%" }}
            className={`absolute top-0 left-0 w-full h-full ${stat.color} opacity-10 -z-10`}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}

function SkillLevelOverview({ experiences, isDark }) {
  const levelCounts = experiences.reduce((acc, exp) => {
    acc[exp.level] = (acc[exp.level] || 0) + 1;
    return acc;
  }, {});

  const levelColors = {
    Basic: "from-green-400 to-green-600",
    Intermediate: "from-yellow-400 to-orange-600",
    Advanced: "from-red-400 to-red-600",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`p-8 rounded-3xl mb-16 ${
        isDark
          ? "bg-white/5 border border-white/10"
          : "bg-white border border-gray-200"
      } backdrop-blur-sm`}
    >
      <h3
        className={`text-3xl font-bold text-center mb-8 ${isDark ? "text-white" : "text-gray-900"}`}
      >
        Skill Level Distribution
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {Object.entries(levelCounts).map(([level, count], index) => (
          <motion.div
            key={level}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="text-center"
          >
            <div className={`relative w-24 h-24 mx-auto mb-4`}>
              <div
                className={`w-full h-full rounded-full bg-gradient-to-br ${levelColors[level]} flex items-center justify-center text-white text-2xl font-bold shadow-lg`}
              >
                {count}
              </div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                className={`absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r ${levelColors[level]} rounded-full flex items-center justify-center`}
              >
                <FaStar className="text-white text-xs" />
              </motion.div>
            </div>

            <h4
              className={`text-xl font-semibold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}
            >
              {level}
            </h4>
            <p
              className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}
            >
              {count} {count === 1 ? "Technology" : "Technologies"}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function FilterControls({
  categories,
  levels,
  activeCategory,
  activeLevel,
  setActiveCategory,
  setActiveLevel,
  isDark,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="mb-12 space-y-6"
    >
      {/* Category Filter */}
      <div>
        <h4
          className={`text-lg font-semibold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}
        >
          Filter by Category
        </h4>
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : isDark
                    ? "bg-white/10 text-white hover:bg-white/20 border border-white/20"
                    : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Level Filter - Updated for mobile responsiveness */}
      <div>
        <h4
          className={`text-lg font-semibold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}
        >
          Filter by Skill Level
        </h4>
        <div className="flex flex-wrap gap-2">
          {levels.map((level) => (
            <motion.button
              key={level}
              onClick={() => setActiveLevel(level)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeLevel === level
                  ? "bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg"
                  : isDark
                    ? "bg-white/10 text-white hover:bg-white/20 border border-white/20"
                    : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
              }`}
            >
              {level}
            </motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function ExperienceTimeline({
  experiences,
  isDark,
  selectedExperience,
  setSelectedExperience,
}) {
  return (
    <motion.div layout className="relative mb-16">
      {/* Timeline Line - Made responsive with media queries */}
      <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 md:left-4 lg:left-8" 
        style={{ backgroundColor: isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)' }} 
      />

      <AnimatePresence>
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={experience.id}
            experience={experience}
            index={index}
            isDark={isDark}
            isSelected={selectedExperience === experience.id}
            onSelect={setSelectedExperience}
          />
        ))}
      </AnimatePresence>
    </motion.div>
  );
}

function ExperienceCard({ experience, index, isDark, isSelected, onSelect }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  const levelColors = {
    Basic: "from-green-400 to-green-600",
    Intermediate: "from-yellow-400 to-orange-600",
    Advanced: "from-red-400 to-red-600",
  };

  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="relative pl-12 md:pl-20 pb-8 md:pb-12 group"
    >
      {/* Timeline Node - Made responsive */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
        className={`absolute left-4 md:left-6 w-3 h-3 md:w-4 md:h-4 rounded-full bg-gradient-to-r ${experience.color} shadow-lg`}
      />

      {/* Experience Card - Made responsive */}
      <motion.div
        whileHover={{ scale: 1.02, x: 5 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => onSelect(isSelected ? null : experience.id)}
        className={`cursor-pointer rounded-xl md:rounded-2xl p-4 md:p-6 transition-all duration-300 ${
          isDark
            ? "bg-white/5 border border-white/10 hover:bg-white/10"
            : "bg-white border border-gray-200 hover:shadow-lg"
        } backdrop-blur-sm group-hover:border-purple-300`}
      >
        {/* Card Header - Made responsive */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3 md:mb-4">
          <div className="flex items-center space-x-3 md:space-x-4">
            <div
              className={`w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-gradient-to-br ${experience.color} flex items-center justify-center text-white text-lg md:text-xl shadow-lg`}
            >
              {experience.icon}
            </div>
            <div>
              <h3
                className={`text-lg md:text-xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}
              >
                {experience.heading}
              </h3>
              <div className="flex flex-wrap items-center gap-1 md:gap-2 mt-1">
                <span
                  className={`text-xs md:text-sm px-2 py-1 rounded-full ${
                    isDark
                      ? "bg-white/10 text-white"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {experience.category}
                </span>
                <div
                  className={`px-2 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${levelColors[experience.level]} text-white`}
                >
                  {experience.level}
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between sm:justify-end space-x-2">
            <div
              className={`flex items-center space-x-1 px-2 py-1 rounded-full ${
                isDark ? "bg-white/10" : "bg-gray-100"
              }`}
            >
              <FaCalendarAlt
                className={`text-xs ${isDark ? "text-gray-400" : "text-gray-600"}`}
              />
              <span
                className={`text-xs ${isDark ? "text-gray-400" : "text-gray-600"}`}
              >
                {experience.year}
              </span>
            </div>
            <motion.div
              animate={{ rotate: isSelected ? 90 : 0 }}
              className={`p-1 rounded-full ${isDark ? "text-white" : "text-gray-600"}`}
            >
              <FaArrowRight className="text-sm" />
            </motion.div>
          </div>
        </div>

        {/* Description - Made responsive */}
        <p
          className={`mb-3 md:mb-4 text-sm md:text-base leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}
        >
          {experience.details}
        </p>

        {/* Skills Tags - Made responsive */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={
            isSelected
              ? { height: "auto", opacity: 1 }
              : { height: 0, opacity: 0 }
          }
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="flex flex-wrap gap-1 md:gap-2 pt-3 md:pt-4 border-t border-gray-200/20">
            {experience.skills.map((skill, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  isSelected
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{ duration: 0.2, delay: i * 0.1 }}
                className={`px-2 py-0.5 md:px-3 md:py-1 rounded-full text-xs font-medium ${
                  isDark
                    ? "bg-white/10 text-white"
                    : "bg-gray-100 text-gray-700"
                } hover:scale-105 transition-transform cursor-pointer`}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
function TechnologiesMastery({ experiences, isDark }) {
  const techData = experiences.map((exp) => ({
    name: exp.heading.split(" ")[0],
    level: exp.level === "Basic" ? 30 : exp.level === "Intermediate" ? 65 : 90,
    color: exp.color,
    icon: exp.icon,
  }));

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`p-8 rounded-3xl ${
        isDark
          ? "bg-white/5 border border-white/10"
          : "bg-white border border-gray-200"
      } backdrop-blur-sm`}
    >
      <h3
        className={`text-3xl font-bold text-center mb-8 ${isDark ? "text-white" : "text-gray-900"}`}
      >
        Technologies Proficiency
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {techData.map((tech, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="text-center"
          >
            <div className={`relative w-20 h-20 mx-auto mb-4`}>
              <svg
                className="w-full h-full transform -rotate-90"
                viewBox="0 0 80 80"
              >
                <circle
                  cx="40"
                  cy="40"
                  r="32"
                  stroke={isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}
                  strokeWidth="6"
                  fill="none"
                />
                <motion.circle
                  cx="40"
                  cy="40"
                  r="32"
                  stroke={`url(#gradient-${index})`}
                  strokeWidth="6"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 32}`}
                  initial={{ strokeDashoffset: 2 * Math.PI * 32 }}
                  whileInView={{
                    strokeDashoffset: 2 * Math.PI * 32 * (1 - tech.level / 100),
                  }}
                  transition={{ duration: 2, delay: index * 0.2 }}
                />
                <defs>
                  <linearGradient
                    id={`gradient-${index}`}
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="#8B5CF6" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className={`w-8 h-8 rounded-lg bg-gradient-to-br ${tech.color} flex items-center justify-center text-white text-sm`}
                >
                  {tech.icon}
                </div>
              </div>
            </div>

            <h4
              className={`text-sm font-semibold mb-1 ${isDark ? "text-white" : "text-gray-900"}`}
            >
              {tech.name}
            </h4>
            <p
              className={`text-xs ${isDark ? "text-gray-400" : "text-gray-600"}`}
            >
              {tech.level}%
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Experience;
