import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-3 gap-4">
        <Link to="/users" className="p-4 bg-blue-100 border rounded">
          <h2 className="text-xl font-bold">Users</h2>
          <p>150</p>
          <span role="img" aria-label="users">👤</span>
        </Link>
        <Link to="/roles" className="p-4 bg-green-100 border rounded">
          <h2 className="text-xl font-bold">Roles</h2>
          <p>5</p>
          <span role="img" aria-label="roles">🔑</span>
        </Link>
        <Link to="/permissions" className="p-4 bg-yellow-100 border rounded">
          <h2 className="text-xl font-bold">Permissions</h2>
          <p>20</p>
          <span role="img" aria-label="permissions">🛠️</span>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
