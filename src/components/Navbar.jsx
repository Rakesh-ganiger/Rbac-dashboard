import React from 'react';

function Navbar() {
  return (
    <div className="bg-white shadow-md p-4">
      <div className="flex justify-between items-center">
        <span className="text-2xl font-semibold">Admin Dashboard</span>
        <div className="flex items-center space-x-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md">Log Out</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
