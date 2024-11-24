// src/components/Layout.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

const Layout = ({ children }) => {
  const navItems = [
    { name: 'Dashboard', path: '/' },
    { name: 'Users', path: '/users' },
    { name: 'Roles', path: '/roles' },
    { name: 'Permissions', path: '/permissions' },
  ];

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-600 text-white">
        <div className="p-4 text-xl font-bold border-b border-blue-700">
          RBAC Dashboard
        </div>
        <nav className="mt-4">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `block px-4 py-2 rounded hover:bg-blue-700 ${
                  isActive ? 'bg-blue-700' : ''
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1">
        {/* Navbar */}
        <header className="bg-white shadow p-4">
          <h1 className="text-lg font-semibold text-gray-700">Admin Panel</h1>
        </header>

        {/* Page Content */}
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
