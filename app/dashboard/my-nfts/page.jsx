import React from 'react';

export default function Page() {
  // Mock NFT data (replace with real data from Solana/Metaplex or your backend)
  const nfts = [
    {
      id: '1',
      image: 'https://via.placeholder.com/150', // Placeholder for NFT image/video
      title: 'Epic Karaoke Moment: Bohemian Rhapsody',
      description: 'Top performance from Karaoke Battle #5',
      mintDate: '2025-03-15',
      rarity: 'Legendary',
      transactionLink: 'https://explorer.solana.com/tx/abc123?cluster=devnet',
    },
    {
      id: '2',
      image: 'https://via.placeholder.com/150',
      title: 'Top Singer Badge',
      description: 'Awarded for Top 10 Singer of March 2025',
      mintDate: '2025-03-31',
      rarity: 'Rare',
      transactionLink: 'https://explorer.solana.com/tx/def456?cluster=devnet',
    },
    {
      id: '3',
      image: 'https://via.placeholder.com/150',
      title: 'Golden Mic Avatar Skin',
      description: 'Exclusive collectible from Riddimz Launch Event',
      mintDate: '2025-04-01',
      rarity: 'Epic',
      transactionLink: 'https://explorer.solana.com/tx/ghi789?cluster=devnet',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 font-sans">
      <h1 className="text-2xl sm:text-3xl font-bold text-center text-red-600 mb-6 sm:mb-8">
        My NFTs/Collections
      </h1>

      {/* NFT Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {nfts.map((nft) => (
          <div
            key={nft.id}
            className="bg-black text-white rounded-lg shadow-md p-4 sm:p-6 flex flex-col hover:border-2 hover:border-red-500 transition-all"
          >
            {/* NFT Image/Video Preview */}
            <img
              src={nft.image}
              alt={nft.title}
              className="w-full h-40 sm:h-48 object-cover rounded-md mb-4"
            />

            {/* NFT Details */}
            <h2 className="text-base sm:text-lg font-semibold text-red-500 mb-2">
              {nft.title}
            </h2>
            <p className="text-gray-300 text-sm sm:text-base mb-2">
              {nft.description}
            </p>
            <p className="text-gray-400 text-sm mb-2">Mint Date: {nft.mintDate}</p>
            <p className="text-gray-400 text-sm mb-4">Rarity: {nft.rarity}</p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 mt-auto">
              <a
                href={nft.transactionLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 text-white px-3 py-2 rounded-md hover:bg-red-700 text-sm sm:text-base text-center"
              >
                View on Solana Explorer
              </a>
              <button className="bg-red-600 text-white px-3 py-2 rounded-md hover:bg-red-700 text-sm sm:text-base">
                Resale/Transfer
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Fallback for Empty Collection */}
      {nfts.length === 0 && (
        <div className="bg-black text-white rounded-lg shadow-md p-4 sm:p-6 text-center hover:border-2 hover:border-red-500 transition-all">
          <p className="text-gray-300 text-sm sm:text-base">
            No NFTs yet! Start singing or join events to earn your first Riddimz NFT.
          </p>
          <a
            href="/karaoke/join"
            className="inline-block bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 mt-4 text-sm sm:text-base"
          >
            Join a Karaoke Session
          </a>
        </div>
      )}
    </div>
  );
}