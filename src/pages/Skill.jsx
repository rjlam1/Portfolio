import React, { useContext } from "react";
import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, 
  FaGithub, FaFigma, FaNpm, FaBootstrap
} from "react-icons/fa";
import {
  SiTailwindcss, SiMongodb, SiFirebase, SiExpress, SiRedux,
  SiNextdotjs, SiTypescript, SiGraphql, SiJest,
  SiPostgresql, SiDocker, SiGit
} from "react-icons/si";
import { ThemeContext } from "./Theme";
import { motion } from "framer-motion";

const Skills = () => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  const skillCategories = [
    {
      name: "Frontend",
      skills: [
        { name: "HTML5", icon: <FaHtml5 className="text-orange-600" /> },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" /> },
        { name: "JavaScript", icon: <FaJsSquare className="text-yellow-500" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
        { name: "React.js", icon: <FaReact className="text-cyan-500" /> },
        { name: "Redux", icon: <SiRedux className="text-purple-600" /> },
        { name: "Next.js", icon: <SiNextdotjs className={isDark ? "text-white" : "text-black"} /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
        { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
      ]
    },
    {
      name: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
        { name: "Express.js", icon: <SiExpress className={isDark ? "text-white" : "text-gray-800"} /> },
        { name: "GraphQL", icon: <SiGraphql className="text-pink-600" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-700" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700" /> },
      ]
    },
    {
      name: "Tools & Others",
      skills: [
        { name: "Git", icon: <SiGit className="text-orange-600" /> },
        { name: "GitHub", icon: <FaGithub className={isDark ? "text-white" : "text-black"} /> },
        { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
        { name: "Docker", icon: <SiDocker className="text-blue-500" /> },
        { name: "Jest", icon: <SiJest className="text-red-600" /> },
        { name: "Figma", icon: <FaFigma className="text-pink-500" /> },
        { name: "NPM", icon: <FaNpm className="text-red-600" /> },
      ]
    }
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 10,
        mass: 0.5
      } 
    }
  };

  const card = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { 
      opacity: 1, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    },
    hover: {
      y: -15,
      boxShadow: isDark 
        ? "0 25px 50px -12px rgba(74, 222, 128, 0.3)" 
        : "0 25px 50px -12px rgba(22, 163, 74, 0.2)",
      transition: {
        type: "spring",
        stiffness: 400
      }
    }
  };

  const iconHover = {
    scale: [1, 1.3, 1.2],
    rotate: [0, 15, -15, 0],
    transition: {
      duration: 0.8
    }
  };

  const titleGlow = {
    hidden: { textShadow: "0 0 0 rgba(0,0,0,0)" },
    visible: {
      textShadow: isDark 
        ? "0 0 15px rgba(74, 222, 128, 0.7)" 
        : "0 0 15px rgba(22, 163, 74, 0.5)",
      transition: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 2
      }
    }
  };

  const floatingTech = {
    float: {
      y: [-10, 10],
      transition: {
        y: {
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }
      }
    }
  };

  return (
    <section className={`${isDark ? "bg-gradient-to-b from-gray-900 to-gray-800" : "bg-gradient-to-b from-gray-50 to-gray-100"} py-28 px-6 overflow-hidden`} id="skills">
      {/* Floating tech icons in background */}
      <motion.div
        className="absolute text-6xl top-20 left-10 opacity-10"
        animate={floatingTech}
      >
        <FaReact className="text-cyan-500" />
      </motion.div>
      <motion.div
        className="absolute text-6xl bottom-20 right-10 opacity-10"
        animate={{
          ...floatingTech.float,
          transition: {
            ...floatingTech.float.transition,
            delay: 1
          }
        }}
      >
        <FaNodeJs className="text-green-600" />
      </motion.div>

      <div className="mx-auto max-w-7xl">
        <motion.div 
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            transition: {
              type: "spring",
              stiffness: 100,
              damping: 12
            }
          }}
        >
          <motion.h2 
            className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-800"}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              transition: {
                delay: 0.2,
                type: "spring",
                stiffness: 120,
                damping: 10
              }
            }}
          >
            My <motion.span 
              className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-400"
              initial={{ scale: 0, rotate: -30 }}
              animate={{ 
                scale: 1,
                rotate: 0,
                transition: {
                  type: "spring",
                  stiffness: 500,
                  damping: 15,
                  delay: 0.3
                }
              }}
              whileHover={{
                scale: 1.1,
                backgroundPosition: "100% 50%",
                transition: { 
                  type: "spring", 
                  stiffness: 500,
                  backgroundPosition: {
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "linear"
                  }
                }
              }}
            >Skills</motion.span>
          </motion.h2>
          <motion.p 
            className={`text-lg max-w-2xl mx-auto ${isDark ? "text-gray-400" : "text-gray-600"}`}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 1,
              transition: {
                delay: 0.5,
                duration: 0.8
              }
            }}
          >
            Technologies I've mastered to build amazing digital experiences
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid gap-8 md:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={catIdx}
              className={`rounded-2xl p-6 border-2 relative overflow-hidden
                ${isDark ? "bg-gray-800/90 border-gray-700" : "bg-white border-gray-100"}`}
              variants={card}
              whileHover="hover"
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Glow effect */}
              <motion.div 
                className={`absolute inset-0 rounded-2xl opacity-0 ${isDark ? "bg-green-500/10" : "bg-green-400/10"}`}
                whileHover={{
                  opacity: 1,
                  transition: { duration: 0.4 }
                }}
              />
              
              <motion.h3 
                className={`text-2xl font-bold mb-6 pb-3 border-b relative z-10 ${isDark ? "text-white border-gray-700" : "text-gray-800 border-gray-200"}`}
                variants={item}
                whileHover={titleGlow}
              >
                {category.name}
              </motion.h3>
              <div className="relative z-10 grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skillIdx}
                    className={`group flex flex-col items-center justify-center rounded-xl p-4 relative
                      ${isDark ? "bg-gray-700/50 hover:bg-gray-700" : "bg-gray-50 hover:bg-gray-100"}`}
                    variants={item}
                    whileHover={{ 
                      scale: 1.08,
                      boxShadow: isDark 
                        ? "0 10px 25px rgba(74, 222, 128, 0.2)" 
                        : "0 10px 25px rgba(0, 0, 0, 0.1)",
                      transition: { type: "spring", stiffness: 400 }
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Skill icon background glow */}
                    <motion.div 
                      className={`absolute inset-0 rounded-xl opacity-0 ${isDark ? "bg-green-500/10" : "bg-green-400/10"}`}
                      whileHover={{
                        opacity: 1,
                        transition: { duration: 0.4 }
                      }}
                    />
                    
                    <motion.div 
                      className="relative z-10 mb-3 text-4xl"
                      whileHover={iconHover}
                    >
                      {skill.icon}
                    </motion.div>
                    <p className={`${isDark ? "text-gray-200" : "text-gray-800"} font-medium text-center relative z-10`}>
                      {skill.name}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;