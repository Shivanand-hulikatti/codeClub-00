import React from 'react'
import { User, Trophy } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    let navigate = useNavigate();
  return (
    <header className="bg-gradient-to-r from-purple-900 to-indigo-900 border-b border-purple-700 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="py-4 flex items-center justify-between">
                        {/* Logo Section */}
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-lg text-white font-bold">
                                CC
                            </div>
                            <span className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-400">
                                codeclub
                            </span>
                        </div>

                        {/* Navigation Actions */}
                        <div className="flex items-center space-x-4">
                            <button onClick={e=>navigate('/leaderboard')} className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300">
                                <span className="relative px-4 py-2 transition-all ease-in duration-75 bg-transparent rounded-md group-hover:bg-opacity-0 flex items-center space-x-2">
                                    <Trophy className="w-5 h-5" />
                                    <span>Leaderboard</span>
                                </span>
                            </button>
                            <div className='flex items-center space-x-2 bg-purple-800 bg-opacity-50 py-2 px-4 rounded-full transition-all hover:bg-opacity-75 cursor-pointer'>
                                <User className="w-5 h-5" />
                                <span className="hidden md:inline">Account</span>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
  )
}

export default Navbar