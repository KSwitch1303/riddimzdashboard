import React from 'react';

export default function Page() {
  // Mock data (replace with real data from your backend or state management)
  const user = {
    avatar: 'https://via.placeholder.com/50', // Placeholder for user avatar
    username: 'KaraokeStar123',
    level: 'Pro Singer',
    walletBalance: '0.25 ETH',
    sessions: 42,
    recentSessions: ['Song A - 95%', 'Song B - 88%'],
    streak: 7,
    nftCount: 12,
    latestNfts: [
      {
        id: '1',
        image: 'https://via.placeholder.com/150',
        title: 'NFT #1: Epic Karaoke Moment',
        description: 'Top performance from Karaoke Battle #5',
      },
      {
        id: '2',
        image: 'https://via.placeholder.com/150',
        title: 'NFT #2: Top Singer Badge',
        description: 'Awarded for Top 10 Singer of March 2025',
      },
    ],
    mostValuableNft: 'Golden Mic #001',
    leaderboardRank: 15,
    points: 2450,
    unreadNotifications: 3,
    recentNotifications: [
      { message: 'New reward earned!', timestamp: '2025-04-18 10:00' },
      { message: 'You were mentioned in a session', timestamp: '2025-04-18 09:30' },
    ],
  };

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 font-sans">
      <h1 className="text-2xl sm:text-3xl font-bold text-center text-red-600 mb-6 sm:mb-8">
        Dashboard Overview
      </h1>

      {/* Main Layout: Stacked Sections */}
      <div className="flex flex-col gap-6">
        {/* Profile Summary + Karaoke Activity (Side by Side on Desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Profile Summary */}
          <section className="bg-black text-white rounded-lg shadow-md p-4 sm:p-6 hover:border-2 hover:border-red-500 transition-all">
            <div className="flex items-center gap-4 sm:gap-6">
              <img
                src={user.avatar}
                alt="User Avatar"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
              />
              <div>
                <h2 className="text-base sm:text-lg font-semibold text-red-500">
                  {user.username}
                </h2>
                <p className="text-gray-300 text-sm sm:text-base">Level: {user.level}</p>
                <p className="text-gray-300 text-sm sm:text-base">
                  Wallet: {user.walletBalance}
                </p>
              </div>
            </div>
          </section>

          {/* Karaoke Activity */}
          <section className="bg-black text-white rounded-lg shadow-md p-4 sm:p-6 hover:border-2 hover:border-red-500 transition-all">
            <h3 className="text-base sm:text-lg font-semibold text-red-500 mb-3 sm:mb-4">
              Karaoke Activity
            </h3>
            <p className="text-gray-300 text-sm sm:text-base">
              Total Sessions: {user.sessions}
            </p>
            <p className="text-gray-300 text-sm sm:text-base">
              Current Streak: {user.streak} days
            </p>
            <h4 className="text-sm sm:text-md font-medium text-red-400 mt-3 sm:mt-4">
              Recent Sessions:
            </h4>
            <ul className="list-none mt-2 space-y-1">
              {user.recentSessions.map((session, index) => (
                <li key={index} className="text-gray-300 text-sm sm:text-base">
                  {session}
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* NFT Collection */}
        <section className="bg-black text-white rounded-lg shadow-md p-4 sm:p-6 hover:border-2 hover:border-red-500 transition-all">
          <h3 className="text-base sm:text-lg font-semibold text-red-500 mb-3 sm:mb-4">
            NFT Collection
          </h3>
          <p className="text-gray-300 text-sm sm:text-base">
            Owned: {user.nftCount} NFTs
          </p>
          <p className="text-gray-300 text-sm sm:text-base">
            Most Valuable: {user.mostValuableNft}
          </p>
          <h4 className="text-sm sm:text-md font-medium text-red-400 mt-3 sm:mt-4">
            Latest NFTs:
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            {user.latestNfts.map((nft) => (
              <div key={nft.id} className="bg-gray-900 rounded-md p-4 flex flex-col">
                <img
                  src={nft.image}
                  alt={nft.title}
                  className="w-full h-32 sm:h-40 object-cover rounded-md mb-3"
                />
                <h5 className="text-sm sm:text-base font-medium text-red-500">
                  {nft.title}
                </h5>
                <p className="text-gray-400 text-xs sm:text-sm">{nft.description}</p>
              </div>
            ))}
          </div>
          <a
            href="/nfts"
            className="text-red-400 hover:text-red-300 text-sm sm:text-base mt-4 inline-block"
          >
            View All NFTs
          </a>
        </section>

        {/* Notifications + Leaderboard (Side by Side on Desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Notifications */}
          <section className="bg-black text-white rounded-lg shadow-md p-4 sm:p-6 hover:border-2 hover:border-red-500 transition-all">
            <h3 className="text-base sm:text-lg font-semibold text-red-500 mb-3 sm:mb-4">
              Notifications ({user.unreadNotifications} unread)
            </h3>
            <table className="w-full text-gray-300 text-sm sm:text-base">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-2">Message</th>
                  <th className="text-left py-2">Time</th>
                </tr>
              </thead>
              <tbody>
                {user.recentNotifications.map((notification, index) => (
                  <tr key={index} className="border-b border-gray-800">
                    <td className="py-2">{notification.message}</td>
                    <td className="py-2">{notification.timestamp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          {/* Leaderboard */}
          <section className="bg

-black text-white rounded-lg shadow-md p-4 sm:p-6 hover:border-2 hover:border-red-500 transition-all">
            <h3 className="text-base sm:text-lg font-semibold text-red-500 mb-3 sm:mb-4">
              Leaderboard
            </h3>
            <table className="w-full text-gray-300 text-sm sm:text-base">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-2">Rank</th>
                  <th className="text-left py-2">Points</th>
                  <th className="text-left py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-800">
                  <td className="py-2">#{user.leaderboardRank}</td>
                  <td className="py-2">{user.points}</td>
                  <td className="py-2">
                    <a
                      href="/leaderboard"
                      className="text-red-400 hover:text-red-300"
                    >
                      View Full
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>

        {/* Quick Actions */}
        <section className="bg-black text-white rounded-lg shadow-md p-4 sm:p-6 hover:border-2 hover:border-red-500 transition-all">
          <h3 className="text-base sm:text-lg font-semibold text-red-500 mb-3 sm:mb-4">
            Quick Actions
          </h3>
          <div className="flex flex-wrap gap-3 sm:gap-4">
            <button className="bg-red-600 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-md hover:bg-red-700 text-sm sm:text-base">
              Join Karaoke Session
            </button>
            <button className="bg-red-600 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-md hover:bg-red-700 text-sm sm:text-base">
              View NFT Marketplace
            </button>
            <button className="bg-red-600 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-md hover:bg-red-700 text-sm sm:text-base">
              Withdraw Earnings
            </button>
            <button className="bg-red-600 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-md hover:bg-red-700 text-sm sm:text-base">
              Update Profile
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}