import { FC } from 'react';
import { motion } from 'framer-motion';

const AboutMe: FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <motion.img
          src="/path/to/your/photo.jpg"
          alt="Your Name"
          className="w-48 h-48 rounded-full mx-auto md:mx-0 md:mr-8"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center md:text-left"
        >
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg">
            I am a passionate frontend developer with experience in building responsive and interactive web applications.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;