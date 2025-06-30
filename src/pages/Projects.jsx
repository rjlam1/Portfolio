import React, { useContext } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import projects from "../../public/Projectsdata";
import { ThemeContext } from "./Theme";

const Projects = () => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  // Enhanced animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 10,
        mass: 0.5
      }
    },
  };

  const cardHover = {
    scale: 1.02,
    y: -5,
    boxShadow: isDark 
      ? "0 15px 30px -10px rgba(34, 197, 94, 0.25)" 
      : "0 15px 30px -10px rgba(0, 0, 0, 0.15)",
    transition: {
      type: "spring",
      stiffness: 300
    }
  };

  const techBubble = {
    hidden: { scale: 0 },
    show: (i) => ({
      scale: 1,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 300,
        damping: 10
      }
    }),
    hover: {
      scale: 1.1,
      y: -3,
      backgroundColor: isDark ? "#22c55e" : "#86efac",
      color: isDark ? "#f0fdf4" : "#14532d",
      transition: { type: "spring", stiffness: 400 }
    }
  };

  const iconHover = {
    rotate: [0, 15, -15, 0],
    transition: { duration: 0.8 }
  };

  return (
    <section className={`py-24  ${isDark ? "bg-gray-900" : "bg-gray-100"}`} id="projects">
      <div className="mx-auto max-w-7xl"> {/* Slightly narrower for better readability */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            transition: {
              type: "spring",
              stiffness: 100,
              damping: 10
            }
          }}
          className="mb-16 text-center"
        >
          <motion.h2 
            className={`text-4xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-800"}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Featured <motion.span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-400"
              initial={{ backgroundPosition: "0% 50%" }}
              animate={{ 
                backgroundPosition: "100% 50%",
                transition: {
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "linear"
                }
              }}
            >Projects</motion.span>
          </motion.h2>
          <motion.p 
            className={`text-lg max-w-2xl mx-auto ${isDark ? "text-gray-400" : "text-gray-600"}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Some of my recent work and contributions
          </motion.p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={cardHover}
              className={`rounded-xl shadow-lg transition-all duration-300 border 
                ${isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"}`}
            >
              {/* Image with enhanced parallax effect */}
              <div className="relative h-48 overflow-hidden rounded-t-xl group">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.8 }}
                />
                <div className="absolute inset-0 flex items-end p-6 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/70 to-transparent group-hover:opacity-100">
                  <motion.h3 
                    className="text-xl font-semibold text-white"
                    initial={{ y: 20 }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    {project.title}
                  </motion.h3>
                </div>
              </div>

              {/* Details */}
              <div className="p-6">
                <h3 className={`text-xl font-semibold mb-3 ${isDark ? "text-white" : "text-gray-800"}`}>
                  {project.title}
                </h3>
                <p className={`mb-5 text-sm ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                  {project.shortDescription}
                </p>

                {/* Tech Stack with enhanced animations */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, i) => (
                    <motion.span
                      key={i}
                      custom={i}
                      variants={techBubble}
                      whileHover="hover"
                      className={`text-xs font-medium px-3 py-1.5 rounded-full 
                        ${isDark
                          ? "bg-green-900/50 text-green-200"
                          : "bg-green-100 text-green-800"
                        }`}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Links with improved animations */}
                <div className={`border-t pt-5 ${isDark ? "border-gray-700" : "border-gray-200"}`}>
                  <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">
                    <motion.a
                      whileHover={{ x: 5 }}
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-green-600 transition-colors hover:text-green-700 dark:hover:text-green-400"
                    >
                      Live Demo
                      <motion.span 
                        animate={{ x: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 2.5 }}
                      >
                        <FaExternalLinkAlt className="ml-2" size={14} />
                      </motion.span>
                    </motion.a>

                    <div className="flex gap-4">
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        href={project.githubLinks.client}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center text-sm font-medium transition-colors
                          ${isDark
                            ? "text-gray-300 hover:text-white"
                            : "text-gray-700 hover:text-gray-900"}`}
                      >
                        <motion.span
                          whileHover={iconHover}
                        >
                          <FaGithub className="mr-2" size={14} />
                        </motion.span>
                        Client
                      </motion.a>

                      {project.githubLinks.server && (
                        <motion.a
                          whileHover={{ scale: 1.1 }}
                          href={project.githubLinks.server}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center text-sm font-medium transition-colors
                            ${isDark
                              ? "text-gray-300 hover:text-white"
                              : "text-gray-700 hover:text-gray-900"}`}
                        >
                          <motion.span
                            whileHover={iconHover}
                          >
                            <FaGithub className="mr-2" size={14} />
                          </motion.span>
                          Server
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;