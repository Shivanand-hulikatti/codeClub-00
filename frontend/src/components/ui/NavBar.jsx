import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="backdrop-blur-md fixed w-full z-20 top-0 left-0 mt-4">
            <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto px-4 py-3">
                <a href="#" className="flex items-center space-x-2">
                    <div className='border border-slate-800 rounded-full p-2'>
                        <div className="h-8 w-8 bg-gradient-to-br from-emerald-400 to-indigo-500 rounded-full " />
                    </div>
                    
                    <span className="text-xl font-medium text-white">Code Club</span>
                </a>
                
                <button 
                    onClick={handleToggle} 
                    className="md:hidden p-2 rounded-lg hover:bg-slate-800 transition-colors"
                    aria-label="Toggle menu"
                >
                    {isOpen ? (
                        <X className="w-5 h-5 text-slate-300" />
                    ) : (
                        <Menu className="w-6 h-7 text-slate-300 " />
                    )}
                </button>

                <div className={`${
                    isOpen 
                        ? 'translate-y-0 opacity-100 visible' 
                        : '-translate-y-4 opacity-0 invisible md:translate-y-0 md:opacity-100 md:visible'
                    } transition-all duration-200 ease-in-out absolute md:relative top-full left-0 right-0 md:top-0 bg-slate-900/90 md:bg-transparent backdrop-blur-md md:backdrop-blur-none w-full md:w-auto md:flex md:items-center md:justify-between`}>
                    <ul className="flex flex-col md:flex-row items-start md:items-center p-4 md:p-0 space-y-4 md:space-y-0 md:space-x-8 md:border md:border-slate-800 md:px-36 md:py-2 md:rounded-full">
                        {[
                            { name: 'About', href: '#', current: true },
                            { name: 'QOTD', href: '#' },
                            { name: 'Community', href: '#' },
                            { name: 'Contact', href: '#' },
                        ].map((item) => (
                            <li key={item.name}>
                                <a 
                                    href={item.href}
                                    className={`relative text-md font-medium ${
                                        item.current 
                                            ? 'text-emerald-400' 
                                            : 'text-slate-300 hover:text-emerald-400'
                                    } transition-colors duration-200 ease-in-out
                                    before:absolute before:inset-x-0 before:-bottom-1 before:h-0.5 
                                    before:bg-emerald-400 before:scale-x-0 before:transition-transform 
                                    before:duration-200 hover:before:scale-x-100`}
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;