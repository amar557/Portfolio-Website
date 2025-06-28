import React, { useContext, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaTwitter, FaLinkedinIn, FaWhatsapp, FaDownload, FaCode, FaRocket } from "react-icons/fa";

import { ContexApi } from "../components/context";

const iconsData = [
  {
    icon: <FaGithub className="text-2xl" />,
    to: "https://github.com/amar557",
    label: "GitHub",
    color: "hover:text-purple-400"
  },
  {
    icon: <FaTwitter className="text-2xl" />,
    to: "https://twitter.com/i/flow/login",
    label: "Twitter",
    color: "hover:text-blue-400"
  },
  {
    icon: <FaLinkedinIn className="text-2xl" />,
    to: "https://www.linkedin.com/in/amar-hussain-b82392283/",
    label: "LinkedIn",
    color: "hover:text-blue-600"
  },
  {
    icon: <FaWhatsapp className="text-2xl" />,
    to: "https://wa.me/+923336033081",
    label: "WhatsApp",
    color: "hover:text-green-400"
  },
];

const roles = [
  "MERN Stack Developer",
  "React.js Developer", 
  "Node.js Developer",
  "React Native developer",
];

function Hero() {
  const {Isdark}  = useContext(ContexApi);
  const [currentRole, setCurrentRole] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`relative min-h-screen overflow-hidden ${Isdark ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'}`} id="hero">
      
      {/* Animated Background Elements */}
      <BackgroundElements Isdark={Isdark} />
      
      {/* Main Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8 text-center lg:text-left"
            >
              <GreetingBadge Isdark={Isdark} />
              <MainTitle Isdark={Isdark} />
              <RoleDisplay currentRole={currentRole} Isdark={Isdark} />
              <Description Isdark={Isdark} />
              <ActionButtons Isdark={Isdark} />
            </motion.div>

            {/* Right Side - Image/Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <HeroVisual Isdark={Isdark} />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <SocialLinks Isdark={Isdark} />
      
      {/* Scroll Indicator */}
      <ScrollIndicator Isdark={Isdark} />
    </div>
  );
}

function BackgroundElements({ Isdark }) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Floating Shapes */}
      <motion.div
        animate={{ 
          rotate: 360,
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className={`absolute top-20 right-20 w-32 h-32 rounded-full opacity-10 ${Isdark ? 'bg-blue-500' : 'bg-purple-500'}`}
      />
      
      <motion.div
        animate={{ 
          rotate: -360,
          y: [0, -20, 0]
        }}
        transition={{ 
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
        className={`absolute bottom-40 left-10 w-24 h-24 rounded-full opacity-10 ${Isdark ? 'bg-purple-500' : 'bg-blue-500'}`}
      />
      
      {/* Grid Pattern */}
      <div className={`absolute inset-0 opacity-5 ${Isdark ? 'bg-white' : 'bg-gray-900'}`} 
           style={{
             backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
             backgroundSize: '50px 50px'
           }}
      />
    </div>
  );
}

function GreetingBadge({ Isdark }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="flex justify-center lg:justify-start"
    >
      <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${
        Isdark 
          ? 'bg-white/10 text-white border border-white/20' 
          : 'bg-white/80 text-gray-800 border border-gray-200'
      } backdrop-blur-sm`}>
        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
        Available for work
      </div>
    </motion.div>
  );
}

function MainTitle({ Isdark }) {
  return (
    <div className="space-y-4">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className={`text-5xl md:text-7xl font-bold ${
          Isdark ? 'text-white' : 'text-gray-900'
        }`}
      >
        I'm{' '}
        <span className="relative">
          <span className="relative z-10 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Amar Ali
          </span>
          <motion.span
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="absolute bottom-2 left-0 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-30"
          />
        </span>
      </motion.h1>
    </div>
  );
}

function RoleDisplay({ currentRole, Isdark }) {
  return (
    <div className="h-16 flex items-center justify-center lg:justify-start">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentRole}
          initial={{ opacity: 0, y: 20, rotateX: -90 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          exit={{ opacity: 0, y: -20, rotateX: 90 }}
          transition={{ duration: 0.5 }}
          className={`text-2xl md:text-3xl font-semibold ${
            Isdark ? 'text-gray-300' : 'text-gray-600'
          }`}
        >
          {roles[currentRole]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function Description({ Isdark }) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className={`text-lg md:text-xl leading-relaxed max-w-2xl ${
        Isdark ? 'text-gray-400' : 'text-gray-600'
      }`}
    >
      Passionate developer crafting exceptional digital experiences with modern technologies. 
      Specialized in building scalable web applications that make a difference.
    </motion.p>
  );
}

function ActionButtons({ Isdark }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7 }}
      className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
    >
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25"
      >
        <span className="relative z-10 flex items-center gap-2">
          <FaRocket className="transition-transform group-hover:translate-x-1" />
          Let's Work Together
        </span>
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={false}
        />
      </motion.button>
      
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`group flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-lg border-2 transition-all duration-300 ${
          Isdark 
            ? 'border-white/20 text-white hover:bg-white/10' 
            : 'border-gray-300 text-gray-700 hover:bg-gray-50'
        }`}
      >
        <FaDownload className="transition-transform group-hover:translate-y-1" />
        Download CV
      </motion.button>
    </motion.div>
  );
}

function HeroVisual({ Isdark }) {
  return (
    <div className="relative flex justify-center">
      {/* Main Circle */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="relative"
      >
        <div className={`w-80 h-80 rounded-full border-4 ${
          Isdark ? 'border-blue-500/30' : 'border-purple-500/30'
        } relative overflow-hidden`}>
          
          {/* Avatar/Image placeholder */}
          <div className={`absolute inset-4 rounded-full ${
            Isdark ? 'bg-gradient-to-br from-blue-900 to-purple-900' : 'bg-gradient-to-br from-blue-100 to-purple-100'
          } flex items-center justify-center`}>
            <FaCode className={`text-6xl ${Isdark ? 'text-blue-400' : 'text-purple-600'}`} />
          </div>
          
          {/* Orbiting Elements */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0"
          >
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg"></div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg"></div>
            <div className="absolute top-1/2 right-4 transform -translate-y-1/2 w-4 h-4 bg-gradient-to-r from-green-500 to-blue-500 rounded-full shadow-lg"></div>
            <div className="absolute top-1/2 left-4 transform -translate-y-1/2 w-5 h-5 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full shadow-lg"></div>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Floating Tech Icons */}
      <TechIcons Isdark={Isdark} />
    </div>
  );
}

function TechIcons({ Isdark }) {
  const techStack = ['React', 'Node', 'MongoDB', 'Express'];
  
  return (
    <div className="absolute inset-0 pointer-events-none">
      {techStack.map((tech, index) => (
        <motion.div
          key={tech}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 + index * 0.2 }}
          className={`absolute text-sm font-semibold px-3 py-1 rounded-full ${
            Isdark ? 'bg-white/10 text-white' : 'bg-white/80 text-gray-800'
          } backdrop-blur-sm shadow-lg`}
          style={{
            top: `${20 + index * 15}%`,
            right: index % 2 === 0 ? '-10%' : 'auto',
            left: index % 2 === 1 ? '-10%' : 'auto',
          }}
        >
          {tech}
        </motion.div>
      ))}
    </div>
  );
}

function SocialLinks({ Isdark }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.8 }}
      className="fixed right-8 top-1/2 transform -translate-y-1/2 z-20"
    >
      <div className="flex flex-col gap-4">
        <div className={`w-1 h-20 rounded-full bg-gradient-to-b from-blue-600 to-purple-600 mx-auto mb-4`}></div>
        
        {iconsData.map((social, index) => (
          <motion.a
            key={index}
            href={social.to}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className={`p-3 rounded-full backdrop-blur-sm transition-all duration-300 ${
              Isdark 
                ? 'bg-white/10 text-white hover:bg-white/20' 
                : 'bg-white/80 text-gray-700 hover:bg-white'
            } shadow-lg ${social.color}`}
            title={social.label}
          >
            {social.icon}
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}

function ScrollIndicator({ Isdark }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2 }}
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
    >
      <div className="flex flex-col items-center gap-2">
        <span className={`text-sm ${Isdark ? 'text-gray-400' : 'text-gray-600'}`}>
          Scroll Down
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className={`w-6 h-10 border-2 rounded-full flex justify-center ${
            Isdark ? 'border-white/30' : 'border-gray-400'
          }`}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className={`w-1 h-3 rounded-full mt-2 ${
              Isdark ? 'bg-white/50' : 'bg-gray-600'
            }`}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}



export default Hero;