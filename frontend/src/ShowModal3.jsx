import React from 'react';

const ShowModal3 = ({ imageUrl, setShowModal3 }) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={() => setShowModal3(false)}>&times;</span>
                <img src={imageUrl} alt="User" />
            </div>
        </div>
    );
};

export default ShowModal3;
