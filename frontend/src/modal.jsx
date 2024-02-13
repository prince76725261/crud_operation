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

      <div className={showModal ? 'wrapper blur' : 'wrapper'} onClick={closeModal}></div>

      {showModal && (
        <div className="wrapper">
          <h1>Add User</h1>
          <button onClick={closeModal}>Close</button>
        </div>
      )}
    </>
  );
};

export default MyModal;
