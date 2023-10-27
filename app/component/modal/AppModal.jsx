import { X } from "react-feather";
import React, { useEffect, useState } from "react";

let globalZIndex = 10;

const AppModal = ({
  children,
  size = "xl",
  setIsModalOpen,
  modalHeader = true,
  modalFooter = true,
  isModalFooterBg = false,
  title = "",
  customBtn,
  onModalClose
}) => {
  const [modalZIndex, setModalZIndex] = useState(globalZIndex);

  const handleModalClose = () => {
    if (onModalClose)
      onModalClose();
    setIsModalOpen(false);
  };

  const modalSizeClass = {
    xs: "w-48",
    sm: "w-72",
    md: "w-96",
    lg: "w-1/3",
    xl: "w-1/2",
    "2xl": "w-3/4",
    "3xl": "w-4/5",
    full: "w-full"
  };

  useEffect(() => {
    if (setIsModalOpen) {
      setModalZIndex(globalZIndex);
      globalZIndex += 2;
    }
    return () => {
      globalZIndex -= 2;
    };
  }, [setIsModalOpen]);


  return (
    <>
      <div
        className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-20"
        style={{ zIndex: modalZIndex }}
        role="button"
        tabIndex={0}
        onClick={handleModalClose}
      />
      <div
        role="button"
        tabIndex="0"
        className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center "
        style={{ zIndex: modalZIndex + 1 }}
        onClick={handleModalClose}
      >
        <div
          role="button"
          tabIndex="-1"
          className={`relative bg-white rounded shadow-lg transform transition-transform duration-500${modalSizeClass[size]}`}
          onClick={(e) => e.stopPropagation()}
        >
          {modalHeader && (
            <div className="flex items-center justify-between pb-4 bg-light-white p-6 rounded-t-lg bg-white-light">
              <h5 className="font-medium text-dark text-[16px]">{title}</h5>
              <button
                type="button"
                onClick={handleModalClose}
                className="text-gray-400 hover:text-gray-900 transition-colors duration-300"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          )}
          <div className="p-6">{children}</div>
          {modalFooter && (
            <div
              className={`flex justify-end pt-4 mt-4 p-6 ${isModalFooterBg && "bg-white-light"}`}
            >
              {customBtn}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AppModal;