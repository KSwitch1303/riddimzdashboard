import React from 'react';

export default function Page() {
  // Mock data (replace with real data from your backend or Solana)
  const trendingPerformances = [
    {
      id: '1',
      title: 'Epic Essence Cover',
      performer: '@KaraokeStar',
      likes: 1200,
      thumbnail: 'https://via.placeholder.com/300x200',
    },
    {
      id: '2',
      title: 'Bohemian Rhapsody Battle',
      performer: '@RockLegend',
      likes: 950,
      thumbnail: 'https://via.placeholder.com/300x200',
    },
    {
      id: '3',
      title: 'Afrobeats Challenge',
      performer: '@VibeMaster',
      likes: 800,
      thumbnail: 'https://via.placeholder.com/300x200',
    },
  ];

  const recommended = [
    {
      id: '1',
      type: 'room',
      title: 'Afrobeats Jam Session',
      host: '@DJVibe',
      genre: 'Afrobeats',
    },
    {
      id: '2',
      type: 'song',
      title: 'Levitating',
      artist: 'Dua Lipa',
      genre: 'Pop',
    },
    {
      id: '3',
      type: 'performer',
      title: '@MelodyQueen',
      genre: 'R&B',
    },
  ];

  const activeRooms = [
    {
      id: '1',
      name: 'Hip-Hop Freestyle',
      host: '@RapGod',
      participants: 10,
      type: 'Public',
      genre: 'Hip-Hop',
    },
    {
      id: '2',
      name: 'Pop Hits Night',
      host: '@PopStar',
      participants: 15,
      type: 'NFT Gated',
      genre: 'Pop',
    },
    {
      id: '3',
      name: 'Classics Rewind',
      host: '@RetroVibes',
      participants: 8,
      type: 'Private',
      genre: 'Classics',
    },
  ];

  const featuredNfts = [
    {
      id: '1',
      title: 'Golden Mic #001',
      creator: '@KaraokeStar',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: '2',
      title: 'Viral Challenge Clip',
      creator: '@VibeMaster',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: '3',
      title: 'Top Singer Badge',
      creator: '@RockLegend',
      image: 'https://via.placeholder.com/150',
    },
  ];

  const popularArtists = [
    { id: '1', name: '@KaraokeStar', genre: 'Afrobeats' },
    { id: '2', name: '@RockLegend', genre: 'Rock' },
    { id: '3', name: '@MelodyQueen', genre: 'R&B' },
  ];

  const upcomingEvents = [
    {
      id: '1',
      title: 'Battle Royale Karaoke',
      date: '2025-05-15',
      type: 'Competition',
    },
    {
      id: '2',
      title: 'Afrobeats Night Live',
      date: '2025-05-20',
      type: 'Event',
    },
    {
      id: '3',
      title: 'NFT Karaoke Drop',
      date: '2025-05-25',
      type: 'Drop',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 font-sans">
      {/* Hero/Highlight Banner */}
      <div className="bg-black text-white rounded-lg shadow-md p-6 sm:p-8 mb-6 sm:mb-8 hover:border-2 hover:border-red-500 transition-all">
        <h1 className="text-2xl sm:text-3xl font-bold text-red-600 mb-4">
          Join the Battle Royale Karaoke Challenge!
        </h1>
        <p className="text-gray-300 text-sm sm:text-base mb-6">
          Compete with singers worldwide and mint your performance as an NFT!
        </p>
        <button className="bg-red-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-md hover:bg-red-700 text-sm sm:text-base transition-all">
          Join Now
        </button>
      </div>

      {/* Trending Karaoke Performances */}
      <div className="mb-6 sm:mb-8">
        <h2 className="text-base sm:text-lg font-semibold text-red-500 mb-3 sm:mb-4">
          Trending Karaoke Performances
        </h2>
        <div className="flex gap-4 overflow-x-auto scrollbar-hide">
          {trendingPerformances.map((performance) => (
            <div
              key={performance.id}
              className="bg-black text-white rounded-lg shadow-md p-4 flex-shrink-0 w-64 sm:w-80 hover:border-2 hover:border-red-500 transition-all"
            >
              <img
                src={performance.thumbnail}
                alt={performance.title}
                className="w-full h-32 sm:h-40 object-cover rounded-md mb-3"
              />
              <h3 className="text-sm sm:text-base font-medium text-red-500">
                {performance.title}
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm">{performance.performer}</p>
              <p className="text-gray-400 text-xs sm:text-sm">{performance.likes} Likes</p>
              <button className="mt-3 text-red-400 hover:text-red-300 text-xs sm:text-sm">
                Watch Now
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Recommended for You */}
      <div className="mb-6 sm:mb-8">
        <h2 className="text-base sm:text-lg font-semibold text-red-500 mb-3 sm:mb-4">
          Recommended for You
        </h2>
        <div className="flex gap-4 overflow-x-auto scrollbar-hide">
          {recommended.map((item) => (
            <div
              key={item.id}
              className="bg-black text-white rounded-lg shadow-md p-4 flex-shrink-0 w-64 sm:w-80 hover:border-2 hover:border-red-500 transition-all"
            >
              <h3 className="text-sm sm:text-base font-medium text-red-500">{item.title}</h3>
              <p className="text-gray-300 text-xs sm:text-sm">
                {item.type === 'room' ? `Host: ${item.host}` : item.type === 'song' ? `By ${item.artist}` : 'Performer'}
              </p>
              <p className="text-gray-400 text-xs sm:text-sm">{item.genre}</p>
              <button className="mt-3 text-red-400 hover:text-red-300 text-xs sm:text-sm">
                {item.type === 'room' ? 'Join Room' : item.type === 'song' ? 'Sing Now' : 'Follow'}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Active Karaoke Rooms */}
      <div className="mb-6 sm:mb-8">
        <h2 className="text-base sm:text-lg font-semibold text-red-500 mb-3 sm:mb-4">
          Active Karaoke Rooms
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {activeRooms.map((room) => (
            <div
              key={room.id}
              className="bg-black text-white rounded-lg shadow-md p-4 hover:border-2 hover:border-red-500 transition-all"
            >
              <h3 className="text-sm sm:text-base font-medium text-red-500">{room.name}</h3>
              <p className="text-gray-300 text-xs sm:text-sm">Host: {room.host}</p>
              <p className="text-gray-300 text-xs sm:text-sm">Participants: {room.participants}</p>
              <p className="text-gray-300 text-xs sm:text-sm">Type: {room.type}</p>
              <p className="text-gray-400 text-xs sm:text-sm">Genre: {room.genre}</p>
              <button className="mt-3 bg-red-600 text-white px-3 py-2 rounded-md hover:bg-red-700 text-xs sm:text-sm transition-all">
                Join Room
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Featured NFTs/Collections */}
      <div className="mb-6 sm:mb-8">
        <h2 className="text-base sm:text-lg font-semibold text-red-500 mb-3 sm:mb-4">
          Featured NFTs
        </h2>
        <div className="flex gap-4 overflow-x-auto scrollbar-hide">
          {featuredNfts.map((nft) => (
            <div
              key={nft.id}
              className="bg-black text-white rounded-lg shadow-md p-4 flex-shrink-0 w-64 sm:w-80 hover:border-2 hover:border-red-500 transition-all"
            >
              <img
                src={nft.image}
                alt={nft.title}
                className="w-full h-32 sm:h-40 object-cover rounded-md mb-3"
              />
              <h3 className="text-sm sm:text-base font-medium text-red-500">{nft.title}</h3>
              <p className="text-gray-300 text-xs sm:text-sm">Creator: {nft.creator}</p>
              <button className="mt-3 text-red-400 hover:text-red-300 text-xs sm:text-sm">
                Explore
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mb-6 sm:mb-8">
        <h2 className="text-base sm:text-lg font-semibold text-red-500 mb-3 sm:mb-4">
          Quick Actions
        </h2>
        <div className="flex flex-wrap gap-4">
          <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 text-sm sm:text-base transition-all">
            Start Singing
          </button>
          <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 text-sm sm:text-base transition-all">
            Create Room
          </button>
          <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 text-sm sm:text-base transition-all">
            Browse Songs
          </button>
        </div>
      </div>

      {/* Popular Artists/Communities */}
      <div className="mb-6 sm:mb-8">
        <h2 className="text-base sm:text-lg font-semibold text-red-500 mb-3 sm:mb-4">
          Popular Artists
        </h2>
        <div className="flex gap-4 overflow-x-auto scrollbar-hide">
          {popularArtists.map((artist) => (
            <div
              key={artist.id}
              className="bg-black text-white rounded-lg shadow-md p-4 flex-shrink-0 w-64 sm:w-80 hover:border-2 hover:border-red-500 transition-all"
            >
              <h3 className="text-sm sm:text-base font-medium text-red-500">{artist.name}</h3>
              <p className="text-gray-400 text-xs sm:text-sm">{artist.genre}</p>
              <button className="mt-3 text-red-400 hover:text-red-300 text-xs sm:text-sm">
                Follow
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Events/Competitions */}
      <div>
        <h2 className="text-base sm:text-lg font-semibold text-red-500 mb-3 sm:mb-4">
          Upcoming Events
        </h2>
        <div className="flex gap-4 overflow-x-auto scrollbar-hide">
          {upcomingEvents.map((event) => (
            <div
              key={event.id}
              className="bg-black text-white rounded-lg shadow-md p-4 flex-shrink-0 w-64 sm:w-80 hover:border-2 hover:border-red-500 transition-all"
            >
              <h3 className="text-sm sm:text-base font-medium text-red-500">{event.title}</h3>
              <p className="text-gray-300 text-xs sm:text-sm">Date: {event.date}</p>
              <p className="text-gray-400 text-xs sm:text-sm">Type: {event.type}</p>
              <button className="mt-3 bg-red-600 text-white px-3 py-2 rounded-md hover:bg-red-700 text-xs sm:text-sm transition-all">
                {event.type === 'Competition' ? 'Register' : 'Join Waitlist'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}