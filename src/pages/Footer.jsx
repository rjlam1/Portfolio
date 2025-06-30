import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useContext } from "react";
import { ThemeContext } from "./Theme";

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  // Enhanced animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
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
    }
  };

  const socialIconHover = {
    scale: 1.3,
    rotate: [0, 15, -15, 0],
    color: isDark ? "#22c55e" : "#16a34a",
    transition: { 
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  };

  const logoHover = {
    scale: 1.05,
    transition: { 
      type: "spring",
      stiffness: 300
    }
  };

  const glowEffect = {
    hidden: { textShadow: "0 0 0 rgba(0,0,0,0)" },
    visible: {
      textShadow: isDark 
        ? "0 0 10px rgba(34, 197, 94, 0.5)" 
        : "0 0 10px rgba(22, 163, 74, 0.3)",
      transition: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 2
      }
    }
  };

  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ 
        opacity: 1,
        transition: { duration: 0.8 }
      }}
      viewport={{ once: true, margin: "-50px" }}
      className={`relative ${isDark ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"} py-16 px-6 overflow-hidden`}
    >
      {/* Decorative background elements */}
      <motion.div
        className="absolute bottom-0 left-0 w-64 h-64 -translate-x-1/2 translate-y-1/2 rounded-full opacity-10 blur-3xl"
        style={{ background: isDark ? "#4ade80" : "#16a34a" }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.05, 0.15, 0.05]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <div className="mx-auto max-w-7xl">
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col items-center justify-between md:flex-row"
        >
          <motion.div 
            variants={item}
            whileHover={logoHover}
            className="mb-8 text-center md:mb-0 md:text-left"
          >
            <motion.h2 
              className="mb-2 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-400"
              whileHover={glowEffect}
            >
              Shafiul.dev
            </motion.h2>
            <p className={`${isDark ? "text-gray-400" : "text-gray-600"}`}>
              Full Stack Web Developer
            </p>
          </motion.div>

          <motion.div 
            variants={container}
            className="flex flex-col items-center md:items-end"
          >
            <motion.div 
              variants={container}
              className="flex gap-6 mb-6"
            >
              {[
                {
                  href: "https://github.com/rjlam1",
                  icon: <FaGithub size={24} />,
                  label: "GitHub",
                },
                {
                  href: "https://linkedin.com/in/shafiul-dev",
                  icon: <FaLinkedin size={24} />,
                  label: "LinkedIn",
                },
                {
                  href: "https://x.com/home",
                  icon: <FaTwitter size={24} />,
                  label: "Twitter",
                },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  variants={item}
                  whileHover={socialIconHover}
                  whileTap={{ scale: 0.9 }}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`p-3 rounded-full transition-colors ${
                    isDark
                      ? "bg-gray-800 text-gray-300 hover:bg-green-900/30 hover:text-green-400"
                      : "bg-gray-200 text-gray-700 hover:bg-green-100 hover:text-green-600"
                  }`}
                >
                  <span className="relative z-10">{social.icon}</span>
                  <span className="absolute inset-0 transition-all duration-300 bg-green-500 rounded-full opacity-0 hover:opacity-10" />
                </motion.a>
              ))}
            </motion.div>
            <motion.p 
              variants={item}
              className={`${isDark ? "text-gray-500" : "text-gray-500"} text-sm`}
            >
              &copy; {new Date().getFullYear()} Shafiul Islam. All rights reserved.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;