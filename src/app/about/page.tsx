'use client';

import { motion } from 'framer-motion';
import { FaTrophy, FaUsers, FaGlobe, FaNewspaper } from 'react-icons/fa';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About = () => {
  const [ref1, inView1] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [ref2, inView2] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [ref3, inView3] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    // Smooth scroll to top when component mounts
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const stats = [
    { icon: <FaTrophy className="text-4xl mb-4 text-black" />, number: '50+', label: 'Awards Won' },
    { icon: <FaUsers className="text-4xl mb-4 text-black" />, number: '1M+', label: 'Monthly Readers' },
    { icon: <FaGlobe className="text-4xl mb-4 text-black" />, number: '100+', label: 'Countries Reached' },
    { icon: <FaNewspaper className="text-4xl mb-4 text-black" />, number: '10K+', label: 'Articles Published' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
        <Header/>
      {/* Hero Section */}
      <motion.section 
        className="relative bg-gradient-to-r from-black to-gray-900 text-white py-20 md:py-32 overflow-hidden"
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About Sport News</h1>
            <p className="text-xl text-gray-300 mb-8">
              Your trusted source for the latest sports news, in-depth analysis, and exclusive content from around the globe.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Our Story */}
      <section className="py-16 md:py-24 bg-white" ref={ref1}>
        <div className="container mx-auto px-4">
          <motion.div
            variants={container}
            initial="hidden"
            animate={inView1 ? "show" : "hidden"}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={item} className="relative">
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/f7.jpg" 
                  alt="Our Team" 
                  className="w-full h-auto rounded-xl transform hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>
            <motion.div variants={item} className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Story</h2>
              <p className="text-gray-600 text-lg">
                Founded in 2023, Sport News began as a small team of passionate sports enthusiasts with a simple mission: to deliver accurate, timely, and engaging sports content to fans worldwide.
              </p>
              <p className="text-gray-600">
                What started as a humble blog has grown into a leading sports media platform, covering everything from major league games to local sports events. Our commitment to quality journalism and in-depth analysis has earned us a loyal following of sports fans who trust us to keep them informed.
              </p>
              <div className="pt-4">
                <button className="bg-black hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-1">
                  Meet Our Team
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            initial="hidden"
            animate={inView2 ? "show" : "hidden"}
            variants={container}
            ref={ref2}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
                variants={item}
                whileHover={{ y: -5 }}
              >
                {stat.icon}
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 md:py-24 bg-white" ref={ref3}>
        <div className="container mx-auto px-4">
          <motion.div
            variants={container}
            initial="hidden"
            animate={inView3 ? "show" : "hidden"}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={item}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Our Mission</h2>
              <div className="relative">
                <blockquote className="relative">
                  <div className="text-5xl text-red-500 absolute -left-6 -top-6">"</div>
                  <p className="text-xl md:text-2xl text-gray-700 italic mb-8 leading-relaxed">
                    To deliver the most comprehensive, accurate, and engaging sports coverage that connects fans with the sports they love, while maintaining the highest standards of journalistic integrity.
                  </p>
                  <div className="text-5xl text-red-500 absolute -right-6 -bottom-6">"</div>
                </blockquote>
              </div>
            </motion.div>

            <motion.div 
              variants={item}
              className="mt-16 grid md:grid-cols-3 gap-8 text-left"
            >
              {[
                {
                  title: 'Integrity',
                  description: 'We are committed to factual, unbiased reporting you can trust.'
                },
                {
                  title: 'Passion',
                  description: 'Our love for sports drives us to deliver the best content possible.'
                },
                {
                  title: 'Innovation',
                  description: 'We embrace new technologies to enhance your sports experience.'
                }
              ].map((value, index) => (
                <motion.div 
                  key={index} 
                  className="p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-gray-600 to-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Community</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Stay updated with the latest sports news, exclusive interviews, and in-depth analysis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="px-6 py-3 rounded-full text-gray-900 w-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-red-600"
            />
            <button className="bg-white text-black hover:bg-gray-100 font-semibold py-3 px-8 rounded-full whitespace-nowrap transition-colors">
              Subscribe Now
            </button>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default About;