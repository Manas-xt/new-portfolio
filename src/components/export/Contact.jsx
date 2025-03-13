import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section className="relative py-12 md:py-24" id="Contact">
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
            Get In Touch
          </h2>
          <div className="w-16 h-0.5 bg-purple-500 mx-auto rounded-full 
            shadow-[0_0_10px_rgb(168_85_247_/_0.7),_0_0_20px_rgb(168_85_247_/_0.5)]"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-0 items-center">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="w-full order-2 md:order-1"
          >
            {/* Contact Info */}
            <div className="mb-8 space-y-4">
              <div className="flex items-center gap-3 text-white/70">
                <Mail className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <span className="text-sm md:text-base">youremail@example.com</span>
              </div>
              <div className="flex items-center gap-3 text-white/70">
                <Phone className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <span className="text-sm md:text-base">+1 234 567 890</span>
              </div>
              <div className="flex items-center gap-3 text-white/70">
                <MapPin className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <span className="text-sm md:text-base">Your Location, City, Country</span>
              </div>
            </div>

            {/* Form */}
            <form className="space-y-4 md:space-y-6">
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <input 
                    type="text" 
                    placeholder="Your Name"
                    className="w-full px-4 py-2.5 md:py-3 rounded-xl bg-white/5 border border-purple-500/30 
                    focus:border-purple-500/60 outline-none text-white/70 placeholder:text-white/30
                    text-sm md:text-base"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Your Email"
                    className="w-full px-4 py-2.5 md:py-3 rounded-xl bg-white/5 border border-purple-500/30 
                    focus:border-purple-500/60 outline-none text-white/70 placeholder:text-white/30
                    text-sm md:text-base"
                  />
                </div>
              </div>
              <div>
                <input 
                  type="text" 
                  placeholder="Subject"
                  className="w-full px-4 py-2.5 md:py-3 rounded-xl bg-white/5 border border-purple-500/30 
                  focus:border-purple-500/60 outline-none text-white/70 placeholder:text-white/30
                  text-sm md:text-base"
                />
              </div>
              <div>
                <textarea 
                  rows="4"
                  placeholder="Your Message"
                  className="w-full px-4 py-2.5 md:py-3 rounded-xl bg-white/5 border border-purple-500/30 
                  focus:border-purple-500/60 outline-none text-white/70 placeholder:text-white/30 resize-none
                  text-sm md:text-base"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="flex items-center justify-center gap-2 px-5 md:px-6 py-2.5 md:py-3 rounded-xl 
                bg-gradient-to-r from-purple-600 to-purple-400 text-white font-medium 
                hover:from-purple-700 hover:to-purple-500 transition-colors duration-300
                text-sm md:text-base w-full md:w-auto"
              >
                Send Message
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>

          {/* Right Side - Avatar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="w-full flex items-center justify-center order-1 md:order-2 mb-8 md:mb-0"
          >
            <div className="relative w-full max-w-[250px] md:max-w-md aspect-square">
              <img 
                src="./src/assets/contact.png" 
                alt="Your Name" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 