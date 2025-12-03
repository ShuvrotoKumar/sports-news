'use client';

import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ];

  const categories = [
    { name: 'Football', href: '/athletics' },
    { name: 'Basketball', href: '/athletics' },
    { name: 'Tennis', href: '/athletics' },
    { name: 'Golf', href: '/athletics' },
    { name: 'Athletics', href: '/athletics' },
  ];

  const socialLinks = [
    { icon: <FaFacebook />, href: 'https://facebook.com', label: 'Facebook' },
    { icon: <FaTwitter />, href: 'https://twitter.com', label: 'Twitter' },
    { icon: <FaInstagram />, href: 'https://instagram.com', label: 'Instagram' },
    { icon: <FaYoutube />, href: 'https://youtube.com', label: 'YouTube' },
    { icon: <FaLinkedin />, href: 'https://linkedin.com', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">Sport News</h3>
            <p className="text-white mb-4">
              Your premier destination for the latest sports news, updates, and analysis from around the world.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-red-500 text-xl transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-white hover:text-red-500 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              {categories.map((category, index) => (
                <li key={index}>
                  <Link 
                    href={category.href}
                    className="text-white hover:text-red-500 transition-colors"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <address className="not-italic text-white space-y-2">
              <p>123 Sports Avenue</p>
              <p>New York, NY 10001</p>
              <p>Email: info@sportnews.com</p>
              <p>Phone: (123) 456-7890</p>
            </address>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-black-800 mt-12 pt-8 text-center text-white">
          <p>© {currentYear} Sport News. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
