import React from 'react';
import { ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar';

const Home = () => {
  const questions = [
    'Two Sum',
    'Reverse Integer', 
    'Palindrome Number', 
    'Roman to Integer', 
    'Longest Common Prefix'
  ];

  return (
    <div className="min-h-screen text-white bg-gradient-to-br from-gray-900 to-gray-800">
      <Navbar />

      <main className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-8">
        <section className="space-y-8">
          <div className="bg-slate-800 rounded-lg shadow-xl">
            <div className="p-6 border-b border-gray-700 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-emerald-400">Question of the Day</h2>
              
            </div>
            <div className="flex justify-between items-center p-6 text-purple-300 font-bold mx-3">
              <div>1. Two Sum </div>
              <button className="bg-emerald-600 text-white py-2 px-4 rounded-md hover:bg-emerald-500 transition-colors duration-300 flex items-center space-x-2">
                <span>Solve</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="bg-slate-800 rounded-lg shadow-xl">
            <div className="p-6 border-b border-gray-700">
              <h2 className="text-2xl font-bold text-emerald-400">Previous Day Questions</h2>
            </div>
            <div className="flex flex-col gap-4 p-3">
              {questions.filter(q => q !== 'Two Sum').map((question, index) => (
                <div 
                  key={index} 
                  className="bg-gray-700 p-4 rounded-lg flex justify-between items-center hover:bg-gray-600 transition-colors cursor-pointer"
                >
                  <span className="text-purple-300 font-semibold">{index + 2}. {question}</span>
                  <div className="flex items-center space-x-2">
                    <button className={`py-2 px-4 rounded-md transition-colors duration-300 ${index % 2 === 0 ? 'bg-emerald-600 hover:bg-emerald-500 text-white' : 'bg-gray-500 hover:bg-gray-400 text-gray-200'}`}>
                      {index % 2 === 0 ? 'Solve' : 'Solved'}
                    </button>
                    <ChevronRight className="w-5 h-5 text-emerald-400" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;