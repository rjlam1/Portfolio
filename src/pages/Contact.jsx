import React, { useRef, useContext } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import { SiWhatsapp } from "react-icons/si";
import { toast } from "react-toastify";
import { ThemeContext } from "./Theme";

const Contact = () => {
  const form = useRef();
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        toast.success("Message sent successfully!");
        form.current.reset();
      })
      .catch((error) => {
        toast.error("Something went wrong. Please try again.");
        console.error("EmailJS error:", error);
      });
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
        mass: 0.5,
      },
    },
  };

  const socialIconHover = {
    scale: 1.2,
    rotate: [0, 15, -15, 0],
    transition: { duration: 0.5 },
  };

  const buttonHover = {
    scale: 1.03,
    boxShadow: "0 8px 20px rgba(22, 163, 74, 0.3)",
    transition: { type: "spring", stiffness: 300 },
  };

  const formHover = {
    boxShadow: isDark
      ? "0 15px 40px -10px rgba(34, 197, 94, 0.2)"
      : "0 15px 40px -10px rgba(0, 0, 0, 0.15)",
    transition: { duration: 0.3 },
  };

  const inputFocus = {
    boxShadow: "0 0 0 3px rgba(34, 197, 94, 0.3)",
    scale: 1.01,
    transition: { duration: 0.2 },
  };

  return (
    <section
      className={`relative py-24 px-6 ${isDark ? "bg-gray-900" : "bg-white"}`}
      id="contact"
    >
      <motion.div
        className="absolute top-0 left-0 w-64 h-64 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10 blur-3xl"
        style={{ background: isDark ? "#4ade80" : "#16a34a" }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.05, 0.15, 0.05],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <div className="relative z-0 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              type: "spring",
              stiffness: 100,
              damping: 10,
            },
          }}
          className="mb-16 text-center"
        >
          <motion.h2
            className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-800"}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Get In <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-400"
              initial={{ backgroundPosition: "0% 50%" }}
              animate={{
                backgroundPosition: "100% 50%",
                transition: {
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "linear",
                },
              }}
            >Touch</motion.span>
          </motion.h2>
          <motion.p
            className={`text-lg max-w-2xl mx-auto ${isDark ? "text-gray-400" : "text-gray-600"}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Have a project in mind or want to discuss potential opportunities?
            Feel free to reach out!
          </motion.p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-12 md:grid-cols-2"
        >
          {/* Contact Info */}
          <motion.div className="space-y-8" variants={container}>
            {[
              {
                icon: <FaMapMarkerAlt size={20} />,
                title: "Location",
                value: "Dhaka, Bangladesh",
              },
              {
                icon: <FaEnvelope size={20} />,
                title: "Email",
                value: "shafiulislamlam0000@gmail.com",
              },
              {
                icon: <FaPhone size={20} />,
                title: "Phone",
                value: "+880 1708557742",
              },
              {
                icon: <SiWhatsapp size={20} />,
                title: "WhatsApp",
                value: "+880 1708557742",
              },
            ].map((info, index) => (
              <motion.div
                variants={item}
                key={index}
                className="flex items-start gap-6 group"
              >
                <motion.div
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  className={`p-3 mt-1 text-green-600 bg-green-100 rounded-full dark:bg-green-900/30 dark:text-green-400 
                    group-hover:bg-green-200 dark:group-hover:bg-green-800/50 transition-colors`}
                >
                  {info.icon}
                </motion.div>
                <div>
                  <h3 className={`text-xl font-semibold mb-2 ${isDark ? "text-white" : "text-gray-800"}`}>
                    {info.title}
                  </h3>
                  <p className={`${isDark ? "text-gray-400" : "text-gray-600"}`}>
                    {info.value}
                  </p>
                </div>
              </motion.div>
            ))}

            <motion.div variants={item} className="pt-4">
              <h3 className={`text-xl font-semibold mb-4 ${isDark ? "text-white" : "text-gray-800"}`}>
                Connect With Me
              </h3>
              <div className="flex gap-4">
                {[
                  {
                    href: "https://linkedin.com/in/shafiul-dev",
                    icon: <FaLinkedin size={20} />,
                    label: "LinkedIn",
                  },
                  {
                    href: "https://github.com/rjlam1",
                    icon: <FaGithub size={20} />,
                    label: "GitHub",
                  },
                  {
                    href: "https://x.com/home",
                    icon: <FaTwitter size={20} />,
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
                    className={`relative z-0 p-3 rounded-full transition-colors 
                      ${isDark
                        ? "bg-gray-800 text-gray-300 hover:bg-green-900/30 hover:text-green-400"
                        : "bg-gray-100 text-gray-700 hover:bg-green-100 hover:text-green-600"
                      }`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            variants={item}
            ref={form}
            onSubmit={sendEmail}
            className={`relative z-0 p-8 rounded-xl shadow-sm space-y-6 border transition-all 
              ${isDark
                ? "bg-gray-800 border-gray-700"
                : "bg-white border-gray-200"
              }`}
            whileHover={formHover}
          >
            {[
              { label: "Your Name", id: "name", name: "user_name", type: "text" },
              { label: "Your Email", id: "email", name: "user_email", type: "email" },
              { label: "Phone Number", id: "phone", name: "user_phone", type: "tel" },
            ].map((input, i) => (
              <motion.div key={i} variants={item} className="space-y-1">
                <label
                  htmlFor={input.id}
                  className={`block text-sm font-medium ${isDark ? "text-gray-300" : "text-gray-700"}`}
                >
                  {input.label}
                </label>
                <motion.input
                  type={input.type}
                  id={input.id}
                  name={input.name}
                  required
                  className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all 
                    ${isDark
                      ? "bg-gray-700 border-gray-600 text-white"
                      : "bg-white border-gray-300 text-gray-800"
                    }`}
                  whileFocus={inputFocus}
                />
              </motion.div>
            ))}

            <motion.div variants={item} className="space-y-1">
              <label
                htmlFor="message"
                className={`block text-sm font-medium ${isDark ? "text-gray-300" : "text-gray-700"}`}
              >
                Your Message
              </label>
              <motion.textarea
                id="message"
                name="message"
                rows="5"
                required
                className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all 
                  ${isDark
                    ? "bg-gray-700 border-gray-600 text-white"
                    : "bg-white border-gray-300 text-gray-800"
                  }`}
                whileFocus={inputFocus}
              ></motion.textarea>
            </motion.div>

            <motion.button
              type="submit"
              whileHover={buttonHover}
              whileTap={{ scale: 0.95 }}
              className="w-full px-6 py-3 font-medium text-white transition-all bg-green-600 rounded-lg shadow-md hover:bg-green-700 hover:shadow-lg"
            >
              Send Message
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
