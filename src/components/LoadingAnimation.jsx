import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { motion } from 'framer-motion';

const LoadingAnimation = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black gap-4">
      <DotLottieReact
        src="https://lottie.host/f75a9ecb-b253-451b-a45f-d5b0e431f5e2/zNBM3F4Bjk.lottie"
        loop
        autoplay
        style={{ width: 150, height: 150 }}
      />
      
      <motion.div
        className="text-xl md:text-2xl font-medium text-white"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0.5, 1, 0.5],
          transition: {
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      >
        Loading...
      </motion.div>
    </div>
  );
};

export default LoadingAnimation; 