import React from "react";
import { motion } from "framer-motion";

const ServicePagesHeroSection = ({heading,description,buttonText}) => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-cyan-100 to-blue-200 px-6 md:px-20 text-center">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold text-gray-900"
      >
        {heading}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mt-6 text-lg md:text-2xl text-gray-700 max-w-2xl"
      >
       {description}
      </motion.p>
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="mt-8 px-10 py-4 rounded-full bg-blue-700 hover:bg-blue-800 text-white font-semibold shadow-xl transition"
      >
        {buttonText}
      </motion.button>
    </section>
  );
};

export default ServicePagesHeroSection;
