'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaFileContract, FaGavel, FaUserShield, FaExclamationTriangle } from 'react-icons/fa';

export default function TermsOfService() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const termsSections = [
    {
      icon: <FaFileContract className="text-2xl text-black" />,
      title: '1. Acceptance of Terms',
      content: 'By accessing and using Sport News, you accept and agree to be bound by the terms and provisions of this agreement. All content and services provided on our platform are subject to these terms.'
    },
    {
      icon: <FaGavel className="text-2xl text-black" />,
      title: '2. User Responsibilities',
      content: 'Users are responsible for maintaining the confidentiality of their account information. You agree to provide accurate and complete information when creating an account and to update this information as necessary.'
    },
    {
      icon: <FaUserShield className="text-2xl text-black" />,
      title: '3. Privacy Policy',
      content: 'Your use of our services is also governed by our Privacy Policy. Please review our Privacy Policy, which explains how we collect, use, and protect your personal information.'
    },
    {
      icon: <FaExclamationTriangle className="text-2xl text-black" />,
      title: '4. Limitation of Liability',
      content: 'Sport News shall not be liable for any indirect, incidental, special, or consequential damages resulting from the use or inability to use the service, even if we have been advised of the possibility of such damages.'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <motion.main 
        className="flex-grow bg-gray-50 py-16 px-4 sm:px-6 lg:px-8"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
          >
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-6">
              Terms of Service
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </motion.div>

          <motion.div 
            className="bg-white shadow-lg rounded-lg overflow-hidden"
            variants={fadeInUp}
          >
            <div className="px-6 py-8 sm:p-10">
              <motion.div 
                className="prose prose-lg text-gray-600 mx-auto"
                variants={staggerContainer}
              >
                <motion.p variants={fadeInUp} className="mb-8">
                  Welcome to Sport News. These Terms of Service ("Terms") govern your access to and use of our website and services. Please read these Terms carefully before using our services.
                </motion.p>

                {termsSections.map((section, index) => (
                  <motion.div 
                    key={index} 
                    className="mb-8 p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                    variants={fadeInUp}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-4">
                        {section.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{section.title}</h3>
                        <p className="text-gray-600">{section.content}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}

                <motion.div 
                  className="mt-12 pt-8 border-t border-gray-200"
                  variants={fadeInUp}
                >
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">5. Changes to Terms</h3>
                  <p className="mb-6">
                    We reserve the right to modify these Terms at any time. We will provide notice of any changes by updating the "Last updated" date at the top of these Terms. Your continued use of our services after any changes constitutes your acceptance of the new Terms.
                  </p>
                  
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">6. Contact Us</h3>
                  <p>
                    If you have any questions about these Terms, please contact us at{' '}
                    <a href="mailto:legal@sportnews.com" className="text-red-500 hover:underline">
                      legal@sportnews.com
                    </a>.
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.main>
      <Footer />
    </div>
  );
}