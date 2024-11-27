import React, { useState } from "react";
import Modal from "../components/ui/Modal";

const UseModal: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="App">
      <button
        onClick={openModal}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg"
      >
        Open Modal
      </button>

      <Modal isOpen={isModalOpen} onClose={closeModal} title="My Modal">
        <p>This is a custom modal component built with React and TypeScript.</p>
        <button
          onClick={closeModal}
          className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg"
        >
          Close Modal
        </button>
      </Modal>
    </div>
  );
};

export default UseModal;
