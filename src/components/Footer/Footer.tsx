import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Github, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        {/* Top Section: Slogan and Subscription */}
        <div className="pb-8 border-b border-gray-200 dark:border-gray-700 lg:flex lg:items-center lg:justify-between">
          <h3 className="text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-3xl">
            <span className="block">Building the future of intelligence.</span>
            <span className="block text-blue-600 dark:text-blue-400">Stay Connected to the Future.</span>
          </h3>
          <form className="mt-8 sm:flex lg:mt-0 lg:flex-shrink-0">
            <div className="w-full sm:max-w-xs">
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input
                type="email"
                name="email-address"
                id="email-address"
                autoComplete="email"
                required
                className="block w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-900 dark:text-white"
                placeholder="Enter your email"
              />
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <button
                type="submit"
                className="block w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>

        {/* Middle Section: Links */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 tracking-wider uppercase">Product</h3>
            <ul className="mt-4 space-y-4">
              <li><Link to="#" className="text-base text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Features</Link></li>
              <li><Link to="#" className="text-base text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Pricing</Link></li>
              <li><Link to="#" className="text-base text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Case Studies</Link></li>
              <li><Link to="#" className="text-base text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Documentation</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-4">
              <li><Link to="/about" className="text-base text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">About Us</Link></li>
              <li><Link to="#" className="text-base text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Careers</Link></li>
              <li><Link to="/blog" className="text-base text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Blog</Link></li>
              <li><Link to="/contact" className="text-base text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 tracking-wider uppercase">Resources</h3>
            <ul className="mt-4 space-y-4">
              <li><Link to="#" className="text-base text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Community</Link></li>
              <li><Link to="#" className="text-base text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Support</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 tracking-wider uppercase">Legal</h3>
            <ul className="mt-4 space-y-4">
              <li><Link to="#" className="text-base text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Terms</Link></li>
              <li><Link to="#" className="text-base text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Privacy</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section: Copyright and Socials */}
        <div className="mt-8 border-t border-gray-200 dark:border-gray-800 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            <a href="#" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
              <span className="sr-only">Twitter</span>
              <Twitter className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
              <span className="sr-only">GitHub</span>
              <Github className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
          <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
            &copy; 2025 Neexzen. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;