import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Scroll threshold in pixels to trigger the sticky/full-width transition
const SCROLL_THRESHOLD = 50; 

const Navbar: React.FC = () => {
  // Theme state and logic remain unchanged as requested
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [isOpen, setIsOpen] = useState(false);
  
  // New state to track if the user has scrolled past the threshold
  const [isScrolled, setIsScrolled] = useState(false); 

  useEffect(() => {
    // Theme logic - DO NOT CHANGE
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);

    // Scroll logic to check for sticky state
    const handleScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [theme]); // theme is needed as dependency for the theme switch effect

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Blog', path: '/blog' },
  ];

  // Conditional classes for the header's size and style transition
  const headerClasses = isScrolled
    ? // SCROLLED STATE: Full width, sharp corners, sticks to top. BORDER REMOVED.
      'w-full rounded-none mt-0 shadow-xl'
    : // INITIAL STATE: Max width, rounded corners, floats below top. BORDER REMOVED.
      'max-w-[1280px] rounded-[100px] mt-4 mx-auto shadow-2xl';

  // Background color is constant for the glass effect on scroll as requested (no change here)
  const bgClasses = 'bg-white/40 dark:bg-gray-900/50';
  
  const textClasses = isScrolled
    ? // STICKY MODE: Text color changes based on theme for proper contrast against the glass background.
      'text-gray-800 dark:text-gray-200 hover:bg-white/10 dark:hover:bg-black/10'
    : // INITIAL MODE: Existing colors
      'text-gray-800 dark:text-gray-200 hover:bg-blue-500/10 dark:hover:bg-blue-400/10';

  return (
    // 1. Outer div: Always fixed, always full width, necessary to contain the header
    <div className="fixed top-0 left-0 w-full z-50">
      
      {/* 2. Motion Header: The element that transitions size and style */}
      <motion.header 
        // INCREASED DURATION to 700 for smoother transition
        className={`h-16 flex items-center justify-between 
                    backdrop-blur-xl transition-all duration-700 ease-in-out
                    ${headerClasses} ${bgClasses}`}
        // Drop-in animation on load
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        {/* 3. Inner Content Container: Always constrained to 1280px max width */}
        <div className="max-w-[1280px] w-full mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <NavLink to="/" className="text-2xl font-extrabold transition-colors duration-500 text-blue-400 dark:text-blue-300 hover:text-blue-500 dark:hover:text-blue-400">
              Neexzen
            </NavLink>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 
                   ${isActive
                      ? 'text-white bg-gradient-to-r from-blue-600 to-pink-500 shadow-md' // Gradient for active link
                      : textClasses
                    }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Desktop Utility Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.button 
              onClick={handleThemeSwitch} 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full text-blue-300 dark:text-blue-300 hover:bg-white/20 dark:hover:bg-black/20 transition-colors duration-300"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 10px rgba(37, 99, 235, 0.7)" }}
              whileTap={{ scale: 0.95 }}
              // Gradient for Get Started button
              className="bg-gradient-to-r from-blue-600 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg hover:from-blue-700 hover:to-pink-600 transition-all duration-300"
            >
              Get Started
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="inline-flex items-center justify-center p-2 rounded-md text-blue-300 hover:bg-white/10 dark:hover:bg-black/10 transition-colors duration-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.header>
      
      {/* Mobile Menu (Must be inside the fixed container, but outside the header) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            // Align mobile menu width and centering with the desktop header. BORDER REMOVED.
            className="md:hidden overflow-hidden max-w-[1280px] mx-auto 
                       bg-black/70 dark:bg-black/70 backdrop-blur-md 
                       shadow-xl 
                       rounded-b-2xl mb-4"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-lg text-base font-medium transition-all duration-300 ${
                      isActive
                        ? 'bg-gradient-to-r from-blue-600 to-pink-500 text-white shadow-md' // Gradient for active mobile link
                        : 'text-gray-200 hover:bg-blue-500/20'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
              {/* Mobile Menu Buttons Section. BORDER REMOVED. */}
              <div className="pt-4 pb-3">
                <div className="flex flex-col space-y-3 px-3">
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    // Gradient for Get Started button
                    className="w-full bg-gradient-to-r from-blue-600 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg hover:from-blue-700 hover:to-pink-600 transition-all duration-300"
                  >
                    Get Started
                  </motion.button>
                  <motion.button 
                    onClick={handleThemeSwitch} 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    // Theme switch button uses a standard background now that the border is gone
                    className="w-full flex items-center justify-center p-2 rounded-full text-gray-200 bg-gray-700/50 hover:bg-gray-800 transition-colors duration-300"
                  >
                    {theme === 'light' ? <Moon size={20} className="mr-2" /> : <Sun size={20} className="mr-2" />}
                    Switch Theme
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
