// src/components/PermissionModal.jsx
import React, { useState, useEffect } from "react";

function PermissionModal({ isOpen, closeModal, permission, onSave }) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });

  useEffect(() => {
    if (permission) {
      setFormData(permission);
    }
  }, [permission]);

  const handleSubmit = () => {
    onSave(formData);
    closeModal();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-md shadow-lg w-1/3">
        <h2 className="text-xl mb-4">{permission ? "Edit" : "Add"} Permission</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium">Name</label>
          <input
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full border p-2 mt-1"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium">Description</label>
          <input
            id="description"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            className="w-full border p-2 mt-1"
          />
        </div>
        <div className="flex justify-end space-x-4">
          <button
            onClick={closeModal}
            className="bg-gray-300 text-black px-4 py-2 rounded-md"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="bg-blue-600 text-white px-4 py-2 rounded-md"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default PermissionModal;
