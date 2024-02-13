import React, { useEffect, useState } from "react"
import './RegistrationForm.css'
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
  text: "Registered Successfully!",
  footer: '<a href="#">You Have been registered?</a>'
});
Swal.getConfirmButton('td.warning input').addEventListener('click', function () {
     console.log('hii')
     window.location.href = '/login';
    //   navigate('/')
  })
}



const RegisterForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmpassword] = useState("");
    const [branch, setBranch] = useState("");
    const [semester, setSemester] = useState("");
    const [name, setName] = useState("");
    const [roll, setRoll] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5500/RegisterForm/", {
            username,
            password,
            confirmpassword,
            Branch: branch,
            semester,
            Name: name,
            Roll: roll
        })
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
                    <RiLockPasswordFill className='icon'/>
                </div>
                <div className='input-box'>
                    <input type="password" placeholder='Confirm Password' required value={confirmpassword} onChange={(e) => setConfirmpassword(e.target.value)} />
                    <RiLockPasswordFill className='icon'/>
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
                <button type="submit" className="btn btn-primary" onClick={handleClick}>Register</button>
            </form>
        </div>
    );
};

export default RegisterForm;
