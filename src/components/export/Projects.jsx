import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Weather Monitoring System",
    description: "Real-time weather tracking system with interactive dashboards, alerts, and historical data analysis.",
    image: "./src/assets/1.png",
    link: "https://wms.manaskumar.me/"
  },
  {
    title: "Employee Management System",
    description: "Comprehensive HR solution for managing employee data, attendance, and performance tracking.",
    image: "./src/assets/3.png",
    link: "https://nsp.manaskumar.me/"
  },
  {
    title: "AI Trip Planner",
    description: "AI-powered travel itinerary generator with personalized recommendations and real-time updates.",
    image: "./src/assets/5.png",
    link: "https://digital-clock-7apia0l5u-manas-kumars-projects-514f9a69.vercel.app/"
  }
];

const Projects = () => {
  return (
    <section className="relative py-12 md:py-24" id="Projects">
      <div className="container mx-auto px-4 md:px-5">
        {/* Section Title */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-2xl md:text-3xl font-bold text mb-2 
            bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600
            [text-shadow:_0_0_10px_rgb(168_85_247_/_0.5),_0_0_20px_rgb(168_85_247_/_0.3)]">
            Featured Projects
          </h2>
          <div className="w-16 h-0.5 bg-purple-500 mx-auto rounded-full 
            shadow-[0_0_10px_rgb(168_85_247_/_0.7),_0_0_20px_rgb(168_85_247_/_0.5)]"></div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index }}
              className="flex flex-col h-full"
            >
              {/* Card */}
              <div className="group h-full border border-purple-500/30 rounded-[1.5rem] md:rounded-[2rem] 
                overflow-hidden bg-black/40 backdrop-blur-sm hover:border-purple-500/50 
                transition-colors duration-300 flex flex-col">
                {/* Image Container */}
                <div className="relative h-40 md:h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-4 md:p-6 flex flex-col flex-grow">
                  <h3 className="text-lg md:text-xl font-bold text-purple-400 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-white/70 text-sm md:text-base mb-4 flex-grow">
                    {project.description}
                  </p>
                  
                  {/* Technology Description */}
                  <p className="text-purple-300/60 text-xs md:text-sm mb-4 italic">
                    {project.tech}
                  </p>

                  {/* Live Demo Link */}
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 
                    transition-colors group/link text-sm md:text-base mt-auto"
                  >
                    <span className="group-hover/link:underline">View Project</span>
                    <ExternalLink className="ml-1 w-3 h-3 md:w-4 md:h-4 
                      group-hover/link:translate-x-1 group-hover/link:-translate-y-1 
                      transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-8 md:mt-12"
        >
          {/* Add your View More button here if needed */}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 