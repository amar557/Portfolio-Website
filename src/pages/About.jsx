import React, { useState, useEffect, useRef, useContext } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaCode,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaServer,
  FaLightbulb,
  FaRocket,
  FaHeart,
  FaGraduationCap,
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress } from "react-icons/si";
import { ContexApi } from "../components/context";

// Mock Heading component
const Heading = ({ children }) => (
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-12 text-center"
  >
    {children.toUpperCase()}
  </motion.h2>
);

const skills = [
  { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-500", level: 90 },
  { name: "CSS3", icon: <FaCss3Alt />, color: "text-blue-500", level: 85 },
  { name: "JavaScript", icon: <FaJs />, color: "text-yellow-500", level: 80 },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    color: "text-cyan-500",
    level: 88,
  },
  { name: "React.js", icon: <FaReact />, color: "text-blue-400", level: 85 },
  { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500", level: 78 },
  {
    name: "Express.js",
    icon: <SiExpress />,
    color: "text-gray-600",
    level: 75,
  },
  { name: "MongoDB", icon: <SiMongodb />, color: "text-green-600", level: 80 },
];

const achievements = [
  {
    icon: <FaCode />,
    title: "Projects Completed",
    value: "15+",
    color: "bg-blue-500",
  },
  {
    icon: <FaLightbulb />,
    title: "Problems Solved",
    value: "100+",
    color: "bg-yellow-500",
  },
  {
    icon: <FaHeart />,
    title: "Coffee Consumed",
    value: "∞",
    color: "bg-red-500",
  },
  {
    icon: <FaGraduationCap />,
    title: "Always Learning",
    value: "24/7",
    color: "bg-purple-500",
  },
];

function About() {
  const { Isdark: isDark } = useContext(ContexApi);

  return (
    <div
      className={`min-h-screen py-20 ${isDark ? "bg-gray-900" : "bg-gradient-to-br from-blue-50 via-white to-purple-50"} pt-40`}
      id="about"
    >
      {/* Theme Toggle */}

      <div className="mx-auto max-w-7xl px-6">
        <Heading>About Me</Heading>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Story & Details */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <PersonalStory isDark={isDark} />
            <AchievementCards isDark={isDark} />
          </motion.div>

          {/* Right Side - Skills & Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <SkillsShowcase isDark={isDark} />
            <TechStack isDark={isDark} />
          </motion.div>
        </div>

        {/* Bottom Section - Philosophy */}
        <PhilosophySection isDark={isDark} />
      </div>
    </div>
  );
}

function PersonalStory({ isDark }) {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ["Developer", "Creator", "Problem Solver", "Innovator"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-4"
      >
        <div className="flex items-center gap-4">
          <div className="relative">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center"
            >
              <FaRocket className="text-white text-xl" />
            </motion.div>
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            </div>
          </div>

          <div>
            <h3
              className={`text-2xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}
            >
              MERN Stack{" "}
              <motion.span
                key={currentWord}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text"
              >
                {words[currentWord]}
              </motion.span>
            </h3>
            <p className={`${isDark ? "text-gray-400" : "text-gray-600"}`}>
              Passionate about crafting digital experiences
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className={`relative p-6 rounded-2xl ${
          isDark
            ? "bg-white/5 border border-white/10"
            : "bg-white/80 border border-gray-200"
        } backdrop-blur-sm`}
      >
        <div className="absolute top-4 left-4 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
        <div className="absolute top-4 left-9 w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="absolute top-4 left-14 w-3 h-3 bg-red-500 rounded-full"></div>

        <div className="mt-8 space-y-4">
          <p
            className={`text-lg leading-relaxed ${isDark ? "text-gray-300" : "text-gray-700"}`}
          >
            I'm a{" "}
            <strong className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
              highly motivated Junior MERN Stack Developer
            </strong>{" "}
            with a passion for creating exceptional digital experiences. My
            journey in web development has equipped me with expertise in modern
            technologies and a deep understanding of full-stack development.
          </p>

          <p
            className={`text-lg leading-relaxed ${isDark ? "text-gray-300" : "text-gray-700"}`}
          >
            As a{" "}
            <strong className="text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text">
              proactive problem-solver
            </strong>
            , I'm dedicated to delivering high-quality solutions that make a
            real impact. My career goal is to continuously grow, gain valuable
            experience, and develop a solid foundation in software development
            while contributing to innovative projects.
          </p>
        </div>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-6 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
        />
      </motion.div>
    </div>
  );
}

function AchievementCards({ isDark }) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {achievements.map((achievement, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          whileHover={{ scale: 1.05, y: -5 }}
          className={`relative overflow-hidden p-4 rounded-xl ${
            isDark
              ? "bg-white/5 border border-white/10"
              : "bg-white border border-gray-200"
          } backdrop-blur-sm group cursor-pointer`}
        >
          <div
            className={`w-10 h-10 rounded-full ${achievement.color} flex items-center justify-center text-white mb-3 group-hover:scale-110 transition-transform`}
          >
            {achievement.icon}
          </div>
          <div
            className={`text-2xl font-bold mb-1 ${isDark ? "text-white" : "text-gray-900"}`}
          >
            {achievement.value}
          </div>
          <div
            className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}
          >
            {achievement.title}
          </div>

          {/* Hover effect */}
          <motion.div
            initial={{ x: "-100%" }}
            whileHover={{ x: "0%" }}
            className={`absolute top-0 left-0 w-full h-full ${achievement.color} opacity-10 -z-10`}
          />
        </motion.div>
      ))}
    </div>
  );
}

function SkillsShowcase({ isDark }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="space-y-6">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className={`text-2xl font-bold mb-6 ${isDark ? "text-white" : "text-gray-900"}`}
      >
        Technical Skills
      </motion.h3>

      <div className="space-y-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <div
                  className={`text-2xl ${skill.color} group-hover:scale-125 transition-transform`}
                >
                  {skill.icon}
                </div>
                <span
                  className={`font-semibold ${isDark ? "text-white" : "text-gray-900"}`}
                >
                  {skill.name}
                </span>
              </div>
              <span
                className={`text-sm font-medium ${isDark ? "text-gray-400" : "text-gray-600"}`}
              >
                {skill.level}%
              </span>
            </div>

            <div
              className={`w-full h-2 rounded-full ${isDark ? "bg-gray-800" : "bg-gray-200"} overflow-hidden`}
            >
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                transition={{ duration: 1, delay: index * 0.1 }}
                className={`h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full relative`}
              >
                <div className="absolute top-0 right-0 w-full h-full bg-white/20 rounded-full animate-pulse"></div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function TechStack({ isDark }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`relative p-6 rounded-2xl ${
        isDark
          ? "bg-white/5 border border-white/10"
          : "bg-white/80 border border-gray-200"
      } backdrop-blur-sm overflow-hidden`}
    >
      <h3
        className={`text-xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}
      >
        Technology Stack
      </h3>

      <div className="grid grid-cols-4 gap-4">
        {skills.slice(0, 8).map((tech, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.2, rotate: 5 }}
            className={`relative p-3 rounded-xl ${
              isDark ? "bg-white/5" : "bg-gray-50"
            } flex items-center justify-center group cursor-pointer`}
          >
            <div
              className={`text-2xl ${tech.color} group-hover:animate-bounce`}
            >
              {tech.icon}
            </div>

            {/* Tooltip */}
            <div
              className={`absolute -top-10 left-1/2 transform -translate-x-1/2 px-2 py-1 rounded text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity ${
                isDark ? "bg-white text-gray-900" : "bg-gray-900 text-white"
              }`}
            >
              {tech.name}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Animated background */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute -top-10 -right-10 w-20 h-20 border-4 border-blue-500/20 rounded-full"
      />
    </motion.div>
  );
}

function PhilosophySection({ isDark }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="mt-20 text-center"
    >
      <div
        className={`relative p-8 rounded-3xl ${
          isDark
            ? "bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-white/10"
            : "bg-gradient-to-r from-blue-50/50 to-purple-50/50 border border-gray-200"
        } backdrop-blur-sm overflow-hidden`}
      >
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-4 right-4 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-50"
        />

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className={`text-3xl font-bold mb-6 ${isDark ? "text-white" : "text-gray-900"}`}
        >
          My Development Philosophy
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className={`text-xl leading-relaxed max-w-4xl mx-auto ${isDark ? "text-gray-300" : "text-gray-700"}`}
        >
          "Code is poetry written in logic. Every line should serve a purpose,
          every function should tell a story, and every application should solve
          real problems. I believe in writing clean, maintainable code that
          stands the test of time and creates meaningful user experiences."
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8 flex justify-center"
        >
          <div className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold">
            <FaHeart className="animate-pulse" />
            <span>Passionate about Clean Code</span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default About;
