import React, { useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john.doe@example.com" },
    { id: 2, name: "Jane Smith", email: "jane.smith@example.com" },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [newUser, setNewUser] = useState({ name: "", email: "" });

  const handleAddUser = () => {
    if (newUser.name && newUser.email) {
      const newUserWithId = { id: users.length + 1, ...newUser };
      setUsers([...users, newUserWithId]);
      setNewUser({ name: "", email: "" });
      setShowModal(false);
    } else {
      alert("Please fill out all fields");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-semibold mb-6 text-gray-700">Users</h1>
        <button
          className="px-5 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition mb-4"
          onClick={() => setShowModal(true)}
        >
          Add User
        </button>
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 bg-white rounded-lg">
            <thead className="bg-gray-200 text-gray-700">
              <tr>
                <th className="border-b border-gray-300 px-4 py-2 text-left">ID</th>
                <th className="border-b border-gray-300 px-4 py-2 text-left">Name</th>
                <th className="border-b border-gray-300 px-4 py-2 text-left">Email</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-100">
                  <td className="border-b border-gray-300 px-4 py-2">{user.id}</td>
                  <td className="border-b border-gray-300 px-4 py-2">{user.name}</td>
                  <td className="border-b border-gray-300 px-4 py-2">{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">Add New User</h2>
            <div className="mb-4">
              <label className="block text-gray-600 mb-1">Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:ring-blue-300"
                value={newUser.name}
                onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600 mb-1">Email</label>
              <input
                type="email"
                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:ring-blue-300"
                value={newUser.email}
                onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
              />
            </div>
            <div className="flex justify-end space-x-2">
              <button
                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                onClick={handleAddUser}
              >
                Add User
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Users;
