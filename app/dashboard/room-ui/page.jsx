'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function KaraokeRoom() {
  // Mock states
  const [isHost, setIsHost] = useState(true);
  const [isMicOn, setIsMicOn] = useState(false);
  const [isInQueue, setIsInQueue] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHostPanelOpen, setIsHostPanelOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingAction, setLoadingAction] = useState(null);
  const [messages, setMessages] = useState([
    { id: 1, user: 'DJVibe', text: 'Let’s go! 🎤', timestamp: '10:32' },
    { id: 2, user: 'MelodyQueen', text: 'Fire performance! 🔥', timestamp: '10:33' },
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [participants, setParticipants] = useState([
    { id: 1, name: 'DJVibe', avatar: 'https://via.placeholder.com/40' },
    { id: 2, name: 'MelodyQueen', avatar: 'https://via.placeholder.com/40' },
    { id: 3, name: 'RetroStar', avatar: 'https://via.placeholder.com/40' },
  ]);
  const [queue, setQueue] = useState([
    { id: 2, name: 'MelodyQueen' },
    { id: 3, name: 'RetroStar' },
  ]);
  const [currentSinger, setCurrentSinger] = useState({
    name: 'DJVibe',
    avatar: 'https://via.placeholder.com/40',
  });

  // Mock lyrics with highlight
  const [currentLyricIndex, setCurrentLyricIndex] = useState(0);
  const lyrics = [
    'Baby, I’m in love with the way you move',
    'On the floor, let’s groove',
    'Feel the beat, it’s all we need',
    'Sing it loud, let’s take the lead',
  ];

  // Simulate lyrics sync
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLyricIndex((prev) => (prev + 1) % lyrics.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Handle loading for button clicks
  const handleActionClick = (action, callback) => {
    setIsLoading(true);
    setLoadingAction(action);
    setTimeout(() => {
      setIsLoading(false);
      setLoadingAction(null);
      callback();
    }, 2000);
  };

  // Chat handling
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    setMessages((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        user: 'You',
        text: newMessage,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
    setNewMessage('');
  };

  // Reaction handling
  const handleReaction = (emoji) => {
    setMessages((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        user: 'You',
        text: emoji,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
  };

  // Host panel actions
  const handleAcceptQueue = (userId) => {
    setQueue((prev) => prev.filter((user) => user.id !== userId));
    setCurrentSinger(participants.find((p) => p.id === userId));
  };

  const handleRejectQueue = (userId) => {
    setQueue((prev) => prev.filter((user) => user.id !== userId));
  };

  const handleKickUser = (userId) => {
    setParticipants((prev) => prev.filter((user) => user.id !== userId));
    setQueue((prev) => prev.filter((user) => user.id !== userId));
  };

  const toggleRoomPrivacy = () => {
    alert('Toggled room privacy');
  };

  const copyInviteLink = () => {
    navigator.clipboard.write('https://riddimz/room/123');
    alert('Invite link copied!');
  };

  return (
    <div className="flex flex-col h-screen bg-black text-white font-sans sm:flex-row sm:ml-64">
      {/* Loading Spinner */}
      {isLoading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="animate-spin rounded-full h-10 w-10 sm:h-12 sm:w-12 border-t-4 border-riddimz border-solid"></div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex flex-col flex-1">
        {/* Top Bar */}
        <div className="bg-black p-3 sm:p-4 border-b border-gray-800 flex justify-between items-center">
          <h1 className="text-lg sm:text-2xl font-bold text-riddimz">
            Afrobeats Jam Session
          </h1>
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="sm:hidden p-2 rounded-full hover:bg-riddimz hover:bg-opacity-10"
            aria-label={isSidebarOpen ? 'Close sidebar' : 'Open sidebar'}
          >
            <svg
              className="w-5 h-5 text-riddimz"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isSidebarOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>

        {/* Main Layout */}
        <div className="flex flex-col sm:flex-row flex-1 overflow-hidden">
          {/* Main Stage */}
          <div className="w-full sm:w-3/5 p-3 sm:p-6 flex flex-col items-center bg-gradient-to-b from-gray-900 to-black">
            {/* Now Singing */}
            <div className="flex items-center mb-4 sm:mb-6">
              <img
                src={currentSinger.avatar}
                alt={currentSinger.name}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-2 sm:mr-3"
              />
              <div>
                <p className="text-xs sm:text-sm text-gray-400">Now Singing</p>
                <p className="text-base sm:text-lg font-semibold text-riddimz">{currentSinger.name}</p>
              </div>
            </div>

            {/* Lyrics Display */}
            <div className="flex-1 flex flex-col justify-center items-center text-center">
              {lyrics.map((line, index) => (
                <p
                  key={index}
                  className={`text-base sm:text-3xl font-medium transition-all duration-500 ${
                    index === currentLyricIndex
                      ? 'text-riddimz scale-110'
                      : 'text-gray-400 scale-100'
                  }`}
                >
                  {line}
                </p>
              ))}
            </div>

            {/* Mic Level Indicator (for singer) */}
            {currentSinger.name === 'You' && (
              <div className="mt-4 sm:mt-6 flex items-center">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-riddimz mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
                </svg>
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className={`w-1 sm:w-2 h-4 sm:h-6 bg-riddimz animate-[pulse_1s_ease-in-out_infinite] ${
                        i % 2 === 0 ? 'delay-200' : ''
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Sidebar */}
          <div
            className={`w-full sm:w-2/5 p-3 sm:p-6 border-t sm:border-t-0 sm:border-l border-gray-800 overflow-y-auto transition-all duration-300 ${
              isSidebarOpen ? 'block' : 'hidden sm:block'
            }`}
          >
            {/* Participants List */}
            <div className="mb-4 sm:mb-6">
              <h3 className="text-base sm:text-lg font-semibold text-riddimz mb-2 sm:mb-3">
                Participants ({participants.length})
              </h3>
              <div className="space-y-2">
                {participants.map((user) => (
                  <div key={user.id} className="flex items-center">
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-6 h-6 sm:w-8 sm:h-8 rounded-full mr-2"
                    />
                    <p className="text-xs sm:text-sm text-gray-300">{user.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Chat Box */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-riddimz mb-2 sm:mb-3">
                Live Chat
              </h3>
              <div className="bg-gray-800 rounded-lg p-3 sm:p-4 h-48 sm:h-64 overflow-y-auto mb-3 sm:mb-4">
                {messages.map((msg) => (
                  <div key={msg.id} className="mb-2">
                    <p className="text-xs text-gray-400">
                      {msg.user} <span>{msg.timestamp}</span>
                    </p>
                    <p className="text-xs sm:text-sm text-gray-200">{msg.text}</p>
                  </div>
                ))}
              </div>
              <form onSubmit={handleSendMessage} className="flex gap-2">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 bg-gray-900 text-white rounded-md p-2 text-xs sm:text-sm"
                />
                <button
                  type="submit"
                  className="bg-riddimz text-white px-3 sm:px-4 py-2 rounded-md hover:bg-riddimz-dark text-xs sm:text-sm"
                >
                  Send
                </button>
              </form>
            </div>

            {/* Reactions */}
            <div className="mt-3 sm:mt-4">
              <h3 className="text-base sm:text-lg font-semibold text-riddimz mb-2 sm:mb-3">
                Reactions
              </h3>
              <div className="flex gap-2">
                {['👏', '🔥', '❤️'].map((emoji) => (
                  <button
                    key={emoji}
                    onClick={() =>
                      handleActionClick(`reaction-${emoji}`, () => handleReaction(emoji))
                    }
                    className="text-xl sm:text-2xl hover:scale-125 transition-transform"
                  >
                    {emoji}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Control Bar */}
        <div className="bg-gray-900 p-2 sm:p-4 flex justify-between items-center border-t border-gray-800">
          <div className="flex gap-1 sm:gap-2">
            <button
              onClick={() =>
                handleActionClick('mic-toggle', () => setIsMicOn(!isMicOn))
              }
              className={`p-2 sm:p-3 rounded-md ${
                isMicOn ? 'bg-riddimz text-white' : 'bg-gray-700 text-gray-300'
              } hover:bg-riddimz-dark transition-all`}
              aria-label={isMicOn ? 'Turn mic off' : 'Turn mic on'}
            >
              <svg
                className="w-4 sm:w-6 h-4 sm:h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
              </svg>
            </button>
            <button
              onClick={() =>
                handleActionClick('queue-toggle', () => setIsInQueue(!isInQueue))
              }
              className={`p-2 sm:p-3 rounded-md ${
                isInQueue ? 'bg-riddimz text-white' : 'bg-gray-700 text-gray-300'
              } hover:bg-riddimz-dark transition-all`}
              aria-label={isInQueue ? 'Leave queue' : 'Join queue'}
            >
              <svg
                className="w-4 sm:w-6 h-4 sm:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </button>
            <Link
              href="/dashboard/karaoke-rooms"
              onClick={() => handleActionClick('leave-room', () => {})}
              className="p-2 sm:p-3 bg-red-800 text-white rounded-md hover:bg-red-900"
              aria-label="Leave room"
            >
              <svg
                className="w-4 sm:w-6 h-4 sm:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
            </Link>
          </div>
          <div className="flex gap-1 sm:gap-2">
            <button
              onClick={() =>
                handleActionClick('play-toggle', () => setIsPlaying(!isPlaying))
              }
              className="p-2 sm:p-3 bg-gray-700 text-gray-300 rounded-md hover:bg-gray-600"
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              <svg
                className="w-4 sm:w-6 h-4 sm:h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d={
                    isPlaying
                      ? 'M6 19h4V5H6v14zm8-14v14h4V5h-4z'
                      : 'M8 5v14l11-7z'
                  }
                />
              </svg>
            </button>
            {isHost && (
              <button
                onClick={() =>
                  handleActionClick('host-panel', () => setIsHostPanelOpen(true))
                }
                className="p-2 sm:p-3 bg-riddimz text-white rounded-md hover:bg-riddimz-dark"
                aria-label="Open host panel"
              >
                <svg
                  className="w-4 sm:w-6 h-4 sm:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Host Panel Modal */}
      {isHostPanelOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-black p-4 sm:p-8 rounded-lg text-white w-full max-w-md sm:max-w-lg shadow-md hover:border-2 hover:border-riddimz transition-all">
            <h2 className="text-base sm:text-xl font-semibold text-riddimz mb-3 sm:mb-6">
              Host Panel
            </h2>
            {/* Queue Management */}
            <div className="mb-4 sm:mb-6">
              <h3 className="text-sm sm:text-base font-semibold text-riddimz mb-2">Queue</h3>
              {queue.length > 0 ? (
                queue.map((user) => (
                  <div key={user.id} className="flex justify-between items-center mb-2">
                    <p className="text-xs sm:text-sm text-gray-300">{user.name}</p>
                    <div className="flex gap-2">
                      <button
                        onClick={() =>
                          handleActionClick(`accept-${user.id}`, () =>
                            handleAcceptQueue(user.id)
                          )
                        }
                        className="text-riddimz hover:text-riddimz-dark text-xs sm:text-sm"
                      >
                        Accept
                      </button>
                      <button
                        onClick={() =>
                          handleActionClick(`reject-${user.id}`, () =>
                            handleRejectQueue(user.id)
                          )
                        }
                        className="text-red-400 hover:text-red-500 text-xs sm:text-sm"
                      >
                        Reject
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-xs sm:text-sm text-gray-400">No users in queue.</p>
              )}
            </div>
            {/* Kick User */}
            <div className="mb-4 sm:mb-6">
              <h3 className="text-sm sm:text-base font-semibold text-riddimz mb-2">Kick User</h3>
              {participants
                .filter((p) => p.name !== 'You')
                .map((user) => (
                  <div key={user.id} className="flex justify-between items-center mb-2">
                    <p className="text-xs sm:text-sm text-gray-300">{user.name}</p>
                    <button
                      onClick={() =>
                        handleActionClick(`kick-${user.id}`, () =>
                          handleKickUser(user.id)
                        )
                      }
                      className="text-red-400 hover:text-red-500 text-xs sm:text-sm"
                    >
                      Kick
                    </button>
                  </div>
                ))}
            </div>
            {/* Room Controls */}
            <div className="mb-4 sm:mb-6">
              <h3 className="text-sm sm:text-base font-semibold text-riddimz mb-2">Room Controls</h3>
              <button
                onClick={() => handleActionClick('toggle-privacy', toggleRoomPrivacy)}
                className="text-riddimz hover:text-riddimz-dark text-xs sm:text-sm mb-2 block"
              >
                Toggle Private/Public
              </button>
              <button
                onClick={() => handleActionClick('copy-invite', copyInviteLink)}
                className="text-riddimz hover:text-riddimz-dark text-xs sm:text-sm"
              >
                Copy Invite Link
              </button>
            </div>
            <div className="flex justify-end">
              <button
                onClick={() =>
                  handleActionClick('close-host-panel', () => setIsHostPanelOpen(false))
                }
                className="bg-gray-600 text-white px-3 sm:px-4 py-2 rounded-md hover:bg-gray-700 text-xs sm:text-sm"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}