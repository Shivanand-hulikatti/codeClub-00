import React from 'react';
import { Trophy } from 'lucide-react';
import Navbar from '@/components/Navbar';

const mockData = [
  { id: 1, rank: 1, name: "AlphaPro", score: 1500, avatar: '/api/placeholder/80/80?text=AP' },
  { id: 2, rank: 2, name: "GameMaster", score: 1200, avatar: '/api/placeholder/80/80?text=GM' },
  { id: 3, rank: 3, name: "SilentNinja", score: 1000, avatar: '/api/placeholder/80/80?text=SN' },
  { id: 4, rank: 4, name: "StarPlayer", score: 900, avatar: '/api/placeholder/80/80?text=SP' },
  { id: 5, rank: 5, name: "QuickSilver", score: 800, avatar: '/api/placeholder/80/80?text=QS' },
];

const Leaderboard = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <div className="max-w-2xl mx-auto">
        <header className="text-center mb-10 mt-5 md:py-4">
          <h1 className="text-4xl font-extrabold text-gray-100 mb-2">Leaderboard</h1>
          <p className="text-gray-400">Top performers</p>
        </header>
        <div className="space-y-4 px-5 md:px-0">
          {mockData.map((player, index) => (
            <div 
              key={player.id} 
              className={`
                flex items-center justify-between 
                p-4 rounded-lg 
                ${index === 0 ? 'bg-yellow-900 border border-yellow-600' : 'bg-gray-800'}
                transition-all hover:bg-gray-700
              `}
            >
              <div className="flex items-center space-x-4">
                <span className="text-gray-500 font-bold w-6">
                  #{player.rank}
                </span>
                <img 
                  src={player.avatar} 
                  alt={player.name} 
                  className="w-10 h-10 rounded-full object-cover"
                />
                <span className="font-medium">{player.name}</span>
              </div>
              <span className="font-bold text-gray-200">{player.score}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;