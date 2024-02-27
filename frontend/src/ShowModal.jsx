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





function ShowModal() {



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
    formData.append('username', username);
    formData.append('password', password);
    formData.append('confirmpassword', confirmpassword);
    formData.append('Branch', branch);
    formData.append('semester', semester);
    formData.append('Name', name);
    formData.append('Roll', roll);
    formData.append('file', file);

    axios.post("http://localhost:5500/RegisterForm/", formData)
        .then(result => {
            console.log("Registered Successfully!");
            console.log(result);
            handleClick();
        })
        .catch(err => console.log(err));
};


return (
    <div className='mywrapper'>
        <form onSubmit={handleSubmit}>
            <h1>Your Details</h1>

            <div className='input-box'>
                <input type="text" placeholder='Username' required value={username} onChange={(e) => setUsername(e.target.value)} />
                <FaUser className='icon' />
            </div>
            <div className='input-box'>
                <input type="password" placeholder='Password' required value={password} onChange={(e) => setPassword(e.target.value)} />
                <RiLockPasswordFill className='icon' />
            </div>
            <div className='input-box'>
                <input type="password" placeholder='Confirm Password' required value={confirmpassword} onChange={(e) => setConfirmpassword(e.target.value)} />
                <RiLockPasswordFill className='icon' />
            </div>
            <div className='input-box'>
                <input type="text" placeholder='Branch' required value={branch} onChange={(e) => setBranch(e.target.value)} />
            </div>
            <div className='input-box'>
                <input type="text" placeholder='Semester' required value={semester} onChange={(e) => setSemester(e.target.value)} />
            </div>
            <div className='input-box'>
                <input type="text" placeholder='Name' required value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className='input-box'>
                <input type="text" placeholder='Roll' required value={roll} onChange={(e) => setRoll(e.target.value)} />
            </div>
            <div className='input-box'>
                <input type="file" onChange={(e) => setFile(e.target.files[0])} />
            </div>

            <button type="submit" className="btn btn-primary" onClick={handleClick}>Register</button>
        </form>
        <br></br>
        {/* <button style={{ position: 'right-top', top: '30px', right: '40px' }} className='btn btn-info' onClick={() => window.location.href = '/login'}>Go To Login</button> */}

    </div>
);



};


export default ShowModal;




