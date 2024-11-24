import React, { useState } from 'react';
import RoleTable from '../components/RoleTable';
import AddEditModal from '../components/AddEditModal';

function Roles() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setModalOpen(true)}
        className="bg-blue-600 text-white px-4 py-2 rounded-md mb-4"
      >
        Add Role
      </button>
      <RoleTable />
      {modalOpen && <AddEditModal setModalOpen={setModalOpen} />}
    </div>
  );
}

export default Roles;
