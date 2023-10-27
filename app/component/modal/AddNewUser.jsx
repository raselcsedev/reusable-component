import React, { useState } from "react";
import { Plus } from "react-feather";
import AddUserModal from "./AddUserModal";


const AddNewUser = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-4/5 flex flex-col items-center justify-center space-y-4">
      <span className="text-dark text-lg font-medium">Add New User</span>
      <button
        type="button"
        className="flex items-center w-30 py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
        onClick={() => setIsModalOpen(true)}
      >
        <Plus size={18} className="mr-2" />Add new
      </button>
      {isModalOpen && <AddUserModal setIsModalOpen={setIsModalOpen} />}
    </div>
  );
};


export default AddNewUser;
