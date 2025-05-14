'use client';
import React, { useState } from 'react';
import Link from 'next/link';

export default function Page() {
  // Mock room data (replace with real data from your backend or Solana)
  const rooms = [
    {
      id: '1',
      name: 'Afrobeats Jam Session',
      host: 'DJVibe',
      participants: 12,
      maxParticipants: 20,
      type: 'Public',
      genre: 'Afrobeats',
      currentSong: 'Wizkid - Essence',
      coverImage: 'https://via.placeholder.com/300x200',
      kycRequired: false,
    },
    {
      id: '2',
      name: 'Pop Hits Night',
      host: 'MelodyQueen',
      participants: 8,
      maxParticipants: 15,
      type: 'NFT Gated',
      genre: 'Pop',
      currentSong: 'Dua Lipa - Levitating',
      coverImage: 'https://via.placeholder.com/300x200',
      kycRequired: true,
    },
    {
      id: '3',
      name: '90s Classics Throwback',
      host: 'RetroStar',
      participants: 15,
      maxParticipants: 25,
      type: 'Private',
      genre: 'Classics',
      currentSong: 'Backstreet Boys - I Wanna Be With You',
      coverImage: 'https://via.placeholder.com/300x200',
      kycRequired: false,
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
    { name: 'Public Only', active: false },
    { name: 'KYC Required', active: false },
    { name: 'Trending', active: false },
  ];

  // Mock user data (for KYC status)
  const user = {
    kycStatus: 'Not Started', // Options: Not Started, Pending, Approved, Rejected
  };

  // State for modal, form, loading, and filters
  const [isCreateRoomModalOpen, setIsCreateRoomModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingAction, setLoadingAction] = useState(null);
  const [isRoomCreated, setIsRoomCreated] = useState(false);
  const [formData, setFormData] = useState({
    roomName: '',
    roomType: 'Public',
    genre: 'Afrobeats',
    maxParticipants: 10,
    kycRequired: false,
    enableRecording: false,
    description: '',
    coverImage: null,
    inviteCode: '',
  });
  const [inviteCode, setInviteCode] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('participants-desc');
  const [activeFilter, setActiveFilter] = useState('All');

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Handle file input for cover image
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({
      ...prev,
      coverImage: file ? URL.createObjectURL(file) : null,
    }));
  };

  // Generate invite code for private rooms
  const generateInviteCode = () => {
    const code = Math.random().toString(36).substring(2, 8).toUpperCase();
    setFormData((prev) => ({ ...prev, inviteCode: code }));
    setInviteCode(code);
    return code;
  };

  // Handle loading for button/link clicks
  const handleActionClick = (action, callback) => {
    setIsLoading(true);
    setLoadingAction(action);
    setTimeout(() => {
      setIsLoading(false);
      setLoadingAction(null);
      callback();
    }, 2000); // 2-second loading
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.kycRequired && user.kycStatus !== 'Approved') {
      alert('Please complete KYC verification to create a KYC-required room.');
      return;
    }
    handleActionClick('create-room', () => {
      if (formData.roomType === 'Private' && !formData.inviteCode) {
        generateInviteCode();
      }
      setIsRoomCreated(true);
    });
  };

  // Copy invite code to clipboard
  const copyInviteCode = () => {
    navigator.clipboard.write(inviteCode);
    alert('Invite code copied!');
  };

  // Handle filter click
  const handleFilterClick = (filterName) => {
    handleActionClick(`filter-${filterName}`, () => {
      setActiveFilter(filterName);
    });
  };

  // Filter and sort rooms
  const filteredRooms = rooms
    .filter((room) => {
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        return (
          room.name.toLowerCase().includes(query) ||
          room.host.toLowerCase().includes(query) ||
          room.currentSong.toLowerCase().includes(query)
        );
      }
      if (activeFilter === 'All') return true;
      if (activeFilter === 'Public Only') return room.type === 'Public';
      if (activeFilter === 'KYC Required') return room.kycRequired;
      if (activeFilter === 'Trending') return room.participants > 10; // Mock trending logic
      return room.genre === activeFilter;
    })
    .sort((a, b) => {
      if (sortOption === 'participants-desc') return b.participants - a.participants;
      if (sortOption === 'participants-asc') return a.participants - b.participants;
      if (sortOption === 'newest') return b.id.localeCompare(a.id); // Mock newest
      return 0;
    });

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 font-sans">
      {/* Loading Spinner */}
      {isLoading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-red-600 border-solid"></div>
        </div>
      )}

      <h1 className="text-2xl sm:text-3xl font-bold text-center text-red-600 mb-6 sm:mb-8">
        Karaoke Rooms
      </h1>

      {/* Create New Room Button */}
      <div className="mb-6 sm:mb-8 text-center">
        <button
          onClick={() =>
            handleActionClick('create-room', () => setIsCreateRoomModalOpen(true))
          }
          className="bg-red-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-md hover:bg-red-700 text-sm sm:text-base transition-all"
          aria-label="Create new karaoke room"
        >
          Create New Room
        </button>
      </div>

      {/* Create Room Modal */}
      {isCreateRoomModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-black p-6 sm:p-8 rounded-lg text-white w-full max-w-lg shadow-md hover:border-2 hover:border-red-500 transition-all">
            {!isRoomCreated ? (
              <>
                <h2 className="text-lg sm:text-xl font-semibold text-red-500 mb-4 sm:mb-6">
                  Create a New Karaoke Room
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-gray-300 text-sm sm:text-base mb-1 block">
                      Room Name
                    </label>
                    <input
                      type="text"
                      name="roomName"
                      value={formData.roomName}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-gray-800 text-white rounded-md p-3 text-sm sm:text-base"
                      placeholder="e.g., Afrobeats Party"
                    />
                  </div>
                  <div>
                    <label className="text-gray-300 text-sm sm:text-base mb-1 block">
                      Room Type
                    </label>
                    <select
                      name="roomType"
                      value={formData.roomType}
                      onChange={handleInputChange}
                      className="w-full bg-gray-800 text-white rounded-md p-3 text-sm sm:text-base"
                    >
                      <option value="Public">Public</option>
                      <option value="Private">Private</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-gray-300 text-sm sm:text-base mb-1 block">
                      Genre/Theme
                    </label>
                    <select
                      name="genre"
                      value={formData.genre}
                      onChange={handleInputChange}
                      className="w-full bg-gray-800 text-white rounded-md p-3 text-sm sm:text-base"
                    >
                      <option value="Afrobeats">Afrobeats</option>
                      <option value="Hip-Hop">Hip-Hop</option>
                      <option value="Gospel">Gospel</option>
                      <option value="Pop">Pop</option>
                      <option value="R&B">R&B</option>
                      <option value="Classics">Classics</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-gray-300 text-sm sm:text-base mb-1 block">
                      Max Participants
                    </label>
                    <input
                      type="number"
                      name="maxParticipants"
                      value={formData.maxParticipants}
                      onChange={handleInputChange}
                      min="1"
                      max="50"
                      required
                      className="w-full bg-gray-800 text-white rounded-md p-3 text-sm sm:text-base"
                    />
                  </div>
                  <div>
                    <label className="flex items-center text-gray-300 text-sm sm:text-base">
                      <input
                        type="checkbox"
                        name="kycRequired"
                        checked={formData.kycRequired}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      Require KYC Verification
                    </label>
                  </div>
                  <div>
                    <label className="flex items-center text-gray-300 text-sm sm:text-base">
                      <input
                        type="checkbox"
                        name="enableRecording"
                        checked={formData.enableRecording}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      Enable Recording
                    </label>
                    {formData.enableRecording && (
                      <p className="text-gray-400 text-xs sm:text-sm mt-1">
                        Recordings will be saved to your account and can be minted as NFTs.
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="text-gray-300 text-sm sm:text-base mb-1 block">
                      Description (Optional)
                    </label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      className="w-full bg-gray-800 text-white rounded-md p-3 text-sm sm:text-base"
                      placeholder="Describe your room..."
                      rows="3"
                    />
                  </div>
                  <div>
                    <label className="text-gray-300 text-sm sm:text-base mb-1 block">
                      Room Cover Image (Optional)
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="w-full bg-gray-800 text-gray-300 rounded-md p-3 text-sm sm:text-base"
                    />
                    {formData.coverImage && (
                      <div className="mt-3">
                        <img
                          src={formData.coverImage}
                          alt="Room Cover Preview"
                          className="w-full h-32 sm:h-40 object-cover rounded-md"
                        />
                      </div>
                    )}
                  </div>
                  <div className="flex justify-end gap-3 mt-6">
                    <button
                      type="button"
                      onClick={() =>
                        handleActionClick('cancel-modal', () =>
                          setIsCreateRoomModalOpen(false)
                        )
                      }
                      className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 text-sm sm:text-base"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className={`bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 text-sm sm:text-base transition-all ${
                        isLoading ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                    >
                      {isLoading && loadingAction === 'create-room' ? 'Creating...' : 'Create Room'}
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <>
                <h2 className="text-lg sm:text-xl font-semibold text-red-500 mb-4 sm:mb-6">
                  Room Created!
                </h2>
                <p className="text-gray-300 text-sm sm:text-base mb-4">
                  Your room "{formData.roomName}" is ready to go!
                </p>
                {formData.roomType === 'Private' && (
                  <div className="mb-4">
                    <p className="text-gray-300 text-sm sm:text-base mb-2">
                      Invite Code: <span className="font-medium">{inviteCode}</span>
                    </p>
                    <button
                      onClick={() => handleActionClick('copy-invite', copyInviteCode)}
                      className="text-red-400 hover:text-red-300 text-sm sm:text-base"
                    >
                      Copy Invite Code
                    </button>
                  </div>
                )}
                {formData.enableRecording && (
                  <p className="text-gray-400 text-xs sm:text-sm mb-4">
                    Recordings will be saved to your account and can be accessed in your Profile.
                  </p>
                )}
                <div className="flex justify-end gap-3">
                  <button
                    onClick={() =>
                      handleActionClick('close-modal', () =>
                        setIsCreateRoomModalOpen(false)
                      )
                    }
                    className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 text-sm sm:text-base"
                  >
                    Close
                  </button>
                  <Link
                    href={`/room/${formData.roomName.toLowerCase().replace(/\s+/g, '-')}`}
                    onClick={() => handleActionClick('join-created-room', () => {})}
                    className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 text-sm sm:text-base"
                  >
                    Join Now
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Explore Rooms */}
      <div className="mb-6 sm:mb-8">
        <h3 className="text-base sm:text-lg font-semibold text-red-500 mb-3 sm:mb-4">
          Explore Rooms
        </h3>
        {/* Search and Sort */}
        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search rooms, hosts, or songs..."
            className="w-full sm:w-1/2 bg-gray-800 text-white rounded-md p-3 text-sm sm:text-base"
          />
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="w-full sm:w-1/4 bg-gray-800 text-white rounded-md p-3 text-sm sm:text-base"
          >
            <option value="participants-desc">Most Participants</option>
            <option value="participants-asc">Fewest Participants</option>
            <option value="newest">Newest</option>
          </select>
        </div>
        {/* Filters */}
        <div className="mb-4">
          <div className="flex sm:flex-wrap gap-2 sm:gap-3 overflow-x-auto sm:overflow-x-visible scrollbar-hide">
            {filters.map((filter) => (
              <button
                key={filter.name}
                onClick={() => handleFilterClick(filter.name)}
                className={`px-3 py-1 sm:px-4 sm:py-2 rounded-md text-sm sm:text-base flex-shrink-0 ${
                  activeFilter === filter.name
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                } transition-all`}
              >
                {filter.name}
              </button>
            ))}
          </div>
        </div>
        {/* Rooms Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRooms.length > 0 ? (
            filteredRooms.map((room) => (
              <div
                key={room.id}
                className="bg-black text-white rounded-lg shadow-md p-4 sm:p-6 flex flex-col hover:border-2 hover:border-red-500 transition-all"
              >
                <img
                  src={room.coverImage}
                  alt={room.name}
                  className="w-full h-32 sm:h-40 object-cover rounded-md mb-3"
                />
                <h4 className="text-sm sm:text-base font-medium text-red-500 mb-2">
                  {room.name}
                </h4>
                <p className="text-gray-300 text-sm sm:text-base mb-1">
                  Host: {room.host}
                </p>
                <p className="text-gray-300 text-sm sm:text-base mb-1">
                  Participants: {room.participants}/{room.maxParticipants}
                </p>
                <p className="text-gray-300 text-sm sm:text-base mb-1">
                  Type: {room.type}
                </p>
                <p className="text-gray-300 text-sm sm:text-base mb-1">
                  Genre: {room.genre}
                </p>
                <p className="text-gray-300 text-sm sm:text-base mb-3">
                  Now Playing: {room.currentSong}
                </p>
                {room.kycRequired && user.kycStatus !== 'Approved' && (
                  <p className="text-red-400 text-xs sm:text-sm mb-3">
                    KYC verification required to join.
                  </p>
                )}
                <div className="flex gap-2 mt-auto">
                  <button
                    onClick={() =>
                      handleActionClick(`preview-${room.id}`, () =>
                        alert(`Previewing ${room.name}`)
                      )
                    }
                    className="flex-1 bg-gray-600 text-white px-3 py-2 rounded-md hover:bg-gray-700 text-sm sm:text-base transition-all"
                  >
                    Preview
                  </button>
                  <Link
                    href={`/room/${room.id}`}
                    onClick={() => handleActionClick(`join-${room.id}`, () => {})}
                    className="flex-1 bg-red-600 text-white px-3 py-2 rounded-md hover:bg-red-700 text-sm sm:text-base text-center"
                  >
                    Join Room
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div className="bg-black text-white rounded-lg shadow-md p-4 sm:p-6 text-center col-span-full">
              <p className="text-gray-300 text-sm sm:text-base">
                No rooms match your search or filter.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Recent/Joined Rooms */}
      <div>
        <h3 className="text-base sm:text-lg font-semibold text-red-500 mb-3 sm:mb-4">
          Your Recent Rooms
        </h3>
        <div className="bg-black text-white rounded-lg shadow-md p-4 sm:p-6 text-center hover:border-2 hover:border-red-500 transition-all">
          <p className="text-gray-300 text-sm sm:text-base">
            No recent rooms yet. Join or create a room to get started!
          </p>
          <Link
            href="/karaoke/join"
            onClick={() => handleActionClick('explore-rooms', () => {})}
            className="inline-block bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 mt-4 text-sm sm:text-base"
          >
            Explore Rooms
          </Link>
        </div>
      </div>
    </div>
  );
}