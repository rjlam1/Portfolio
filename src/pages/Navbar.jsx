import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { FaMoon, FaSun } from "react-icons/fa";
import { ThemeContext } from "./Theme";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isDark = theme === "dark";

  const navItems = [
    { name: "Home", path: "home" },
    { name: "About", path: "about" },
    { name: "Skills", path: "skills" },
    { name: "Projects", path: "projects" },
    { name: "Contact", path: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => setIsOpen(false);

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  const mobileMenuVariants = {
    open: {
      height: "auto",
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    closed: {
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring" }}
      className={`fixed top-0 left-0 z-50 w-full ${
        scrolled
          ? "border-b border-gray-200/50 bg-white/90 dark:bg-gray-900/90 dark:border-gray-800/50"
          : "bg-transparent"
      } backdrop-blur-md transition-all duration-300`}
    >
      <div className="flex items-center justify-between px-6 py-3 mx-auto max-w-7xl">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            to="home"
            smooth={true}
            duration={500}
            offset={-80}
            spy={true}
            className="text-2xl font-bold text-green-600 transition-colors cursor-pointer hover:text-green-700 dark:text-green-500 dark:hover:text-green-400"
            onClick={closeMobileMenu}
          >
            Shafiul.dev
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <motion.ul
          variants={navVariants}
          initial="hidden"
          animate="visible"
          className="items-center hidden gap-8 md:flex"
        >
          {navItems.map((item) => (
            <motion.li key={item.path} variants={itemVariants}>
              <Link
                activeClass="text-green-600 dark:text-green-400 [&>span]:w-full"
                to={item.path}
                spy={true}
                smooth={true}
                duration={500}
                offset={-80}
                className="relative px-1 py-2 font-medium text-gray-600 transition-colors cursor-pointer hover:text-green-600 dark:text-gray-400 group"
                onClick={closeMobileMenu}
              >
                {item.name}
                <motion.span
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600"
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600"
                  layoutId="nav-underline"
                  transition={{ duration: 0.3, type: "spring" }}
                />
              </Link>
            </motion.li>
          ))}
          <motion.li variants={itemVariants}>
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 ml-4 text-gray-600 transition-colors duration-300 rounded-full dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDark ? <FaSun size={20} /> : <FaMoon size={20} />}
            </motion.button>
          </motion.li>
        </motion.ul>

        {/* Mobile Buttons */}
        <div className="flex items-center gap-4 md:hidden">
          <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 text-gray-600 transition-colors duration-300 rounded-full dark:text-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDark ? <FaSun size={20} /> : <FaMoon size={20} />}
          </motion.button>
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 text-gray-700 transition-colors rounded-md dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
            className="overflow-hidden border-t md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-gray-300/50 dark:border-gray-800/50"
          >
            <motion.ul className="px-6 py-3 space-y-3">
              {navItems.map((item) => (
                <motion.li
                  key={item.path}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ type: "spring" }}
                >
                  <Link
                    activeClass="bg-green-100/50 dark:bg-green-900/20 text-green-600 font-semibold dark:text-green-400"
                    to={item.path}
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    onClick={closeMobileMenu}
                    className="block px-3 py-2 text-gray-700 transition-colors rounded-md cursor-pointer dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;