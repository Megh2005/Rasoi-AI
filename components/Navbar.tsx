'use client';

import { UserButton } from '@clerk/nextjs';

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-sm px-4 py-3 flex items-center justify-between">
      <div className="w-1/3"></div>

      <div className="w-1/3 text-center">
        <h1 className="text-4xl font-semibold text-[#F54A00]">Rasoi AI</h1>
      </div>

      <div className="w-1/3 flex justify-end">
        <UserButton
          appearance={{
            elements: {
              userButtonAvatarBox: 'w-20 h-20',
              userButtonPopoverCard: 'shadow-lg border border-gray-200',
            },
          }}
        />
      </div>
    </nav>
  );
}
