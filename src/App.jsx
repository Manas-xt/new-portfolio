import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import { motion, AnimatePresence } from 'framer-motion';
import CustomCursor from './components/CustomCursor';

import { AboutSection } from './components/export/AboutSection'
import { BackgroundBeamsWithCollisionDemo } from './components/export/BackgroundBeamsWithCollisionDemo'
import { FloatingDockDemo } from './components/export/FloatingDockDemo'
import { IconCloudDemo } from './components/export/IconCloudDemo'
import Projects from './components/export/Projects'
import { BackgroundLinesDemo } from './components/export/BackgroundLinesDemo'
import LoadingAnimation from './components/LoadingAnimation'
import ResumePage from './components/export/ResumePage'

function MainContent() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Show loading animation for exactly 5 seconds
    const timer = setTimeout(() => {
      console.log('5 seconds passed, showing main content');
      setIsLoading(false);
    }, 4000);

    return () => {
      console.log('Cleaning up timer');
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="App relative w-full overflow-x-hidden">
      <AnimatePresence mode='wait'>
        {isLoading ? (
          <motion.div
            key="loading"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full h-screen"
          >
            <LoadingAnimation />
          </motion.div>
        ) : (
          <motion.div
            key="main-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8,
              ease: "easeOut"
            }}
            className="bg-black min-h-screen w-full relative"
          >
            <div className="bg-black w-full h-screen"  id="background-beams">
              <BackgroundBeamsWithCollisionDemo />
            </div>

            <div className="relative z-10 px-4 md:px-6 lg:px-8" id="about">
              <section className="w-full py-8 md:py-12">
                <AboutSection  />
              </section>

              <section id="icon-cloud" className="w-full min-h-screen flex flex-col md:flex-row justify-center items-center py-8 md:py-12">
                <IconCloudDemo />
              </section>

              <section className="w-full py-8 md:py-12" id="projects">
                <Projects  />
              </section>

              <div className="relative z-0 mt-80 md:mt-0"  id="background-lines" >
                <BackgroundLinesDemo/>
              </div>

              <div className="fixed bottom-0 left-0 right-0 z-50">
                <FloatingDockDemo />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function App() {
  return (
    <div className="relative">
      <CustomCursor />
      <Router>
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/resume" element={<ResumePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App
