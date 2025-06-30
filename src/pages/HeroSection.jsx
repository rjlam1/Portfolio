import { useContext } from "react";
import { Link as ScrollLink } from "react-scroll";
import { FaGithub, FaLinkedin, FaTwitter, FaFileDownload, FaCode, FaServer } from "react-icons/fa";
import { ThemeContext } from "./Theme";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const HeroSection = () => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";
  
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

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
    hidden: { y: 30, opacity: 0 },
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
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
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
      rotate: [-2, 2],
      transition: {
        y: {
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        },
        rotate: {
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }
      }
    }
  };

  const techBubble = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: 1.2 + i * 0.2,
        type: "spring",
        stiffness: 300,
        damping: 10
      }
    })
  };

  return (
    <section
      id="home"
      ref={ref}
      className={`min-h-screen flex items-center pt-20 pb-16 overflow-hidden 
      ${isDark
        ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
        : "bg-gradient-to-br from-gray-50 via-white to-gray-100"}`}
    >
      <div className="flex flex-col-reverse items-center gap-12 px-6 mx-auto max-w-7xl md:flex-row">
        {/* Left side */}
        <motion.div 
          className="relative space-y-6 text-center md:text-left md:w-1/2"
          variants={container}
          initial="hidden"
          animate={controls}
        >
          {/* Floating tech bubbles */}
          <motion.div
            className="absolute -top-10 -left-10"
            custom={0}
            variants={techBubble}
            animate={controls}
          >
            <div className="p-3 text-green-500 bg-green-100 rounded-full shadow-lg dark:bg-green-900/30">
              <FaCode size={20} />
            </div>
          </motion.div>
          
          <motion.div
            className="absolute top-1/3 -right-10"
            custom={1}
            variants={techBubble}
            animate={controls}
          >
            <div className="p-3 text-green-500 bg-green-100 rounded-full shadow-lg dark:bg-green-900/30">
              <FaServer size={20} />
            </div>
          </motion.div>

          <motion.h1 
            className="text-4xl font-bold leading-tight text-gray-800 md:text-5xl lg:text-6xl dark:text-gray-400"
            variants={item}
          >
            Hi, I'm <motion.span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-400"
              initial={{ backgroundPosition: "0% 50%" }}
              animate={{ backgroundPosition: "100% 50%" }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear"
              }}
            >
              Shafiul Islam
            </motion.span>
          </motion.h1>
          
          <motion.h2 
            className="text-2xl font-semibold text-gray-600 md:text-3xl dark:text-gray-400"
            variants={item}
          >
            <span className="relative inline-block overflow-hidden">
              <span className="relative z-10">Full Stack Web Developer</span>
              <motion.span 
                className="absolute bottom-0 left-0 w-full h-2 bg-green-400 opacity-30 -z-0"
                initial={{ scaleX: 0, originX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              />
            </span>
          </motion.h2>
          
          <motion.p 
            className="max-w-lg text-lg text-gray-600 dark:text-gray-400"
            variants={item}
          >
            I build fast, responsive, and user-friendly web applications using modern technologies like React, Node.js, and MongoDB.
          </motion.p>

          <motion.div 
            className="flex flex-col justify-center gap-4 pt-4 sm:flex-row md:justify-start"
            variants={item}
          >
            <motion.a
              href="/resume.pdf"
              download="Shafiul_Islam_Resume.pdf"
              className="relative flex items-center justify-center gap-2 px-8 py-3 font-medium text-white transition-all transform bg-green-600 shadow-lg rounded-xl hover:bg-green-700 group"
              whileHover={{ 
                y: -5,
                boxShadow: "0 10px 20px rgba(22, 163, 74, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Download Resume <FaFileDownload />
              </span>
              <span className="absolute inset-0 overflow-hidden rounded-xl">
                <span className="absolute inset-0 transition-all duration-300 opacity-0 bg-gradient-to-r from-green-500 to-teal-500 group-hover:opacity-100" />
              </span>
            </motion.a>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                offset={-80}
                spy={true}
                className="relative flex items-center justify-center gap-2 px-8 py-3 font-medium text-green-600 transition-all border-2 border-green-600 cursor-pointer rounded-xl hover:bg-green-50 dark:hover:bg-gray-800 group"
              >
                <span className="relative z-10">Contact Me</span>
                <motion.span 
                  className="absolute inset-0 w-0 transition-all duration-300 ease-out bg-green-600 group-hover:w-full -z-0 opacity-10"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                />
              </ScrollLink>
            </motion.div>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="flex justify-center gap-4 pt-4 md:justify-start"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 1.0
                }
              }
            }}
            initial="hidden"
            animate={controls}
          >
            {[
              { icon: <FaGithub />, url: "https://github.com/rjlam1", label: "GitHub" },
              { icon: <FaLinkedin />, url: "https://linkedin.com/in/shafiul-dev", label: "LinkedIn" },
              { icon: <FaTwitter />, url: "https://x.com/home", label: "Twitter" }
            ].map((social, index) => (
              <motion.a 
                key={index}
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative p-3 text-2xl text-gray-700 transition-colors dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 group"
                aria-label={social.label}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 15
                    }
                  }
                }}
                whileHover={{ 
                  y: -5,
                  scale: 1.1,
                  transition: { type: "spring", stiffness: 500 }
                }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="relative z-10">{social.icon}</span>
                <span className="absolute inset-0 transition-all duration-300 scale-75 bg-green-500 rounded-full opacity-0 group-hover:opacity-10 group-hover:scale-100" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right side - Profile Photo */}
        <motion.div 
          className="relative flex justify-center md:w-1/2"
          variants={photoContainer}
          initial="hidden"
          animate={controls}
        >
          <div className="relative">
            <motion.div
              className="relative z-10 overflow-hidden border-4 border-white shadow-2xl w-72 md:w-96 rounded-2xl dark:border-gray-800"
              variants={floatingAnimation}
              animate="float"
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
              }}
            >
              <motion.img
                src="https://i.ibb.co/TDCxX5Mw/1750277659193-1.jpg"
                alt="Shafiul Islam"
                className="w-full h-auto"
              />
            </motion.div>
            
            <motion.div 
              className="absolute z-0 w-full h-full border-4 border-green-400 -bottom-4 -right-4 rounded-2xl"
              initial={{ opacity: 0, x: -20, y: -20 }}
              animate={{ 
                opacity: 1, 
                x: 0, 
                y: 0,
                transition: { 
                  delay: 0.8,
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }
              }}
            />
            
            {/* Floating elements for decoration */}
            <motion.div
              className="absolute z-0 w-20 h-20 bg-green-400 rounded-full -top-8 -left-8 opacity-20 blur-xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            
            <motion.div
              className="absolute z-0 w-12 h-12 bg-teal-400 rounded-full -bottom-12 -right-8 opacity-20 blur-lg"
              animate={{
                scale: [1, 1.6, 1],
                opacity: [0.2, 0.5, 0.2]
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                repeatType: "reverse",
                delay: 1
              }}
            />

            <motion.div
              className="absolute z-0 w-8 h-8 bg-green-300 rounded-full -top-4 -right-12 opacity-20 blur-md"
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.2, 0.3, 0.2]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
                delay: 1.5
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;