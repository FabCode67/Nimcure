import React, { ReactNode } from 'react';
import Navbar from './Navbar';

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50  flex-col justify-center mx-auto">
      <Navbar />
      <div className="flex">
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}