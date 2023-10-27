import React from "react";
import { X } from "react-feather";
import AppModal from "./AppModal";


const AddUserModal = ({ setIsModalOpen }) => {
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };


  const handleApply = () => {
    setIsModalOpen(false);
  };


  const customBtn = (
    <div className="flex space-x-2">
      <div className="flex items-center">
        <button title="Cancel" btnType="btn_bordered" Icon={X} callBack={handleCloseModal} />
      </div>


      <div className=" flex items-center">
        <button title="Add" callBack={handleApply} />
      </div>
    </div>
  );


  return (
    <div>
        <AppModal
          setIsModalOpen={setIsModalOpen}
          size="lg"
          title="Add New User"
          customBtn={customBtn}
        >
          <div className="space-y-4">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Name *</label>
              <input
                type="text"
                name="name"
                id="name"
                className="mt-1 px-3 py-2 block w-full border rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                placeholder="Name"
              />
            </div>


            {["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday"].map((day) => (
              <div key={day} className="space-y-2">
                <div className="flex items-center space-x-4">
                  <input
                    type="checkbox"
                    id={day}
                    name={day}
                    className="rounded text-blue-500 form-checkbox h-4 w-4"
                  />
                  <label htmlFor={day} className="text-sm font-medium text-gray-700">
                    {day}
                  </label>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex-1">
                    <input
                      type="text"
                      className="px-3 py-2 w-full border rounded-md shadow-sm "
                      placeholder="In Time"
                    />
                  </div>
                  <div className="flex-1">
                    <input
                      type="text"
                      className="px-3 py-2 w-full border rounded-md shadow-sm "
                      placeholder="Out Time"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </AppModal>
    </div>
  );
};


export default AddUserModal;
