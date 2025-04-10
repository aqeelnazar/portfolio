import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h1 className="text-5xl font-bold mb-4">Your Name</h1>
        <h2 className="text-3xl mb-4">Frontend Developer</h2>
        <p className="text-lg max-w-md mx-auto">
          Welcome to my portfolio! I am passionate about building beautiful and functional web applications.
        </p>
      </motion.div>
    </section>
  );
};

export default Hero; 