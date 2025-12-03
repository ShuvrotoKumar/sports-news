'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaShieldAlt, FaLock, FaUserShield, FaInfoCircle } from 'react-icons/fa';

export default function PrivacyPolicy() {
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

  const privacySections = [
    {
      icon: <FaShieldAlt className="text-2xl text-black" />,
      title: 'Information We Collect',
      content: 'We collect information that you provide directly to us, such as when you create an account, subscribe to our newsletter, or contact us. This may include your name, email address, and any other information you choose to provide.'
    },
    {
      icon: <FaLock className="text-2xl text-black" />,
      title: 'How We Use Your Information',
      content: 'We use the information we collect to provide, maintain, and improve our services, to develop new features, and to protect our users. We also use this information to communicate with you, such as sending you updates and responding to your inquiries.'
    },
    {
      icon: <FaUserShield className="text-2xl text-black" />,
      title: 'Information Sharing',
      content: 'We do not sell or share your personal information with third parties except as described in this Privacy Policy. We may share information with service providers who assist us in operating our website and conducting our business.'
    },
    {
      icon: <FaInfoCircle className="text-2xl text-black" />,
      title: 'Your Choices',
      content: 'You may update, correct, or delete your account information at any time by logging into your account. You can also opt out of receiving promotional communications from us by following the instructions in those communications.'
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
              Privacy Policy
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
                  At Sport News, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website or use our services.
                </motion.p>

                {privacySections.map((section, index) => (
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
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Changes to This Policy</h3>
                  <p className="mb-6">
                    We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                  </p>
                  
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h3>
                  <p>
                    If you have any questions about this Privacy Policy, please contact us at{' '}
                    <a href="mailto:privacy@sportnews.com" className="text-red-500 hover:underline">
                      privacy@sportnews.com
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