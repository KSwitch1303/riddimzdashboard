import React from 'react';

export default function Navbar() {
  return (
    <header className="bg-white dark:bg-black shadow-md px-6 py-4 flex items-center justify-between sticky top-0 z-10 transition-colors duration-300">
      {/* Branding */}
      <div className="flex items-center space-x-3">
        <img
          src="/image/riddmz.png" // Replace with your logo path
          alt="Riddimz logo"
          className="w-8 h-8 rounded-full"
        />
        <span className="text-xl font-bold text-red-600" style={{ color: '#e30613' }}>Riddimz</span>
      </div>

      {/* User Actions */}
      <div className="flex items-center space-x-4">
        {/* Notification Icon */}
        <button
          className="p-2 rounded-full hover:bg-red-600 hover:bg-opacity-10 transition-colors duration-200 relative"
          aria-label="Notifications"
        >
          <svg
            className="w-5 h-5 text-red-600 dark:text-gray-300"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
          </svg>
          <span className="absolute top-0 right-0 inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-600 rounded-full">3</span>
        </button>

        {/* Theme Toggle */}
        {/* <button
          className="p-2 rounded-full hover:bg-red-600 hover:bg-opacity-10 transition-colors duration-200"
          aria-label="Toggle theme"
        >
          <svg
            className="w-5 h-5 text-red-600 dark:text-gray-300"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        </button> */}

        {/* User Profile */}
        <div className="flex items-center space-x-2">
          <img
            src="https://via.placeholder.com/32"
            alt="User avatar"
            className="w-8 h-8 rounded-full border-2 border-red-600"
          />
          <span className="text-gray-700 dark:text-gray-200 hidden sm:block">John Doe</span>
        </div>
      </div>
    </header>
  );
}