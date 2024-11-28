import React from 'react';
import { User, ChevronRight, Trophy } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';

const Home = () => {
  let navigate = useNavigate();
    return (
        <div className="min-h-screen text-white bg-gradient-to-br from-gray-900 to-gray-800">
            <Navbar />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="bg-slate-800 p-8 rounded-lg shadow-xl mb-12 hover:shadow-2xl transition-shadow duration-300">
                <h2 className="text-3xl font-bold mb-6 text-emerald-400">Question of the Day</h2>
                <div className="bg-gray-700 p-6 rounded-lg shadow-inner">
                  <h3 className="text-2xl font-semibold text-purple-300">Two Sum</h3>
                  <p className="mt-4 text-gray-300 leading-relaxed">
                    Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
                  </p>
                  <button className="mt-6 bg-emerald-600 text-white py-2 px-4 rounded-md hover:bg-emerald-500 transition-colors duration-300 flex items-center space-x-2">
                    <span>Solve Challenge</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              <div className="bg-slate-800 p-8 rounded-lg shadow-xl">
                <h2 className="text-3xl font-bold mb-8 text-emerald-400">Other Questions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {['Reverse Integer', 'Palindrome Number', 'Roman to Integer', 'Longest Common Prefix'].map((question, index) => (
                    <div key={index} className="bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 hover:bg-gray-600 cursor-pointer">
                      <h3 className="text-xl font-semibold text-purple-300">{question}</h3>
                      <p className="mt-2 text-gray-400">Solve this coding challenge</p>
                      <ChevronRight className="w-5 h-5 text-emerald-400 mt-4" />
                    </div>
                  ))}
                </div>
              </div>
            </main>
    </div>
  );
}

export default Home;