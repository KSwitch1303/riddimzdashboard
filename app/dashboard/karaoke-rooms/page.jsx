import React from 'react';

export default function Page() {
  // Mock room data (replace with real data from your backend or Solana)
  const rooms = [
    {
      id: '1',
      name: 'Afrobeats Jam Session',
      host: 'DJVibe',
      participants: 12,
      type: 'Open',
      currentSong: 'Wizkid - Essence',
    },
    {
      id: '2',
      name: 'Pop Hits Night',
      host: 'MelodyQueen',
      participants: 8,
      type: 'NFT Gated',
      currentSong: 'Dua Lipa - Levitating',
    },
    {
      id: '3',
      name: '90s Classics Throwback',
      host: 'RetroStar',
      participants: 15,
      type: 'Private',
      currentSong: 'Backstreet Boys - I Wanna Be With You',
    },
  ];

  // Mock filter categories
  const filters = [
    { name: 'All', active: true },
    { name: 'Hip-Hop', active: false },
    { name: 'R&B', active: false },
    { name: 'Afrobeats', active: false },
    { name: 'Pop', active: false },
    { name: 'Classics', active: false },
    { name: 'Trending', active: false },
    { name: 'NFT-Only', active: false },
  ];

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 font-sans">
      <h1 className="text-2xl sm:text-3xl font-bold text-center text-red-600 mb-6 sm:mb-8">
        Karaoke Rooms
      </h1>

      {/* Create New Room Button */}
      <div className="mb-6 sm:mb-8 text-center">
        <button className="bg-red-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-md hover:bg-red-700 text-sm sm:text-base transition-all">
          Create New Room
        </button>
      </div>

      {/* Filters */}
      <div className="mb-6 sm:mb-8">
        <h3 className="text-base sm:text-lg font-semibold text-red-500 mb-3 sm:mb-4">
          Filter Rooms
        </h3>
        <div className="flex sm:flex-wrap gap-2 sm:gap-3 overflow-x-auto sm:overflow-x-visible scrollbar-hide">
          {filters.map((filter) => (
            <button
              key={filter.name}
              className={`px-3 py-1 sm:px-4 sm:py-2 rounded-md text-sm sm:text-base flex-shrink-0 ${
                filter.active
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              } transition-all`}
            >
              {filter.name}
            </button>
          ))}
        </div>
      </div>

      {/* Featured/Active Rooms */}
      <div className="mb-6 sm:mb-8">
        <h3 className="text-base sm:text-lg font-semibold text-red-500 mb-3 sm:mb-4">
          Featured Rooms
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="bg-black text-white rounded-lg shadow-md p-4 sm:p-6 flex flex-col hover:border-2 hover:border-red-500 transition-all"
            >
              <h4 className="text-sm sm:text-base font-medium text-red-500 mb-2">
                {room.name}
              </h4>
              <p className="text-gray-300 text-sm sm:text-base mb-1">
                Host: {room.host}
              </p>
              <p className="text-gray-300 text-sm sm:text-base mb-1">
                Participants: {room.participants}
              </p>
              <p className="text-gray-300 text-sm sm:text-base mb-1">
                Type: {room.type}
              </p>
              <p className="text-gray-300 text-sm sm:text-base mb-3">
                Now Playing: {room.currentSong}
              </p>
              <button className="mt-auto bg-red-600 text-white px-3 py-2 rounded-md hover:bg-red-700 text-sm sm:text-base transition-all">
                Join Room
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Recent/Joined Rooms (Placeholder) */}
      <div>
        <h3 className="text-base sm:text-lg font-semibold text-red-500 mb-3 sm:mb-4">
          Your Recent Rooms
        </h3>
        <div className="bg-black text-white rounded-lg shadow-md p-4 sm:p-6 text-center hover:border-2 hover:border-red-500 transition-all">
          <p className="text-gray-300 text-sm sm:text-base">
            No recent rooms yet. Join or create a room to get started!
          </p>
          <a
            href="/karaoke/join"
            className="inline-block bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 mt-4 text-sm sm:text-base transition-all"
          >
            Explore Rooms
          </a>
        </div>
      </div>
    </div>
  );
}