import React from 'react';

const roles = [
  { id: 1, name: 'Admin', description: 'Full access' },
  { id: 2, name: 'Viewer', description: 'View-only access' },
];

function RoleTable() {
  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow-md p-4">
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="p-2">Role Name</th>
            <th className="p-2">Description</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role) => (
            <tr key={role.id} className="border-b">
              <td className="p-2">{role.name}</td>
              <td className="p-2">{role.description}</td>
              <td className="p-2 space-x-2">
                <button className="bg-yellow-500 text-white px-4 py-1 rounded-md">Edit</button>
                <button className="bg-red-500 text-white px-4 py-1 rounded-md">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RoleTable;
