// app/layout.tsx
"use client";

import { useState, useEffect } from "react";
import LeftSidebar from "./components/LeftSidebar";
import MobileHeader from "./components/MobileHeader";
import { PageTransition } from './components/PageTransition';
import Loading from "./components/LoadingSpinner";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setIsLoading(false);
    
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  return (
    <div className="flex h-screen bg-gray-100">
      {isLoading && <Loading  color="#fff"  size={40}/>}

      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <LeftSidebar />
      </div>

      {/* Mobile Header */}
      <MobileHeader />

      {/* Main Content */}
      <main className={`flex-1 overflow-y-auto pt-16 lg:pt-0 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <div className="p-6 bg-[#F5F5F6]">
          <PageTransition>
            {children}
          </PageTransition>
        </div>
      </main>
    </div>
  );
}