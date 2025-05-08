'use client'
import { useState } from "react";

export default function Page() {
  // Mock user data (replace with real data from your backend or Solana)
  const user = {
    avatar: 'https://via.placeholder.com/150',
    banner: 'https://via.placeholder.com/1200x300',
    displayName: 'KaraokeStar123',
    username: '@KaraokeStar',
    bio: 'Karaoke Champion | NFT Collector',
    kycStatus: 'Not Started', // Options: Not Started, Pending, Approved, Rejected
    kycDetails: {
      idUploaded: false,
      selfieUploaded: false,
      reviewStatus: null,
      rejectionReason: null,
    },
    walletAddress: '9xYz...AbCd',
    fullName: 'John Doe',
    email: 'john.doe@riddimz.com',
    socialAccounts: {
      twitter: '@KaraokeStar123',
      discord: 'KaraokeStar#4567',
    },
    country: 'United States',
    followers: 250,
    following: 180,
    joinedDate: 'March 2025',
    nfts: [
      {
        id: '1',
        image: 'https://via.placeholder.com/150',
        title: 'Epic Karaoke Moment',
        description: 'Bohemian Rhapsody - Battle #5',
      },
      {
        id: '2',
        image: 'https://via.placeholder.com/150',
        title: 'Top Singer Badge',
        description: 'March 2025 Top 10',
      },
    ],
    activity: [
      { id: '1', type: 'Performance', details: 'Sang "Essence" - 95% score', date: '2025-04-17' },
      { id: '2', type: 'Room Hosted', details: 'Afrobeats Jam Session', date: '2025-04-16' },
      { id: '3', type: 'NFT Minted', details: 'Golden Mic #001', date: '2025-04-15' },
    ],
    badges: [
      { id: '1', name: 'First Performance NFT', icon: '🎤' },
      { id: '2', name: 'Hosted 10 Rooms', icon: '🏠' },
      { id: '3', name: 'Top 5 Leaderboard', icon: '🏆' },
    ],
    performances: 42,
    nftsOwned: 12,
    nftsSold: 3,
    earnings: '0.25 SOL',
    leaderboardRank: 15,
    twoFactorEnabled: false,
    connectedDevices: ['iPhone 14', 'Windows PC'],
  };

  // State for settings tabs and KYC modal
  const [activeTab, setActiveTab] = useState('profile');
  const [isKycModalOpen, setIsKycModalOpen] = useState(false);

  // Copy wallet address to clipboard
  const copyWalletAddress = () => {
    navigator.clipboard.write(user.walletAddress);
    alert('Wallet address copied!');
  };

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 font-sans">
      <h1 className="text-2xl sm:text-3xl font-bold text-center text-red-600 mb-6 sm:mb-8">
        Profile
      </h1>

      {/* Profile Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Sidebar: Profile Overview */}
        <div className="lg:col-span-1">
          <div className="bg-black text-white rounded-lg shadow-md p-4 sm:p-6 hover:border-2 hover:border-red-500 transition-all">
            <img
              src={user.banner}
              alt="Profile Banner"
              className="w-full h-32 sm:h-40 object-cover rounded-md mb-4"
            />
            <div className="flex justify-center -mt-12 sm:-mt-16">
              <img
                src={user.avatar}
                alt="Profile Picture"
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-black"
              />
            </div>
            <div className="text-center mt-4">
              <div className="flex justify-center items-center gap-2">
                <h2 className="text-base sm:text-lg font-semibold text-red-500">
                  {user.displayName} ({user.username})
                </h2>
                <span
                  className={`text-xs sm:text-sm px-2 py-1 rounded-full ${
                    user.kycStatus === 'Approved'
                      ? 'bg-green-600 text-white'
                      : user.kycStatus === 'Pending'
                      ? 'bg-yellow-600 text-white'
                      : user.kycStatus === 'Rejected'
                      ? 'bg-red-600 text-white'
                      : 'bg-gray-600 text-gray-300'
                  }`}
                >
                  {user.kycStatus}
                </span>
              </div>
              <p className="text-gray-300 text-sm sm:text-base mt-2">{user.bio}</p>
              <p
                className="text-gray-400 text-sm truncate cursor-pointer hover:text-gray-200 mt-2"
                onClick={copyWalletAddress}
                title="Click to copy"
              >
                Wallet: {user.walletAddress}
              </p>
              <div className="flex justify-center gap-4 mt-3">
                <p className="text-gray-300 text-sm sm:text-base">
                  Followers: {user.followers}
                </p>
                <p className="text-gray-300 text-sm sm:text-base">
                  Following: {user.following}
                </p>
              </div>
              <p className="text-gray-400 text-sm mt-2">
                Joined: {user.joinedDate}
              </p>
              <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 text-sm sm:text-base transition-all">
                Edit Profile
              </button>
            </div>
          </div>
        </div>

        {/* Main Section */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          {/* Personal Information and KYC Verification */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Personal Information */}
            <div className="bg-black text-white rounded-lg shadow-md p-4 sm:p-6 hover:border-2 hover:border-red-500 transition-all">
              <h3 className="text-base sm:text-lg font-semibold text-red-500 mb-3 sm:mb-4">
                Personal Information
              </h3>
              <div className="space-y-3 text-gray-300 text-sm sm:text-base">
                <div>
                  <span className="font-medium text-red-400">Full Name:</span> {user.fullName}
                </div>
                <div>
                  <span className="font-medium text-red-400">Email:</span> {user.email}
                </div>
                <div>
                  <span className="font-medium text-red-400">Wallet Address:</span>{' '}
                  <span
                    className="text-gray-400 cursor-pointer hover:text-gray-200"
                    onClick={copyWalletAddress}
                    title="Click to copy"
                  >
                    {user.walletAddress}
                  </span>
                </div>
                <div>
                  <span className="font-medium text-red-400">Social Accounts:</span>{' '}
                  {user.socialAccounts.twitter} | {user.socialAccounts.discord}
                </div>
                <div>
                  <span className="font-medium text-red-400">Country:</span> {user.country}
                </div>
                <div>
                  <span className="font-medium text-red-400">Joined:</span> {user.joinedDate}
                </div>
              </div>
              <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 text-sm sm:text-base transition-all">
                Update Info
              </button>
            </div>

            {/* KYC Verification Panel */}
            <div className="bg-black text-white rounded-lg shadow-md p-4 sm:p-6 hover:border-2 hover:border-red-500 transition-all">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <h3 className="text-base sm:text-lg font-semibold text-red-500">
                  KYC Verification
                </h3>
                <div className="group relative">
                  <span className="text-gray-400 cursor-help">ℹ️</span>
                  <div className="absolute hidden group-hover:block w-64 bg-gray-800 text-gray-300 text-xs p-2 rounded-md -top-10 left-1/2 transform -translate-x-1/2 z-10">
                    KYC is required to sell NFTs, cash out earnings, or join exclusive rooms.
                  </div>
                </div>
              </div>
              <p className="text-gray-300 text-sm sm:text-base mb-3">
                Status: {user.kycStatus}
              </p>
              {user.kycStatus === 'Rejected' && (
                <p className="text-red-400 text-sm mb-3">
                  Reason: {user.kycDetails.rejectionReason || 'Please re-upload documents.'}
                </p>
              )}
              <div className="space-y-2 mb-4">
                <p className="text-gray-300 text-sm sm:text-base">
                  ID Uploaded: {user.kycDetails.idUploaded ? '✅' : '❌'}
                </p>
                <p className="text-gray-300 text-sm sm:text-base">
                  Selfie Uploaded: {user.kycDetails.selfieUploaded ? '✅' : '❌'}
                </p>
                <p className="text-gray-300 text-sm sm:text-base">
                  Review Status: {user.kycDetails.reviewStatus || 'Not Started'} ⏳
                </p>
              </div>
              <button
                onClick={() => setIsKycModalOpen(true)}
                className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 text-sm sm:text-base transition-all"
              >
                {user.kycStatus === 'Rejected' ? 'Re-upload Documents' : 'Verify Identity'}
              </button>
              {isKycModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                  <div className="bg-black p-6 rounded-lg text-white w-full max-w-md">
                    <h3 className="text-lg font-semibold text-red-500 mb-4">KYC Verification</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="text-gray-300 text-sm">Upload ID</label>
                        <input type="file" className="w-full bg-gray-800 rounded-md p-2 text-gray-300" />
                      </div>
                      <div>
                        <label className="text-gray-300 text-sm">Upload Selfie</label>
                        <input type="file" className="w-full bg-gray-800 rounded-md p-2 text-gray-300" />
                      </div>
                    </div>
                    <div className="flex justify-end gap-3 mt-6">
                      <button
                        onClick={() => setIsKycModalOpen(false)}
                        className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 text-sm"
                      >
                        Cancel
                      </button>
                      <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 text-sm">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Activity Stats */}
          <div className="bg-black text-white rounded-lg shadow-md p-4 sm:p-6 hover:border-2 hover:border-red-500 transition-all">
            <h3 className="text-base sm:text-lg font-semibold text-red-500 mb-3 sm:mb-4">
              Activity Stats
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-300 text-sm sm:text-base">
              <div>
                <span className="font-medium text-red-400">Performances:</span> {user.performances}
              </div>
              <div>
                <span className="font-medium text-red-400">NFTs Owned:</span> {user.nftsOwned}
              </div>
              <div>
                <span className="font-medium text-red-400">NFTs Sold:</span> {user.nftsSold}
              </div>
              <div>
                <span className="font-medium text-red-400">Earnings:</span> {user.earnings}
              </div>
              <div>
                <span className="font-medium text-red-400">Leaderboard Rank:</span> #{user.leaderboardRank}
              </div>
            </div>
          </div>

          {/* NFT & Collectibles Showcase */}
          <div className="bg-black text-white rounded-lg shadow-md p-4 sm:p-6 hover:border-2 hover:border-red-500 transition-all">
            <h3 className="text-base sm:text-lg font-semibold text-red-500 mb-3 sm:mb-4">
              NFT & Collectibles
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {user.nfts.map((nft) => (
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
              View in Wallet
            </a>
          </div>

          {/* Activity History */}
          <div className="bg-black text-white rounded-lg shadow-md p-4 sm:p-6 hover:border-2 hover:border-red-500 transition-all">
            <h3 className="text-base sm:text-lg font-semibold text-red-500 mb-3 sm:mb-4">
              Activity History
            </h3>
            <div className="space-y-3">
              {user.activity.map((item) => (
                <div key={item.id} className="flex justify-between text-gray-300 text-sm sm:text-base">
                  <div>
                    <span className="font-medium text-red-400">{item.type}</span>: {item.details}
                  </div>
                  <div className="text-gray-400">{item.date}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Badges & Achievements */}
          <div className="bg-black text-white rounded-lg shadow-md p-4 sm:p-6 hover:border-2 hover:border-red-500 transition-all">
            <h3 className="text-base sm:text-lg font-semibold text-red-500 mb-3 sm:mb-4">
              Badges & Achievements
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {user.badges.map((badge) => (
                <div key={badge.id} className="bg-gray-900 rounded-md p-4 text-center">
                  <div className="text-2xl mb-2">{badge.icon}</div>
                  <p className="text-sm sm:text-base text-red-500">{badge.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Profile and Security Settings */}
          <div className="bg-black text-white rounded-lg shadow-md p-4 sm:p-6 hover:border-2 hover:border-red-500 transition-all">
            <h3 className="text-base sm:text-lg font-semibold text-red-500 mb-3 sm:mb-4">
              Settings
            </h3>
            <div className="flex border-b border-gray-700 mb-4">
              <button
                className={`px-4 py-2 text-sm sm:text-base ${
                  activeTab === 'profile' ? 'text-red-500 border-b-2 border-red-500' : 'text-gray-300'
                }`}
                onClick={() => setActiveTab('profile')}
              >
                Profile Details
              </button>
              <button
                className={`px-4 py-2 text-sm sm:text-base ${
                  activeTab === 'privacy' ? 'text-red-500 border-b-2 border-red-500' : 'text-gray-300'
                }`}
                onClick={() => setActiveTab('privacy')}
              >
                Privacy & Notifications
              </button>
              <button
                className={`px-4 py-2 text-sm sm:text-base ${
                  activeTab === 'wallets' ? 'text-red-500 border-b-2 border-red-500' : 'text-gray-300'
                }`}
                onClick={() => setActiveTab('wallets')}
              >
                Connected Wallets
              </button>
              <button
                className={`px-4 py-2 text-sm sm:text-base ${
                  activeTab === 'security' ? 'text-red-500 border-b-2 border-red-500' : 'text-gray-300'
                }`}
                onClick={() => setActiveTab('security')}
              >
                Security
              </button>
            </div>
            {activeTab === 'profile' && (
              <div>
                <p className="text-gray-300 text-sm sm:text-base mb-2">Display Name</p>
                <input
                  type="text"
                  defaultValue={user.displayName}
                  className="w-full bg-gray-800 text-white rounded-md p-2 mb-4"
                />
                <p className="text-gray-300 text-sm sm:text-base mb-2">Bio</p>
                <textarea
                  defaultValue={user.bio}
                  className="w-full bg-gray-800 text-white rounded-md p-2 mb-4"
                />
                <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 text-sm sm:text-base">
                  Save Changes
                </button>
              </div>
            )}
            {activeTab === 'privacy' && (
              <div>
                <p className="text-gray-300 text-sm sm:text-base mb-2">Profile Visibility</p>
                <select className="w-full bg-gray-800 text-white rounded-md p-2 mb-4">
                  <option>Public</option>
                  <option>Private</option>
                </select>
                <p className="text-gray-300 text-sm sm:text-base mb-2">Notifications</p>
                <label className="flex items-center text-gray-300 text-sm sm:text-base">
                  <input type="checkbox" className="mr-2" />
                  Enable email notifications
                </label>
              </div>
            )}
            {activeTab === 'wallets' && (
              <div>
                <p className="text-gray-300 text-sm sm:text-base mb-2">Connected Wallet</p>
                <p className="text-gray-400 text-sm">{user.walletAddress}</p>
                <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 text-sm sm:text-base mt-4">
                  Disconnect Wallet
                </button>
              </div>
            )}
            {activeTab === 'security' && (
              <div>
                <div className="mb-4">
                  <p className="text-gray-300 text-sm sm:text-base mb-2">Change Password</p>
                  <input
                    type="password"
                    placeholder="New Password"
                    className="w-full bg-gray-800 text-white rounded-md p-2"
                  />
                </div>
                <div className="mb-4">
                  <p className="text-gray-300 text-sm sm:text-base mb-2">Two-Factor Authentication</p>
                  <label className="flex items-center text-gray-300 text-sm sm:text-base">
                    <input
                      type="checkbox"
                      checked={user.twoFactorEnabled}
                      onChange={() => {}}
                      className="mr-2"
                    />
                    Enable 2FA
                  </label>
                </div>
                <div>
                  <p className="text-gray-300 text-sm sm:text-base mb-2">Connected Devices</p>
                  <ul className="list-none text-gray-300 text-sm sm:text-base">
                    {user.connectedDevices.map((device, index) => (
                      <li key={index} className="flex justify-between mb-2">
                        <span>{device}</span>
                        <button className="text-red-400 hover:text-red-300">Disconnect</button>
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 text-sm sm:text-base">
                  Save Security Settings
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}