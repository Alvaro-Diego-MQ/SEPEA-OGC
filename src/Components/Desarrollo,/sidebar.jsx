import React from 'react'; 
import Image from 'next/image';
import Link from 'next/link';
import Header from './header';

export default function SidebarDesarrollo() {
  return (
    <aside className="bg-[#ffff] shadow-md h-screen w-64 left-0 top-0 flex flex-col items-center border-r-2 border-{#D2D6DE}">
      <div className="p-4">
        <Image
          src="/logo_ogc.png"
          alt="OGC Logo"
          width={150}
          height={60}
          className="mb-8"
        />
      </div>
      <nav className="flex-grow w-full">
        <ul className="space-y-2 w-full h-full">
          <li className="hover:bg-blue-100 flex items-center space-x-2 px-4 py-2 ">
            <div className="bg-green-600 rounded-full h-3 w-3"></div>
            <Link 
              href="/dashboard" 
              className="block text-gray-800 hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200 w-full"
            >
              DASHBOARD
            </Link>
          </li>
          <li className="flex hover:bg-blue-100 items-center space-x-2 px-4 py-2">
            <div className="bg-green-600 rounded-full h-3 w-3"></div>
            <Link 
              href="/autoevaluacion" 
              className="block text-gray-800 hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200 w-full"
            >
              AUTOEVALUACIÓN
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
    
  );
}

