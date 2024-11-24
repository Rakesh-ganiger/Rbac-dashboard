import React from 'react';

function PermissionItem({ permission, onEdit, onDelete }) {
  return (
    <tr className="border-b">
      <td className="p-2">{permission.name}</td>
      <td className="p-2">{permission.description}</td>
      <td className="p-2 space-x-2">
        <button
          onClick={() => onEdit(permission)}
          className="bg-yellow-500 text-white px-4 py-1 rounded-md"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(permission.id)}
          className="bg-red-500 text-white px-4 py-1 rounded-md"
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default PermissionItem;
