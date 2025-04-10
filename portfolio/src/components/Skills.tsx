import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  'React',
  'JavaScript',
  'HTML',
  'CSS',
  // Add more skills as needed
];

const Skills: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-gray-200 text-gray-800 px-4 py-2 rounded text-sm"
            >
              {skill}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 