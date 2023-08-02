import React from "react";

export const Navbar = () => {
  return (
    <div className="bg-blue-600 p-4 flex justify-between items-center">
      <a href="#" className="text-white font-semibold hover:underline">
        Enable Browser Notifications
      </a>
      <nav className="space-x-4">
        <a href="#" className="text-white hover:underline">
          Visit Forum
        </a>
        <a href="#" className="text-white hover:underline">
          View All Users
        </a>
      </nav>
    </div>
  );
};
