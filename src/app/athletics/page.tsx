'use client';

import { useState, useEffect } from 'react';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FaRunning, FaMedal, FaCalendarAlt, FaUserFriends, FaArrowRight, FaTrophy, FaStopwatch, FaGlobe } from 'react-icons/fa';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut"
    }
  })
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const AthleticsPage = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [activeTab, setActiveTab] = useState('events');

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  const events = [
    {
      id: 1,
      title: '100m Sprint Finals',
      date: '2025-07-15',
      time: '18:30',
      location: 'Olympic Stadium',
      image: '/images/f1.jpg'
    },
    {
      id: 2,
      title: 'Long Jump Qualifiers',
      date: '2025-07-16',
      time: '10:00',
      location: 'National Arena',
      image: '/images/f2.jpg'
    },
    {
      id: 3,
      title: '4x100m Relay Heats',
      date: '2025-07-17',
      time: '15:45',
      location: 'City Sports Complex',
      image: '/images/f3.jpg'
    },
    {
      id: 4,
      title: 'Marathon',
      date: '2025-07-18',
      time: '07:00',
      location: 'Downtown Circuit',
      image: '/images/f4.jpg'
    },
  ];

  const athletes = [
    {
      id: 1,
      name: 'Sarah Johnson',
      country: 'USA',
      event: '100m, 200m',
      image: '/images/f5.jpg',
      medal: 'Gold'
    },
    {
      id: 2,
      name: 'James Wilson',
      country: 'Jamaica',
      event: '100m, 4x100m',
      image: '/images/f6.jpg',
      medal: 'Silver'
    },
    {
      id: 3,
      name: 'Emma Chen',
      country: 'China',
      event: 'Long Jump',
      image: '/images/f7.jpg',
      medal: 'Bronze'
    },
  ];

  if (!isMounted) return null;

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <motion.main 
        className="flex-grow"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        {/* Hero Section with Parallax Effect */}
        <motion.section 
          className="relative h-[70vh] min-h-[500px] flex items-center justify-center bg-gradient-to-r from-blue-800 to-blue-600 text-white overflow-hidden"
          variants={fadeInUp}
        >
          <motion.div 
            className="absolute inset-0 z-0"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            <Image
              src="/images/f8.jpg"
              alt="Athletics"
              fill
              className="object-cover opacity-20"
              priority
            />
          </motion.div>
          
          {/* Animated running athletes in the background */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute -bottom-10"
                style={{
                  left: `${10 + i * 20}%`,
                  width: '60px',
                  height: '60px'
                }}
                animate={{
                  y: [0, -100, -200, -300, -400, -500],
                  opacity: [0, 1, 1, 1, 0.5, 0],
                }}
                transition={{
                  duration: 8 + Math.random() * 5,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "linear"
                }}
              >
                <FaRunning className="w-full h-full text-white/30" />
              </motion.div>
            ))}
          </div>
          <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 text-center">
            <motion.div 
              className="max-w-4xl mx-auto"
              variants={fadeInUp}
              custom={0}
            >
              <motion.span 
                className="inline-block px-4 py-1 mb-4 text-sm font-semibold tracking-wider text-blue-100 bg-blue-900 bg-opacity-50 rounded-full"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                ATHLETICS
              </motion.span>
              <motion.h1 
                className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                Athletics
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
              >
                The ultimate test of speed, strength, and endurance. Follow the world's best athletes as they push the limits of human performance.
              </motion.p>
              <motion.div 
                className="flex flex-wrap justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link 
                    href="#events" 
                    className="inline-block bg-white text-blue-700 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center"
                  >
                    View Events <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link 
                    href="#athletes" 
                    className="inline-block border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:bg-opacity-10 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Top Athletes
                  </Link>
                </motion.div>
                <motion.div 
                  className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Navigation Tabs */}
        <div className="sticky top-16 z-10 bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex overflow-x-auto hide-scrollbar">
              <div className="flex border-b border-gray-200">
                {['events', 'athletes', 'records', 'schedule'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-4 text-sm font-medium whitespace-nowrap border-b-2 ${
                      activeTab === tab
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div id="content" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <AnimatePresence mode="wait">
            {activeTab === 'events' && (
              <motion.section 
                id="events"
                key="events"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="mb-16"
              >
                <motion.div 
                  className="text-center mb-12"
                  variants={fadeInUp}
                >
                  <motion.div 
                    className="text-center mb-12"
                    variants={fadeInUp}
                    custom={0}
                  >
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
                  </motion.div>
                </motion.div>

                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                  variants={staggerContainer}
                >
                  {events.map((event, index) => (
                    <motion.div
                      key={event.id}
                      variants={fadeInUp}
                      custom={index * 0.1}
                      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
                      whileHover={{ y: -5 }}
                    >
                      <div className="relative h-48">
                        <Image
                          src={event.image}
                          alt={event.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                        <div className="absolute bottom-0 left-0 p-4 text-white">
                          <p className="text-sm">{event.date}</p>
                          <h3 className="text-xl font-bold">{event.title}</h3>
                        </div>
                      </div>
                      <div className="p-4">
                        <div className="flex items-center text-gray-600 mb-2">
                          <FaCalendarAlt className="mr-2" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <FaUserFriends className="mr-2" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.section>
            )}
            {activeTab === 'athletes' && (
              <motion.section 
                id="athletes"
                key="athletes"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="mb-16"
              >
                <motion.div 
                  className="text-center mb-12"
                  variants={fadeInUp}
                >
                  <motion.div 
                    className="text-center mb-12"
                    variants={fadeInUp}
                    custom={0}
                  >
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Top Athletes</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
                  </motion.div>
                </motion.div>

                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-3 gap-8"
                  variants={staggerContainer}
                >
                  {athletes.map((athlete) => (
                    <motion.div
                      key={athlete.id}
                      variants={fadeInUp}
                      custom={0}
                      className="bg-white rounded-xl shadow-md overflow-hidden text-center p-6 hover:shadow-xl transition-shadow"
                      whileHover={{ y: -5 }}
                    >
                      <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-100">
                        <Image
                          src={athlete.image}
                          alt={athlete.name}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute -bottom-2 -right-2 bg-yellow-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                          {athlete.id}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{athlete.name}</h3>
                      <p className="text-blue-600 mb-2">{athlete.country}</p>
                      <p className="text-gray-600 mb-3">{athlete.event}</p>
                      <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                        athlete.medal === 'Gold' ? 'bg-yellow-100 text-yellow-800' :
                        athlete.medal === 'Silver' ? 'bg-gray-200 text-gray-800' :
                        'bg-amber-100 text-amber-800'
                      }`}>
                        <FaMedal className="mr-1" /> {athlete.medal} Medal
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.section>
            )}
          </AnimatePresence>
        </div>

        {/* Stats Section with Parallax */}
        <motion.section 
          className="relative py-20 bg-blue-700 text-white overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0">
            <Image
              src="/images/f9.jpg"
              alt=""
              fill
              className="object-cover opacity-10"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {[
                { number: '24+', label: 'Track & Field Events', icon: <FaRunning className="w-8 h-8 mx-auto mb-4" /> },
                { number: '200+', label: 'Athletes Competing', icon: <FaUserFriends className="w-8 h-8 mx-auto mb-4" /> },
                { number: '50+', label: 'Countries Represented', icon: <FaGlobe className="w-8 h-8 mx-auto mb-4" /> },
              ].map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  className="p-8 bg-white/10 backdrop-blur-sm rounded-xl"
                  variants={fadeInUp}
                  custom={index * 0.1}
                  whileHover={{ y: -10, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
                >
                  {stat.icon}
                  <div className="text-5xl font-extrabold mb-2">
                    <motion.span
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      {stat.number}
                    </motion.span>
                  </div>
                  <p className="text-blue-100 text-lg">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>
      </motion.main>
      <Footer />
      
      <style jsx global>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default AthleticsPage;