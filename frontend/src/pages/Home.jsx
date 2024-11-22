import React from 'react';
import { Code, User, ChevronRight } from 'lucide-react';

const Home = () => {
    const solvedQuestions = ['Two Sum', 'Palindrome Number'];

    return (
        <div className="min-h-screen text-white bg-gradient-to-br from-gray-900 to-gray-800">
            <header className="bg-gradient-to-r from-purple-900 to-indigo-900 border-b border-purple-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="py-6">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-lg"></div>
                <span className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-400">
                  codeclub
                </span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-800 bg-opacity-50 py-2 px-4 rounded-full transition-all hover:bg-opacity-75">
                <User className="w-5 h-5" />
                <span>Your Account</span>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-slate-800 p-8 rounded-lg shadow-xl mb-12 hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-3xl font-bold mb-6 text-emerald-400">Question of the Day</h2>
          <div className="bg-gray-700 p-6 rounded-lg shadow-inner">
            <h3 className="text-2xl font-semibold text-purple-300">Two Sum</h3>
            <p className="mt-4 text-gray-300 leading-relaxed">
              Given an array of i   ntegers nums and an integer target, return indices of the two numbers such that they add up to target.
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

