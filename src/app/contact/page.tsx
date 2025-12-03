'use client';

import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaPaperPlane, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{success: boolean; message: string} | null>(null);

  const [ref1, inView1] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [ref2, inView2] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitStatus({
        success: true,
        message: 'Your message has been sent successfully! We\'ll get back to you soon.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
      
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: 'Something went wrong. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-2xl text-red-600" />,
      title: 'Our Location',
      description: '123 Sports Avenue, New York, NY 10001, USA'
    },
    {
      icon: <FaPhoneAlt className="text-2xl text-red-600" />,
      title: 'Phone Number',
      description: '+1 (555) 123-4567'
    },
    {
      icon: <FaEnvelope className="text-2xl text-red-600" />,
      title: 'Email Address',
      description: 'info@sportnews.com'
    }
  ];

  const socialLinks = [
    { icon: <FaFacebook />, href: 'https://facebook.com', label: 'Facebook' },
    { icon: <FaTwitter />, href: 'https://twitter.com', label: 'Twitter' },
    { icon: <FaInstagram />, href: 'https://instagram.com', label: 'Instagram' },
    { icon: <FaLinkedin />, href: 'https://linkedin.com', label: 'LinkedIn' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <motion.section 
        className="relative bg-gradient-to-r from-black to-gray-900 text-white py-20 md:py-28 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
            <p className="text-xl text-gray-300">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Info & Form */}
      <section className="py-16 md:py-24 bg-white" ref={ref1}>
        <div className="container mx-auto px-4">
          <motion.div
            variants={container}
            initial="hidden"
            animate={inView1 ? "show" : "hidden"}
            className="grid md:grid-cols-2 gap-12"
          >
            {/* Contact Information */}
            <motion.div 
              variants={item}
              className="space-y-8"
            >
              <h2 className="text-3xl font-bold text-gray-900">Contact Information</h2>
              <p className="text-gray-600">
                Have questions or feedback? Fill out the form or reach out to us directly. Our team is here to help you with any inquiries you may have.
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-start space-x-4"
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <div className="mt-1">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{info.title}</h3>
                      <p className="text-gray-600">{info.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="pt-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-15 h-15 flex items-center justify-center text-black hover:bg-red-600 hover:text-white rounded-full transition-colors duration-300"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              variants={item}
              className="bg-gray-50 p-8 rounded-xl shadow-lg"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              
              {submitStatus && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mb-6 p-4 rounded-md ${submitStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}
                >
                  {submitStatus.message}
                </motion.div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Type your message here..."
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        <FaPaperPlane className="mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-100" ref={ref2}>
        <div className="container mx-auto px-4">
          <motion.div
            variants={item}
            initial="hidden"
            animate={inView2 ? "show" : "hidden"}
            className="overflow-hidden rounded-xl shadow-xl"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215209057767!2d-73.9878447245973!3d40.74844097138931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Our Location"
            ></iframe>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;