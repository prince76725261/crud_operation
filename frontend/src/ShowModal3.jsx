// import React, {useState, useEffect, Component} from "react"
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";
// import Swal from 'sweetalert2'
//  import cors from 'cors'

// function MyModal2({userIdUpdate,Roll,Name,semester,Branch}) {
//   // console.log(userIdUpdate);
//   const navigate = useNavigate();
//   const id = userIdUpdate
//    const [Roll1, setRoll] = useState(Roll)
//     const [Name1, setName] = useState(Name)
//     const [semester1, setSemester] = useState(semester)
//   const [Branch1, setBranch] = useState(Branch)
  
//   const showpopup = (Roll) => {
//     var swal = Swal;
//     swal.fire({
//   icon: "success",
//   title: "🥰",
//   text: "Updated Successfully!",
//   footer: '<a href="#">You Have been updated?</a>'
//   // navigate('/')
//     }
//     );
//     swal.getConfirmButton('td.warning input').addEventListener('click', function () {
//       window.location.reload();
//       // console.log('hii')
//       //  navigate('/')
//     })
//   }
  
  

  
//   useEffect(() => {
//         axios.get('http://localhost:5500/getUser/'+id)
//           .then(result => {
//             console.log(result)
//             setRoll(result.data.Roll)
//             setName(result.data.Name)
//             setSemester(result.data.semester)
//             setBranch(result.data.Branch)
//           })
//         .catch(err => console.log(err))
//     }, [])
    
   
//   // const Submit = (e) => {
//   //       e.preventDefault();
//   //       axios.post("http://localhost:5500/updateUser/", { Roll, Name, semester, Branch })
//   //           .then(result => {
//   //               console.log(result)
//   //               navigate('/')
//   //   })
//   //   .catch(err => console.log(err))
//   //   }
   
//   const Update = (e) => {
//     e.preventDefault();
//     // console.log(semester1);
//          axios.put('http://localhost:5500/updateUser/'+id, { Roll1, Name1, semester1, Branch1 })
//             .then(result => {
//                 // console.log(result)
//                 showpopup(Roll1);  
//               //  navigate('/')
//     })
//     .catch(err => console.log(err))
//   }
  
//     return (
//          <form>
    
//         <h1>Update User</h1>
//         {
        
//        //const navigate = useNavigate();
//        /* const Update = (e) => {
//         e.preventDefault();
//         axios.post('http://localhost:5500/UpdateUser', { roll, name, semester, branch })
//             .then(result => {
//                 console.log(result)
//                 navigate('/')
//     })
//     .catch(err => console.log(err))
//     } */
//         }

// <button className="close-btn" onClick={() => { setRoll(''); setName(''); setSemester(''); setBranch(''); window.location.href='/Users'; }}>X</button>

//    <div className="form-group">
//     <label htmlFor="ROLL_NUMBER">Roll Number</label>
//           <input type="number" className="form-control" id="ROLL_NUMBER" aria-describedby="roll_number" placeholder="Enter Your Roll Number" value={Roll1} onChange={(e) => setRoll(e.target.value)} />
//     <small id="ROLL_NUMBER" className="form-text text-muted"></small>
//     </div>

//         <br></br>    

//    <div className="form-group">
//     <label htmlFor="NAME">Name</label>
//           <input type="string" className="form-control" id="NAME" aria-describedby="name" placeholder="Enter Your Full Name" value={Name1} onChange={(e) => setName(e.target.value)} />
//     <small id="NAME" className="form-text text-muted"></small>
//     </div>
//     <br></br>
//     <div className="form-group">
//     <label htmlFor="semester">Semester</label>
//           <input type="number" className="form-control" id="semester" aria-describedby="roll_number" placeholder="Enter Semester" value={semester1} onChange={(e) => setSemester(e.target.value)}/>
//     <small id="semester" className="form-text text-muted"></small>
//     </div>
    
//             <br></br>
    
//    <div className="form-group">
//     <label htmlFor="BRANCH">Branch</label>
//           <input type="string" className="form-control" id="BRANCH" aria-describedby="branch" placeholder="Enter Your Branch" value={Branch1} onChange={(e) => setBranch(e.target.value)}/>
//     <small id="BRANCH" className="form-text text-muted"></small>
//     </div>

// {/* 
//    <div className="form-group">
//      <label htmlFor="exampleInputPassword1">Password</label>
//      <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
//             </div>
//              */}

//             <br>
//             </br>

// <div className="form-check">
//   <input type="checkbox" className="form-check-input" id="exampleCheck1" />
//   <label className="form-check-label" htmlFor="exampleCheck1">Check details correctly</label>
// </div>

//       <br></br>      
//         <button type="submit" className="btn btn-primary" onClick={Update}>Update</button>
//         {/* (add it later onClick={Update} */}
// </form>
//     )
// }
// export default MyModal2;


import React, { useEffect, useState } from "react"
import './Modal.css'
// import LoginForm from './LoginForm';
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
// import React,{useState,Component} from "react"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

const handleClick = () => {
    Swal.fire({
        icon: "success",
        title: "🥰",
        text: "User Added Successfully!",
        footer: '<a href="#">You Have been Added?</a>'
    });
    Swal.getConfirmButton('td.warning input').addEventListener('click', function () {
        console.log('hii')
        window.location.href = '/Users';
        //   navigate('/')
    })
}




function ShowModal3() {



  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [branch, setBranch] = useState("");
  const [semester, setSemester] = useState("");
  const [name, setName] = useState("");
  const [roll, setRoll] = useState("");

  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append('file', file);

      axios.post("http://localhost:5500/ShowModal3/")
          .then(result => {
              console.log("Profile_Pic!");
              console.log(result);
              handleClick();
          })
          .catch(err => console.log(err));
  };


  return (
      <div className='mywrapper2'>
          {/* <form onSubmit={handleSubmit}> */}
              {/* <h1>Your Details</h1> */}
              <button className='btn btn-info' onClick={() => handleImg(user.profilePic.uuid)}>profile_Picture</button>
                {imageUrl && <ShowModal3 imageUrl={imageUrl} closeModal={closeModal} />}
              {/* <button type="submit" className="btn btn-primary" onClick={handleClick}>Register</button> */}
          {/* </form> */}
          <br></br>
      </div>
  );
  };
  export default ShowModal3;
