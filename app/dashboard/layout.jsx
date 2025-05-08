import React from 'react';
import Navbar from '@components/navbar';
import Sidebar from '@components/sidebar';

export default function DashLayout({ children }) {
  return (
    <div className="flex flex-col h-screen overflow-hidden bg-gray-100 dark:bg-black">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto p-6 bg-gray-100 dark:bg-black text-gray-800 dark:text-gray-200 transition-colors duration-300">
          {children}
        </main>
      </div>
    </div>
  );
}