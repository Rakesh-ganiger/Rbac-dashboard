import React from 'react';

const permissions = [
  { id: 1, name: 'Read', description: 'Read access to resources' },
  { id: 2, name: 'Write', description: 'Write access to resources' },
];

function PermissionTable() {
  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow-md p-4">
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="p-2">Permission</th>
            <th className="p-2">Description</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {permissions.map((permission) => (
            <tr key={permission.id} className="border-b">
              <td className="p-2">{permission.name}</td>
              <td className="p-2">{permission.description}</td>
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

export default PermissionTable;
