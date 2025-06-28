// src/pages/Welcome.jsx
import React from "react";
import { Link } from "react-router-dom";
// src/pages/Welcome.jsx

import { Star, Zap, BookOpen, Rocket } from "lucide-react"; // ✅ Tambahkan ini

const Welcome = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-blue-600 to-purple-700 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 text-pink-300 opacity-60">
        <Star size={24} className="animate-pulse" />
      </div>
      <div className="absolute top-32 right-20 text-yellow-300 opacity-60">
        <Zap size={20} className="animate-bounce" />
      </div>
      <div className="absolute bottom-32 left-16 text-purple-300 opacity-50">
        <BookOpen size={18} className="animate-pulse" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 min-h-screen flex items-center justify-between px-8 lg:px-16">
        {/* Left Content */}
        <div className="flex-1 max-w-lg">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Welcome to
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-yellow-300">
              SmartLish!
            </span>
          </h1>

          <p className="text-blue-100 text-lg lg:text-xl mb-8 leading-relaxed">
            Come in and continue your learning mission. Because being good at
            English is everyone's right.
          </p>

          {/* Buttons */}
          <div className="space-y-4">
            <Link to="/login">
              <button className="w-full bg-white hover:bg-gray-50 text-gray-800 font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-3">
                Sign in
              </button>
            </Link>
            <div className="space-y-4"></div>

            <Link to="/register">
              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-400">
                Create an account
              </button>
            </Link>
          </div>
        </div>

        {/* Right Illustration */}
        <div className="flex-1 flex justify-center items-center relative">
          {/* Main Illustration Area */}
          <div className="relative">
            {/* Desk/Platform */}
            <div className="w-80 h-40 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-80 blur-sm"></div>

            {/* Character Sitting */}
            <div className="absolute -top-20 left-1/2 transform -translate-x-1/2">
              <div className="relative">
                {/* Person */}
                <div className="w-16 h-20 bg-gradient-to-b from-pink-300 to-pink-400 rounded-t-full relative">
                  {/* Head */}
                  <div className="w-12 h-12 bg-pink-200 rounded-full absolute -top-6 left-2 border-2 border-pink-300">
                    {/* Hair */}
                    <div className="w-10 h-8 bg-gray-800 rounded-t-full absolute -top-4 left-1"></div>
                    {/* Face */}
                    <div className="absolute top-3 left-3">
                      <div className="w-1 h-1 bg-gray-800 rounded-full"></div>
                      <div className="w-1 h-1 bg-gray-800 rounded-full ml-4 -mt-1"></div>
                      <div className="w-2 h-1 bg-pink-400 rounded-full mt-1 ml-1"></div>
                    </div>
                  </div>
                  {/* Arms */}
                  <div className="absolute top-4 -left-4 w-4 h-12 bg-pink-300 rounded-full transform -rotate-12"></div>
                  <div className="absolute top-4 -right-4 w-4 h-12 bg-pink-300 rounded-full transform rotate-12"></div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-16 -left-16">
              <div className="w-12 h-8 bg-white rounded-lg shadow-lg transform rotate-12 flex items-center justify-center">
                <BookOpen size={16} className="text-blue-500" />
              </div>
            </div>

            <div className="absolute -top-12 right-4">
              <div className="w-10 h-10 bg-purple-400 rounded-lg shadow-lg transform -rotate-6 flex items-center justify-center">
                <Zap size={16} className="text-white" />
              </div>
            </div>

            <div className="absolute top-4 -right-20">
              <div className="w-16 h-12 bg-white rounded-lg shadow-lg flex items-center justify-center">
                <div className="w-8 h-2 bg-purple-400 rounded"></div>
              </div>
            </div>

            {/* Laptop/Device */}
            <div className="absolute top-8 left-8">
              <div className="w-20 h-12 bg-gray-700 rounded-t-lg">
                <div className="w-18 h-10 bg-blue-100 rounded-t-lg m-1 flex items-center justify-center">
                  <div className="w-12 h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Rocket */}
          <div className="absolute bottom-0 right-8">
            <div className="transform rotate-12 animate-bounce">
              <Rocket size={48} className="text-white opacity-80" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Decorative Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1200 120"
          className="w-full h-20 text-blue-800 opacity-30"
        >
          <path
            d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  );
};

export default Welcome;
