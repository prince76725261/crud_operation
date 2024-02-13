import React, { useState } from 'react';
import './Modal.css';

const MyModal2 = () => {
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
      {showModal && <div className="modal-overlay blur" onClick={closeModal}></div>}

      {/* Render the modal only when showModal is true */}
      {showModal && (
        <div className="modal-container">
          <button className="close-btn" onClick={closeModal}>X</button>
          <h1>Add User</h1>
          {/* Add your form here */}
        </div>
      )}
    </>
  );
};

export default MyModal2;
