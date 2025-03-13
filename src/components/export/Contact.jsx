import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, XCircle } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  // Animation variants
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

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Make sure to replace this with your actual Web3Forms access key
  const ACCESS_KEY = '1f399656-ea77-4cfc-a641-9416e1499864';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!ACCESS_KEY || ACCESS_KEY === 'YOUR-ACCESS-KEY-HERE') {
      setError(true);
      setErrorMessage('Please configure your Web3Forms access key');
      return;
    }

    setLoading(true);
    setSuccess(false);
    setError(false);
    setErrorMessage('');

    const formPayload = {
      access_key: ACCESS_KEY,
      from_name: formData.name,
      subject: `New Contact Form Submission from ${formData.name}`,
      message: `
Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}
      `,
      email: formData.email
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formPayload)
      });

      const data = await response.json();
      console.log("Form submission response:", data);

      if (data.success) {
        setSuccess(true);
        // Clear form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setError(true);
        setErrorMessage(data.message || 'Failed to send message. Please try again.');
        console.error("Submission failed:", data);
      }
    } catch (err) {
      setError(true);
      setErrorMessage('Network error. Please check your connection and try again.');
      console.error("Submission error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative py-12 md:py-24" id="Contact">
      <motion.div 
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="container mx-auto px-4 md:px-5"
      >
        {/* Section Title */}
        <motion.div 
          variants={itemVariants}
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

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            className="w-full"
          >
            {/* Contact Info */}
            <motion.div 
              variants={itemVariants}
              className="mb-8 space-y-4"
            >
              <motion.div 
                variants={itemVariants}
                className="flex items-center gap-3 text-white/70"
              >
                <Mail className="w-5 h-5 text-purple-400" />
                <span>portfolio4564@gmail.com</span>
              </motion.div>
              <motion.div 
                variants={itemVariants}
                className="flex items-center gap-3 text-white/70"
              >
                <Phone className="w-5 h-5 text-purple-400" />
                <span>+91 9257793866</span>
              </motion.div>
              <motion.div 
                variants={itemVariants}
                className="flex items-center gap-3 text-white/70"
              >
                <MapPin className="w-5 h-5 text-purple-400" />
                <span>Jaipur, Rajasthan, India</span>
              </motion.div>
            </motion.div>

            {/* Form */}
            <motion.form 
              variants={itemVariants}
              onSubmit={handleSubmit} 
              className="space-y-4 md:space-y-6"
            >
              <motion.div 
                variants={itemVariants}
                className="grid md:grid-cols-2 gap-4 md:gap-6"
              >
                <motion.div variants={itemVariants}>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-2.5 md:py-3 rounded-xl bg-white/5 border border-purple-500/30 
                    focus:border-purple-500/60 outline-none text-white/70 placeholder:text-white/30
                    text-sm md:text-base"
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    className="w-full px-4 py-2.5 md:py-3 rounded-xl bg-white/5 border border-purple-500/30 
                    focus:border-purple-500/60 outline-none text-white/70 placeholder:text-white/30
                    text-sm md:text-base"
                  />
                </motion.div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <input 
                  type="text" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                  className="w-full px-4 py-2.5 md:py-3 rounded-xl bg-white/5 border border-purple-500/30 
                  focus:border-purple-500/60 outline-none text-white/70 placeholder:text-white/30
                  text-sm md:text-base"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <textarea 
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                  className="w-full px-4 py-2.5 md:py-3 rounded-xl bg-white/5 border border-purple-500/30 
                  focus:border-purple-500/60 outline-none text-white/70 placeholder:text-white/30 resize-none
                  text-sm md:text-base"
                ></textarea>
              </motion.div>

              {/* Status Messages */}
              {success && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-green-400 bg-green-400/10 p-3 rounded-lg"
                >
                  <CheckCircle className="w-5 h-5" />
                  <span>Message sent successfully!</span>
                </motion.div>
              )}
              {error && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-red-400 bg-red-400/10 p-3 rounded-lg"
                >
                  <XCircle className="w-5 h-5" />
                  <span>{errorMessage}</span>
                </motion.div>
              )}

              <motion.button 
                variants={itemVariants}
                type="submit"
                disabled={loading}
                className="flex items-center justify-center gap-2 w-full md:w-auto px-6 py-3 rounded-xl
                bg-gradient-to-r from-purple-600 to-purple-400 
                hover:from-purple-700 hover:to-purple-500
                text-white font-medium transition-colors duration-300
                disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-white"></div>
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4" />
                  </>
                )}
              </motion.button>
            </motion.form>
          </motion.div>

          {/* Right Side - Avatar */}
          <motion.div
            variants={itemVariants}
            className="w-full flex items-center justify-center order-1 md:order-2 mb-8 md:mb-0"
          >
            <div className="relative w-full max-w-[250px] md:max-w-md aspect-square">
              <img 
                src="./src/assets/contact.png" 
                alt="Contact" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact; 