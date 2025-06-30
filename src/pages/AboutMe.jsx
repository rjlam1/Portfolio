import React, { useContext } from "react";
import { ThemeContext } from "./Theme";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaCode, FaServer, FaCamera, FaBookOpen } from "react-icons/fa";

const AboutMe = () => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        mass: 0.5
      }
    }
  };

  const photoContainer = {
    hidden: { opacity: 0, x: -50, rotate: -5 },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 20,
        mass: 0.5
      }
    }
  };

  const floatingAnimation = {
    float: {
      y: [-15, 15],
      rotate: [-3, 3],
      transition: {
        y: {
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        },
        rotate: {
          duration: 7,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }
      }
    }
  };

  const aboutItems = [
    {
      title: "What I enjoy:",
      desc: "Building full-stack applications with clean, efficient code and intuitive user interfaces. I particularly love working with React and Node.js.",
      icon: <FaCode size={24} className="text-green-500" />
    },
    {
      title: "Beyond coding:",
      desc: "When I'm not programming, you can find me playing cricket, reading tech blogs, or exploring new hiking trails. I'm also passionate about photography and graphic design.",
      icon: <FaCamera size={24} className="text-green-500" />
    },
    {
      title: "My approach:",
      desc: "I believe in continuous learning and staying updated with industry trends. I enjoy collaborating with others and contributing to open-source projects.",
      icon: <FaBookOpen size={24} className="text-green-500" />
    },
  ];

  return (
    <section 
      className={`relative ${isDark ? "bg-gray-900" : "bg-white"} py-28 px-6 overflow-hidden`} 
      id="about"
      ref={ref}
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 left-0 w-64 h-64 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10 blur-3xl"
        style={{ background: isDark ? "#4ade80" : "#16a34a" }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.05, 0.15, 0.05]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <motion.div
        className="absolute bottom-0 right-0 w-64 h-64 translate-x-1/2 translate-y-1/2 rounded-full opacity-10 blur-3xl"
        style={{ background: isDark ? "#22d3ee" : "#0d9488" }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.05, 0.15, 0.05]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 2
        }}
      />
      
      <div className="mx-auto max-w-7xl">
        <motion.div 
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            type: "spring",
            stiffness: 100,
            damping: 15
          }}
        >
          <motion.h2 
            className={`text-4xl md:text-5xl font-bold ${isDark ? "text-white" : "text-gray-800"} mb-4`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            About <motion.span 
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
            >
              Me
            </motion.span>
          </motion.h2>
          <motion.div
            className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-green-500 to-teal-400"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ 
              delay: 0.4,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1]
            }}
          />
        </motion.div>
        
        <motion.div 
          className="flex flex-col items-center gap-16 md:flex-row"
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Image */}
          <motion.div 
            className="relative flex justify-center md:w-1/3"
            variants={photoContainer}
          >
            <div className="relative group">
              <motion.div
                className="relative z-10 overflow-hidden shadow-2xl rounded-2xl"
                variants={floatingAnimation}
                animate="float"
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
              >
                <motion.img
                  src="https://i.ibb.co/TDCxX5Mw/1750277659193-1.jpg"
                  alt="About Shafiul"
                  className={`w-72 md:w-80 border-4 ${isDark ? "border-gray-800" : "border-white"}`}
                />
              </motion.div>
              
              <motion.div 
                className={`absolute -inset-4 rounded-2xl ${isDark ? "bg-green-600/20" : "bg-green-600/10"} -z-10`}
                initial={{ rotate: 0 }}
                animate={{ rotate: 3 }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              
              {/* Floating tech icons */}
              <motion.div
                className="absolute flex items-center justify-center w-16 h-16 rounded-full shadow-lg -top-6 -left-6 bg-green-100/80 dark:bg-green-900/30"
                animate={{
                  y: [-10, 10],
                  transition: {
                    y: {
                      duration: 4,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut"
                    }
                  }
                }}
              >
                <FaServer className="text-green-600 dark:text-green-400" />
              </motion.div>
              
              <motion.div
                className="absolute flex items-center justify-center w-16 h-16 rounded-full shadow-lg -bottom-6 -right-6 bg-green-100/80 dark:bg-green-900/30"
                animate={{
                  y: [10, -10],
                  transition: {
                    y: {
                      duration: 5,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                      delay: 1
                    }
                  }
                }}
              >
                <FaCode className="text-green-600 dark:text-green-400" />
              </motion.div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div 
            className="space-y-10 md:w-2/3"
            variants={container}
          >
            <motion.h3 
              className={`text-3xl md:text-4xl font-semibold ${isDark ? "text-white" : "text-gray-800"}`}
              variants={item}
            >
              I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-400">Shafiul Islam</span>, a passionate developer from Bangladesh
            </motion.h3>
            
            <motion.p 
              className={`text-lg md:text-xl ${isDark ? "text-gray-300" : "text-gray-600"} leading-relaxed`}
              variants={item}
            >
              My journey in web development began in 2018 when I built my first website using HTML and CSS. Since then, I've evolved into a full-stack developer with expertise in modern JavaScript frameworks and cloud technologies.
            </motion.p>
            
            <motion.div 
              className="space-y-6"
              variants={container}
            >
              {aboutItems.map((item, i) => (
                <motion.div 
                  key={i} 
                  className={`flex items-start gap-6 p-6 transition-all duration-300 rounded-xl ${isDark ? "bg-gray-800/50 hover:bg-gray-800" : "bg-gray-100/50 hover:bg-gray-100"} group`}
                  variants={item}
                  whileHover={{ 
                    x: 10,
                    boxShadow: isDark 
                      ? "0 10px 25px -5px rgba(34, 197, 94, 0.2)" 
                      : "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                    transition: {
                      type: "spring",
                      stiffness: 300
                    }
                  }}
                >
                  <motion.div 
                    className={`flex items-center justify-center w-14 h-14 p-2 transition-all duration-300 rounded-full ${isDark ? "bg-green-900/30 group-hover:bg-green-900/50" : "bg-green-100 group-hover:bg-green-200"}`}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ 
                      delay: 0.2 * i,
                      type: "spring",
                      stiffness: 300
                    }}
                    whileHover={{
                      rotate: 15,
                      scale: 1.1
                    }}
                  >
                    {item.icon}
                  </motion.div>
                  <div>
                    <h4 className={`text-xl md:text-2xl font-medium mb-3 ${isDark ? "text-white" : "text-gray-800"}`}>
                      {item.title}
                    </h4>
                    <p className={`${isDark ? "text-gray-400" : "text-gray-600"}`}>
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;