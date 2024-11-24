import React from 'react';
import PermissionItem from './PermissionItem';

function PermissionList({ permissions, onEdit, onDelete }) {
  return (
    <table className="min-w-full bg-white shadow-md rounded-md">
      <thead>
        <tr>
          <th className="p-2">Permission</th>
          <th className="p-2">Description</th>
          <th className="p-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {permissions.map((permission) => (
          <PermissionItem
            key={permission.id}
            permission={permission}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </tbody>
    </table>
  );
}

export default PermissionList;
