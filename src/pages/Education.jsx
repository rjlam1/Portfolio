import React, { useContext } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "./Theme";
import { FaGraduationCap, FaSchool, FaUniversity } from "react-icons/fa";

const EducationExperience = () => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  const education = [
    {
      degree: "B.Sc. in Mathematics",
      institution: "Rajendra College, Faridpur",
      year: "Ongoing",
      description: "Studying core mathematics and exploring programming alongside academic learning.",
      icon: <FaUniversity className="text-green-500" />
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Government Yasin College, Faridpur",
      year: "2021",
      description: "Science background with GPA: 5.00 out of 5.00",
      icon: <FaSchool className="text-green-500" />
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Police Line High School and College",
      year: "2019",
      description: "Science background with GPA: 4.00 out of 5.00",
      icon: <FaGraduationCap className="text-green-500" />
    }
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, x: -50 },
    show: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 12,
        mass: 0.5
      }
    }
  };

  const title = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.8
      }
    }
  };

  const highlight = {
    hidden: { scale: 0, rotate: -30 },
    show: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
        delay: 0.3
      }
    }
  };

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    opacity: [1, 0.8, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const iconHover = {
    scale: 1.2,
    rotate: [0, 15, -15, 0],
    transition: {
      duration: 0.8
    }
  };

  return (
    <section className={`relative py-24 px-6 ${isDark ? "bg-gray-900/50" : "bg-gray-50"}`} id="education">
      {/* Background decorative elements */}
      <motion.div
        className="absolute top-0 left-0 w-32 h-32 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-xl"
        style={{ background: isDark ? "#4ade80" : "#16a34a" }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mb-16 text-center"
          initial="hidden"
          animate="show"
          variants={title}
        >
          <motion.h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-800"}`}>
            My <motion.span 
              className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-400"
              variants={highlight}
              whileHover={{
                scale: 1.1,
                backgroundPosition: "100% 50%",
                transition: { 
                  duration: 0.5,
                  backgroundPosition: {
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "linear"
                  }
                }
              }}
            >Education</motion.span>
          </motion.h2>
          <motion.p 
            className={`text-lg max-w-2xl mx-auto ${isDark ? "text-gray-400" : "text-gray-600"}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            My academic journey and qualifications
          </motion.p>
        </motion.div>

        <motion.div 
          className="relative space-y-12"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Animated timeline line */}
          <motion.div 
            className={`absolute left-8 top-0 h-full w-0.5 origin-top ${isDark ? "bg-gray-700" : "bg-gray-200"}`}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          />

          {education.map((edu, index) => (
            <motion.div 
              key={index} 
              className="relative pl-16 group"
              variants={item}
              whileHover={{
                x: 15,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              {/* Animated dot with pulse effect */}
              <motion.div 
                className={`absolute left-8 top-2 w-12 h-12 flex items-center justify-center rounded-full border-4 ${isDark ? "border-green-500 bg-gray-900" : "border-green-500 bg-white"}`}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 400, delay: 0.5 + index * 0.2 }}
                whileHover={{ 
                  scale: 1.2,
                  backgroundColor: "#22c55e",
                  borderColor: isDark ? "#f0fdf4" : "#14532d",
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div 
                  whileHover={iconHover}
                >
                  {edu.icon}
                </motion.div>
                <motion.div 
                  className="absolute inset-0 bg-green-500 rounded-full opacity-0"
                  animate={{ 
                    scale: 1.8,
                    opacity: [0, 0.4, 0],
                    transition: { 
                      repeat: Infinity, 
                      duration: 2.5,
                      delay: 1 + index * 0.3
                    }
                  }}
                />
              </motion.div>

              {/* Content card */}
              <motion.div 
                className={`p-6 rounded-xl shadow-sm border ${isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 + index * 0.2 }}
                whileHover={{ 
                  boxShadow: isDark 
                    ? "0 20px 40px -15px rgba(34, 197, 94, 0.3)" 
                    : "0 20px 40px -15px rgba(0, 0, 0, 0.2)",
                  y: -10,
                  borderColor: isDark ? "#22c55e" : "#16a34a",
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                <motion.h3 
                  className={`text-xl font-bold mb-1 ${isDark ? "text-white" : "text-gray-800"}`}
                  whileHover={{
                    color: "#22c55e",
                    transition: { duration: 0.3 }
                  }}
                >
                  {edu.degree}
                </motion.h3>
                <motion.div 
                  className="flex items-center gap-2 mb-3"
                  animate={pulseAnimation}
                >
                  <motion.p className="font-medium text-green-500">
                    {edu.institution}
                  </motion.p>
                  <motion.span 
                    className={`${isDark ? "bg-gray-700" : "bg-gray-100"} px-2 py-0.5 rounded-full text-xs`}
                    whileHover={{
                      backgroundColor: isDark ? "#22c55e" : "#bbf7d0",
                      color: isDark ? "#f0fdf4" : "#14532d",
                      transition: { duration: 0.3 }
                    }}
                  >
                    {edu.year}
                  </motion.span>
                </motion.div>
                <motion.p 
                  className={`${isDark ? "text-gray-400" : "text-gray-600"}`}
                  whileHover={{
                    color: isDark ? "#e5e7eb" : "#4b5563",
                    transition: { duration: 0.3 }
                  }}
                >
                  {edu.description}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EducationExperience;