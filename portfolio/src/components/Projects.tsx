import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Project One',
    image: '/path/to/project1.jpg',
    description: 'A brief description of Project One.',
    techStack: ['React', 'JavaScript', 'CSS'],
    githubLink: 'https://github.com/yourusername/project-one',
    liveDemo: 'https://project-one-demo.com',
  },
  // Add more projects as needed
];

const Projects: React.FC = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover mb-4 rounded" />
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="bg-gray-200 text-gray-800 px-2 py-1 rounded text-sm">{tech}</span>
                ))}
              </div>
              <div className="flex justify-between">
                <a href={project.githubLink} className="text-blue-500 hover:underline">GitHub</a>
                <a href={project.liveDemo} className="text-blue-500 hover:underline">Live Demo</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 