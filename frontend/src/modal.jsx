import React, { useState } from 'react';
import './Modal.css';

const MyModal = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <button onClick={openModal}>Open Modal</button>

      {/* Apply blur effect to the background when modal is open */}
      <div className={showModal ? 'modal-wrapper blur' : 'modal-wrapper'} onClick={closeModal}></div>

      {/* Render the modal only when showModal is true */}
      {showModal && (
        <div className="modal-container">
          <h1>Add User</h1>
          {/* Add your form here */}
          <button onClick={closeModal}>Close</button>
        </div>
      )}
    </>
  );
};

export default MyModal;
