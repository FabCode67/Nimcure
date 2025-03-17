import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ChevronDown, LayoutGrid, ArrowRight, Users, Compass, User } from 'lucide-react';

interface NavItemProps {
  href: string;
  label: string;
  icon: React.ReactNode;
  active: boolean;
}

const NavItem = ({ href, label, icon, active }: NavItemProps) => (
  <Link 
    href={href} 
    className={`flex items-center px-6 h-16 text-sm font-medium relative ${active ? 'text-blue-600' : 'text-[#827F98] hover:text-gray-900'}`}
  >
    <div className="flex items-center">
      <span className="mr-2">{icon}</span>
      {label}
    </div>
    {active && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600"></div>}
  </Link>
);

export default function Navbar() {
  const pathname = usePathname();
  const [activeRoute, setActiveRoute] = useState('/dashboard/patients');
  
  useEffect(() => {
    setActiveRoute(pathname);
  }, [pathname]);
  
  return (
    <header className="sticky top-0 z-10 w-full bg-white border-b border-gray-200">
      <div className='max-w-7xl mx-auto flex justify-center'>
        <div className="flex h-16 items-center w-full justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center">
              <Image 
                src="/mainlogo.png" 
                alt="Hospital Logo" 
                width={24} 
                height={24}
                className="text-white"
              />
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex items-center h-full">
            <NavItem 
              href="/dashboard/overview" 
              label="Overview" 
              icon={<LayoutGrid size={20} />}
              active={activeRoute === '/dashboard/overview'}
            />
            <NavItem 
              href="/dashboard/deliveries" 
              label="Deliveries" 
              icon={<ArrowRight size={20} />}
              active={activeRoute === '/dashboard/deliveries'}
            />
            <NavItem 
              href="/dashboard/patients" 
              label="Patients" 
              icon={<Users size={20} />}
              active={activeRoute === '/dashboard/patients'}
            />
            <NavItem 
              href="/dashboard/dispatch-riders" 
              label="Dispatch Riders" 
              icon={<Compass size={20} />}
              active={activeRoute === '/dashboard/dispatch-riders'}
            />
            <NavItem 
              href="/dashboard/admin" 
              label="Admin" 
              icon={<User size={20} />}
              active={activeRoute === '/dashboard/admin'}
            />
          </nav>

          {/* User profile */}
          <div className="flex items-center">
            <Button variant="outline" className="ml-4 flex items-center gap-2 px-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/user.png" alt="Emmanuel Adjagbe" />
                <AvatarFallback>EA</AvatarFallback>
              </Avatar>
              <span className="text-sm font-medium">Emmanuel Adjagbe</span>
              <ChevronDown className="h-4 w-4 opacity-50" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}