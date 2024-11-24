import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="w-64 bg-blue-800 text-white min-h-screen">
      <div className="flex items-center justify-center p-4 text-xl font-bold">
        RBAC Dashboard
      </div>
      <ul className="space-y-4 mt-4">
        <li>
          <Link to="/users" className="block py-2 px-4 hover:bg-blue-700">Users</Link>
        </li>
        <li>
          <Link to="/roles" className="block py-2 px-4 hover:bg-blue-700">Roles</Link>
        </li>
        <li>
          <Link to="/permissions" className="block py-2 px-4 hover:bg-blue-700">Permissions</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
