import React, { memo, useContext, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { 
  FaBars, 
  FaTimes, 
  FaMoon, 
  FaSun,
  FaHome,
  FaUser,
  FaCog,
  FaPortrait,
  FaBriefcase,
  FaEnvelope,
  FaRocket
} from "react-icons/fa";
import logo from "../pictures/logos.png";
import { ContexApi } from "./context";


const LinksData = [
  { link: "Home",       to: "/",         icon: <FaHome />,       color: "from-blue-500 to-cyan-500" },
  { link: "About",      to: "/about",    icon: <FaUser />,       color: "from-purple-500 to-pink-500" },
  { link: "Skills",     to: "/skills",   icon: <FaCog />,        color: "from-green-500 to-emerald-500" },
  { link: "Portfolio",  to: "/work",     icon: <FaPortrait />,   color: "from-orange-500 to-red-500" },
  { link: "Experience", to: "/xp",       icon: <FaBriefcase />,  color: "from-indigo-500 to-purple-500" },
  { link: "Contact",    to: "/contact",  icon: <FaEnvelope />,   color: "from-pink-500 to-rose-500" },
];


function Navbar() {
  const { isOpen, handleNavbar, Isdark } = useContext(ContexApi);
  const w= useContext(ContexApi);
  console.log(w,'data inn navbar ')
  const location = useLocation();
const activePath = location.pathname;

  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 70);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Main Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isSticky
            ? "py-3"
            : "py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            animate={{
              backdropFilter: isSticky ? "blur(20px)" : "blur(10px)",
              backgroundColor: isSticky 
                ? (Isdark ? "rgba(17, 24, 39, 0.8)" : "rgba(255, 255, 255, 0.8)")
                : (Isdark ? "rgba(17, 24, 39, 0.4)" : "rgba(255, 255, 255, 0.4)"),
            }}
            className={`relative rounded-2xl border transition-all duration-500 ${
              Isdark 
                ? "border-white/20 shadow-lg shadow-black/20" 
                : "border-gray-200/50 shadow-lg shadow-black/10"
            }`}
          >
            {/* Animated background gradient */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-pink-600/5 opacity-50" />
            
            <div className="relative flex items-center justify-between px-6 py-4">
              {/* Logo Section */}
              <Logo Isdark={Isdark} />

              {/* Desktop Navigation */}
           <DesktopNavigation 
  LinksData={LinksData} 
  activePath={activePath}
  Isdark={Isdark}
/>


              {/* Right Section */}
              <div className="flex items-center space-x-4">
                <ThemeToggle />
                <MobileMenuButton 
                  isOpen={isOpen} 
                  handleNavbar={handleNavbar}
                  Isdark={Isdark}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <MobileNavigation 
        isOpen={isOpen}
        LinksData={LinksData}
        handleNavbar={handleNavbar}
        Isdark={Isdark}
      />
      
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
            onClick={handleNavbar}
          />
        )}
      </AnimatePresence>
    </>
  );
}

function Logo({ Isdark }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center space-x-3"
    >
      <div className="relative">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-20 blur-md"
        />
        <img 
          src={logo} 
          alt="Logo" 
          className="relative w-10 h-10 rounded-full border-2 border-white/20 lg:w-12 lg:h-12"
        />
      </div>
      <div className="hidden sm:block">
        <motion.h1 
          className={`text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent`}
        >
          Portfolio
        </motion.h1>
      </div>
    </motion.div>
  );
}

function DesktopNavigation({ LinksData, activePath, Isdark }) {
  return (
    <div className="hidden lg:flex items-center space-x-2">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`flex items-center space-x-1 p-2 rounded-xl ${
          Isdark 
            ? "bg-white/5 border border-white/10" 
            : "bg-white/30 border border-gray-200/30"
        } backdrop-blur-sm`}
      >
        {LinksData.map((item, index) => (
          <NavLink
            key={item.to}
            item={item}
            index={index}
            Isdark={Isdark}
            activePath={activePath}
          />
        ))}
      </motion.div>
    </div>
  );
}

function NavLink({ item, index, Isdark, activePath }) {
  const isActive = activePath === item.to;

  return (
    <Link to={item.to}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className={`relative px-4 py-2 rounded-lg transition-all duration-300 group ${
          isActive
            ? `bg-gradient-to-r ${item.color} text-white shadow-lg`
            : Isdark
            ? "text-white hover:bg-white/10"
            : "text-gray-700 hover:bg-gray-100/50"
        }`}
      >
        <div className="flex items-center space-x-2">
          <motion.div
            animate={{ 
              scale: isActive ? [1, 1.2, 1] : 1,
              rotate: isActive ? [0, 10, -10, 0] : 0
            }}
            transition={{ duration: 0.6 }}
            className="text-sm"
          >
            {item.icon}
          </motion.div>
          <span className="text-sm font-medium">{item.link}</span>
        </div>

        {isActive && (
          <motion.div
            layoutId="activeTab"
            className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full"
          />
        )}
      </motion.div>
    </Link>
  );
}

function MobileNavigation({ isOpen, LinksData, handleNavbar, Isdark }) {
  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", damping: 30, stiffness: 300 }}
          className={`fixed top-0 right-0 h-full w-80 z-50 ${
            Isdark 
              ? "bg-gray-900/95 border-l border-white/10" 
              : "bg-white/95 border-l border-gray-200/30"
          } backdrop-blur-xl lg:hidden`}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200/20">
            <motion.h2 
              className={`text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent`}
            >
              Navigation
            </motion.h2>
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleNavbar}
              className={`p-2 rounded-full ${
                Isdark ? "bg-white/10 text-white" : "bg-gray-100 text-gray-700"
              }`}
            >
              <FaTimes />
            </motion.button>
          </div>

          {/* Navigation Links */}
          <div className="p-6 space-y-4">
            {LinksData.map((item, index) => (
              <MobileNavLink
                key={item.to}
                item={item}
                index={index}
                handleNavbar={handleNavbar}
                Isdark={Isdark}
              />
            ))}
          </div>

          {/* Footer */}
          <div className="absolute bottom-6 left-6 right-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className={`p-4 rounded-xl text-center ${
                Isdark ? "bg-white/5" : "bg-gray-100/50"
              }`}
            >
              <FaRocket className={`mx-auto mb-2 text-2xl ${
                Isdark ? "text-blue-400" : "text-blue-600"
              }`} />
              <p className={`text-sm ${
                Isdark ? "text-gray-300" : "text-gray-600"
              }`}>
                Let's build something amazing together!
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function MobileNavLink({ item, index, handleNavbar, Isdark }) {
  return (
    <Link to={item.to} onClick={handleNavbar}>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        whileHover={{ scale: 1.02, x: 10 }}
        whileTap={{ scale: 0.98 }}
        className={`flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 ${
          Isdark 
            ? "hover:bg-white/10 text-white" 
            : "hover:bg-gray-100/50 text-gray-700"
        } group`}
      >
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}>
          {item.icon}
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-lg">{item.link}</h3>
          <p className={`text-sm ${Isdark ? "text-gray-400" : "text-gray-500"}`}>
            Navigate to {item.link.toLowerCase()}
          </p>
        </div>
        <motion.div initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} className="text-sm opacity-50">
          →
        </motion.div>
      </motion.div>
    </Link>
  );
}


function MobileMenuButton({ isOpen, handleNavbar, Isdark }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleNavbar}
      className={`lg:hidden relative p-3 rounded-xl transition-all duration-300 ${
        Isdark 
          ? "bg-white/10 border border-white/20 text-white" 
          : "bg-white/50 border border-gray-200/50 text-gray-700"
      } backdrop-blur-sm`}
    >
      <motion.div
        animate={{ rotate: isOpen ? 0 : 180 }}
        transition={{ duration: 0.3 }}
      >
        {isOpen ? <FaBars size={18} /> : <FaTimes size={18} />}
      </motion.div>
      
      {/* Notification dot */}
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
      />
    </motion.button>
  );
}

const ThemeToggle = memo(function ThemeToggle() {
  const { HandleTheme, Isdark } = useContext(ContexApi);
  
  return (
    <motion.button
      whileHover={{ scale: 1.05, rotate: 15 }}
      whileTap={{ scale: 0.95 }}
      onClick={HandleTheme}
      className={`relative p-3 rounded-xl transition-all duration-500 ${
        Isdark 
          ? "bg-white/10 border border-white/20 text-yellow-400" 
          : "bg-white/50 border border-gray-200/50 text-gray-700"
      } backdrop-blur-sm overflow-hidden group`}
    >
      <motion.div
        animate={{ rotate: Isdark ? 0 : 180, scale: Isdark ? 1 : 0.8 }}
        transition={{ duration: 0.5 }}
      >
        {Isdark ? <FaSun size={18} /> : <FaMoon size={18} />}
      </motion.div>
      
      {/* Animated background */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileHover={{ scale: 1, opacity: 1 }}
        className={`absolute inset-0 rounded-xl ${
          Isdark 
            ? "bg-gradient-to-r from-yellow-400/20 to-orange-500/20" 
            : "bg-gradient-to-r from-blue-600/20 to-purple-600/20"
        } -z-10`}
      />
    </motion.button>
  );
});

export default Navbar;