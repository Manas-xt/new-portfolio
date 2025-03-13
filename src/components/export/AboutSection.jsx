import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Link } from 'react-router-dom';
import { FileText } from 'lucide-react';
import image from "../../assets/dp.png";
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

  const techStickers = [
    { icon: "⚛️", label: "React", position: "top-10 left-[10%]" },
    { icon: "🚀", label: "Performance", position: "top-20 right-[15%]" },
    { icon: "💻", label: "Code", position: "bottom-20 left-[20%]" },
    { icon: "🎨", label: "Design", position: "top-32 left-[30%]" },
    { icon: "🔧", label: "Tools", position: "bottom-32 right-[25%]" },
    { icon: "📱", label: "Responsive", position: "top-16 right-[35%]" },
    { icon: "🌐", label: "Web", position: "bottom-16 left-[35%]" },
    { icon: "⚡", label: "Fast", position: "bottom-24 right-[15%]" },
    { icon: "🔥", label: "Hot", position: "top-24 left-[15%]" },
    { icon: "🎯", label: "Precise", position: "bottom-10 right-[30%]" },
  ];

  return (
    <section className="min-h-screen w-full flex items-center justify-center px-4 py-8 md:py-0 relative">
      {/* Background stickers layer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
        {techStickers.map((sticker, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: 100, // Reduced opacity
              scale: 1,
              rotate: Math.random() * 30 - 15
            }}
            transition={{ 
              delay: index * 0.1,
              duration: 0.5,
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: Math.random() * 5 + 5
            }}
            className={`absolute ${sticker.position} flex flex-col items-center`}
          >
            <span className="text-4xl md:text-5xl filter blur-[1px]">{sticker.icon}</span>
            <span className="text-xs md:text-sm text-purple-400/20 mt-1 font-mono">
              {sticker.label}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Main content with higher z-index */}
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="w-full max-w-5xl relative z-10"
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
              src={image}
              alt="Manas Kumar"
              className="w-[250px] md:w-[450px] mx-auto transform transition-transform duration-500 hover:scale-105"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            variants={itemVariants}
            className="space-y-4 md:space-y-6 text-center md:text-left bg-black/40 backdrop-blur-sm rounded-xl p-6"
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
              <Link
                to="/resume"
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
                  min-w-[120px]
                  flex items-center justify-center gap-2"
              >
                <FileText className="w-5 h-5" />
                <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent group-hover:from-purple-300 group-hover:to-indigo-300">
                  My Resume
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
} 