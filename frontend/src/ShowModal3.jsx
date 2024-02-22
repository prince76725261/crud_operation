// import React, { useEffect, useState } from "react"
// import './Modal.css'
// import axios from 'axios';

// import { v4 as uuidv4 } from 'uuid';

// export const handleImg = async (uuid) => {
//     try {
//         const res = await axios.get(`http://localhost:5500/api/image/${uuid}`, {
//             responseType: 'arraybuffer'
//         });
//        console.log(res);
//         const contentType = res.headers['Content-Type'] || 'image/jpeg';
//         const blob = new Blob([res.data], { type: contentType });
//      console.log(blob);
//         const imageUrl = URL.createObjectURL(blob);
//         return imageUrl;
//     } catch (error) {
//         console.error(error);
//         return null;
//     }
// };

// const ShowModal3= ({ handleImg, setShowModal3 }) => {
//     return (
//         <div className="modal">
//             <div className="modal-content">
//                 <span className="close" onClick={() => setShowModal3(false)}>&times;</span>
//                 <img src={handleImg} alt="User" />
//             </div>
//         </div>
//     );
// };

// export default ShowModal3;

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




// import React, { useState } from 'react';
// import axios from 'axios';

// function FileUpload() {
//   const [file, setFile] = useState(null);
//   const [fileUrl, setFileUrl] = useState('');

//   const onChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append('file', file);

//     try {
//       const res = await axios.post('http://localhost:3000/upload', formData);
//       console.log('File uploaded:', res.data.fileUrl);
//       setFileUrl(res.data.fileUrl); // Save the file URL in state
//     } catch (err) {
//       console.error('Error uploading file:', err);
//     }
//   };

//   return (
//     <div>
//       <h1>File Upload</h1>
//       <form onSubmit={onSubmit}>
//         <input type="file" onChange={onChange} />
//         <button type="submit">Upload</button>
//       </form>
//       {fileUrl && <img src={fileUrl} alt="Uploaded File" />} {/* Display the uploaded file if URL is available */}
//     </div>
//   );
// }

// export default FileUpload;


// import React from 'react';

// const MyModal3 = ({ imageUrl, setShowModal3 }) => {
//     return (
//         <div className="modal">
//             <div className="modal-content">
//                 <span className="close" onClick={() => setShowModal3(false)}>&times;</span>
//                 console.log(`http://localhost:5500/${imageUrl}`);
//                 <img src={`http://localhost:5500/${imageUrl}`} alt="User" />
//             </div>
//         </div>
//     );
// };

// export default MyModal3;




// import React, { useEffect, useState } from "react"
// import './Modal.css'
// // import LoginForm from './LoginForm';
// import { FaUser } from "react-icons/fa";
// import { RiLockPasswordFill } from "react-icons/ri";
// // import React,{useState,Component} from "react"
// import axios from 'axios'
// import { useNavigate } from 'react-router-dom'
// import Swal from 'sweetalert2'

// const handleClick = () => {
//     Swal.fire({
//   icon: "success",
//   title: "🥰",
//   text: "User Added Successfully!",
//   footer: '<a href="#">You Have been Added?</a>'
// });
// Swal.getConfirmButton('td.warning input').addEventListener('click', function () {
//      console.log('hii')
//      window.location.href = '/Users';
//     //   navigate('/')
//   })
// }





// function ShowModal({imageUrl, setShowModal}) {

//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");
//     const [confirmpassword, setConfirmpassword] = useState("");
//     const [branch, setBranch] = useState("");
//     const [semester, setSemester] = useState("");
//     const [name, setName] = useState("");
//     const [roll, setRoll] = useState("");
//     const [file, setFile]=useState("")

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         axios.post("http://localhost:5500/ShowModal/", {
//             username,
//             password,
//             confirmpassword,
//             Branch: branch,
//             semester,
//             Name: name,
//             Roll: roll,
//             file:file
//         })
//         .then(result => {
//             console.log("User Added Successfully!");
//             console.log(result);
//             handleClick();
//         })
//         .catch(err => console.log(err));
//     };



// return (
//          <div className="modal">
//             <div className="modal-content">
//                 {/* <span className="close" onClick={() => setShowModal(false)}>&times;</span> */}
//                 console.log(`http://localhost:5500/${imageUrl}`);
//                  <img src={`http://localhost:5500/${imageUrl}`} alt="User" />
//              </div>
//         </div>
// );
// };


// export default ShowModal;






