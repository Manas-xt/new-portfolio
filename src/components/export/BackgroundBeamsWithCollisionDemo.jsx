import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { motion } from "framer-motion";

export function BackgroundBeamsWithCollisionDemo() {
  return (
    (<BackgroundBeamsWithCollision>
       <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4">
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
        Hello Everyone, I'm Manas Kumar
        </div>
        <div
          className="font-bold md:text-4xl  py-4 text-transparent bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)] bg-clip-text bg-no-repeat">
          Student | Software Developer | Tech Enthusiast
        </div>
        <a href="#about">
          <button
            className="relative backdrop-blur-md 
            bg-gradient-to-r from-purple-900/50 via-indigo-800/50 to-purple-900/50
            hover:from-purple-800/50 hover:via-indigo-700/50 hover:to-purple-800/50
            border border-purple-500/20
            font-bold text-white
            px-8 py-4 rounded-full 
            hover:scale-105 
            transition-all duration-300 
            shadow-[0_4px_20px_rgba(147,51,234,0.3)]
            hover:shadow-[0_4px_20px_rgba(147,51,234,0.5)]
            hover:border-purple-400/40
            group
            text-xl md:text-2xl
            min-w-[150px] md:min-w-[150px]"
          >
            <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent group-hover:from-purple-300 group-hover:to-indigo-300">
              About me
            </span>
          </button>
        </a>
      </motion.div>
    </BackgroundBeamsWithCollision>)
  );
}
