import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="min-h-screen w-full flex items-center justify-center px-4 py-8 md:py-0">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="w-full max-w-5xl"
      >
        {/* Section Title */}
        <motion.div 
          variants={itemVariants}
          className="text-center mb-12 md:mb-24"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-2 
            bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600
            [text-shadow:_0_0_10px_rgb(168_85_247_/_0.5),_0_0_20px_rgb(168_85_247_/_0.3)]">
            About Me
          </h2>
          <div className="w-16 h-0.5 bg-purple-500 mx-auto rounded-full 
            shadow-[0_0_10px_rgb(168_85_247_/_0.7),_0_0_20px_rgb(168_85_247_/_0.5)]"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-0 items-center">
          {/* Image */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center"
          >
            <img
              src="./src/assets/dp.png"
              alt="Manas Kumar"
              className="w-[250px] md:w-[450px] mx-auto transform transition-transform duration-500 hover:scale-105"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            variants={itemVariants}
            className="space-y-4 md:space-y-6 text-center md:text-left"
          >
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
              Hey there 👋, I am Manas Kumar
            </h3>
            
            <div className="text-lg md:text-xl text-purple-400">
              Student | Software Developer | Tech Enthusiast
            </div>
            
            <p className="text-white/80 text-base md:text-lg leading-relaxed">
              Passionate web developer and dedicated student, committed to crafting innovative, user-friendly web solutions. With a blend of creativity and technical expertise, I aim to transform ideas into exceptional digital experiences that engage and inspire users.
            </p>

            <motion.div
              variants={itemVariants}
              className="flex justify-center md:justify-start pt-2"
            >
              <button
                className="relative backdrop-blur-md 
                bg-gradient-to-r from-purple-900/50 via-indigo-800/50 to-purple-900/50
                hover:from-purple-800/50 hover:via-indigo-700/50 hover:to-purple-800/50
                border border-purple-500/20
                font-bold text-white
                px-6 py-3 rounded-full 
                hover:scale-105 
                transition-all duration-300 
                shadow-[0_4px_20px_rgba(147,51,234,0.3)]
                hover:shadow-[0_4px_20px_rgba(147,51,234,0.5)]
                hover:border-purple-400/40
                group
                text-base md:text-lg lg:text-xl
                min-w-[120px]"
              >
                <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent group-hover:from-purple-300 group-hover:to-indigo-300">
                  My Resume
                </span>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
} 