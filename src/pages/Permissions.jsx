import { useState } from 'react';
import PermissionList from '../components/PermissionList';
import PermissionModal from '../components/PermissionModal';
import permissionsData from '../data/Permissions.json';  // Correct the import path

function Permissions() {
  const [permissions, setPermissions] = useState(permissionsData);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingPermission, setEditingPermission] = useState(null);

  const handleEdit = (permission) => {
    setEditingPermission(permission);
    setModalOpen(true);
  };

  const handleDelete = (id) => {
    setPermissions(permissions.filter(permission => permission.id !== id));
  };

  const handleSave = (formData) => {
    if (editingPermission) {
      setPermissions(permissions.map(permission => 
        permission.id === editingPermission.id ? { ...permission, ...formData } : permission
      ));
    } else {
      setPermissions([...permissions, { id: permissions.length + 1, ...formData }]);
    }
  };

  return (
    <div>
      <button
        onClick={() => setModalOpen(true)}
        className="bg-blue-600 text-white px-4 py-2 rounded-md mb-4"
      >
        Add Permission
      </button>
      <PermissionList permissions={permissions} onEdit={handleEdit} onDelete={handleDelete} />
      <PermissionModal
        isOpen={modalOpen}
        closeModal={() => setModalOpen(false)}
        permission={editingPermission}
        onSave={handleSave}
      />
    </div>
  );
}

export default Permissions;
