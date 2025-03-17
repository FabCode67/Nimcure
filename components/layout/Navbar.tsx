import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ChevronDown, LayoutGrid, ArrowRight, Users, Compass, User, Menu } from 'lucide-react';

interface NavItemProps {
  href: string;
  label: string;
  icon: React.ReactNode;
  active: boolean;
  onClick?: () => void;
}

const NavItem = ({ href, label, icon, active, onClick }: NavItemProps) => (
  <Link 
    href={href} 
    className={`flex items-center px-3 md:px-4 lg:px-6 h-16 text-sm font-medium relative ${active ? 'text-blue-600' : 'text-[#827F98] hover:text-gray-900'}`}
    onClick={onClick}
  >
    <div className="flex items-center">
      <span className="mr-2">{icon}</span>
      <span className="hidden md:inline">{label}</span>
    </div>
    {active && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600"></div>}
  </Link>
);

const MobileNavItem = ({ href, label, icon, active, onClick }: NavItemProps) => (
  <Link 
    href={href} 
    className={`flex items-center px-4 py-3 text-sm font-medium ${active ? 'text-blue-600' : 'text-[#827F98] hover:text-gray-900'}`}
    onClick={onClick}
  >
    <div className="flex items-center">
      <span className="mr-3">{icon}</span>
      {label}
    </div>
  </Link>
);

export default function Navbar() {
  const pathname = usePathname();
  const [activeRoute, setActiveRoute] = useState('/dashboard/patients');
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    setActiveRoute(pathname);
  }, [pathname]);

  const closeMobileMenu = () => {
    setIsOpen(false);
  };
  
  const navItems = [
    { href: "/dashboard/overview", label: "Overview", icon: <LayoutGrid size={20} /> },
    { href: "/dashboard/deliveries", label: "Deliveries", icon: <ArrowRight size={20} /> },
    { href: "/dashboard/patients", label: "Patients", icon: <Users size={20} /> },
    { href: "/dashboard/dispatch-riders", label: "Dispatch Riders", icon: <Compass size={20} /> },
    { href: "/dashboard/admin", label: "Admin", icon: <User size={20} /> }
  ];
  
  return (
    <header className="sticky top-0 z-10 w-full bg-white border-b border-gray-200">
      <div className='max-w-7xl mx-auto flex justify-center'>
        <div className="flex h-16 items-center w-full justify-between px-4">
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
          <nav className="hidden md:flex items-center h-full overflow-x-auto">
            {navItems.map((item) => (
              <NavItem 
                key={item.href}
                href={item.href} 
                label={item.label} 
                icon={item.icon}
                active={activeRoute === item.href}
              />
            ))}
          </nav>
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost">
                  <Menu className="h-[400px] w-[400px] text-8xl" size={100}/>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64">
                <div className="flex flex-col gap-1 mt-8">
                  {navItems.map((item) => (
                    <MobileNavItem 
                      key={item.href}
                      href={item.href} 
                      label={item.label} 
                      icon={item.icon}
                      active={activeRoute === item.href}
                      onClick={closeMobileMenu}
                    />
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
          <div className="flex items-center">
            <Button variant="outline" className="ml-4 flex items-center gap-2 px-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/user.png" alt="Emmanuel Adjagbe" />
                <AvatarFallback>EA</AvatarFallback>
              </Avatar>
              <span className="hidden sm:inline text-sm font-medium">Emmanuel Adjagbe</span>
              <ChevronDown className="h-4 w-4 opacity-50" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}