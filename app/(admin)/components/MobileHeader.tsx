"use client";

import { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import LeftSidebar from "./LeftSidebar";

const MobileHeader = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <header className="lg:hidden fixed top-0 left-0 right-0 z-40 bg-white border-b border-gray-200 h-16 flex items-center px-4">
        {/* Static version for SSR */}
        <div className="ml-4 text-xl font-semibold text-gray-800">YourLogo</div>
      </header>
    );
  }
  return (
    <>
      <header className="lg:hidden fixed top-0 left-0 right-0 z-40 bg-white border-b border-gray-200 h-16 flex items-center px-4">
        <button
          onClick={() => setSidebarOpen(true)}
          className="p-2 rounded-md text-gray-500 hover:text-gray-600 hover:bg-gray-100"
        >
          <FiMenu className="w-6 h-6" />
        </button>
        <div className="ml-4 text-xl font-semibold text-gray-800">YourLogo</div>
      </header>

      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/30 bg-opacity-50"
            onClick={() => setSidebarOpen(false)}
          />
          <div className="relative z-10 h-full w-64 bg-white">
            <LeftSidebar />
          </div>
        </div>
      )}
    </>
  );
};

export default MobileHeader;