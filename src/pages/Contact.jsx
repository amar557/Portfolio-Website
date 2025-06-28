import React, { useState, useRef, useContext } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaPaperPlane,
  FaUser,
  FaComment,
  FaStar,
  FaHeart,
  FaRocket,
  FaGlobe,
} from "react-icons/fa";
import { SiWhatsapp, SiTelegram, SiDiscord, SiSkype } from "react-icons/si";

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

const contactMethods = [
  {
    id: 1,
    title: "Email",
    value: "amarhussain391@gmail.com",
    icon: <FaEnvelope />,
    color: "from-red-500 to-pink-500",
    description: "Send me an email anytime",
    href: "mailto:amarhussain391@gmail.com",
    available: true,
  },
  {
    id: 2,
    title: "Phone",
    value: "+923336033081",
    icon: <FaPhone />,
    color: "from-green-500 to-emerald-500",
    description: "Call me for urgent matters",
    href: "tel:+923336033081",
    available: true,
  },
  {
    id: 3,
    title: "WhatsApp",
    value: "+923336033081",
    icon: <SiWhatsapp />,
    color: "from-green-400 to-green-600",
    description: "Message me on WhatsApp",
    href: "https://wa.me/923336033081",
    available: true,
  },
  {
    id: 4,
    title: "Location",
    value: "Islamabad, Pakistan",
    icon: <FaMapMarkerAlt />,
    color: "from-blue-500 to-cyan-500",
    description: "Available for local meetups",
    href: "https://www.google.com/maps/@33.6669994,73.0758163,16z?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D",
    available: false,
  },
];

const socialLinks = [
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    color: "from-blue-600 to-blue-800",
    href: "https://www.linkedin.com/in/amar-ali-b82392283/",
    followers: "2.5K",
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
    color: "from-gray-700 to-gray-900",
    href: "https://github.com/amar557",
    followers: "1.2K",
  },
  {
    name: "Twitter",
    icon: <FaTwitter />,
    color: "from-sky-400 to-blue-500",
    href: "https://twitter.com/johndoe",
    followers: "3.1K",
  },
  // {
  //   name: "Instagram",
  //   icon: <FaInstagram />,
  //   color: "from-pink-500 to-purple-600",
  //   href: "https://instagram.com/johndoe",
  //   followers: "1.8K",
  // },
  // {
  //   name: "Discord",
  //   icon: <SiDiscord />,
  //   color: "from-indigo-500 to-purple-600",
  //   href: "https://discord.com/users/johndoe",
  //   followers: "500",
  // },
  // {
  //   name: "Telegram",
  //   icon: <SiTelegram />,
  //   color: "from-blue-400 to-cyan-500",
  //   href: "https://t.me/johndoe",
  //   followers: "800",
  // },
];

function Contact() {
 const { Isdark:isDark } = useContext(ContexApi);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });

    // Reset success message after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div
      className={`min-h-screen py-20 pt-40 ${isDark ? "bg-gray-900" : "bg-gradient-to-br from-blue-50 via-white to-purple-50"}`}
      id="contact"
    >
      {/* Theme Toggle */}
 
      <div className="mx-auto max-w-7xl px-6">
        <Heading>Get In Touch</Heading>

        {/* Contact Stats */}
        <ContactStats isDark={isDark} />

        {/* Main Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <ContactForm
            formData={formData}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            isSubmitting={isSubmitting}
            submitted={submitted}
            isDark={isDark}
          />

          {/* Contact Methods */}
          <ContactMethods methods={contactMethods} isDark={isDark} />
        </div>

        {/* Social Links */}
        <SocialLinks links={socialLinks} isDark={isDark} />

        {/* Availability Status */}
        <AvailabilityStatus isDark={isDark} />
      </div>
    </div>
  );
}

function ContactStats({ isDark }) {
  const stats = [
    {
      icon: <FaRocket />,
      label: "Response Time",
      value: "< 24h",
      color: "bg-blue-500",
    },
    {
      icon: <FaGlobe />,
      label: "Time Zone",
      value: "PST",
      color: "bg-purple-500",
    },
    {
      icon: <FaHeart />,
      label: "Happy Clients",
      value: "50+",
      color: "bg-red-500",
    },
    {
      icon: <FaStar />,
      label: "Projects Done",
      value: "100+",
      color: "bg-yellow-500",
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
            className={`text-2xl font-bold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}
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

function ContactForm({
  formData,
  handleInputChange,
  handleSubmit,
  isSubmitting,
  submitted,
  isDark,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className={`p-8 rounded-3xl ${
        isDark
          ? "bg-white/5 border border-white/10"
          : "bg-white border border-gray-200"
      } backdrop-blur-sm relative overflow-hidden`}
    >
      <div className="relative z-10">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
            <FaPaperPlane className="text-white text-lg" />
          </div>
          <h3
            className={`text-2xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}
          >
            Send Message
          </h3>
        </div>

        <AnimatePresence>
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="text-center py-12"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
                className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <FaHeart className="text-white text-2xl" />
              </motion.div>
              <h4
                className={`text-xl font-semibold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}
              >
                Message Sent!
              </h4>
              <p className={`${isDark ? "text-gray-400" : "text-gray-600"}`}>
                Thank you for reaching out. I'll get back to you soon!
              </p>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div whileFocus={{ scale: 1.02 }}>
                  <label
                    className={`block text-sm font-semibold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}
                  >
                    Your Name
                  </label>
                  <div className="relative">
                    <FaUser
                      className={`absolute left-3 top-3 ${isDark ? "text-gray-400" : "text-gray-500"}`}
                    />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className={`w-full pl-10 pr-4 py-3 rounded-xl border transition-all duration-300 ${
                        isDark
                          ? "bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-purple-400 focus:bg-white/10"
                          : "bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-500 focus:border-purple-500 focus:bg-white"
                      } focus:outline-none focus:ring-2 focus:ring-purple-500/20`}
                      placeholder="John Doe"
                    />
                  </div>
                </motion.div>

                <motion.div whileFocus={{ scale: 1.02 }}>
                  <label
                    className={`block text-sm font-semibold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}
                  >
                    Email Address
                  </label>
                  <div className="relative">
                    <FaEnvelope
                      className={`absolute left-3 top-3 ${isDark ? "text-gray-400" : "text-gray-500"}`}
                    />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className={`w-full pl-10 pr-4 py-3 rounded-xl border transition-all duration-300 ${
                        isDark
                          ? "bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-purple-400 focus:bg-white/10"
                          : "bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-500 focus:border-purple-500 focus:bg-white"
                      } focus:outline-none focus:ring-2 focus:ring-purple-500/20`}
                      placeholder="john@example.com"
                    />
                  </div>
                </motion.div>
              </div>

              <motion.div whileFocus={{ scale: 1.02 }}>
                <label
                  className={`block text-sm font-semibold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}
                >
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 ${
                    isDark
                      ? "bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-purple-400 focus:bg-white/10"
                      : "bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-500 focus:border-purple-500 focus:bg-white"
                  } focus:outline-none focus:ring-2 focus:ring-purple-500/20`}
                  placeholder="Let's work together!"
                />
              </motion.div>

              <motion.div whileFocus={{ scale: 1.02 }}>
                <label
                  className={`block text-sm font-semibold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}
                >
                  Message
                </label>
                <div className="relative">
                  <FaComment
                    className={`absolute left-3 top-3 ${isDark ? "text-gray-400" : "text-gray-500"}`}
                  />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    className={`w-full pl-10 pr-4 py-3 rounded-xl border transition-all duration-300 resize-none ${
                      isDark
                        ? "bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-purple-400 focus:bg-white/10"
                        : "bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-500 focus:border-purple-500 focus:bg-white"
                    } focus:outline-none focus:ring-2 focus:ring-purple-500/20`}
                    placeholder="Tell me about your project..."
                  />
                </div>
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-full -translate-y-16 translate-x-16" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-600/10 to-pink-600/10 rounded-full translate-y-12 -translate-x-12" />
    </motion.div>
  );
}

function ContactMethods({ methods, isDark }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="space-y-6"
    >
      <div className="flex items-center space-x-3 mb-8">
        <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl flex items-center justify-center">
          <FaPhone className="text-white text-lg" />
        </div>
        <h3
          className={`text-2xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}
        >
          Contact Methods
        </h3>
      </div>

      {methods.map((method, index) => (
        <motion.a
          key={method.id}
          href={method.href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          whileHover={{ scale: 1.02, x: 5 }}
          className={`block p-6 rounded-2xl transition-all duration-300 ${
            isDark
              ? "bg-white/5 border border-white/10 hover:bg-white/10"
              : "bg-white border border-gray-200 hover:shadow-lg"
          } backdrop-blur-sm group cursor-pointer`}
        >
          <div className="flex items-center space-x-4">
            <div
              className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${method.color} flex items-center justify-center text-white text-xl shadow-lg group-hover:scale-110 transition-transform`}
            >
              {method.icon}
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h4
                  className={`text-lg font-semibold ${isDark ? "text-white" : "text-gray-900"}`}
                >
                  {method.title}
                </h4>
                {method.available && (
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-xs text-green-500 font-medium">
                      Available
                    </span>
                  </div>
                )}
              </div>
              <p
                className={`text-sm font-medium mb-1 ${isDark ? "text-blue-400" : "text-blue-600"}`}
              >
                {method.value}
              </p>
              <p
                className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}
              >
                {method.description}
              </p>
            </div>
          </div>
        </motion.a>
      ))}
    </motion.div>
  );
}

function SocialLinks({ links, isDark }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
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
        Connect With Me
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {links.map((link, index) => (
          <motion.a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.1, y: -5 }}
            className={`relative p-6 rounded-2xl text-center transition-all duration-300 ${
              isDark
                ? "bg-white/5 border border-white/10 hover:bg-white/10"
                : "bg-gray-50 border border-gray-200 hover:bg-white hover:shadow-lg"
            } backdrop-blur-sm group overflow-hidden`}
          >
            <div
              className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br ${link.color} flex items-center justify-center text-white text-xl shadow-lg group-hover:scale-110 transition-transform`}
            >
              {link.icon}
            </div>
            <h4
              className={`text-sm font-semibold mb-1 ${isDark ? "text-white" : "text-gray-900"}`}
            >
              {link.name}
            </h4>
            {/* <p
              className={`text-xs ${isDark ? "text-gray-400" : "text-gray-600"}`}
            >
              {link.followers}
            </p> */}

            <motion.div
              initial={{ scale: 0 }}
              whileHover={{ scale: 1 }}
              className={`absolute top-2 right-2 w-4 h-4 bg-gradient-to-r ${link.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity`}
            />
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}

function AvailabilityStatus({ isDark }) {
  const [currentTime, setCurrentTime] = useState(new Date());

  React.useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const isAvailable =
    currentTime.getHours() >= 9 && currentTime.getHours() <= 18;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`p-8 rounded-3xl text-center ${
        isDark
          ? "bg-white/5 border border-white/10"
          : "bg-white border border-gray-200"
      } backdrop-blur-sm relative overflow-hidden`}
    >
      <div className="relative z-10">
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className={`w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center ${
            isAvailable ? "bg-green-500" : "bg-orange-500"
          } shadow-lg`}
        >
          <div
            className={`w-3 h-3 rounded-full ${isAvailable ? "bg-green-300" : "bg-orange-300"} animate-pulse`}
          />
        </motion.div>

        <h3
          className={`text-2xl font-bold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}
        >
          {isAvailable ? "Currently Available" : "Currently Offline"}
        </h3>

        <p className={`mb-4 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
          Local time: {currentTime.toLocaleTimeString()} PST
        </p>

        <div
          className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full ${
            isAvailable
              ? "bg-green-100 text-green-800"
              : "bg-orange-100 text-orange-800"
          }`}
        >
          <div
            className={`w-2 h-2 rounded-full ${isAvailable ? "bg-green-500" : "bg-orange-500"} animate-pulse`}
          />
          <span className="text-sm font-medium">
            {isAvailable ? "Online & Ready to Chat" : "Will respond within 24h"}
          </span>
        </div>
      </div>

      {/* Background decoration */}
      <div
        className={`absolute inset-0 opacity-5 ${isAvailable ? "bg-green-500" : "bg-orange-500"}`}
      />
    </motion.div>
  );
}

export default Contact;
