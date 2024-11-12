import React, { useState } from 'react';
import { GithubIcon, TwitterIcon, LinkedinIcon, Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  let navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Main Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Bar */}
        <nav className="py-6">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center">
                <span className="text-xl font-mono font-bold">C</span>
              </div>
              <span className="text-xl font-semibold tracking-tight">codeclub</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#qotd" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium tracking-wider">QOTD</a>
              <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium tracking-wider">ABOUT</a>
              <a href="#follow-us" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium tracking-wider">FOLLOW US</a>
              <a href="#ask-queries" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium tracking-wider">ASK QUERIES</a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 py-4 bg-gray-800 rounded-lg">
              <div className="flex flex-col space-y-4 px-4">
                <a href="#qotd" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium tracking-wider" onClick={toggleMenu}>QOTD</a>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium tracking-wider" onClick={toggleMenu}>ABOUT</a>
                <a href="#follow-us" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium tracking-wider" onClick={toggleMenu}>FOLLOW US</a>
                <a href="#ask-queries" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium tracking-wider" onClick={toggleMenu}>ASK QUERIES</a>
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <div id="qotd" className="py-20 sm:py-24">
          <div className="text-center md:text-left space-y-8">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              Question of the Day
            </h1>
            <p className="text-gray-400 text-lg md:text-xl font-light tracking-wide max-w-2xl">
              ft. code club KLE Technological University Hubli
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
              <button onClick={(e)=>navigate('/register')} className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 rounded-lg transition-all duration-200 font-medium tracking-wide shadow-lg hover:shadow-emerald-500/20">
                Register Now
              </button>
              <button onClick={(e)=>navigate('/login')} className="px-8 py-4 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all duration-200 font-medium tracking-wide shadow-lg hover:shadow-gray-700/20">
                Login Now
              </button>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div id="about" className="py-16 space-y-6">
          <h2 className="text-3xl font-bold tracking-tight">About Us</h2>
          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl shadow-lg">
            <p className="text-gray-300 text-lg leading-relaxed">
              Welcome to our daily coding challenge platform. Join our community of developers
              and improve your skills with daily programming questions. We believe in learning
              through practice and collaborative growth.
            </p>
          </div>
        </div>

        {/* Social Links */}
        <div id="follow-us" className="py-16 space-y-6">
          <h2 className="text-3xl font-bold tracking-tight">Follow Us</h2>
          <div className="flex justify-center md:justify-start gap-6">
            <a href="#" className="p-4 bg-gray-800/50 backdrop-blur-sm rounded-xl hover:bg-gray-700 transition-all duration-200 hover:shadow-lg group">
              <GithubIcon size={24} className="group-hover:scale-110 transition-transform duration-200" />
            </a>
            <a href="#" className="p-4 bg-gray-800/50 backdrop-blur-sm rounded-xl hover:bg-gray-700 transition-all duration-200 hover:shadow-lg group">
              <TwitterIcon size={24} className="group-hover:scale-110 transition-transform duration-200" />
            </a>
            <a href="#" className="p-4 bg-gray-800/50 backdrop-blur-sm rounded-xl hover:bg-gray-700 transition-all duration-200 hover:shadow-lg group">
              <LinkedinIcon size={24} className="group-hover:scale-110 transition-transform duration-200" />
            </a>
          </div>
        </div>

        {/* Ask Queries Section */}
        <div id="ask-queries" className="py-16 space-y-6">
          <h2 className="text-3xl font-bold tracking-tight">Ask Queries</h2>
          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl shadow-lg">
            <p className="text-gray-300 text-lg leading-relaxed">
              Have questions or need assistance? Our community is here to help. Feel free to reach out
              and get the support you need on your coding journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;