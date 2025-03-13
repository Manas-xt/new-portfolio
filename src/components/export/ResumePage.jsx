import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const ResumePage = () => {
  return (
    <div className="min-h-screen bg-black p-4 md:p-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          {/* Back Button */}
          <Link 
            to="/"
            className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Portfolio</span>
          </Link>

          {/* Download Button */}
          <a
            href="./src/assets/resume.pdf"
            download="Manas_Kumar_Resume.pdf"
            className="flex items-center gap-2 px-4 py-2 rounded-full
              bg-gradient-to-r from-purple-600 to-purple-400
              hover:from-purple-700 hover:to-purple-500
              text-white transition-colors duration-300"
          >
            <Download className="w-5 h-5" />
            <span>Download PDF</span>
          </a>

          <a 
            href="./src/assets/resume.pdf" 
            download="YourName_Resume.pdf"
            className="absolute top-4 right-16 text-white/70 hover:text-white transition-colors"
          >
            <Download className="w-6 h-6" />
          </a>
        </div>

        {/* Resume Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-black border border-purple-500/30 rounded-2xl overflow-hidden"
        >
          <iframe
            src="./src/assets/resume.pdf#view=FitH"
            className="w-full h-[85vh] rounded-2xl"
            title="Resume"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ResumePage; 